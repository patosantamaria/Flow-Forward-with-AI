# Phase 1 + Phase 2: Combined Full-Day Curriculum

> **For use when Phase 1 (Foundation & Ethics) and Phase 2 (Core Tools Deep Dive) are delivered on the same day — which is the standard delivery format used in all 9 sessions to date.**

## Overview

| Field                    | Detail                                                                                                                                                       |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Duration**             | Full Day (approx. 7.5 hours including breaks and lunch)                                                                                                      |
| **Format**               | On-site workshop (also works as a remote full-day with more structured breakout management)                                                                  |
| **Prerequisites**        | None — this is the entry point for the entire programme                                                                                                      |
| **What they leave with** | Clear understanding of GenAI and Gemini, Zero Trust guardrails, TCF framework, and hands-on mastery of the Gemini side panel, Gemini Web App, and NotebookLM |

> **Design note:** This combined format is the result of the practical reality from the AME BU pilot — Phases 1 and 2 were always delivered together. Rather than improvising the merge on-site, this document provides a tested single-day schedule that flows naturally from awareness to hands-on practice.

---

## Full-Day Combined Schedule

| Time              | Duration | Block         | Activity                                                        |
| :---------------- | :------- | :------------ | :-------------------------------------------------------------- |
| **09:00 – 09:10** | 10 min   | 🟢 Opening    | Welcome, housekeeping, programme overview                       |
| **09:10 – 09:25** | 15 min   | 📘 Module 0   | GenAI Foundations — what is AI, what is Gemini, what do we have |
| **09:25 – 09:35** | 10 min   | 📘 Module 1   | The Flow Forward Vision — why Vopak is investing in this        |
| **09:35 – 09:50** | 15 min   | 📘 Module 2   | Security & Guardrails (Zero Trust)                              |
| **09:50 – 10:10** | 20 min   | 📘 Module 3   | The TCF Prompting Framework                                     |
| **10:10 – 10:25** | 15 min   | 📘 Module 4   | Live Demo — The Difference (bad vs TCF prompt)                  |
| **10:25 – 10:40** | 15 min   | 🔨 Practice   | Live TCF Exercise (audience submits prompts live)               |
| **10:40 – 10:55** | 15 min   | ☕            | Morning Break                                                   |
| **10:55 – 11:25** | 30 min   | 📘 Module 5   | Gemini in Workspace — The Side Panel                            |
| **11:25 – 11:55** | 30 min   | 🔨 Practice   | Guided Practice: Inbox & Docs Triage (department-specific)      |
| **11:55 – 12:30** | 35 min   | 📘 Module 6   | Gemini Web App — Heavy Lifting (comparison, research, visual)   |
| **12:30 – 13:30** | 60 min   | 🍽️            | Lunch Break                                                     |
| **13:30 – 14:00** | 30 min   | 🔨 Practice   | Analyze & Compare + Time Saved exercise                         |
| **14:00 – 14:15** | 15 min   | 📘 Module 7   | Gemini on Mobile — for field workers and terminal staff         |
| **14:15 – 14:45** | 30 min   | 📘 Module 8   | NotebookLM — Your Team's Brain                                  |
| **14:45 – 15:00** | 15 min   | ☕            | Afternoon Break                                                 |
| **15:00 – 15:30** | 30 min   | 🔨 Practice   | NotebookLM: Upload, ask, Audio Overview demo                    |
| **15:30 – 16:00** | 30 min   | 🏆 Group Work | Departmental Deep-Dive Challenge (team exercise)                |
| **16:00 – 16:15** | 15 min   | 📢 Pitches    | 2-minute team demos — "What's your biggest AI win from today?"  |
| **16:15 – 16:30** | 15 min   | 🎯 Closing    | Homework brief, survey QR code, Phase 3 preview                 |

### Time Breakdown

| Category                    | Total Time    |
| :-------------------------- | :------------ |
| Instruction (Modules 0–8)   | 3h 00 min     |
| Practice & Group Work       | 2h 00 min     |
| Breaks + Lunch              | 1h 30 min     |
| Opening + Pitches + Closing | 40 min        |
| **Total**                   | **7h 10 min** |

