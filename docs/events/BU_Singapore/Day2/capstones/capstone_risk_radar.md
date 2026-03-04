# Projects & Engineering — "The Risk Radar" (Phase 2 Capstone)

> **Origin:** Flow Forward CoE. Generic version — works for any BU without modification.
> **Best for:** Any BU where you want a SoW stress-test capstone. For BU Singapore, use the BCSS "Crude Alert" capstone instead.

## The Scenario

Your terminal is executing **Project Phoenix** — the conversion of **Tank T-405** to handle ApexChem's new HMD product. You've received a Draft Scope of Work from the contractor, and your job is to stress-test it against technical data before the budget is locked.

The BU Director needs your risk assessment **before the board meeting**.

---

## Your Mission (Search → Apply → Refine → Create)

### 1. Search (15 min)

Generate a comprehensive Scope of Work analysis based on technical specs.

> **Prompt:** "Analyze this Draft Scope of Work for Tank T-405 conversion. Cross-reference it against the HMD Safety Data Sheet and the terminal utility capacity report. Identify any gaps in: heating requirements, pipe specifications, material compatibility, and utility capacity."

**What you'll discover:**

- Insufficient steam capacity — HMD has a high freezing point requiring heated storage, and the current boiler system can't handle the additional load
- Pipe freezing risk — Trace heating specs don't account for HMD's solidification temperature
- Vendor lead times — Critical alloy fittings have a 6-8 week lead time that blows the Q3 schedule

### 2. Apply (30 min)

Use AI to stress-test the SoW and flag missing items or budget risks.

> **Prompt:** "Based on the gaps identified, draft an emergency executive memo to the BU Director. Structure: (1) Executive Summary of the 3 critical risks, (2) Technical details for each risk with specific numbers, (3) Budget impact estimate, (4) Revised timeline recommendation, (5) Decision required. Tone: urgent but factual."

### 3. Refine (20 min)

Draft a summary memo for leadership regarding project readiness.

> **Prompt:** "Refine this memo for board presentation quality. Add a risk matrix visual (table format: Risk | Probability | Impact | Mitigation | Owner). Ensure all numbers are specific and traceable to source documents."

### 4. Optional Stretch Goal

Create a video briefing for the terminal team explaining the project's impact on daily operations.

---

## 🔀 Mid-Challenge Update & Cross-Department Synergy

> **🔔 Simulated Update:** The Facilitator Gem will provide you with new information mid-challenge to simulate a real-world curveball (e.g., an unexpected delay flagged by another team).
>
> **Important:** You must solve this **independently**. The Gem gives you everything you need—do not physically contact other departments during the exercise.
>
> 💡 **NotebookLM Bonus:** If multiple departments (e.g., Commercial and Engineering) are taking this training simultaneously, combining all final deliverables into one shared NotebookLM afterwards will reveal hidden systemic insights that no single team could see alone!

---

## Expected Deliverable

1. An emergency executive memo with a risk matrix
2. Revised project timeline with critical path analysis

---

## 📂 Data Room — Preparation Guide

> **Facilitator:** Create these documents in Google Docs/Sheets **before** the session and place them in a shared folder. Participants upload them into NotebookLM at the start.

| #   | Document                         | Format       | What to Include                                                                                                                      |
| :-- | :------------------------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Project Plan Summary**         | Google Doc   | High-level project plan for a terminal expansion: phases, milestones, dependencies, critical path.                                   |
| 2   | **Engineering Specifications**   | Google Doc   | Technical specifications for the expansion: tank dimensions, piping, instrumentation, electrical.                                    |
| 3   | **Budget Forecast**              | Google Sheet | Detailed budget with line items: engineering, procurement, construction, commissioning, contingency. Include a 15% overrun scenario. |
| 4   | **Historical Project Delay Log** | Google Sheet | Past project delays: project name, planned vs. actual completion, cause, impact. Show recurring patterns.                            |
| 5   | **Risk Register Template**       | Google Sheet | Template: Risk ID, Description, Category, Probability, Impact, Risk Score, Mitigation, Owner, Status.                                |

> 💡 **Reference:** The BU NL workshop used a "Project Delay Log" and "Budget Estimate" — adapt with your BU's historical project data.

---

---

## 🎤 Final Deliverables — What You Leave With

> 💡 This capstone is designed to use **every tool** you learned in training. You leave with a complete portfolio: a **NotebookLM knowledge base**, a **research report**, a **written analysis**, a **slide deck**, and optionally a **video**. Open your **Capstone Facilitator Gem** in a separate tab for prompt tips and guidance.

### Step 1: Build Your Knowledge Base — NotebookLM (10 min)

