/*
 Title: Peak Productivity Heatmap | "The Scheduler"
 Purpose: Optimizes training schedules by identifying when users are most active.
 Description:
   - Logic: Aggregates Gemini usage by Day of Week and Hour of Day.
 Use Case: Schedule "Office Hours" during peak activity times (e.g., Tuesday at 10 AM).
*/

SELECT
 FORMAT_DATE('%A', DATE(t1._PARTITIONTIME)) AS Day_of_Week,
 EXTRACT(HOUR FROM t1._PARTITIONTIME) AS Hour_of_Day,
 COUNT(*) AS Gemini_Events
FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
WHERE
 t1.gemini_for_workspace.event_category IS NOT NULL
 AND t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 90 DAY)
GROUP BY 1, 2
ORDER BY Gemini_Events DESC;
