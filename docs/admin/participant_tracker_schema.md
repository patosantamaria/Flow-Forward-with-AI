# Participant Tracker & Analytics Schema

> **Purpose:** Ingest the training roster into BigQuery to join with Google Workspace Admin Console logs and measure Skill Expansion and Delta in Action Volume.

---

## Google Sheet Schema (Columns)

| Column Name             | Data Type | Required | Description                                          |
| :---------------------- | :-------- | :------- | :--------------------------------------------------- |
| **Employee ID**         | String    | Yes      | Unique identifier for joining with Workspace Logs.   |
| **Email Address**       | String    | Yes      | Used for targeted follow-ups and BigQuery joins.     |
| **Full Name**           | String    | Yes      | Employee name.                                       |
| **Region**              | Dropdown  | Yes      | e.g., AME, Asia, Americas, Europe.                   |
| **Department/Function** | Dropdown  | Yes      | e.g., Commercial, Engineering, SHEQ.                 |
| **Job Title**           | String    | No       | Helps identify potential future AI Champions.        |
| **Phase 1 Date**        | Date      | No       | Date the Foundation session was completed.           |
| **Phase 2 Date**        | Date      | No       | Date the Core Tools session was completed.           |
| **Phase 3 Date**        | Date      | Yes      | Defining date for Pre/Post Training ROI calculation. |
| **Capstone Department** | Dropdown  | Yes      | Which department challenge was completed.            |
| **Champion Status**     | Boolean   | No       | TRUE if inducted into the CoE Champions Network.     |

---

## BigQuery Sync Strategy

Once this Google Sheet is linked as an External Table in BigQuery, join `ON Email_Address` with the Workspace Admin Audit Logs (Gemini Application).

**Key Analytical Views:**

1. **Skill Expansion KPI:** Count of unique Action_Types in the 30 days before Phase 3 vs. 30 days after.
2. **Adoption Spike Matrix:** Overlay "Tip of the Week" send-dates onto the daily active use chart.
3. **Departmental Leaderboard:** Which department is generating the highest post-training interaction volume?
