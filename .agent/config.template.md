# Agent Configuration (Template)

> **Instructions:** Copy this file to `config.local.md` and fill in your project-specific values.
>
> ```bash
> cp .agent/config.template.md .agent/config.local.md
> ```

## Project Identity

| Key            | Value | Description                               |
| :------------- | :---- | :---------------------------------------- |
| GCP_PROJECT_ID | `""`  | Google Cloud project ID                   |
| GITHUB_REPO    | `""`  | GitHub repository (e.g., `org/repo-name`) |

## BigQuery Data Sources

| Key                      | Value | Description                                             |
| :----------------------- | :---- | :------------------------------------------------------ |
| BQ_ADMIN_REPORTS_PROJECT | `""`  | Project containing Admin Reports dataset (activity log) |
| BQ_ADMIN_REPORTS_DATASET | `""`  | Dataset name (e.g., `Admin_Reports`)                    |
| BQ_ACCOUNTS_PROJECT      | `""`  | Project containing user account metadata                |

## BigQuery Cost Guardrails

| Key                       | Value | Description                                                         |
| :------------------------ | :---- | :------------------------------------------------------------------ |
| BQ_MAX_BYTES_PER_QUERY    | `""`  | Hard limit: reject queries scanning > this (e.g., `1GB`)            |
| BQ_MAX_COST_PER_QUERY_USD | `""`  | Soft limit: warn user if estimated cost exceeds this (e.g., `0.50`) |
| BQ_DAILY_BUDGET_USD       | `""`  | Daily budget ceiling (e.g., `5.00`)                                 |

## BigQuery Tables

| Reference   | Table Path                                                       | Description                |
| :---------- | :--------------------------------------------------------------- | :------------------------- |
| ACTIVITY    | `{BQ_ADMIN_REPORTS_PROJECT}.{BQ_ADMIN_REPORTS_DATASET}.activity` | Gemini AI usage events     |
| MASTER_DATA | `{BQ_ACCOUNTS_PROJECT}.accounts.master_data`                     | User account metadata (HR) |

## Google Drive Resources

| Key                | Value | Description                                           |
| :----------------- | :---- | :---------------------------------------------------- |
| SLIDES_TEMPLATE_ID | `""`  | Vopak-branded Slides template ID for `/create_slides` |
| COE_PORTAL_FOLDER  | `""`  | Drive folder for CoE portal assets                    |
