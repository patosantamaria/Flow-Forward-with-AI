# Phase 2: Core Tools Deep Dive — Detailed Curriculum

> **Tagline:** Turning "Ask Gemini" into your unstoppable daily co-pilot.

## Overview

| Field                    | Detail                                                                                     |
| :----------------------- | :----------------------------------------------------------------------------------------- |
| **Duration**             | Half-Day (3.5 hours) to Full-Day (6 hours)                                                 |
| **Format**               | On-site, hands-on workshop                                                                 |
| **Prerequisites**        | Phase 1 (Foundation) completed                                                             |
| **What they leave with** | Mastery of cross-app context memory and immediate time-savings in Docs/Drive/Gmail/Sheets. |

### The 3 Core Tools

| Block                      | What it is                                                                         | Analogy                                    |
| :------------------------- | :--------------------------------------------------------------------------------- | :----------------------------------------- |
| **🔷 Gemini in Workspace** | The right-hand side panel. Travels with you across Docs, Sheets, Gmail, and Drive. | Your fast-acting executive assistant.      |
| **🔶 Gemini Web App**      | The standalone chat interface (gemini.google.com). Powerful reasoning and coding.  | Your heavyweight data analyst.             |
| **📚 NotebookLM**          | A grounded, secure workspace that only reads the documents you give it.            | Your personal librarian and vault manager. |

---

## Modular Delivery Options

### Configuration A: Core Tools Half-Day (3.5 hours)

| Time              | Block        | Activity                             |
| :---------------- | :----------- | :----------------------------------- |
| **09:00 – 09:15** | Opening      | Welcome & Phase 1 Recap              |
| **09:15 – 09:45** | Module 1     | Gemini in Workspace (Side Panel)     |
| **09:45 – 10:15** | Practice 1   | Guided Practice: Inbox & Docs Triage |
| **10:15 – 10:30** | Break        | ☕                                   |
| **10:30 – 11:00** | Module 2     | Gemini Web App (Heavy Lifting)       |
| **11:00 – 11:30** | Practice 2   | Guided Practice: Compare & Analyze   |
| **11:30 – 12:00** | Module 3     | NotebookLM (Information Synthesis)   |
| **12:00 – 12:30** | Demo & Close | Audio Overviews Demo & Next Steps    |

### Configuration B: Core Tools Full-Day (6 hours)

_(Includes the half-day block above, plus dedicated departmental practice)_

| Time              | Block           | Activity                                                          |
| :---------------- | :-------------- | :---------------------------------------------------------------- |
| **13:30 – 14:00** | Challenge Brief | Departmental deep-dive challenge                                  |
| **14:00 – 15:00** | Sprint          | Teams solve a real weekly task using either Web App or NotebookLM |
| **15:00 – 15:45** | Pitches         | 2-minute demos of time saved                                      |
| **15:45 – 16:00** | Closing         | Awards & Phase 3 Prep                                             |

---

## 📘 Module 1: Gemini in Workspace — The Side Panel (30 min)

**Facilitator Notes:**

- Emphasize that the **"Ask Gemini" side panel** is their new best friend. It has cross-app context memory.
- Show, don't just tell. Perform live demonstrations.

### 1.1 The Ultimate Triage Tool

Show how the side panel reads the active document or email _without_ you needing to copy-paste.

- **Gmail Demo:** Open a CFF reconciliation email thread from Treasury. Prompt the side panel: "Summarize this thread. Identify which BU submissions are still outstanding and draft a reply that confirms the deadline but requests revised accrual figures from BU Brazil and BU NLA."
- **Docs/Drive Demo:** Open a blank Doc. Prompt: "Draft an executive summary based on the @BU_NL_Q3_Financial_Review spreadsheet and @Stratcom_Meeting_Notes doc. Highlight any line items where OCR is trending below the 13% corporate target."

### 1.2 Using Google Workspace Connectors (`@`)

- Explain how typing `@` summons files directly into the context window.
- **Rule of thumb:** "If it’s in your Drive, Gemini can read it. If you don’t `@` mention it, Gemini will guess. Never let it guess."

---

## 🔨 Practice 1: Side Panel Mastery (30 min)

### Departmental Guided Practice

_(Have employees break into their departments and execute specific prompts.)_

