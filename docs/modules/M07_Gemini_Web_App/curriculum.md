# M7 — Gemini Web App (Heavy Lifting): Curriculum

> **Module:** M7 · **Duration:** 60 min (30 min instruction + 30 min practice) · **Standalone:** ✅ Yes · Requires M4  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase2_core_tools.md](../../phases/phase2_core_tools.md)

---

## Learning Objective

Participants analyze a real document, run a multi-document comparison, and complete the Time Saved exercise — leaving with a clear personal ROI case.

---

## Facilitator Notes

- Position as the transition from "daily assistant" (side panel) to "heavy analyst" (Web App).
- Briefly explain **2.5 Flash** (speed) vs **2.5 Pro** (complex reasoning) — let participants choose.

---

## 2.1 Complex Reasoning & Comparison

**Demo:** Upload two documents — an external customer RFP and Vopak's internal 2025 Pricing Policy.

**Prompt:**

> "Cross-reference these two documents using the Lead to Contract (L2C) framework. Find every clause in the RFP that contradicts or exceeds the limits set in our Pricing Policy. Flag any language that could create antitrust exposure. Present conflicts in a table: RFP Clause | Our Policy Limit | Risk Level | Antitrust Flag."

---

## 2.2 Web Research & Grounding

**Demo:** Live market research using web grounding.

**Prompt:**

> "Compare Vopak's FY2025 sustainability metrics (from Vopak.com — publicly available) against Oiltanking's or Stolthaven's most recent public annual report. Format as a competitive SWOT highlighting safety performance, environmental targets, and capacity growth."

> **Facilitator note:** Name a specific competitor relevant to your BU (Oiltanking for Europe/Americas, Petrosea or similar for AME). Vague competitor names produce inconsistent demo results.

> [!CAUTION]
> **Commercial — CRM & SalesForce Safety:** When using the Web App for sales analysis, SalesForce data (customer names, deal values, opportunity stages) must **never be pasted directly into the Web App**. Export aggregate summaries or anonymized data, or use `@Google Drive` for files already inside the Vopak security boundary.

---

## 2.3 Visual Analysis

**Demo:** Upload a photo of a terminal loading bay or tank farm walkway.

**Prompt:**

> "Analyze this image of a Vopak terminal loading bay. Identify any visible safety concerns based on the Vopak Fundamentals on Safety and ISGOTT standards. For each concern: describe the risk, classify its potential severity (Tier 1/2/3 per Vopak URS Incident Reporting v2.3), and recommend a corrective action. Flag anything that would require a Permit to Work (PtW) before remediation."

---

## Practice 2: Analyze & Compare (30 min)

### Solo Exercise (15 min)

1. Find two conflicting documents or a large PDF you need to analyze this week.
2. Upload it to Gemini Web App.
3. Apply a PTCF prompt to extract a specific table or summary.

### ⏱️ "Time Saved" Exercise (15 min)

**Make the ROI personal.** Each person fills in this table:

| My Repetitive Task            | How often? | Time per occurrence | AI alternative              | Time with AI |
| :---------------------------- | :--------- | :------------------ | :-------------------------- | :----------- |
| _e.g. Summarizing shift logs_ | _Daily_    | _25 min_            | _Gemini: paste & summarize_ | _2 min_      |
| _e.g. Drafting status emails_ | _3x/week_  | _15 min_            | _Side panel: draft reply_   | _3 min_      |
| _e.g. Comparing two SOPs_     | _Monthly_  | _2 hours_           | _NotebookLM: compare docs_  | _10 min_     |

**Facilitator reads totals aloud:** "You just identified X hours per month you could get back. That's Y full working days per year. What would you do with that time?"

> **This exercise is the emotional high point of M7. Never cut it for time.**

---

## Homework (Pre-Work for M9 / Phase 3)

- Identify one repetitive process that spans multiple files or requires manual data entry.
- Draft a 1-paragraph description of a Custom Gem that would save your team the most time weekly.
