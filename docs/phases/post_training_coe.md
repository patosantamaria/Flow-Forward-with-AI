# Post-Training Programme: CoE & Governance — Detailed Roadmap

> **Tagline:** Turning training into lasting transformation through tracking, governance, and community.
>
> **Note:** This is not a numbered phase — it runs continuously from Month 1 onwards, in parallel with and after the 3-phase training programme.

## Overview

| Field               | Detail                                                                         |
| :------------------ | :----------------------------------------------------------------------------- |
| **Duration**        | Continuous (Months 1–12 post-training)                                         |
| **Format**          | Asynchronous enablement, bi-monthly syncs, automated tracking                  |
| **Prerequisites**   | Completion of Phases 1–3                                                       |
| **What we achieve** | Sustained adoption, governed safety, shadow IT prevention, and measurable ROI. |

### The 4 Pillars of Governance

| Pillar                            | What it is                                                         | Goal                                                             |
| :-------------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------- |
| **🏢 Center of Excellence (CoE)** | The central portal for approved Gems, templates, and training.     | Provide a single source of truth and prevent shadow IT.          |
| **💡 Micro-Learning Campaigns**   | "Tip of the Week" emails/videos.                                   | Combat the forgetting curve and drive specific feature adoption. |
| **🏆 AI Champions Network**       | A community of power users who build and share advanced workflows. | Scale enablement locally within departments.                     |
| **📊 ROI Measurement**            | BigQuery integration with Workspace logs and training rosters.     | Prove the business value through _Skill Expansion_ metrics.      |

---

## 🏢 Pillar 1: The Global Gemini Center of Excellence (CoE)

The CoE bridges the gap between aggressive enablement and strict IT governance. When an employee forgets how to prompt, or needs an approved Gem, they go here.

### 1.1 The Training Library

- Hosts on-demand recordings of Phase 1, 2, and 3 sessions.
- Distributes PDF Quick-Start guides and the TCF prompting cheat sheets.

### 1.2 The Gemini Governance Registry

- A centralized catalog (built in Google Sites/Sheets) where 100% of sanctioned, departmental AI use cases and Custom Gems are documented.
- **Why it matters:** Prevents shadow IT. If it's not in the registry, it's not an officially supported operational standard.

### 1.3 Use Case Submission Workflow

- A simple intake form (Google Forms).
- Employees submit ideas for new Gems or automated workflows.
- AI Champions review the submissions for safety (Zero Trust compliance) and utility before publishing them to the CoE.

### 1.4 The Gem Marketplace (Peer-to-Peer)

The fastest adoption happens peer-to-peer: "Hey, I built this Gem, try it."

- **Platform:** A simple Google Sites page where any employee can publish a personal Gem with a one-click share link.
- **No approval required** for personal Gems — governance applies only to department-official ones added to the Governance Registry.
- **Structure:** Each listing includes: Gem name, department, what it does, how much time it saves, and a "Copy this Gem" link.
- **Why it matters:** Removes the bottleneck of top-down curation. The best Gems will naturally rise through usage and sharing.

---

## 💡 Pillar 2: Targeted Empowerment ("Tip of the Week")

Training events create usage spikes. Micro-learning creates sustained habits.

### 2.1 The Campaign Strategy

- **Partnership:** Executed in partnership with **Yassin Bahasuan** (named owner — any change in this role should trigger a campaign ownership handover; add to Project Charter stakeholder list).
- **Format:** Short, punchy email and intranet posts featuring a 60-second video or GIF.
- **Focus:** Demonstrating a _single_ Gemini feature per week.

### 2.2 Content Roadmap (Example)

- **Week 1:** "The Perfect TCF Prompt" (Phase 1 recap)
- **Week 2:** "Ask Gemini to summarize a 50-email thread" (Phase 2 recap)
- **Week 3:** "Generating an Audio Overview in NotebookLM" (Phase 2 recap)
- **Week 4:** "Setting up an inbox triage flow in Workspace Studio" (Phase 3 recap)

### 2.3 The Feedback Loop

- Using BigQuery analytics, we correlate the release of a "Tip of the Week" with a measurable spike in usage of that specific Google Workspace feature.
- **Two-way engagement:** Each Tip ends with a call-to-action: _"Reply with your result"_ or a link to a Google Form where employees can upload a screenshot of their own attempt. Feature the best responses in the next Tip — this creates social proof and makes it a conversation, not a broadcast.

---

## 🏆 Pillar 3: The AI Champions Network

We cannot scale enablement from the center. We need local advocates embedded in the business.

### 3.1 Identification & Recruitment

- High-performing employees from the Phase 3 Departmental Capstone challenges will be invited to join the Network.
- These are the people who built the best "Efficiency Engines".

### 3.2 The Bi-Monthly Sync Cadence

A structured community event hosted **every 2 months**.

| Agenda Item          | Description                                                                  | Time   |
| :------------------- | :--------------------------------------------------------------------------- | :----- |
| **Refresh & Align**  | Reviewing the latest security protocols and Zero Trust policies.             | 10 min |
| **Feature Review**   | Demonstrating new features released by Google Workspace since the last sync. | 20 min |
| **Show & Tell**      | Champions present new workflows or Custom Gems they built.                   | 20 min |
| **Q&A & Roadblocks** | Open discussion on adoption hurdles within their departments.                | 10 min |