> **📁 Department-specific prompts are in:** `docs/departments/<department>/prompts.md`
>
> 1. Give them 15 minutes to run 3 prompts from their department manual.
> 2. Have 2 people share their "Aha!" moment with the room.

---

## ☕ Morning Break (15 min)

---

## 📘 Module 2: The Gemini Web App (30 min)

**Facilitator Notes:**

- Explain the transition from "daily assistants" (side panel) to "heavy analysts" (Web App).
- Briefly touch on 2.5 Flash (speed) vs 2.5 Pro (complex reasoning).

### 2.1 Complex Reasoning & Comparison

- **Demo:** Upload two documents: an external customer RFP and Vopak's internal 2025 Pricing Policy.
- **Prompt:** "Cross-reference these two documents using the Lead to Contract (L2C) framework. Find every clause in the RFP that contradicts or exceeds the limits set in our Pricing Policy. Flag any language that could create antitrust exposure. Present conflicts in a table: RFP Clause | Our Policy Limit | Risk Level | Antitrust Flag."

### 2.2 Web Research & Grounding

- **Demo:** Using the Web App for live market research.
- **Prompt:** "Compare Vopak's FY2025 sustainability metrics (from Vopak.com — publicly available) against Oiltanking's or Stolthaven's most recent public annual report. Format as a competitive SWOT highlighting safety performance, environmental targets, and capacity growth."

> **Facilitator note:** Use Vopak's FY2025 data and name a specific competitor relevant to your BU (Oiltanking for Europe/Americas, then Petrosea or similar for AME). Do not leave the competitor vague — it produces inconsistent demo results.

### 2.3 Visual Analysis

- **Demo:** Upload a photo of a terminal loading bay or tank farm walkway.
- **Prompt:** "Analyze this image of a Vopak terminal loading bay. Identify any visible safety concerns based on the Vopak Fundamentals on Safety and ISGOTT standards. For each concern: describe the risk, classify its potential severity (Tier 1/2/3 per Vopak URS Incident Reporting v2.3), and recommend a corrective action. Flag anything that would require a Permit to Work (PtW) before remediation."

---

## 🔨 Practice 2: Analyze & Compare (30 min)

### Solo Exercise (15 min)

1. Ask the audience to find two conflicting documents or a massive PDF they have to read this week.
2. Upload it to Gemini Web App.
3. Apply a TCF prompt to extract a specific table or summary.

### ⏱️ "Time Saved" Exercise (15 min)

**Make the ROI personal.** Have each person fill in this table (on paper or in a Sheet):

| My Repetitive Task            | How often? | Time per occurrence | AI alternative              | Time with AI |
| :---------------------------- | :--------- | :------------------ | :-------------------------- | :----------- |
| _e.g. Summarizing shift logs_ | _Daily_    | _25 min_            | _Gemini: paste & summarize_ | _2 min_      |
| _e.g. Drafting status emails_ | _3x/week_  | _15 min_            | _Side panel: draft reply_   | _3 min_      |
| _e.g. Comparing two SOPs_     | _Monthly_  | _2 hours_           | _NotebookLM: compare docs_  | _10 min_     |

**Read the totals aloud:** "You just identified X hours per month you could get back. That's Y full working days per year. What would you do with that time?"

---

## 📱 Gemini on Mobile — The Terminal Worker's Gateway (15 min)

> This section is specifically designed for colleagues who work on terminals, in the field, or away from a desk.

**Key message:** "You don't need a laptop. Gemini lives on your phone."

### Demo 1: Photo → Structured Data

- Take a photo of a whiteboard, a paper form, or a label on equipment
- Open the Gemini app → attach the photo
- **Prompt:** "Read this and type it out in a structured table."
- **Result:** Handwritten notes become digital data in 10 seconds

### Demo 2: Voice → Safety Walk Report

- Use voice input in the Gemini app (microphone icon)
- **Say:** "I just finished the morning SOR — Safety Observation Round at the Europoort jetty. Bay 3 has a leaking gasket on Marine Loading Arm A — needs a PtW before repair. Bay 7 LMRA completed, all clear. Bay 12 needs PPE inspection, one operator missing face shield in Zone 1."
- **Prompt:** "Turn this into a Vopak Safety Observation Round report with columns: Bay | Status | Action Needed | Priority | PtW Required (Yes/No)."
- **Result:** A formatted report from a 15-second voice note

