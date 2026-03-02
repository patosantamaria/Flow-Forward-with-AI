# Phase 1: The Foundation & Ethics — Detailed Curriculum

> **Tagline:** Welcome to the new way of working — safe, structured, and empowered by AI.

## Overview

| Field                    | Detail                                                                                                                                                                       |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Duration**             | 75 Minutes (Standard) to 90 Minutes (Extended Practice)                                                                                                                      |
| **Format**               | Remote/Online Webinar OR On-site Townhall                                                                                                                                    |
| **Prerequisites**        | None (This is the baseline program)                                                                                                                                          |
| **What they leave with** | A clear understanding of what AI is, clear boundaries on what is safe, and the PTCF prompting formula — starting from PTCF basics and unlocking Persona as the power upgrade. |

### The 3 Building Blocks

| Block                     | What it is                                                                                                               | Analogy                                                                                           |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **🤖 GenAI Foundations**  | What Generative AI is, where Gemini fits, and what Vopak has access to.                                                  | Understanding what kind of engine is under the hood before you drive.                             |
| **🛡️ Zero Trust**         | The non-negotiable security guardrails regarding PII, secrets, and hallucinations.                                       | Wearing a seatbelt before starting the engine.                                                    |
| **🧠 The PTCF Framework** | Task + Context + Format as the foundation — then Persona introduced as the upgrade via a live Vopak comparison exercise. | Giving instructions to a smart colleague, then telling them which audience they're presenting to. |

---

## Modular Delivery Options

This baseline session is modular to fit different company rhythms.

### Configuration A: The Full 90-Minute Interactive (Recommended)

| Duration     | Block      | Activity                                                                  |
| :----------- | :--------- | :------------------------------------------------------------------------ |
| 15 min       | M1         | GenAI Foundations — What Is This Thing?                                   |
| 10 min       | M2         | The "Flow Forward" Vision                                                 |
| 15 min       | M3         | Security & Guardrails (Zero Trust)                                        |
| 25 min       | M4         | The PTCF Prompting Framework (PTCF → Persona reveal + comparison exercise) |
| 15 min       | M5         | Live Demo: The Difference                                                 |
| 5 min        | Closing    | Homework & Next Steps                                                     |
| **→ 90 min** | ✅ _Total_ | _Full interactive session_                                                |

### Configuration B: The 60-Minute Executive Overview

| Duration     | Block      | Activity                                               |
| :----------- | :--------- | :----------------------------------------------------- |
| 10 min       | M1         | GenAI Foundations — What Is This Thing?                |
| 8 min        | M2         | The "Flow Forward" Vision                              |
| 12 min       | M3         | Security & Guardrails                                  |
| 20 min       | M4         | The PTCF Prompting Framework (focus on PTCF foundation) |
| 10 min       | M5         | Live Demo: The Difference                              |
| 5 min        | Closing    | Q&A & Next Steps                                       |
| **→ 60 min** | ✅ _Total_ | _Executive Overview_                                   |

> **Facilitator note for Config B:** Budget the last 5 minutes for Q&A — a senior audience will always have questions. Cut Module 1 to 6 minutes if needed, not Module 2.

---

## 🤖 M1 · GenAI Foundations — What Is This Thing? (15 min)

> **Standalone:** ✅ Yes · 15 min · No prerequisites · Can open any session
> **Deliverable:** Shared vocabulary — everyone understands what kind of engine is under the hood.

> **Reference:** This module is based on the first 15 minutes of the **"Gemini Introductory"** internal training developed by Patricio Santamaria. Unlike the rest of Phase 1, this section does not focus on any specific features — it builds the conceptual foundation every participant needs before the rest of training makes sense.
>
> **Why this comes first:** Most training programs assume participants already understand what AI _is_. They don't. Without this shared vocabulary, the PTCF framework and the Zero Trust guardrails land on shaky foundations.

### 0.1 What Is Artificial Intelligence? (3 min)

**The simple version:**

> AI is software that learns from data to perform tasks that used to require human intelligence — like reading text, recognizing images, translating languages, and generating new content.

**The progression that matters:**

| Era                  | What machines could do                       | Example                           |
| :------------------- | :------------------------------------------- | :-------------------------------- |
| **Rule-based**       | Only what a programmer explicitly coded      | "If invoice > €500K, flag it"     |
| **Machine Learning** | Learn patterns from data to make predictions | "This email looks like spam"      |
| **Deep Learning**    | Recognize complex patterns (images, voice)   | Face recognition, speech-to-text  |
| **Generative AI**    | _Create_ new content from a prompt           | Write an email, generate a report |

