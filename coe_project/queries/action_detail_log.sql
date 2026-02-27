/*
 Title: Action Detail Log | "The Deep Dive"
 Purpose: The forensic log for behavioral analysis.
 Description:
   - Logic: Lists every single action (e.g., 'auto_proofread', 'generate_image') per user per day.
 Use Case: "Why is Marketing usage so high? Oh, they are generating 500 images a week."
*/

SELECT
 -- 1. Dimensions
 DATE(t1._PARTITIONTIME) AS Activity_Date,
 t2.Country,
 t2.Department,
 t2.Standardized_Job_Title AS Job_Title, -- Updated
 t1.email AS User_Email,

 -- 2. Application Context
 CASE 
   WHEN t1.gemini_for_workspace.app_name = 'docs' THEN 'Google Docs'
   WHEN t1.gemini_for_workspace.app_name = 'sheets' THEN 'Google Sheets'
   WHEN t1.gemini_for_workspace.app_name = 'slides' THEN 'Google Slides'
   WHEN t1.gemini_for_workspace.app_name = 'gmail' THEN 'Gmail'
   WHEN t1.gemini_for_workspace.app_name = 'meet' THEN 'Google Meet'
   WHEN t1.gemini_for_workspace.app_name = 'chat' THEN 'Google Chat'
   WHEN t1.gemini_for_workspace.app_name = 'gemini_app' THEN 'Gemini Web App'
   ELSE t1.gemini_for_workspace.app_name 
 END AS Application_Name,

 -- 3. The Specific Action
 t1.gemini_for_workspace.action AS Specific_Action,

 -- 4. Metrics
 COUNT(*) AS Action_Count

FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
LEFT JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email

WHERE
 -- Core Workforce Filter
 t2.Account_Type != 'Service account'
 AND t2.Is_Active = "Yes"
 AND t2.Offboarding_Status = "Active"
 
 -- FIXED: Use SAFE.PARSE_DATE with explicit CAST and Fail-Open Logic
 AND (
   t2.Creation_Date IS NULL 
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) IS NULL
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) <= DATE_SUB(DATE(t1._PARTITIONTIME), INTERVAL 30 DAY)
 )
 
 -- ONLY filter for Gemini Events
 AND t1.gemini_for_workspace.event_category IS NOT NULL
 AND t1.gemini_for_workspace.action != 'generate_starter_tile_prompts' -- Exclude noise
 
 -- Timeframe
 AND t1._PARTITIONTIME >= TIMESTAMP '2025-07-13'

GROUP BY
 1, 2, 3, 4, 5, 6, 7, 8

ORDER BY
 Action_Count DESC;