### Demo 3: Quick Translation

- For multilingual teams: paste or speak text in any language
- **Prompt:** "Translate this to English and list the key action items."

> **Facilitator tip:** If the audience has phones, do Demo 1 live. Take a photo of the facilitator's notes on the whiteboard → show the Gemini result on the projector.

---

## 📚 Module 3: NotebookLM — Your Team's Brain (30 min)

**Facilitator Notes:**

- Position NotebookLM as **"Your Team's Brain"** — not just a vault for policies, but a living knowledge base that any department can use to create an always-available expert.
- Emphasize: "Upload your team's accumulated knowledge, and suddenly anyone on the team can ask it questions and get grounded, source-cited answers."

### 3.1 Every Department Has a Brain

Show how _any_ team can use NotebookLM by uploading their existing documents:

| Department      | What they upload                                         | What they get                                                                        |
| :-------------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Operations**  | PEPI shift handover logs, PtW SOPs, ISGOTT checklists    | "What's the exact safe work procedure for hot work in Zone 1?" with source citations |
| **HR**          | MLO training requirements, Grow Your Skills policies     | An always-available HR assistant: "Which safety modules are mandatory for my role?"  |
| **Finance**     | CFF templates, Oracle export guidelines, OCS procedures  | "Which approval path do I need for a PO exceeding EUR 500K?"                         |
| **Commercial**  | L2C pricing matrices, GTCs, Terminal Capability Matrices | Cross-reference any new RFP against Pricing Policy + terminal capacity               |
| **SHEQ**        | Vopak Way Standards, incident reports, PtW procedures    | "What Tier classification applies if LEL exceeded 15% in Zone 2?"                    |
| **Engineering** | VPM stage gate checklists, HAZOP reports, API 650 specs  | "What Category A items block commissioning for Tank T-112?"                          |

### 3.2 Grounded Q&A (Up to 300 Sources)

- **Demo:** Upload 3 Vopak policy documents.
- Ask: "According to these documents, what is the exact Vopak procedure for responding to a Loss of Primary Containment (LOPC) of a Class 3 flammable liquid at a jetty? Include the IN10 brief description format I should use for initial reporting."
- Show how NotebookLM cites the exact paragraph and page number from the Vopak Way Standards.
- **Key insight:** NotebookLM _never hallucinates_ about your documents because it only reads what you give it. This is critical in the hazardous chemical storage sector where AI-generated misinformation about safety procedures is an unacceptable operational hazard.

### 3.3 Audio Overviews

- **Demo:** Transform the 50-page Vopak Fundamentals on Safety manual into a 10-minute podcast discussion.
- **Why it matters:** Terminal operators can listen during a commute or shift handover instead of reading dense safety documents. Maintenance technicians can consume updated EEMUA 159 standards via audio while on-site.

### 3.4 Multi-Document Synthesis

- **Demo:** Upload both the current year's SHEQ Annual Report and the previous year's version.
- **Prompt:** "Compare these two annual reports. What are the top 3 areas where safety performance improved (cite specific TIR and PSER metrics)? What are the top 3 areas where performance declined? Cross-reference any recurring LOPC locations against the Tier 1/2/3 classification system."

---

## 🎯 Deliverables & Next Steps

1. **Homework (Pre-Work for Phase 3):** Employees must identify one strictly repetitive process that spans multiple files or requires manual data entry. They will bring this to Phase 3 to automate it using Workspace Studio and Apps Script. _(Hint: Think about which recurring task in your team involves copying, moving, or comparing data across tools — that's your automation candidate.)_
2. **Gem Brainstorm:** Each employee should draft a 1-paragraph description of a Custom Gem that would save their team the most time weekly. Reference the 4 production Gem templates in `docs/gems/production_gem_templates.md` for inspiration (EB Minutes, CFF Analyzer, Bilingual Translator, SHEQ Investigator).
3. **AI Investment Calculator:** Share a Google Sheet where employees input their top 3 repetitive tasks, how often they do them, and how long each takes. The sheet calculates their personal hours saved per month. _"If you spend 30 min learning to automate this, you save X hours every month — forever."_
