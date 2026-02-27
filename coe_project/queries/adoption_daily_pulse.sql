/*
 Title: Daily Adoption Pulse | "The Executive Scorecard"
 Purpose: Tracks high-level adoption trends against the total active workforce.
 Description:
   - Numerator: Employees who used Gemini at least once that day.
   - Denominator: Employees who were active in Google Workspace that day (email, chat, docs).
 Use Case: Daily leadership reporting. "Are we growing faster than last week?"
*/

SELECT
 DATE(t1._PARTITIONTIME) AS Activity_Date,
 t2.Country,
 t2.Location_Name,
 t2.Location_Type,
 
 -- 1. TOTAL ADOPTION (Any App)
 -- Denominator: Humans doing *any* work (filtered for noise)
 COUNT(DISTINCT CASE WHEN t1.event_name IN ('edit', 'view', 'create', 'upload', 'message_posted', 'call_ended', 'create_event', 'login_success') THEN t1.email END) AS Total_Active_Workspace_Users,
 -- Numerator: Humans using Gemini anywhere (active use only)
 COUNT(DISTINCT CASE WHEN t1.gemini_for_workspace.event_category IS NOT NULL AND t1.gemini_for_workspace.event_category != 'inactive' THEN t1.email END) AS Total_Active_Gemini_Users,

 -- 2. GMAIL ADOPTION
 -- Denominator: Active Gmail Users (human events only)
 COUNT(DISTINCT CASE WHEN (t1.gemini_for_workspace.app_name = 'gmail' OR t1.record_type IN ('gmail', 'login')) AND t1.event_name IN ('login_success', 'access') THEN t1.email END) AS Gmail_Active_Workspace_Users,
 -- Numerator: Active Gemini in Gmail Users
 COUNT(DISTINCT CASE WHEN t1.gemini_for_workspace.app_name = 'gmail' AND t1.gemini_for_workspace.event_category IS NOT NULL AND t1.gemini_for_workspace.event_category != 'inactive' THEN t1.email END) AS Gmail_Active_Gemini_Users,

 -- 3. DRIVE ADOPTION (Docs, Sheets, Slides)
 -- Denominator: Active Drive Users (human events only: edit, view, create)
 COUNT(DISTINCT CASE WHEN t1.record_type = 'drive' AND t1.event_name IN ('edit', 'view', 'create', 'upload', 'trash', 'move', 'rename') THEN t1.email END) AS Drive_Active_Workspace_Users,
 -- Numerator: Active Gemini in Drive Users
 COUNT(DISTINCT CASE WHEN t1.gemini_for_workspace.app_name IN ('docs', 'sheets', 'slides') AND t1.gemini_for_workspace.event_category IS NOT NULL AND t1.gemini_for_workspace.event_category != 'inactive' THEN t1.email END) AS Drive_Active_Gemini_Users,

 -- 4. MEET ADOPTION
 -- Denominator: Active Meet Users (call_ended)
 COUNT(DISTINCT CASE WHEN t1.record_type = 'meet' AND t1.event_name = 'call_ended' THEN t1.email END) AS Meet_Active_Workspace_Users,
 -- Numerator: Active Gemini in Meet Users
 COUNT(DISTINCT CASE WHEN t1.gemini_for_workspace.app_name = 'meet' AND t1.gemini_for_workspace.event_category IS NOT NULL AND t1.gemini_for_workspace.event_category != 'inactive' THEN t1.email END) AS Meet_Active_Gemini_Users,

  -- 5. CHAT ADOPTION
 -- Denominator: Active Chat Users (message_posted, read)
 COUNT(DISTINCT CASE WHEN t1.record_type = 'chat' AND t1.event_name IN ('message_posted', 'conversation_read') THEN t1.email END) AS Chat_Active_Workspace_Users,
 -- Numerator: Active Gemini in Chat Users
 COUNT(DISTINCT CASE WHEN t1.gemini_for_workspace.app_name = 'chat' AND t1.gemini_for_workspace.event_category IS NOT NULL AND t1.gemini_for_workspace.event_category != 'inactive' THEN t1.email END) AS Chat_Active_Gemini_Users

FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
LEFT JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email

WHERE
 t2.Account_Type != 'Service account'
 AND t2.Is_Active = 'Yes'
 AND t2.Offboarding_Status = "Active"
 -- Fail-open date logic
 AND (
   t2.Creation_Date IS NULL 
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) IS NULL
   OR SAFE.PARSE_DATE('%d-%m-%Y', CAST(t2.Creation_Date AS STRING)) <= DATE_SUB(DATE(t1._PARTITIONTIME), INTERVAL 30 DAY)
 )
 
 AND t1._PARTITIONTIME >= TIMESTAMP '2025-07-13'
 AND t1._PARTITIONTIME < TIMESTAMP(CURRENT_DATE())

GROUP BY 1, 2, 3, 4
ORDER BY Activity_Date DESC, Country ASC;