---

## Phase 1 Modules (Morning)

> **Ref:** Full content for these modules → [`phase1_foundation_ethics.md`](phase1_foundation_ethics.md)

### 🤖 Module 0: GenAI Foundations (15 min)

A required foundation module based on the first 15 min of the **"Gemini Introductory"** internal training by Patricio Santamaria. Does not cover features — covers concepts.

| Section | Content                                                                                    | Time  |
| :------ | :----------------------------------------------------------------------------------------- | :---- |
| 0.1     | What is AI — the progression from rule-based to Generative AI                              | 3 min |
| 0.2     | What is Generative AI specifically — what it creates, how LLMs work                        | 3 min |
| 0.3     | What is Gemini — and what does Vopak have access to (4 tools + Enterprise Data Protection) | 5 min |
| 0.4     | What Gemini is good at and what it is not — the Smart Intern model                         | 4 min |

### 📘 Module 1: The Flow Forward Vision (10 min)

- "Day in the Life" — real Vopak friction points (Operations shift handover, Treasury CFF reconciliation)
- Your Career Superpower
- Strategic context: Shifting Gears 2030, Project Ascend 292% ROI, EUR 604M FY2025 net profit

### 🛡️ Module 2: Security & Guardrails (15 min)

- Zero Trust: No PII, no secrets, Vopak data boundary
- Limits: data cutoffs, hallucinations, financial/legal guard
- Vopak AI Principles: Trustworthy, Collaborative, Courageous

### 🧠 Module 3: TCF Prompting Framework (20 min)

**[Persona] + [Task] + [Context] + [Format]**

| Element     | Concept                                   | Example                                                 |
| :---------- | :---------------------------------------- | :------------------------------------------------------ |
| **Persona** | Give the AI a role                        | "Act as a strict Vopak SHEQ Auditor"                    |
| **Task**    | The specific action — use strong verbs    | "Cross-reference these two documents to find conflicts" |
| **Context** | Background info or documents the AI needs | "We are dealing with a highly aggressive supplier"      |
| **Format**  | How you want the output                   | "Present in a 3-column table"                           |

### 💻 Module 4: Live Demo — The Difference (15 min)

- **Bad prompt:** "Write an email about the new safety rule for tank 405" → generic, wrong tone
- **TCF Master Prompt:** Same ask, structured → ready-to-send, accurate, authoritative
- **Departmental Quick-Fire:** One TCF prompt per function in the room (Commercial, Engineering, Finance)

### 🔨 Live Practice: TCF Exercise (15 min)

Each participant writes one TCF prompt for their real work. 3–4 volunteers share. Facilitator gives feedback live.

---

## Phase 2 Modules (Post-Break and Afternoon)

> **Ref:** Full content for these modules → [`phase2_core_tools.md`](phase2_core_tools.md)

### 🔷 Module 5: Gemini in Workspace — The Side Panel (30 min)

**The "Ask Gemini" side panel** — travels with you across Docs, Gmail, Sheets, and Drive.

- **Gmail Demo:** Summarize a complex thread, draft a reply, identify outstanding items
- **Docs Demo:** Draft an executive summary from two Drive documents using `@mentions`
- **Key rule:** "If it's in your Drive, Gemini can read it. If you don't `@` mention it, Gemini will guess. Never let it guess."

### 🔨 Practice: Department-Specific Side Panel Prompts (30 min)

Break into department groups. Each group runs 3 prompts from `docs/departments/<department>/prompts.md`.

- 15 min group practice
- 2 people share their "aha!" moment with the room

### 🔶 Module 6: Gemini Web App — Heavy Lifting (35 min)

The standalone chat interface for analysis, comparison, and research:

- **Complex Reasoning:** Upload two documents (e.g. RFP + Pricing Policy) → find every conflict
- **Web Research:** Compare Vopak FY2025 sustainability metrics vs a named competitor's annual report
- **Visual Analysis:** Upload a terminal photo → identify safety concerns, classify severity, recommend corrective actions

### 🔨 Practice: Analyze & Compare + Time Saved Exercise (30 min)