**The key shift:** Traditional software follows instructions you write in advance. Generative AI responds to what you ask it _right now_, in natural language.

> "You don't need to learn a programming language. You already know the interface — it's called English."

### 0.2 What Is Generative AI Specifically? (3 min)

Generative AI (GenAI) is a category of AI that can **create** — not just analyze or classify.

Give it a prompt → it generates output:

| Input you give | Output it creates                                |
| :------------- | :----------------------------------------------- |
| A question     | A written answer, explanation, or summary        |
| A document     | A structured report, a set of action items       |
| Raw data       | A formatted table, a chart description, an email |
| An image       | A description, categorization, analysis          |
| Voice          | A transcription, a structured report             |

**The large language model (LLM) in plain language:**
Gemini is trained on a massive amount of text — books, articles, websites, code, scientific papers — and learned the patterns of language well enough to produce coherent, contextually accurate responses. Think of it as a model that has "read" more than any human ever could, and can now synthesize that knowledge on demand.

**It doesn't "know" things the way you know things.** It predicts the most likely helpful response based on patterns. This is why verification matters — which is exactly why Zero Trust (Module 2) comes immediately after.

### 0.3 What Is Gemini — and What Does Vopak Have Access To? (5 min)

**Gemini** is Google's family of AI models, built into the Google Workspace tools you already use every day at Vopak.

