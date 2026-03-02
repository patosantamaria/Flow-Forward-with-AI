# Maintenance — "Root Cause Detective" (Phase 3 Capstone)


---

## The Scenario

**Tank T-405** is scheduled for conversion to store ApexChem's HMD product. Your Maintenance team has been asked to assess the impact of HMD on existing terminal infrastructure. The Asset Registry shows current equipment specs — but HMD is chemically aggressive, and some materials may not survive long-term exposure.

The Maintenance Director needs your asset compatibility assessment **before Project Phoenix locks the budget**.

---

## Your Mission (Search → Apply → Refine)

### 1. Search (15 min)

Analyze current infrastructure and asset data against HMD chemical properties.

> **Prompt:** "Based on the HMD Safety Data Sheet and this Asset Registry for Tank 405 and its connected piping, identify: (1) any materials currently installed that are incompatible with HMD, (2) any equipment rated for a lower temperature than HMD's freezing point, (3) any gaskets or seals that will degrade with HMD exposure. Present as a risk table."

**What you'll discover:**

- Copper-alloy fittings on Loading Bay 3 are chemically incompatible with HMD — must be replaced with stainless steel
- Current EPDM gaskets will degrade — need PTFE replacements with 6-8 week lead time
- Steam tracing capacity insufficient for HMD's high freezing point

### 2. Apply (30 min)

Synthesize risks regarding asset integrity and create a technical impact memo.

> **Prompt:** "Draft a technical impact memo to the BU Director. Cover: (1) Executive Summary: 3 critical asset compatibility risks, (2) Detailed Findings: for each risk, the affected asset, the incompatibility issue, the potential consequence (leak, failure, contamination), and the required remediation, (3) Budget Impact: estimated costs for materials replacement, (4) Timeline Impact: lead times for replacement parts. Conclude: Q3 delivery is mechanically impossible without emergency procurement."

### 3. Refine (20 min)

Create a preventive maintenance proposition for the new HMD assets.

> **Prompt:** "Draft a preventive maintenance plan for Tank 405 after HMD conversion. Include: inspection intervals, component replacement schedules, required spare parts inventory, and monitoring procedures specific to HMD's chemical properties. Format as a table suitable for CMMS import."

### 4. Optional Stretch Goal

Draft a cost-benefit analysis comparing emergency Q3 procurement vs. a delayed Q4 timeline.

---

## Cross-Department Check (at 60 min)

> "Walk over to **Commercial & BD** and tell them to stop promising Q3 to ApexChem — the gasket lead time makes it mechanically impossible! Also coordinate with **Projects & Engineering** on the budget impact of the steam tracing upgrade."

---

## Expected Deliverable

1. Asset compatibility risk assessment
2. Technical impact memo explaining why Q3 is mechanically impossible
3. Preventive maintenance plan for post-conversion Tank 405

---

## Data Room (NotebookLM)

- Tank 405 Asset Registry
- HMD Safety Data Sheet
- Equipment manufacturer manuals
- Current maintenance schedules and spare parts inventory
- Chemical resistance compatibility charts

---

---

## 🎤 Final Deliverables — Put Every Tool to Work

> 💡 This capstone is designed to use **every tool** you learned in training. Open your **Capstone Facilitator Gem** in a separate tab for prompt tips and guidance throughout.

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

### Step 4: Executive Slide Deck — Slide Deck Creator Gem (15 min)

Create a **5–7 slide executive deck** using the **Slide Deck Creator Gem** provided to you. This Gem generates Vopak-branded slide content ready to paste into Google Slides.

> **How:** Open the **Slide Deck Creator Gem** → paste your key findings and analysis → the Gem produces structured slide content with Vopak branding, clear headers, and a board-ready format → copy into **Google Slides** and refine.

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

| Tool | Used for | Phase |
|:--|:--|:--|
| **Capstone Facilitator Gem** | Prompt tips, tool guidance, time management | Throughout |
| **NotebookLM** | Document upload, grounded Q&A, Audio Overview | Step 1 |
| **Deep Research** | Comprehensive multi-source research report | Step 2 |
| **Gemini Web App** | Structured analysis, document comparison, PTCF prompts | Step 3 |
| **Gemini in Docs** | Drafting and refining written deliverables | Step 3 |
| **Gemini in Sheets** | Data tables and visualisation _(if applicable)_ | Step 3 |
| **Slide Deck Creator Gem** | Vopak-branded executive presentation | Step 4 |
| **Google Vids** | Narrated video from slides _(optional bonus)_ | Step 5 |
