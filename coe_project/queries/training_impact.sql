/*
  Query 8: Training Impact Correlation
  Goal: Compare Gemini usage volume 30 days pre-training vs. 30 days post-training.
  
  Requirement: Requires a 'Participant_Tracker' table/view in BigQuery.
*/

WITH TrainedUsers AS (
  SELECT
    Email,
    Training_Date,
    Department
  FROM
    `vopak_data_warehouse.participant_tracker`
  WHERE
    Training_Date IS NOT NULL
),

PreTrainingUsage AS (
  SELECT
    t.Email,
    COUNT(l.event_id) as pre_event_count
  FROM
    TrainedUsers t
  JOIN
    `vopak_data_warehouse.gemini_logs` l ON t.Email = l.user_email
  WHERE
    l.timestamp BETWEEN TIMESTAMP_SUB(t.Training_Date, INTERVAL 30 DAY) AND t.Training_Date
  GROUP BY
    t.Email
),

PostTrainingUsage AS (
  SELECT
    t.Email,
    COUNT(l.event_id) as post_event_count,
    COUNT(DISTINCT l.action_type) as post_unique_actions
  FROM
    TrainedUsers t
  JOIN
    `vopak_data_warehouse.gemini_logs` l ON t.Email = l.user_email
  WHERE
    l.timestamp BETWEEN t.Training_Date AND TIMESTAMP_ADD(t.Training_Date, INTERVAL 30 DAY)
  GROUP BY
    t.Email
)

SELECT
  t.Email,
  t.Department,
  t.Training_Date,
  COALESCE(pre.pre_event_count, 0) as events_30d_pre,
  COALESCE(post.post_event_count, 0) as events_30d_post,
  (COALESCE(post.post_event_count, 0) - COALESCE(pre.pre_event_count, 0)) as adoption_delta,
  post.post_unique_actions as skill_breadth_post
FROM
  TrainedUsers t
LEFT JOIN
  PreTrainingUsage pre ON t.Email = pre.Email
LEFT JOIN
  PostTrainingUsage post ON t.Email = post.Email
ORDER BY
  adoption_delta DESC;
