# 🎯 Day 2 — Trainer Tips & Tailoring Guide

## Tuesday: IT/Digital + Engineering + Ops + HR (11 pax)

---

## Audience Read

This is your **most technically sharp group**. Engineers and IT professionals will challenge vague claims, want to understand how things work, and get bored with theory quickly. They'll ask about model architecture, hallucination rates, and API access. Have answers ready — or be honest when you don't know.

**Key personalities to watch for:**

- **The "I've already used it" person** — Likely 1-2 from IT/Digital (Mohit, Shaoqun) who've already experimented with Gemini or ChatGPT. Don't bore them with basics. Acknowledge their experience early: "Some of you have already started — great. Today we're going to sharpen your skills."
- **The Sceptical Engineer** — Engineers trust data, not demos. The PTCF comparison (bad vs good prompt) is your proof point. Show the before/after side by side. Let the output quality speak for itself.
- **Shao Kwan Kiat (BCSS GM)** and **Kelvin Leong (Stock Con)** — Senior operational roles. They'll want to see practical terminal applications, not corporate strategy slides.

---

## Phase 1 Tailoring

### 🌍 The Bigger Picture — MUST deliver in M1

**This is a BU Singapore requirement.** Before moving into M2, set the broader AI context:

> "What we cover today is the foundation — but AI is much bigger. Agentic AI, autonomous monitoring, self-healing systems — that's where the industry is heading. Today gets you ready."

**For Engineering/IT, anchor it technically:**

> "Imagine an AI agent that monitors your SCADA data 24/7, detects anomalies, generates the incident ticket, and drafts the root cause analysis — all before you've finished your coffee. That's agentic AI. Today, we learn to prompt. Tomorrow, we build agents."

### M1: GenAI Foundations — Go Slightly Deeper

**This group can handle more technical detail.** Spend 30 extra seconds on:

> "Gemini is a Large Language Model — a transformer architecture trained on text, code, and multimodal data. It predicts the most likely next token based on context. That's why Context in PTCF matters so much — you're literally changing the probability distribution of its output."

**Don't go TOO deep** — you're not here to teach ML. But acknowledge that some of them understand the tech:

> "I know some of you could teach this section better than me. What I'm here to show you is the practical application — how to get this thing to produce useful work in your actual job, today."

### M2: Flow Forward Vision — Frame as Engineering Problem

**Don't say:**

> "AI is exciting and transformative"

**Say:**

> "AI is a tool. Like any tool, it's only as good as how you use it. A badly configured PLC is dangerous. A badly prompted AI is useless. Today I'm going to show you how to configure this tool properly."

Engineers respect precision and honesty. Don't oversell.

**The "Day in the Life" for this group should feel like THEIR problems:**

> "You get a 45-page Statement of Work from a vendor. You need to find the scope gaps, the vague deliverables, and the clauses that don't match your standard project governance. Normally, this takes a senior engineer 2-3 hours of careful reading. Today, I'll show you how to do a first-pass review in 5 minutes."

### M3: Security — Emphasise OT/IT Boundaries

**This group needs the strongest security message:**

> "I need to be absolutely clear: never share SCADA screenshots, DCS configurations, PLC code, API keys, passwords, or network diagrams with any AI tool. Enterprise protection means your prompts aren't used for training, but the principle of data minimisation still applies. If it doesn't need to be in the prompt, don't include it."

**IT-specific addition:**

> "For IT: you can use Gemini to help debug code, review configurations, and draft documentation. But authentication credentials, database connection strings, and infrastructure topology should never be in a prompt. Use placeholders: HOSTNAME, DB_PASS, API_KEY."

### M4: PTCF — Use Technical Analogies

**Replace the "Bad Briefing" game with a technical version:**

> Say: "Debug this code."
> Wait. They'll immediately ask: "What language? What error? What's it supposed to do? What have you tried?"
> "You just wrote a PTCF prompt. Same thing."

**Or for Engineers:**

> Say: "Review this document."
> They'll ask: "What document? What standard are we reviewing against? What's the scope?"
> "That's PTCF. Persona, Task, Context, Format."

---

## Pacing Notes

| Module | Standard Time | Day 2 Adjustment  | Why                                                          |
| :----- | :------------ | :---------------- | :----------------------------------------------------------- |
| M1     | 15 min        | 12 min — trim     | They'll get it fast. Don't belabour basics.                  |
| M2     | 15 min        | 12 min — trim     | "Day in the Life" should land quickly with concrete examples |
| M3     | 15 min        | 15 min — full     | Security needs full coverage for this group                  |
| M4     | 25 min        | 25 min — standard | Technical PTCF comparison is your strongest demo             |
| M5-M6  | Standard      | Standard          | Hit the SoW review demo hard in M6                           |
| M7     | 35 min        | 40 min — extend   | Give extra time for the Web App — this is their power tool   |

---

## Energy Management

**Morning:** This group starts focused and stays focused. No energy problems. Don't add unnecessary warmth — they prefer efficiency.

**Post-lunch:** The Mobile demo (M8) is less of a showstopper for IT people (they've seen phone apps). Keep it brisk. Emphasise the voice-to-structured-data angle — that's genuinely useful for field engineers.

**Capstone:** The "Risk Radar" capstone will appeal to their analytical nature. Frame it as a stress-test, not a "fun challenge." Engineers take stress-tests seriously.

---

## Common Questions from Technical Groups

| Question                                          | Recommended Response                                                                                                                                                                                                                                                              |
| :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "What model is this? What's the parameter count?" | "Gemini 2.0 — Google's most capable model. Google doesn't publish exact parameter counts, but it benchmarks at the top across reasoning, code, and multimodal tasks."                                                                                                             |
| "Can we access the API?"                          | "Gemini API is available through Google Cloud. For now, we're focused on the Workspace-integrated tools because they're available to everyone without API setup. Phase 3 covers more advanced integration."                                                                       |
| "What about hallucinations?"                      | "All LLMs hallucinate. That's why NotebookLM is so useful — it grounds answers in your documents with source citations. For critical work, always verify. AI gives you a first draft, not a final answer."                                                                        |
| "Can it handle code?"                             | "Yes. Gemini handles Python, JavaScript, SQL, and more. But never paste credentials or infrastructure details. Use placeholders."                                                                                                                                                 |
| "Is this better than ChatGPT?"                    | "They're different tools with different strengths. Gemini's advantage for us is native Workspace integration — it reads your Drive, your Gmail, your Sheets. ChatGPT can't do that in our enterprise environment. Use the tool the company provides and that protects your data." |

---

## Technical Credibility Tips

- **Know your limits.** If someone asks a deeply technical question you can't answer, say: "I don't know the technical detail on that, but I can find out." Engineers respect honesty far more than bluffing.
- **Show, don't tell.** Every claim should have a live demo. "AI can review documents" is a claim. Running the SoW review prompt live is proof.
- **Let them drive.** During practice, resist the urge to help too much. Engineers prefer to figure things out themselves. Walk around but stay quiet unless asked.
- **Acknowledge prior experience.** "Some of you have experimented with AI tools already. Today is about sharpening that into professional-grade skill."

---

## What "Great" Looks Like for This Day

- [ ] The SoW review demo produces a genuinely useful first-pass analysis (this builds trust)
- [ ] At least 2 engineers say "I didn't expect it to catch that"
- [ ] IT people see the Workspace integration advantage over consumer tools
- [ ] Nobody falls asleep during M1 (keep it short for this group)
- [ ] The capstone produces risk analyses with real engineering rigour
- [ ] You handle at least one "gotcha" question with honesty and earn respect
