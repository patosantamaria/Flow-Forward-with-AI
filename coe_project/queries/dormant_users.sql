/*
 Title: Dormant License Detector | "Cost Optimization"
 Purpose: Identifies assigned licenses that are not delivering value.
 Description:
   - Logic: Finds active employees with ZERO Gemini activity in the last 30 days.
   - Safety: Excludes new hires (<30 days tenure) to give them time to onboard.
 Use Case: Reallocate licenses to eager users on the waitlist or target specific users for re-training.
*/

SELECT 
 t2.Department,
 t2.Standardized_Job_Title AS Job_Title, -- Updated
 t2.Primary_Email AS User_Email,
 t2.Country,
 MAX(t1._PARTITIONTIME) AS Last_Workspace_Activity
FROM 
 `gmail-logs-bigquery.accounts.master_data` AS t2
JOIN 
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
 ON t2.Primary_Email = t1.email
WHERE 
 t2.Is_Active = 'Yes'
 AND t2.Account_Type != 'Service account'
 
 -- Exclude Offboarding & New Hires
 AND t2.Offboarding_Status = "Active"
 -- FIXED: Use SAFE.PARSE_DATE with explicit CAST and Fail-Open Logic
 AND (
   t2.Creation_Date IS NULL 
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) IS NULL
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) < DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
 )
 
 AND t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
GROUP BY 1, 2, 3, 4
HAVING 
 COUNT(t1.gemini_for_workspace.event_category) = 0
ORDER BY 
 Last_Workspace_Activity DESC;
