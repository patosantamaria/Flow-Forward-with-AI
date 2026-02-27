/*
 Title: Flow Forward AI Champion Finder | "The Talent Scout"
 Purpose: Identifies high-frequency "Creator" users to serve as peer coaches.
 Description:
   - Logic: Ranks users by active, voluntary usage (excluding passive system suggestions).
   - Metrics: Categorizes users as "Creators" (writing, generating) or "Assistants" (summarizing).
 Use Case: Find 5 champions per department to lead the next training wave.
*/

SELECT
 t2.Location_Name,
 t2.Location_Type,
 t2.Country,
 t2.Standardized_Job_Title AS Job_Title, -- Updated to use standardized field
 t2.Department,
 t2.Account_Type,
 t1.email AS User_Email,
 
 -- Unified Application Naming
 CASE 
   WHEN t1.gemini_for_workspace.app_name = 'docs' THEN 'Google Docs'
   WHEN t1.gemini_for_workspace.app_name = 'sheets' THEN 'Google Sheets'
   WHEN t1.gemini_for_workspace.app_name = 'slides' THEN 'Google Slides'
   WHEN t1.gemini_for_workspace.app_name = 'gmail' THEN 'Gmail'
   WHEN t1.gemini_for_workspace.app_name = 'meet' THEN 'Google Meet'
   WHEN t1.gemini_for_workspace.app_name = 'chat' THEN 'Google Chat'
   WHEN t1.gemini_for_workspace.app_name = 'gemini_app' THEN 'Gemini Web App'
   WHEN t1.gemini_for_workspace.app_name = 'vids' THEN 'Google Vids'
   ELSE t1.gemini_for_workspace.app_name 
 END AS Application_Name,
 t1.gemini_for_workspace.action AS Specific_Action,
 
 -- Modality Categorization
 CASE 
   WHEN t1.gemini_for_workspace.event_category = 'active_generate' 
     OR t1.gemini_for_workspace.action IN ('suggest_reply_prompts', 'auto_proofread', 'generate_ai_function') 
   THEN 'Creator'
   WHEN t1.gemini_for_workspace.event_category IN ('active_conversations', 'active_summarize')
     OR t1.gemini_for_workspace.action = 'summarize_snippet'
   THEN 'Assistant'
   ELSE 'Other'
 END AS Modality,

 COUNT(*) AS Action_Count

FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email

WHERE
 -- Removed strict Location Type filter to include Offices
 
 -- Active Users Only
 t2.Is_Active = 'Yes'
 AND t2.Account_Type != 'Service account'
 
 -- Core Workforce Filter
 AND t2.Offboarding_Status = "Active"
 
 -- Valid Gemini Events Only
 AND t1.gemini_for_workspace.event_category IS NOT NULL
 AND t1.gemini_for_workspace.event_category != 'inactive' -- CRITICAL: Filter out passive impressions
 
 -- Filter out System Noise / Passive Suggestions
 AND t1.gemini_for_workspace.action NOT IN (
   'generate_starter_tile_prompts',
   'proactive_suggestions',
   'proactive_suggestions_response',
   'generate_nudge_prompts',
   'generate_apps_search_overlay_suggestions',
   'detect_schedule_intent_compose'
 )
 
 AND t1._PARTITIONTIME >= TIMESTAMP '2025-07-13'

GROUP BY 
 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

ORDER BY 
 Action_Count DESC
LIMIT 1000;