| Tool                    | What it is                                                                                                | Where you find it                                                  |
| :---------------------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Gemini in Workspace** | The "Ask Gemini" side panel inside Docs, Gmail, Sheets, Drive                                             | Appears as the ✨ sparkle icon in any Workspace app                |
| **Gemini Web App**      | The standalone chat interface — for heavy analysis, file uploads, complex reasoning                       | [gemini.google.com](https://gemini.google.com)                     |
| **NotebookLM**          | A research workspace grounded exclusively in documents **you** upload — no hallucination about your files | [notebooklm.google.com](https://notebooklm.google.com)             |
| **Workspace Studio**    | No-code automation — describe a flow in plain language, Studio builds and runs it                         | [studio.workspace.google.com](https://studio.workspace.google.com) |

**Critical: Enterprise Data Protection**
Vopak uses **Gemini for Google Workspace** — the enterprise-licensed version. This means:

- ✅ Your prompts and data are **not used to train the public model**
- ✅ Your conversations are **not visible to Google employees**
- ✅ Data stays within Vopak's Google Workspace boundary

This is fundamentally different from using AI tools on personal accounts. Always use the tools through your Vopak Google account.

### 0.4 What Gemini Is Good At — and What It Is Not (4 min)

**A helpful mental model: The Smart Intern**

> Gemini is like an extremely well-read intern who has absorbed everything in the world's libraries and can write and reason at a high level — but has never worked at Vopak, doesn't know your specific processes, and absolutely needs you to fact-check their work before it goes to a stakeholder.

| Gemini is great at ✅                              | Gemini is not good at ❌                        |
| :------------------------------------------------- | :---------------------------------------------- |
| Summarizing, structuring, formatting text          | Real-time or live data (past its training date) |
| Drafting emails, reports, and presentations        | Making legally binding decisions                |
| Analyzing documents you upload                     | Consistently accurate numerical calculations    |
| Comparing documents and finding conflicts          | Replacing expert review of safety procedures    |
| Translating, rephrasing, changing tone             | Knowing Vopak's specific process unless told    |
| Brainstorming, generating options, thinking widely | Being 100% right, 100% of the time              |

> **The seatbelt rule:** AI is the engine. You are the driver. Always verify before you send.

> **When to use AI vs. manual verification:** AI is ideal for drafting, summarizing, comparing, and formatting. It is NOT a substitute for expert review when the output affects safety decisions, legal obligations, financial authority (SOD), or official audit sign-off. Use AI to prepare — always let the expert decide.

> [!IMPORTANT]
> **AI is a tool — not a replacement for your expertise.** Your judgment, your experience with Vopak operations, and your professional accountability are what make the output valuable. Gemini makes you faster; it does not make you redundant.

---

## 📘 M2 · The Flow Forward Vision (10 min)

> **Standalone:** ✅ Yes · 10 min · No prerequisites · Always pair with M1
> **Deliverable:** The "why" — a personally relevant reason to invest time in this.

**Facilitator Notes:**

- Start with high energy. AI is not here to replace them; it is here to augment them.
- Emphasize that this is an _Empowerment_ journey. The goal is "Flow State" working — removing friction from their day-to-day operations.
- **Critical:** This module must answer the question every person in the room is thinking: _"Why should I care?"_
- **Use real numbers.** The strategic data from "Shifting Gears" and Project Ascend makes the case unassailable.

### 1.1 "Day in the Life" — Why Should I Care? (3 min)

Open with **real** Vopak friction points — not hypotheticals:

> **Operations — The Shift Handover:**
> A Shift Supervisor spends 30 minutes writing a handover report: compiling PEPI throughput data, checking active Permits to Work, noting defeated safety-critical equipment, and formatting it for the incoming Operations Superintendent. Every shift. Every terminal. Globally.
>
> **With AI:** They type their shorthand field notes into Gemini: _"Structure this into a Daily Shift Handover Report with sections: Safety Incidents, Equipment Status, Active PtWs, and Pending Maintenance."_ Done in 90 seconds.

> **Finance — The Month-End Close:**
> A Treasury analyst manually reconciles 15-20 Cash Flow Forecasts from global BUs, cross-checking naming conventions between Oracle ERP, SharePoint, and email threads. This takes days every single month.
>
> **With AI:** They upload two CFF files into Gemini and type: _"Compare these two files line by line. Flag naming inconsistencies, formatting errors, and any variance above 5%."_ Done in 2 minutes.

**The ask:** _"What's YOUR shift handover? What's YOUR month-end close? Every department has one. That's what we're here to fix."_

### 1.2 Your Career Superpower

AI skills are **the** professional advantage of this decade. The people who learn these tools become:

- The go-to person on their team
- The one who finishes in 2 hours what used to take a full day
- The one who gets asked "How did you do that?"

> _"The more you invest in this skill, the more valuable you become — to the team, to the company, and to your own career."_

### 1.3 The Strategic Context — Why Vopak Is Investing in This

This isn't just a training initiative. It's part of **Shifting Gears towards 2030**:

- Vopak is investing **EUR 4 billion** in core gas infrastructure and New Energies (hydrogen, ammonia, SAF) by 2030
- FY2025 net profit increased **61%** to EUR 604 million
- **Project Ascend** (our AI transformation) projects a **292% ROI** with a **23-month payback period**
- Internal analysis shows knowledge workers spend up to **30% of their day searching for information** scattered across Oracle, Google Drive, and SharePoint

> _"Every hour you save with AI is an hour you can spend on the strategic work that actually drives Vopak forward."_

### 1.4 The Real KPI

Our goal isn't just "using Gemini." Our goal is **Skill Expansion** — doing completely new types of analytical or creative actions that were previously impossible or too time-consuming.

### 1.5 The Commitment

The organization provides the license and the training; the employee provides the curiosity and the willingness to experiment. It's a partnership.

---

## 🛡️ M3 · Security & Guardrails (15 min)

> **Standalone:** ⚠️ Needs M1 for context · 20 min (incl. brief Q&A) · **Always run before any practice**
> **Deliverable:** Clear rules of engagement — what they can and must never do with AI at Vopak.

> [!CAUTION]
> This is the most critical section of Phase 1. Employees must understand that Gemini is a powerful tool, but they are absolutely accountable for the output.

### 2.1 The Zero Trust Paradigm

- **No PII:** Never input Personally Identifiable Information (external customer names, employee salaries, medical data).
- **No Source Secrets:** Never paste raw API keys, passwords, or critical security vulnerabilities.
- **Vopak Data Boundaries:** Differentiate between Gemini Web (Enterprise Data Protection enabled) and public consumer tools. _Our data is not used to train the public model._

### 2.2 The Limits of the Machine

- **Data Cutoffs:** Explain that base models have a knowledge cutoff date. If they need real-time data, they must use the Google Workspace integration (`@Google Drive`, `@Docs`) to ground the AI in live Vopak context.
- **Hallucinations:** AI is designed to sound confident, even when wrong. **Trust but Verify.**
- **The Financial/Legal Guardrail:** AI does not perform official auditing or legally binding approval workflows. All high-stakes output (contracts, budget approvals, safety procedures) _must_ be validated by a qualified human expert.

### 2.3 Vopak's AI Principles

- **Trustworthy:** Outputs are checked and verified.
- **Collaborative:** AI acts as a co-pilot, not an autopilot.
- **Courageous:** Don't be afraid to push the tool to its limits in a safe environment.

> [!CAUTION]
> **The Safety Double-Check Rule (SHEQ & Operations):** For any output that touches safety procedures, Permit to Work requirements, incident classification, or emergency response steps — **always verify the AI response against the primary source document before acting**. AI hallucinations in safety-critical contexts are not an inconvenience — they are an operational hazard. Treat Gemini's safety-related output as a first draft, never as a final authority.

---

## 🧠 M4 · The PTCF Prompting Framework (35 min incl. practice)

> **Standalone:** ✅ Yes · 35 min · Requires M3 (security guardrails first) · **The single most important module in the programme**
> **Deliverable:** A universal prompting formula participants can apply the moment they get back to their desk.

**Facilitator Notes:**

- Most beginners treat AI like a Google Search ("Find me X"). We need to train them to treat AI like a smart intern. They need to give it a role, a clear job, context, and a desired output format.

### The Formula: [Persona] + [Task] + [Context] + [Format]

| Element          | Concept                                                                        | Example                                                                                |
| :--------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **1. [Persona]** | Give the AI a role. This changes the vocabulary and perspective of the output. | "Act as a strict Vopak SHEQ Auditor." / "Act as a Forensic Project Manager."           |
| **2. [Task]**    | The specific action you need performed. Use strong verbs.                      | "Cross-reference these two documents to find conflicts." / "Perform a 5-Why analysis." |
| **3. [Context]** | The background information or specific documents the AI needs.                 | "Analyze the attached SOP. We are dealing with a highly aggressive supplier."          |
| **4. [Format]**  | How you want the information presented.                                        | "Present in a 3-column table." / "Write as a numbered list with bold headings."        |

---

> **Branded Terminology Reminder (Comm/PR & all departments):** When using the PTCF framework for any external communication — customer emails, press releases, regulatory submissions — ensure the Persona and Format elements are aligned with the [Vopak Glossary](../training/vopak_glossary.md). Vopak's voice: **Trustworthy, Collaborative, Courageous.** AI-drafted text should always be reviewed for tone before it goes to an external audience.

## 💻 M5 · Live Demo: The Difference (15 min)

> **Standalone:** ⚠️ Only meaningful after M4 · 15 min
> **Deliverable:** Direct visual proof that better prompts produce dramatically better results.

**Facilitator Action:** Screen share Gemini in Google Workspace (the "Ask Gemini" side panel) or Gemini Web App.

### 4.1 Demo 1: The Bad Prompt

- **Input:** "Write an email about the new safety rule for tank 405."
- **Result:** Generic, likely inaccurate, wrong tone. No context, no guardrails.
- **Why it failed:** The AI had to guess what tone to use, what the rule was, and how to format it.

### 4.2 Demo 2: The PTCF Master Prompt

- **Input:**
  > "(Persona) Act as the Terminal Manager for BU Netherlands.
  > (Task) Draft an urgent update email to the shift supervisors.
  > (Context) We have a new mandatory safety rule requiring Level 3 PPE when handling new product HMD near Tank 405 due to recent gasket issues.
  > (Format) Make the email short, authoritative, and include a bulleted list of the exact PPE required."
- **Result:** Highly specific, ready-to-send, accurate tone.
- **Why it worked:** Giving the AI boundaries forces it to be accurate.

### 4.3 Departmental Quick-Fire

_Show one quick PTCF prompt per department audience to prove relevance across all functions:_

- **Commercial:** "(Persona) Head of Commercial. (Task) Draft a prospect email. (Context) Competing against lower-cost competitor, value is safety. (Format) Persuasive tone, 3 bullets."
- **Engineering:** "(Persona) Forensic Project Manager. (Task) Identify top 3 risks. (Context) Tank 405 conversion. (Format) Risk register table."
- **Finance:** "(Persona) Treasury Analyst. (Task) Summarize key variances. (Context) CFF reconciliation, two files attached. (Format) Table with columns: BU | Variance | Root Cause | Action Required."

> **Facilitator note:** Quick-fire should feel fast and surprising. One prompt per department, under 1 minute each. Pick the ones relevant to the audience in the room.

---

## 🔄 The Learning Curve — "The Dip" (2 min)

> Add this slide right before the closing to set realistic expectations.

**Key message:**

> "The first 2 weeks of using AI will feel slower. You'll write bad prompts. The AI will give you weird results. **This is normal.** It's like learning to drive — the first few lessons are uncomfortable. After week 3, you'll never want to go back."

**Why this matters:** Most people try AI once, get a generic or wrong result, and conclude "AI doesn't work for my job." This section normalizes the learning curve and prevents early dropouts.

---

## 🎯 Closing & Next Steps

1. **Provide the Quick-Start Guide:** Distribute a 1-page PDF summarizing the PTCF framework and the Core Security Guardrails.
2. **Homework (Pre-Work for Phase 2):** Ask employees to log their top 3 most repetitive or frustrating daily tasks and bring that list to Phase 2 (Core Tools Deep Dive).
3. **Survey:** Send a brief feedback survey. Include the question: _"What holds you back from using AI more?"_ with options: "I don't know what to ask it", "I'm not confident in what to ask", "I don't trust the output", "I don't have time to learn".
