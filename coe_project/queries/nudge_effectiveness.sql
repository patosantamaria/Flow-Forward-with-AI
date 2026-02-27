/*
  Query: Nudge Effectiveness
  Goal: Measure the ROI of "Tip of the Week" emails.
  
  Metric: "Activation Rate" = % of users who used Gemini within 24h of receiving a nudge.
*/

WITH NudgeLog AS (
  SELECT
    user_email,
    campaign_id,
    timestamp as sent_at
  FROM
    `vopak_data_warehouse.nudge_history`
  WHERE
    timestamp > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
),

SubsequentUsage AS (
  SELECT
    l.user_email,
    l.timestamp as used_at
  FROM
    `vopak_data_warehouse.gemini_logs` l
  JOIN
    NudgeLog n ON l.user_email = n.user_email
  WHERE
    l.timestamp BETWEEN n.sent_at AND TIMESTAMP_ADD(n.sent_at, INTERVAL 24 HOUR)
)

SELECT
  n.campaign_id,
  COUNT(DISTINCT n.user_email) as emails_sent,
  COUNT(DISTINCT s.user_email) as users_activated,
  (COUNT(DISTINCT s.user_email) / COUNT(DISTINCT n.user_email)) * 100 as activation_rate_percent
FROM
  NudgeLog n
LEFT JOIN
  SubsequentUsage s ON n.user_email = s.user_email
GROUP BY
  n.campaign_id
ORDER BY
  activation_rate_percent DESC;
