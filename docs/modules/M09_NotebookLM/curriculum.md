# M9 — NotebookLM (Your Team's Brain): Curriculum

> **Module:** M9 · **Duration:** 60 min (30 min instruction + 30 min practice) · **Standalone:** ✅ Yes · Requires M4  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase2_core_tools.md](../../phases/phase2_core_tools.md)

---

## Learning Objective

Participants create their first team notebook and get source-cited answers from their own department documents.

**Positioning:** "Your Team's Brain" — not just a vault for policies, but a living knowledge base. Upload your team's accumulated knowledge, and suddenly anyone on the team can get grounded, source-cited answers from it.

---

## 3.1 Every Department Has a Brain

| Department      | What they upload                                         | What they get                                                                        |
| :-------------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Operations**  | PEPI shift handover logs, PtW SOPs, ISGOTT checklists    | "What's the exact safe work procedure for hot work in Zone 1?" with source citations |
| **HR**          | MLO training requirements, Grow Your Skills policies     | Always-available HR assistant: "Which safety modules are mandatory for my role?"     |
| **Finance**     | CFF templates, Oracle export guidelines, OCS procedures  | "Which approval path do I need for a PO exceeding EUR 500K?"                         |
| **Commercial**  | L2C pricing matrices, GTCs, Terminal Capability Matrices | Cross-reference any new RFP against Pricing Policy + terminal capacity               |
| **SHEQ**        | Vopak Way Standards, incident reports, PtW procedures    | "What Tier classification applies if LEL exceeded 15% in Zone 2?"                    |
| **Engineering** | VPM stage gate checklists, HAZOP reports, API 650 specs  | "What Category A items block commissioning for Tank T-112?"                          |

---

## 3.2 Grounded Q&A (Up to 300 Sources)

**Demo:** Upload 3 Vopak policy documents.

**Prompt:**

> "According to these documents, what is the exact Vopak procedure for responding to a Loss of Primary Containment (LOPC) of a Class 3 flammable liquid at a jetty? Include the IN10 brief description format I should use for initial reporting."

NotebookLM cites the exact paragraph and page number from the source document.

**Key insight:** NotebookLM never hallucinates about your documents because it only reads what you give it. This is critical in hazardous chemical storage where AI-generated misinformation about safety procedures is an unacceptable operational hazard.

> **📦 Source Limit:** NotebookLM supports up to **300 sources per notebook**. For Legal or Audit managing large case files, plan structure carefully — one notebook per matter, project, or reporting year.

> **📋 Procurement Tip:** When comparing vendor quotes in NotebookLM: _"Compare Document A and Document B on [pricing, delivery timelines, warranty terms]. Create a side-by-side table. List any clauses where the documents contradict or leave ambiguity."_

---

## 3.3 Audio Overviews

Transform a 50-page Vopak Fundamentals on Safety manual into a 10-minute podcast discussion.

**Why it matters:** Terminal operators can listen during a commute or shift handover instead of reading dense safety documents. Maintenance technicians can consume updated EEMUA 159 standards via audio while on-site.

---

## 3.4 Multi-Document Synthesis

**Demo:** Upload both the current year's SHEQ Annual Report and the previous year's version.

**Prompt:**

> "Compare these two annual reports. What are the top 3 areas where safety performance improved (cite specific TIR and PSER metrics)? What are the top 3 areas where performance declined? Cross-reference any recurring LOPC locations against the Tier 1/2/3 classification system."

---

## Practice 3: Build Your Notebook (30 min)

1. Upload 2–3 team documents to a new notebook.
2. Ask 3 questions — start easy, get increasingly specific.
3. Try generating an Audio Overview.
4. Share with the room: _"What document would you put in your team's notebook?"_

**Facilitator tip:** Encourage participants to use documents from their current projects. The more real the source, the more useful the practice.