### 3.3 The Output

Winning Gems and workflows from the Show & Tell are vetted and added to the **Gemini Governance Registry** for global access.

### 3.4 AI Pioneer Recognition Program

People need social proof and public recognition to sustain behavior change.

- **Monthly awards:** Recognize top contributors in the company newsletter or all-hands meeting.
- **Tracked metrics:** # of Gems created, # of Gems shared via Marketplace, # of Studio flows active, # of colleagues helped.
- **Badge tiers:**
  - 🥉 **Explorer** — Created and shared 1 Gem
  - 🥈 **Builder** — 3+ Gems shared, 1+ Studio flow active
  - 🥇 **Pioneer** — 5+ Gems shared, championed adoption in their department
- **Visibility:** Badges displayed on the CoE portal profile and mentioned in team meetings.

> [!IMPORTANT]
> **Badge tracking mechanism required.** The criteria above are defined but there is currently no form, query, or assigned owner for awarding badges. Before the programme goes live, assign an AI Champions coordinator to track this in a Google Sheet and review monthly. The `coe_project/queries/` folder is the recommended place for a BigQuery query to automate verification.

---

## 📊 Pillar 4: Measuring Transformation (BigQuery)

We will leverage Google Workspace Admin logs stored securely in BigQuery to rigorously measure the success and ROI of the training program.

### 4.1 The Training Participant Tracker

To correlate workshop attendance with usage logs, we maintain a standardized participant roster.

- **Format:** A secured Google Sheet.
- **Fields:** Employee ID, Email, Department, Region, Training Date (Phase 1, 2, 3), Capstone Dept.
- **Integration:** This sheet syncs securely into BigQuery, joining with Workspace Admin logs.

### 4.2 The Metric: "Skill Expansion"

Instead of just looking at total active users, we look at the _depth_ of their usage.

1. **Action Volume Delta:** Volume of Gemini interactions 30 days prior to training vs. 30 days after.
2. **Skill Expansion:** Analyzing logs to see if an employee executes entirely new "Action Types" post-training.
   > **Example:** If User A only used Gemini in Gmail prior to training, but post-training begins triggering actions in Sheets and NotebookLM, this is a quantifiable "Skill Expansion" proving the training's impact.

### 4.3 The ROI Dashboard

A Looker Studio dashboard connected to BigQuery that visualizes:

- Adoption rates by Department & Region.
- Most popular features / Action Types.
- Direct correlation between "Tip of the Week" communications and feature usage spikes.

### 4.4 The "Dropout Detector" Query

Not everyone who starts stays. We must detect _trained users who stopped using AI_ — they need a nudge, not a badge.

- **Logic:** Users who had ≥5 Gemini events in the first week post-training but fewer than 2 events by week 4.
- **Action:** Automatically flag them for a personalized follow-up from their department Champion (not a mass email).
- **Distinction:** Join with the Participant Tracker to separate "never trained" from "churned post-training" — two very different problems.

_(See `coe_project/queries/dropout_detector.sql` for full code)_

---

## 📱 Pillar 5: The Terminal Quick Start Kit

Terminals have shift workers with limited screen time. They cannot attend a full-day workshop. This pillar brings AI adoption directly to them with **zero training required**.

### 5.1 Pre-Built Gems for Terminal Roles

5 ready-to-use Gems, each solving one specific terminal pain point:

| #   | Gem Name                        | What it does                                                                              |
| :-- | :------------------------------ | :---------------------------------------------------------------------------------------- |
| 1   | **Shift Handover Summarizer**   | Paste shift notes → get a structured brief (Key Events, Safety, Equipment, Pending)       |
| 2   | **Toolbox Talk Generator**      | Paste a procedure or incident → get a 2-minute supervisor briefing script                 |
| 3   | **Safety Walk Reporter**        | Voice-describe what you saw → get a formatted report with Bay, Status, Action, Priority   |
| 4   | **Scheduling Conflict Checker** | Paste scheduling data → get overlaps, underused slots, and optimization suggestions       |
| 5   | **SOP Quick Finder**            | Upload your SOPs to a NotebookLM notebook → ask any question, get paragraph-cited answers |

### 5.2 QR Code Posters

- Print and place **QR code posters** in terminal common areas (break rooms, control rooms, locker areas).
- Each QR code links to one pre-built Gem in the Gem Marketplace — scan, open, use. No login beyond their existing Google account.
- **Poster format:** "Tired of writing shift handovers? Scan this → paste your notes → done in 90 seconds."

### 5.3 The 15-Minute Micro-Training Track

For terminal workers who cannot attend workshops, deliver training as **daily micro-lessons via Google Chat**:

| Day   | Lesson                                                       | Duration |
| :---- | :----------------------------------------------------------- | :------- |
| Day 1 | "Open Gemini on your phone. Ask it anything."                | 2 min    |
| Day 2 | "Take a photo of the whiteboard. Ask Gemini to type it out." | 3 min    |
| Day 3 | "Paste your shift notes. Ask for a summary."                 | 3 min    |
| Day 4 | "Try the Shift Handover Gem (QR code)."                      | 3 min    |
| Day 5 | "Voice-describe your safety walk. Ask for a report."         | 3 min    |

No classroom. No slides. Just one small action per day, delivered where they already communicate.
