# Projects & Engineering — Prompt Examples (Phase 2)

> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../admin/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"Simplify this technical paragraph for a non-technical manager."** — Paste any engineering text, get plain English.
2. **"List the top 5 risks for a tank conversion project."** — Instant risk register starting point.
3. **"Draft a short status update email for my project this week."** — Professional weekly update in seconds.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: PSSR Readiness Dashboard (Docs)

Open Google Docs. Paste a collection of contractor emails, hydro-testing certificates, and HAZOP excerpts.

> **Prompt:** "Act as a Vopak Lead Project Engineer preparing for Cold Commissioning. Synthesize these scattered documents into a Pre-Startup Safety Review (PSSR) Readiness Dashboard. Structure: (1) Category A Items (safety-critical — must be resolved before commissioning) with status per item, (2) Category B Items (non-safety, can be deferred to post-commissioning), (3) Outstanding Non-Conformities with responsible parties and deadlines, (4) MOC (Management of Change) status — list any pending Enablon approvals. Highlight any items that would block the transition from Mechanical Completion to Hot Commissioning."

### Exercise 2: CAPEX Variance Tracking — WBS Analysis (Sheets)

Open Google Sheets with sample project cost data.

> **Prompt:** "Act as a Vopak Project Controls Engineer. Analyze this capital expenditure dataset against the Work Breakdown Structure (WBS) baseline and identify: (1) cost items where actual spend exceeds the baseline by more than 10%, (2) whether each variance is 'temporary' (e.g., supplier delivery phasing) or 'permanent' (e.g., material price increase), (3) any 'cascade effects' where one cost overrun impacts related accounts, (4) the projected impact on Total Installed Cost (TIC). Present as a variance analysis table. Flag any items that would push the estimate outside the ±10% accuracy required for FID (Final Investment Decision) approval."

### Exercise 3: VPM Stage Gate Progress Update (Gmail)

> **Prompt:** "Act as a Vopak Project Manager. Draft a fortnightly progress update email to the BU Director for a project currently at SIP (Select) stage, moving toward FIP (Final Investment Proposal). Include: (1) completed milestones (vendor selection, environmental assessment), (2) current Stage Gate status with a Red/Yellow/Green traffic light for each workstream, (3) outstanding engineering deliverables (P&IDs, HAZOP completion), (4) updated cost estimate confidence level vs. the ±10% FID target, (5) decisions needed from the BU Director. Tone: factual, concise, executive-ready."

---

## Gemini Web App — Advanced Analysis

### Exercise 4: SoW Stress Test

Upload a Draft Scope of Work PDF.

> **Prompt:** "Act as a Forensic Project Manager. Stress-test this Scope of Work: identify missing deliverables, underspecified requirements, unrealistic timelines, and hidden cost drivers. Present findings in a table: Section | Issue Found | Severity | Recommendation."

### Exercise 5: Vendor Comparison

> **Prompt:** "Compare these two vendor quotes for Tank 405 conversion equipment. Identify differences in: specifications, lead times, warranty terms, pricing, and payment conditions. Which vendor offers better value-for-money considering total cost of ownership? Present as a side-by-side comparison."

---

## NotebookLM — Document Synthesis

### Exercise 6: Multi-Document Conflict Detection

Upload a SoW, Safety Data Sheet, and utility capacity report.

> **Prompt:** "Cross-reference these three documents. Identify any conflicts between: the SoW requirements and the available utility capacity, and the SoW specifications and the product safety requirements. List each conflict with the exact document and section reference."
