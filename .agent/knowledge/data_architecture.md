# Data Architecture — BigQuery Reference

## Tables

### Table 1: Activity Log (`t1`)

- **Table ID:** `gsuiteadminreports-on-bigquery.Admin_Reports.activity`
- **Key Fields:**
  - `email` — User email address
  - `_PARTITIONTIME` — Partition key (always filter!)
  - `gemini_for_workspace` — STRUCT containing AI event details
  - `client_type` — Desktop, Mobile, etc.

### Table 2: Master Data (`t2`)

- **Table ID:** `gmail-logs-bigquery.accounts.master_data`
- **Key Fields:**
  - `Primary_Email` — JOIN key with `t1.email`
  - `Job_Title`, `Department` — HR metadata
  - `Location_Name`, `Location_Type` — Geography
- **Active Human Filter:** `Account_Type = 'Internal' AND Is_Active = 'Yes' AND Offboarding_Status = 'Active'`

## Event Classification

| Type         | Definition                 | ROI Impact       | Examples                                              |
| ------------ | -------------------------- | ---------------- | ----------------------------------------------------- |
| 🎨 Creator   | Generate new content       | **15 min** saved | `help_me_write`, `generate_image`, `generate_formula` |
| 🧠 Assistant | Process/summarize existing | **2 min** saved  | `summarize_thread`, `active_conversations`            |

## Query Index

All queries live in `coe_project/queries/`:

| #   | Query                | File                       | Purpose                                    |
| --- | -------------------- | -------------------------- | ------------------------------------------ |
| 1   | Master Adoption      | `adoption_master.sql`      | Drill-down by user/day, ROI per department |
| 2   | Champion Finder      | `champion_scout.sql`       | Power users and struggling departments     |
| 3   | Dormant Licenses     | `dormant_users.sql`        | Inactive users for license reallocation    |
| 4   | Productivity Heatmap | `productivity_heatmap.sql` | Usage by day/hour for training scheduling  |
| 5   | App Saturation       | `app_saturation.sql`       | Gemini vs. Standard per app                |
| 6   | Action Leaderboard   | `action_leaderboard.sql`   | Top AI actions company-wide                |
| 7   | Skill Sophistication | `skill_sophistication.sql` | Single vs. multi-app user evolution        |
| 8   | Nudge Effectiveness  | `nudge_effectiveness.sql`  | Training/campaign impact                   |
| 9   | Action Detail Log    | `action_detail_log.sql`    | Per-user/action forensic deep-dive         |
| 10  | Noise Analyzer       | `noise_analyzer.sql`       | Identify automated system events           |
| 11  | Daily Pulse          | `adoption_daily_pulse.sql` | Executive scorecard, per-app totals        |

## Key Metric

$$\text{Gemini Penetration Rate} = \frac{\text{Active Gemini Users}}{\text{Active Workspace Users}}$$

Use the Active Workspace User denominator (not total licenses ~7,100) to avoid artificially deflated rates.

## SQL Rules

- **Always** include `_PARTITIONTIME` filter
- **Always** `estimate_query_cost` before presenting
- **Never** `SELECT *`
- **Always** filter for Active Human accounts
- **Reuse** existing queries — don't reinvent