Upload all documents from the Data Room into a **NotebookLM** notebook. This becomes your grounded research space — every answer is cited back to your sources.

> **Try:** "Across all uploaded documents, what are the 3 most critical issues I should focus on?" — use the cited answers to guide your Search phase.

> **Bonus:** Generate an **Audio Overview** of your notebook — listen to a 2-minute podcast-style summary while you plan your approach.

### Step 2: Deep Research — Gemini with Deep Research (15 min)

Use **Gemini's Deep Research** feature (in Gemini Web App) for the Search phase of your challenge. Deep Research creates a comprehensive, multi-source research report.

> **How:** Open Gemini Web App → type your research prompt → click the **Deep Research** button (or select it from the model picker) → review the generated research plan → let it run → review the full report with source citations.

### Step 3: Analysis & Drafting — Gemini Web App + Workspace (30 min)

Use **Gemini Web App** for the heavy analysis (Apply phase) and **Gemini in Workspace** (Docs side panel) for drafting and refining.

> **Gemini Web App:** Upload documents, run structured PTCF prompts for comparison tables, matrices, and frameworks.
> **Gemini in Docs:** Draft your written deliverables, then use the side panel to refine tone, structure, and conciseness.
> **Gemini in Sheets:** If your analysis involves data tables, use Gemini in Sheets to organise and visualise.

### Step 4: Executive Slide Deck — Vopak Slide Designer (15 min)

Create a **5–7 slide executive deck** using the **Vopak Slide Designer** provided to you. This Gem generates Vopak-branded slide content ready to paste into Google Slides.

> **How:** Open the **Vopak Slide Designer** → paste your key findings and analysis → the Gem produces structured slide content with Vopak branding, clear headers, and a board-ready format → copy into **Google Slides** and refine.

> **Prompt tip:** "Create a 5–7 slide executive presentation covering: [paste your key findings]. Include: (1) title slide, (2) situation overview, (3) key findings with data, (4) analysis / comparison, (5) recommendations, (6) next steps, (7) appendix."

This is your **required** deliverable — you will present this to the group in 2 minutes.

### Step 5 (Optional Bonus): Narrated Video — Google Vids (10 min)

Turn your slide deck into a narrated executive video using **Google Vids**.

1. Open [Google Vids](https://vids.google.com)
2. Click **Create** → import your Google Slides deck
3. Let Vids auto-generate a narration script from your slide content
4. Review and adjust the script — refine tone, pacing, and emphasis
5. Generate and preview the video (keep it under 3 minutes)

> **Why:** A polished video is a powerful way to share your findings asynchronously — perfect for stakeholders who couldn't attend the presentation.

### Tool Checklist

| Tool                         | Used for                                               | Phase      |
| :--------------------------- | :----------------------------------------------------- | :--------- |
| **Capstone Facilitator Gem** | Prompt tips, tool guidance, time management            | Throughout |
| **NotebookLM**               | Document upload, grounded Q&A, Audio Overview          | Step 1     |
| **Deep Research**            | Comprehensive multi-source research report             | Step 2     |
| **Gemini Web App**           | Structured analysis, document comparison, PTCF prompts | Step 3     |
| **Gemini in Docs**           | Drafting and refining written deliverables             | Step 3     |
| **Gemini in Sheets**         | Data tables and visualisation _(if applicable)_        | Step 3     |
| **Vopak Slide Designer**   | Vopak-branded executive presentation                   | Step 4     |
| **Google Vids**              | Narrated video from slides _(optional bonus)_          | Step 5     |

---

## ⚡ Quick Challenge (30 min alternative)

> **Use this version when time is limited.** Same scenario, single deliverable, fewer tools.

**Challenge:** You have 30 minutes. Identify the top 5 risks for a terminal expansion project and create a risk heat map.

1. Upload the project plan and delay log into **Gemini Web App** (5 min)
2. Prompt: "Based on this project plan and historical delay data, identify the top 5 risks. For each: describe the risk, rate probability (1-5) and impact (1-5), calculate risk score, and propose one mitigation action." (15 min)
3. Organise into a risk heat map in **Google Sheets** (5 min)
4. Create a 3-slide summary using the **Vopak Slide Designer** (5 min)

---

## 📁 Save Your Work — Shared Drive

Save all deliverables (slide deck, research report, analysis, and any Google Vids videos) to the **Flow Forward with AI** Shared Drive folder for your department:

> 📂 [Flow Forward Shared Drive](https://drive.google.com/drive/folders/1dSxVMMX2oFBAmyJ-WN5n4y_SLCt6I1wT) → **Capstone Outputs** → _[Your Department]_

Your work becomes part of the programme's example library — we review participant outputs to refine department-specific prompts, Gems, and training examples for future sessions.
