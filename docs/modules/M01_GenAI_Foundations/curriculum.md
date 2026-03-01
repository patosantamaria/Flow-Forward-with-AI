# M1 — GenAI Foundations: Curriculum

> **Module:** M1 · **Duration:** 15 min · **Standalone:** ✅ Yes · No prerequisites  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase1_foundation_ethics.md](../../phases/phase1_foundation_ethics.md)

---

## Learning Objective

Build shared vocabulary. Every participant understands what kind of AI engine is under the hood before they touch any tool.

---

## 0.1 What Is Artificial Intelligence? (3 min)

**The simple version:**

> AI is software that learns from data to perform tasks that used to require human intelligence — like reading text, recognizing images, translating languages, and generating new content.

**The progression that matters:**

| Era                  | What machines could do                       | Example                           |
| :------------------- | :------------------------------------------- | :-------------------------------- |
| **Rule-based**       | Only what a programmer explicitly coded      | "If invoice > €500K, flag it"     |
| **Machine Learning** | Learn patterns from data to make predictions | "This email looks like spam"      |
| **Deep Learning**    | Recognize complex patterns (images, voice)   | Face recognition, speech-to-text  |
| **Generative AI**    | _Create_ new content from a prompt           | Write an email, generate a report |

**The key shift:** Traditional software follows instructions written in advance. Generative AI responds to what you ask _right now_, in natural language.

> "You don't need to learn a programming language. You already know the interface — it's called English."

---

## 0.2 What Is Generative AI Specifically? (3 min)

Generative AI (GenAI) is a category of AI that can **create** — not just analyze or classify.

| Input you give | Output it creates                         |
| :------------- | :---------------------------------------- |
| A question     | A written answer, explanation, or summary |
| A document     | A structured report, action items         |
| Raw data       | A formatted table, an email               |
| An image       | A description, categorization, analysis   |
| Voice          | A transcription, a structured report      |

**The large language model (LLM) in plain language:**  
Gemini is trained on a massive amount of text and learned the patterns of language well enough to produce coherent, contextually accurate responses. It has "read" more than any human ever could, and can synthesize that knowledge on demand.

**It doesn't "know" things the way you do.** It predicts the most likely helpful response based on patterns. This is why verification matters — which is exactly why Zero Trust (M3) comes immediately after.

---

## 0.3 What Is Gemini — and What Does Vopak Have Access To? (5 min)

**Gemini** is Google's family of AI models, built into the Google Workspace tools you already use every day at Vopak.

| Tool                    | What it is                                                                          | Where you find it                                                  |
| :---------------------- | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Gemini in Workspace** | The "Ask Gemini" side panel inside Docs, Gmail, Sheets, Drive                       | ✨ sparkle icon in any Workspace app                               |
| **Gemini Web App**      | The standalone chat interface — for heavy analysis, file uploads, complex reasoning | [gemini.google.com](https://gemini.google.com)                     |
| **NotebookLM**          | A research workspace grounded exclusively in documents **you** upload               | [notebooklm.google.com](https://notebooklm.google.com)             |
| **Workspace Studio**    | No-code personal automation — describe a flow, Studio builds and runs it            | [studio.workspace.google.com](https://studio.workspace.google.com) |

**Critical — Enterprise Data Protection:**  
Vopak uses **Gemini for Google Workspace** — the enterprise-licensed version.

- ✅ Your prompts and data are **not used to train the public model**
- ✅ Your conversations are **not visible to Google employees**
- ✅ Data stays within Vopak's Google Workspace boundary

This is fundamentally different from using AI tools on personal accounts. **Always use the tools through your Vopak Google account.**

---

## 0.4 What Gemini Is Good At — and What It Is Not (4 min)

**The Smart Intern mental model:**

> Gemini is like an extremely well-read intern who has absorbed everything in the world's libraries and can write and reason at a high level — but has never worked at Vopak, doesn't know your specific processes, and absolutely needs you to fact-check their work before it goes to a stakeholder.

| Gemini is great at ✅                       | Gemini is not good at ❌                        |
| :------------------------------------------ | :---------------------------------------------- |
| Summarizing, structuring, formatting text   | Real-time or live data (past its training date) |
| Drafting emails, reports, and presentations | Making legally binding decisions                |
| Analyzing documents you upload              | Consistently accurate numerical calculations    |
| Comparing documents and finding conflicts   | Replacing expert review of safety procedures    |
| Translating, rephrasing, changing tone      | Knowing Vopak's specific process unless told    |
| Brainstorming, generating options           | Being 100% right, 100% of the time              |

> **The seatbelt rule:** AI is the engine. You are the driver. Always verify before you send.

> [!IMPORTANT]
> **AI is a tool — not a replacement for your expertise.** Your judgment, your experience with Vopak operations, and your professional accountability are what make the output valuable. Gemini makes you faster; it does not make you redundant.
