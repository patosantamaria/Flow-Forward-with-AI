/*
 Title: Skill Sophistication | "The Growth Tracker"
 Purpose: Proven metric for Training Impact.
 Description:
   - Logic: Tracks if users are adding new Apps to their workflow over time (e.g., Novice = 1 App, Expert = 3+ Apps).
 Use Case: Show L&D that the "Gemini 101" workshop actually changed behavior.
*/

SELECT
 DATE_TRUNC(DATE(t1._PARTITIONTIME), WEEK) AS Week_Start,
 t2.Department,
 t2.Location_Name,
 
 -- Adoption Count
 COUNT(DISTINCT t1.email) AS Active_Users,
 
 -- Breadth: How many unique App/User combinations exist?
 -- If 10 users use 2 apps each, this is 20.
 COUNT(DISTINCT CONCAT(t1.email, t1.gemini_for_workspace.app_name)) AS User_App_Pairs,
 
 -- Depth: How many unique Feature/User combinations exist?
 COUNT(DISTINCT CONCAT(t1.email, t1.gemini_for_workspace.action)) AS User_Feature_Pairs

FROM
 `gsuiteadminreports-on-bigquery.Admin_Reports.activity` AS t1
LEFT JOIN
 `gmail-logs-bigquery.accounts.master_data` AS t2
 ON t1.email = t2.Primary_Email
WHERE
 t2.Offboarding_Status = "Active"
 AND t1.gemini_for_workspace.event_category IS NOT NULL
 AND t1.gemini_for_workspace.action != 'generate_starter_tile_prompts'
 AND t1._PARTITIONTIME >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 180 DAY)
GROUP BY 1, 2, 3
ORDER BY Week_Start DESC;
