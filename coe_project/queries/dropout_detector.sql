-- ============================================================
-- Query: Dropout Detector
-- Purpose: Find trained users who started using Gemini 
--          but stopped within 4 weeks post-training.
-- Strategy: Personalized follow-up from department Champions.
-- ============================================================

WITH training_roster AS (
  -- Get training completion dates from Participant Tracker
  SELECT
    Email,
    Department,
    Region,
    GREATEST(
      COALESCE(Training_Date_Phase1, DATE('1970-01-01')),
      COALESCE(Training_Date_Phase2, DATE('1970-01-01')),
      COALESCE(Training_Date_Phase3, DATE('1970-01-01'))
    ) AS last_training_date
  FROM `gmail-logs-bigquery.accounts.participant_tracker`
  WHERE Email IS NOT NULL
),

week1_usage AS (
  -- Count Gemini events in Week 1 post-training (days 1-7)
  SELECT
    t2.Primary_Email AS email,
    COUNT(*) AS week1_events
  FROM `gsuiteadminreports-on-bigquery.Admin_Reports.activity` t1
  LEFT JOIN `gmail-logs-bigquery.accounts.master_data` t2
    ON t1.email = t2.Primary_Email
  INNER JOIN training_roster tr
    ON t1.email = tr.Email
  WHERE t2.Account_Type = 'Internal'
    AND t2.Is_Active = 'Yes'
    AND t2.Offboarding_Status = 'Active'
    AND t1.gemini_for_workspace IS NOT NULL
    AND DATE(t1._PARTITIONTIME) BETWEEN tr.last_training_date
      AND DATE_ADD(tr.last_training_date, INTERVAL 7 DAY)
  GROUP BY 1
),

week4_usage AS (
  -- Count Gemini events in Week 4 post-training (days 22-28)
  SELECT
    t2.Primary_Email AS email,
    COUNT(*) AS week4_events
  FROM `gsuiteadminreports-on-bigquery.Admin_Reports.activity` t1
  LEFT JOIN `gmail-logs-bigquery.accounts.master_data` t2
    ON t1.email = t2.Primary_Email
  INNER JOIN training_roster tr
    ON t1.email = tr.Email
  WHERE t2.Account_Type = 'Internal'
    AND t2.Is_Active = 'Yes'
    AND t2.Offboarding_Status = 'Active'
    AND t1.gemini_for_workspace IS NOT NULL
    AND DATE(t1._PARTITIONTIME) BETWEEN DATE_ADD(tr.last_training_date, INTERVAL 21 DAY)
      AND DATE_ADD(tr.last_training_date, INTERVAL 28 DAY)
  GROUP BY 1
)

SELECT
  tr.Email,
  tr.Department,
  tr.Region,
  tr.last_training_date AS Last_Training_Date,
  COALESCE(w1.week1_events, 0) AS Week_1_Events,
  COALESCE(w4.week4_events, 0) AS Week_4_Events,
  CASE
    WHEN COALESCE(w1.week1_events, 0) >= 5 AND COALESCE(w4.week4_events, 0) < 2
      THEN 'DROPOUT — Needs Champion Follow-Up'
    WHEN COALESCE(w1.week1_events, 0) = 0
      THEN 'NEVER STARTED — Needs Enablement'
    WHEN COALESCE(w4.week4_events, 0) >= w1.week1_events
      THEN 'SUSTAINED — On Track'
    ELSE 'DECLINING — Monitor'
  END AS Adoption_Status
FROM training_roster tr
LEFT JOIN week1_usage w1 ON tr.Email = w1.email
LEFT JOIN week4_usage w4 ON tr.Email = w4.email
ORDER BY
  CASE
    WHEN COALESCE(w1.week1_events, 0) >= 5 AND COALESCE(w4.week4_events, 0) < 2 THEN 1
    WHEN COALESCE(w1.week1_events, 0) = 0 THEN 2
    ELSE 3
  END,
  tr.Department,
  tr.Email;
