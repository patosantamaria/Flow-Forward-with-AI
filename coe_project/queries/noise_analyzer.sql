/*
 Title: Noise Analyzer | "The Debugger"
 Purpose: Identifies automated system events that skew human reporting.
 Description:
   - Logic: Counts high-volume events (e.g., 'drive.download') to flag them for exclusion.
 Use Case: If Adoption spikes to 99% overnight, check this to find the bot responsible.
*/

SELECT
 t1.record_type,
 t1.event_name,
 COUNT(*) AS Total_Occurrences
FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
WHERE
 t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
GROUP BY 1, 2
ORDER BY Total_Occurrences DESC
LIMIT 20;
