# M10 — Gems (Build Your AI Colleague): Curriculum

> **Module:** M10 · **Duration:** 120 min net content (incl. practice) · **Standalone:** ✅ Yes (half-day)  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase3_automate_build.md](../../phases/phase3_automate_build.md)  
> **Prerequisites:** M4 (TCF Framework). M6–M9 recommended but not required.  
> **What they leave with:** 2 working Gems — 1 guided build, 1 department-specific.

---

## Part A: What is a Gem? (70 min = 40 min instruction + 30 min practice)

### The Problem Gems Solve (5 min)

> Every time you use Gemini, you brief it from scratch. A Gem is a colleague you **onboard once** — it remembers the role, tone, rules, and context forever.

- **Analogy:** Hiring a specialist vs. briefing a temp every day.
- The "Blank Page Problem" — most people stare at the prompt box unsure where to start. Gems eliminate this.
- Gems pre-load **P**ersona + Persona + Task + Context + Format — permanently.

### Live Comparison: With vs Without a Gem (10 min)

**Without a Gem:** Open plain Gemini, attach a document, type:

> "Create a report from this document."  
> → Generic, wrong tone, missing structure.

**With a Gem:** Open the same Gem, attach the same document, type:

> "Create a report with the attached doc."  
> → Perfect format, correct tone, executive summary, action items table.

**Why:** The Gem already has the Persona, Task, Context, and Format. The user only provides the data.

### Anatomy of a Great Gem (5 min)

| Component                 | What it does                                       | Example                                                                                                  |
| :------------------------ | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Name**                  | Identity                                           | "Contract Red-Flag Scanner"                                                                              |
| **System Instructions**   | The hardcoded brain — persona, rules, tone, format | "You are a senior contract analyst at Vopak. Flag payment terms > 30 days. Respond in a markdown table." |
| **Knowledge Base**        | Grounding files — PDFs, Docs, Sheets               | 2026 Pricing Matrix, Standard T&Cs                                                                       |
| **Conversation Starters** | Quick-launch prompts                               | "Analyze this contract for red flags"                                                                    |

### Gem Demo Gallery (20 min)

Facilitator demos 4 pre-built Gems, from simple to complex:

**Demo 1: Tone Translator (3 min)**

- "Rewrite any text to reflect Vopak's values: Trustworthy, Collaborative, Courageous."
- Test: Paste a blunt email → professional output in seconds.

**Demo 2: Meeting Summary Machine (5 min)**

- "Summarize raw meeting notes into: Purpose, Key Decisions, Action Items table, Open Questions."
- Test: Paste messy notes → structured board-ready summary.

**Demo 3: Email Draft Assistant (5 min)**

- "Draft professional emails from bullet points. Vopak tone. Subject line. Sign off 'Kind regards.'"
- Test: 3 bullet points → polished email.

**Demo 4: Contract Red-Flag Scanner (7 min)**

- Grounded with T&Cs document.
- "Analyze contracts against Vopak Standard T&Cs. Flag: Clause | Our Standard | Risk Level."
- Test: Paste contract excerpt → flagged risks with exact T&C citations.

### Practice A: Build Your First Gem (30 min)

**Guided (15 min):** Build the **"Meeting Summary Machine"** together:

1. Open gemini.google.com → Gem Manager → New Gem
2. **Name:** "Meeting Summary Machine"
3. **System Instructions:**

```
You are an executive assistant at Vopak.
When given raw meeting notes, produce a structured summary:
1. Meeting Purpose (1 sentence)
2. Key Decisions (numbered list)
3. Action Items (table: Owner | Action | Deadline)
4. Open Questions (if any)

Rules:
- Maximum 1 page
- Clear, professional language
- Flag action items without a deadline as "⚠️ No deadline set"
```

4. Test with sample notes → iterate.

**Solo (15 min):** Build your own Gem. At minimum: 5 lines of System Instructions + 1 Conversation Starter.

---

## Part B: Advanced Gems (75 min = 30 min instruction + 45 min practice)

### 2.1 Grounding with Knowledge (10 min)

Attach files so your Gem **never hallucinates** about company data.

- **Direct file upload:** Up to 10 files per Gem.
- **The "Super Grounding" method (NotebookLM Integration):**
  1. Create a Notebook in NotebookLM. Upload up to 300 sources.
  2. Copy the notebook URL → paste into a Google Doc → save as "Department Knowledge Base Source."
  3. Upload that Google Doc to the Gem's Knowledge Base.
  4. Your Gem now reasons across all 300 sources, with citations.

### 2.2 Sharing & Team Gems (10 min)

- Share a Gem via link — team members get it in their own Gem Manager.
- **Best practice:** 3–5 shared Gems per team for the most repetitive tasks.
- **Governance:** Team lead reviews Instructions before wide distribution.

> **📌 Audit Department:** Before an Audit team Gem is promoted to shared/official, an Audit lead must formally review and sign off the **System Instructions logic**. If the criteria are wrong, every output is wrong. This is a professional accountability requirement.

### 2.3 The Gem Architect (10 min)

A meta-Gem that writes System Instructions for other Gems.

**Demo:** "Help me create a Gem for a Procurement Manager who compares vendor quotes. Extract pricing, delivery timelines, and warranty terms from uploaded PDFs into a comparison table."

> **🔁 Prompt Maintenance Reminder:** Build a habit of **testing your Gems every 6 months** during the CoE's bi-annual Gem Audit. If outputs feel less accurate after a model update, revisit and tighten the System Instructions.

### Practice B: Build Your Department Gem — Solo (45 min)

Requirements:

1. **System Instructions** — min 10 lines (persona, rules, format)
2. **Knowledge Base** — attach at least 1 real work document
3. **Test** — 3 different prompts, iterate until satisfied
4. **Share** — post the link in the workshop Chat space

> **Facilitator tip:** Walk the room actively. Most common issue: instructions too vague. Fix: "Add more rules."

---

## Gem Showcase — Pre-Lunch (15 min)

3 volunteers, 2 minutes each:

1. Show what your Gem does
2. Give it a live test prompt
3. Answer: "Who on your team would use this, and how often?"

---

## Gem Governance Summary

| Type             | Process                                                      |
| :--------------- | :----------------------------------------------------------- |
| Personal Gem     | Create freely; share via link; update anytime                |
| Team Gem         | Team lead reviews Instructions; shared via link              |
| Official CoE Gem | CoE review + audit sign-off required; bi-annual review cycle |
