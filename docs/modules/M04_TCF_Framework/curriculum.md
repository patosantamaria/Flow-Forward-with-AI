# M4 — PTCF Prompting Framework: Curriculum

> **Module:** M4 · **Duration:** 45 min (25 min instruction + 20 min practice) · **Standalone:** ✅ Yes · Requires M3  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase1_foundation_ethics.md](../../phases/phase1_foundation_ethics.md)  
> **This is the single most important module in the programme.**

---

## Learning Objective

Every participant leaves with a four-element prompting formula — PTCF — that they can apply the moment they return to their desk. The session is structured as a deliberate reveal: participants first see the value of TCF, then discover what Persona does to the output.

---

## Part 1 — Start with TCF (10 min)

We begin with the three core elements. This is the baseline every participant needs before we go further.

| Element          | Concept                                                   | Example                                                                        |
| :--------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **1. [Task]**    | The specific action you need performed. Use strong verbs. | "Cross-reference these two documents and find every conflict."                 |
| **2. [Context]** | The background information and constraints the AI needs.  | "We are in a supplier negotiation. The SOP attached is our internal standard." |
| **3. [Format]**  | How you want the information presented.                   | "Present as a 3-column table: Clause / Our Standard / Risk Level."             |

**Live demo at this point:** Facilitator types a real Vopak task using only TCF — no persona. Show the output. It is good, but generic.

> **Facilitator line:** _"This already works. But watch what happens when we add one more element."_

---

## Part 2 — Introducing Persona: the Power Upgrade (10 min)

Persona tells Gemini **who it is** — the role, expertise level, and perspective it should bring to the task. The same TCF prompt, with Persona added, produces a fundamentally different output.

### The Comparison Exercise

Use the same Task, Context, and Format. Change only the Persona. Run both live.

**Shared TCF base:**

> Task: Explain why AI literacy matters for Vopak employees right now.  
> Context: We are at an all-hands session. Keep it short and direct.  
> Format: Three bullet points.

**Persona A — Field Operator (no AI background):**

> "You are explaining this to a terminal operator who has never used AI and is sceptical about technology. Use plain language, no jargon. Focus on what it means for their daily shift."

_Expected output: practical, reassuring, grounded in physical tasks — shift handovers, log entry, equipment checks._

**Persona B — Finance Business Analyst:**

> "You are explaining this to a finance analyst who works with Oracle and Excel every day. Focus on productivity, data quality, and what AI can do with spreadsheets and reports."

_Expected output: data-focused, mentions reconciliation, reporting speed, error reduction._

**Debrief (2 min):** Same ask. Same context. Same format. Completely different output — because the room they were standing in changed.

> **Key message:** Persona does not limit what Gemini knows. It changes how it communicates. You are giving it the right lens for your audience.

---

## The Full Formula: PTCF

| Element          | Concept                                                  | Example                                                                                |
| :--------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **1. [Persona]** | Give the AI a role, expertise, and audience context.     | "You are a senior Vopak SHEQ Auditor reviewing a contractor's safety submission."      |
| **2. [Task]**    | The specific action you need performed.                  | "Identify every clause that contradicts Vopak's Fundamental Rules."                    |
| **3. [Context]** | The background, constraints, and documents the AI needs. | "The submission covers lifting operations at a Rotterdam terminal. HiPo risk is high." |
| **4. [Format]**  | How you want the information presented.                  | "Numbered list. Flag critical items in bold."                                          |

---

## Facilitator Notes

- Most beginners treat AI like a Google Search. We need to train them to treat it like a smart colleague — give it a role, a clear job, context, and a desired output format.
- The most common mistake: mixing up Task and Context. "Task is the action. Context is the background."
- The Persona comparison exercise always lands strongly. Run it live — do not pre-prepare the outputs. The room watching the text appear in real time builds credibility.
- If time is short, run only the Persona comparison — skip the TCF-only demo and go straight to the reveal.

---

## Branded Terminology Reminder

> When using PTCF for external communication — customer emails, regulatory submissions, press releases — ensure the Persona and Format elements align with the [Vopak Glossary](../../admin/vopak_glossary.md). Vopak's voice: **Trustworthy, Collaborative, Courageous.** AI-drafted text must always be reviewed for tone before it reaches an external audience.

---

## Live Practice: PTCF Exercise (20 min)

Each participant writes **one PTCF prompt** for a real task from their current role.

Steps:

1. Think of one repetitive or frustrating daily task
2. Fill in the four boxes: Who is the AI? / What should it do? / What does it need to know? / How should it respond?
3. Test the prompt in Gemini
4. 3–4 volunteers share their prompt with the room — facilitator gives live feedback on the Persona first ("Is the role specific enough?"), then Task, Context, Format

**Facilitator tip:** If someone is stuck, ask _"What's the most annoying part of your Monday morning?"_ — the answer becomes their Task and Context. Then ask _"Who would write the ideal answer to that question — what's their role and background?"_ — that becomes their Persona.