1. Upload a real PDF or document from this week → apply a TCF prompt to extract what you need
2. **"Time Saved" Table:** Each person fills in their top 3 repetitive tasks with time estimates. Facilitator reads totals aloud: "You just identified X hours/month you could get back."

### 📱 Module 7: Gemini on Mobile (15 min)

For terminal workers, field staff, and anyone away from a desk:

- **Photo → Structured Data:** Photo of a whiteboard or form → typed, structured table in 10 seconds
- **Voice → Safety Walk Report:** Speak your SOR observations → formatted report with Bay, Status, Action, Priority, PtW flag
- **Quick Translation:** Multilingual teams — speak or paste, get English + key action items

> **Live demo tip:** If the audience has phones, take a photo of the facilitator's whiteboard notes → show the Gemini result on the projector.

### 📚 Module 8: NotebookLM — Your Team's Brain (30 min)

Position as **"Your Team's Brain"** — not just a policy vault, but a living knowledge base:

| Department     | What they upload                       | What they get                                            |
| :------------- | :------------------------------------- | :------------------------------------------------------- |
| **Operations** | PEPI logs, PtW SOPs, ISGOTT checklists | Safe work procedure Q&A with source citations            |
| **HR**         | MLO training requirements, policies    | "Which safety modules are mandatory for my role?"        |
| **Finance**    | CFF templates, Oracle guidelines       | "Which approval path for a PO exceeding EUR 500K?"       |
| **SHEQ**       | Vopak Way Standards, incident reports  | Tier classification lookup with exact document citations |

- **Grounded Q&A:** Upload 3 Vopak policy docs → show source-cited answers with exact paragraph references
- **Audio Overviews:** Transform a 50-page manual into a 10-minute podcast discussion
- **Multi-document synthesis:** Compare two SHEQ Annual Reports year-on-year

### 🔨 Practice: NotebookLM Hands-On (30 min)

1. Upload 2–3 team documents to a new notebook
2. Ask 3 increasingly specific questions
3. Try generating an Audio Overview
4. Share: What document would you put in your team's notebook?

---

## 🏆 Afternoon Group Challenge (30 min)

> Adapted from the departmental deep-dive scenario in Phase 2 Configuration B.

Teams of 3–4. Pick one real scenario from their department's `capstone.md`. 25 minutes to build, 5 minutes to present.

**Goal:** Each team shows one thing they built today (a prompt, a side panel flow, a NotebookLM notebook) that they'll actually use on Monday.

---

## 🎯 Closing & Homework Brief (15 min)

| Time  | Activity                                                                                                                                                    |
| :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5 min | Quick wins shared from the afternoon — celebrate what was built                                                                                             |
| 3 min | **Survey QR code:** Feedback form                                                                                                                           |
| 5 min | **Homework for Phase 3:** Identify one repetitive task involving multiple files or data entry. Start a one-sentence Gem idea — what role would you give it? |
| 2 min | **Phase 3 preview:** "Next time you build it. You make the AI. You build the automation."                                                                   |

---

## Facilitator Notes

### Multi-Department Groups (AI Week Format)

When running with 5+ departments in one room (e.g., AI Week Singapore format with 10–15 people across Finance, Engineering, HR, and IT):

- **Module 5 Practice:** Pre-load 4–5 department prompt cards. Assign each table a department prompt card, regardless of who's sitting there — it exposes people to other functions.
- **Aha! Moments sharing:** Ask for a **Finance example AND an Operations example** to ensure cross-function relevance.
- **Afternoon challenge:** Mix departments into teams deliberately — cross-function perspective produces the strongest ideas.

### Energy Management

- The energy dip hits at **~14:00** (post-lunch). Place the Mobile demo here — it's interactive and surprising.
- The "Time Saved" exercise at 13:30 is the emotional high point of the afternoon — give it the full 15 minutes of the practice block. Never cut it for time.

### What to Say Before Lunch

> "This morning you went from 'I've heard of Gemini' to using it to analyze real documents. After lunch you're going to see how this scales — how it reads 300 documents, how it turns your voice into a safety report, how it becomes your team's permanent knowledge bank. Two more hours and you'll never look at your inbox the same way."
