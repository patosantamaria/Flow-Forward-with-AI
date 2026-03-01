---
description: Run the post-training CoE analytics loop — adoption monitoring, champion identification, dropout detection, and Tip of the Week planning
---

# /post_training — Post-Training Analytics & CoE Workflow

Use this workflow after each training cohort completes Phase 2/3 to monitor adoption health, identify champions, re-engage dropouts, and plan the next Tip of the Week.

---

## Step 1: Run the Core Adoption Pulse

Present this SQL to the user for execution in BigQuery. It gives the 30-day post-training adoption snapshot.

Reference: `coe_project/queries/adoption_master.sql` (Query 1)

**SQL advisory prompt to user:**

> "Run Query 1 (adoption_master.sql) with a date filter covering the 30 days AFTER the training date. Filter by the participant cohort using the Training Participant Tracker join. This will show you each attendee's Gemini usage delta: before vs. after training."

---

## Step 2: Identify Champions

Reference: `coe_project/queries/champion_scout.sql` (Query 2)

**SQL advisory prompt to user:**

> "Run Query 2 (champion_scout.sql) filtered to the training cohort. Sort by Total_Gemini_Events DESC and Distinct_Apps DESC. Champions are users with:
>
> - ≥3 distinct apps used (multi-app = Skill Expansion)
> - ≥5 Creator Events (help_me_write, generate_formula)
> - Usage in both Gemini in Gmail AND at least one of: Docs, Sheets, NotebookLM"

---

## Step 3: Detect Dropouts

Reference: `coe_project/queries/dropout_detector.sql` (from post_training_coe.md, Pillar 4.4)

**SQL advisory prompt to user:**

> "Run the Dropout Detector query. Flag users who had ≥5 Gemini events in week 1 post-training but fewer than 2 events by week 4. Export this list — these users need a personal re-engagement touch from their department Champion, NOT a mass email."

**Re-engagement message template (for Champions to send):**

> Subject: Quick check-in — how's Gemini going for you?
>
> Hi [Name],
>
> I noticed you gave Gemini a real go after the training — that's great! I wanted to check in and see if you've hit any friction or if there's a specific task I can help you tackle with AI.
>
> If you have 15 minutes this week, I'd love to help you build a Gem specific to your workflow.
>
> [Champion Name] | AI Champion, [Department]

---

## Step 4: Plan the Next Tip of the Week

Use the action leaderboard to identify the LOWEST-used feature among trained users.

Reference: `coe_project/queries/action_leaderboard.sql` (Query 6)

**SQL advisory prompt to user:**

> "Run Query 6 (action_leaderboard.sql) filtered to trained cohort only. Sort by Event_Count ASC to find the LEAST-used action types. The lowest-used action among trained users = the next Tip of the Week topic."

**12-Week Tip of the Week Content Calendar:**

| Week | Topic                                        | Feature                             | Link to Phase |
| :--- | :------------------------------------------- | :---------------------------------- | :------------ |
| W1   | The Perfect TCF Prompt                       | Gemini Chat                         | Phase 1 recap |
| W2   | Summarize a 50-email thread in Gmail         | Gemini in Gmail — summarize_thread  | Phase 2       |
| W3   | Generate an Audio Overview in NotebookLM     | NotebookLM — audio_overview         | Phase 2       |
| W4   | Cross-reference two documents in the Web App | Gemini Web App — file upload        | Phase 2       |
| W5   | Set up your first inbox triage flow          | Workspace Studio                    | Phase 3       |
| W6   | Build your department's first Custom Gem     | Gems                                | Phase 3       |
| W7   | Use the @ connector to pull files into Docs  | Gemini in Docs — connector          | Phase 2       |
| W8   | Voice-to-report on mobile (terminal workers) | Gemini Mobile                       | Phase 2       |
| W9   | Ask NotebookLM a safety procedure question   | NotebookLM — grounded Q&A           | Phase 2       |
| W10  | Generate a formula in Sheets with Gemini     | Gemini in Sheets — generate_formula | Phase 2       |
| W11  | Share your Gem with the Gem Marketplace      | Gem Marketplace (CoE Portal)        | Post-training |
| W12  | What's new in Gemini? (Google updates recap) | All tools                           | Continuous    |

> **Note:** Adjust W6–W12 based on Step 4 data. Replace topics above with the actual lowest-used features from your cohort's action leaderboard.

---

## Step 5: Update the Toolkit Registry

After completing the above steps, update `docs/toolkit_registry.md`:

- Set status of delivered materials to **Approved**
- Add new items created during this cycle (new Gems, Studio flows)
- Update `Last Updated` dates

---

## Output Summary Template

After running all queries, present this summary to the program stakeholder:

```
## Post-Training Adoption Report — [Cohort Name] — [Date]

**Participants:** [N] trained
**Champions identified:** [N] (list names/departments)
**Dropouts flagged:** [N] (outreach triggered by Champions)
**Top feature used:** [action_type]
**Least-used feature (next Tip topic):** [action_type]
**30-day Gemini Penetration Rate (cohort):** [X]%
**30-day Creator/Assistant ratio:** [X]:[Y]
**Skill Expansion rate (multi-app users):** [X]%
```
