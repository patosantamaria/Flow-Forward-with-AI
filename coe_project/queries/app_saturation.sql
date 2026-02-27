/*
 Title: App Saturation Analysis | "The Gap Analysis"
 Purpose: Compares AI adoption across different Workspace apps (Docs vs. Slides).
 Description:
   - Logic: Normalizes Gemini usage against the "Base Rate" of standard usage (e.g., millions of emails vs. thousands of slides).
 Use Case: Identify "Low Saturation" apps to target with specific campaigns (e.g., "Gemini for Slides" workshop).
*/

SELECT
 t2.Country,
 t2.Location_Name,
 t2.Department,
 CASE
   WHEN t1.gemini_for_workspace.app_name = 'gmail' OR t1.record_type IN ('gmail', 'login') THEN 'Gmail'
   WHEN t1.gemini_for_workspace.app_name IN ('docs','sheets','slides','drive') OR t1.record_type IN ('drive', 'token') THEN 'Drive & Content'
   WHEN t1.gemini_for_workspace.app_name = 'meet' OR t1.record_type = 'meet' THEN 'Google Meet'
   WHEN t1.gemini_for_workspace.app_name = 'chat' OR t1.record_type = 'chat' THEN 'Google Chat'
   ELSE 'Other'
 END AS App_Context,
 COUNTIF(t1.gemini_for_workspace.event_category IS NOT NULL) AS Gemini_Events,
 COUNTIF(t1.gemini_for_workspace.event_category IS NULL) AS Standard_Events
FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
LEFT JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email
WHERE
 t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
 AND t2.Offboarding_Status = "Active"
GROUP BY 1, 2, 3, 4
ORDER BY Standard_Events DESC;
