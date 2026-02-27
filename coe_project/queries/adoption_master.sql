/*
 Title: Gemini Adoption Master Source | "The ROI Engine"
 Purpose: The definitive source for measuring Return on Investment (ROI) and Departmental Penetration.
 Description: 
   - Granularity: Daily activity per user.
   - Filters: Rejects service accounts and inactive users.
   - Outputs: Separate counts for "Creator" (High Value) vs. "Assistant" (Efficiency) actions.
 Use Case: Drill-down dashboards, cost allocation, and detailed user trend analysis.
*/

SELECT
 -- 1. Daily Grain & User Details
 DATE(t1._PARTITIONTIME) AS Activity_Date,
 DATE_TRUNC(DATE(t1._PARTITIONTIME), WEEK) AS Week_Start,
 t2.Country,
 t2.Location_Name,
 t2.Location_Type,
 t2.Department,
 t2.Standardized_Job_Title AS Job_Title, -- Updated to use standardized field
 t2.Account_Type, -- Added for contractor filtering
 t1.email AS User_Email,

 -- 2. Pivoted Application Metrics (The "Wide" Columns)
 -- Gmail
 COUNTIF(t1.gemini_for_workspace.app_name = 'gmail' OR t1.record_type IN ('gmail', 'login')) AS Gmail_Total_Events,
 COUNTIF(t1.gemini_for_workspace.app_name = 'gmail' AND t1.gemini_for_workspace.event_category IS NOT NULL) AS Gmail_Gemini_Events,

 -- Google Drive (Includes Docs, Sheets, Slides)
 COUNTIF(t1.gemini_for_workspace.app_name IN ('docs', 'sheets', 'slides') OR t1.record_type IN ('drive', 'token')) AS Drive_Total_Events,
 COUNTIF(t1.gemini_for_workspace.app_name IN ('docs', 'sheets', 'slides') AND t1.gemini_for_workspace.event_category IS NOT NULL) AS Drive_Gemini_Events,

 -- Google Meet
 COUNTIF(t1.gemini_for_workspace.app_name = 'meet' OR t1.record_type = 'meet') AS Meet_Total_Events,
 COUNTIF(t1.gemini_for_workspace.app_name = 'meet' AND t1.gemini_for_workspace.event_category IS NOT NULL) AS Meet_Gemini_Events,

 -- Google Chat
 COUNTIF(t1.gemini_for_workspace.app_name = 'chat' OR t1.record_type = 'chat') AS Chat_Total_Events,
 COUNTIF(t1.gemini_for_workspace.app_name = 'chat' AND t1.gemini_for_workspace.event_category IS NOT NULL) AS Chat_Gemini_Events,

 -- Gemini Web App (Standalone)
 COUNTIF(t1.gemini_for_workspace.app_name = 'gemini_app') AS Gemini_Web_App_Events,

 -- 3. Value Modalities (ROI Inputs)
 -- "The Creator" (15 mins ROI)
 COUNTIF(
   t1.gemini_for_workspace.event_category = 'active_generate' 
   OR t1.gemini_for_workspace.action IN ('suggest_reply_prompts', 'auto_proofread', 'generate_ai_function')
 ) AS Creator_Events,
 
 -- "The Assistant" (2 mins ROI)
 COUNTIF(
   t1.gemini_for_workspace.event_category IN ('active_conversations', 'active_summarize')
   OR t1.gemini_for_workspace.action = 'summarize_snippet'
 ) AS Assistant_Events,

 -- 4. Total Summaries (Clean Underscores & Noise Filtered)
 COUNTIF(t1.gemini_for_workspace.event_category IS NOT NULL) AS Total_Gemini_Events,
 
 -- Filtered Workspace Events: Only counts explicit human actions
 COUNTIF(
   t1.event_name IN (
     'edit', 'view', 'create', 'upload', 'trash', 'move', 'rename', -- Drive/Docs Human Actions
     'message_posted', 'conversation_read', -- Chat Human Actions
     'call_ended', -- Meet Human Actions
     'create_event', 'change_event', 'delete_event', -- Calendar Human Actions
     'login_success' -- Active Login
   )
 ) AS Total_Workspace_Events

FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
LEFT JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email

WHERE
 -- Core Workforce Filter (Active, Not Offboarding, Not New Hire)
 -- EXPLICITLY FILTERING SERVICE ACCOUNTS FOR HUMAN-ONLY METRICS
 t2.Account_Type != 'Service account'
 AND t2.Is_Active = "Yes" 
 AND t2.Offboarding_Status = "Active"
 
 -- FIXED: Use "Fail-Open" logic. If date is NULL or Invalid, KEEP the row.
 -- Only exclude if we are CERTAIN the date is valid AND <= 30 days ago.
 -- Updated to match 'd-m-Y' format
 AND (
   t2.Creation_Date IS NULL 
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) IS NULL
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) <= DATE_SUB(DATE(t1._PARTITIONTIME), INTERVAL 30 DAY)
 )
 
 -- Timeframe: 
 -- 1. Start from July 13, 2025 (Start of clean data)
 -- 2. Stop BEFORE Today (i.e., include up to Yesterday 23:59:59)
 AND t1._PARTITIONTIME >= TIMESTAMP '2025-07-13'
 AND t1._PARTITIONTIME < TIMESTAMP(CURRENT_DATE())

GROUP BY
 1, 2, 3, 4, 5, 6, 7, 8, 9

ORDER BY
 Activity_Date ASC, Country ASC, Location_Name ASC, Location_Type ASC, Department ASC, Job_Title ASC;
