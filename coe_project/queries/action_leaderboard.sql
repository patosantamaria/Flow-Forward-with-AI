/*
 Title: Action Leaderboard | "The Behavior Ranker"
 Purpose: Ranks the most popular AI actions company-wide.
 Description:
   - Metrics: Total occurrences and Unique Users per action type.
 Use Case: Understand if users are primarily "Writing" (Creation) or "Summarizing" (Consumption).
*/

SELECT
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
 COUNT(*) AS Total_Occurrences,
 COUNT(DISTINCT t1.email) AS Unique_Users
FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
WHERE
 t1.gemini_for_workspace.event_category IS NOT NULL
 AND t1.gemini_for_workspace.action != 'generate_starter_tile_prompts'
 AND t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
GROUP BY 1, 2
ORDER BY Total_Occurrences DESC;
