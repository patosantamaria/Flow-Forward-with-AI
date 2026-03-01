# M3 — Security & Zero Trust: Slide Outline

> **Module:** M3 · **Duration:** 20 min (incl. brief Q&A) · **Slides:** 6 · **Prerequisites:** M1  
> **Ref curriculum:** [phase1_foundation_ethics.md](../../phases/phase1_foundation_ethics.md#-m3--security--guardrails)

---

| Sl# | Title                                 | Core Message / Visual                                                                                                                                                                                                                                                               | Facilitator Script Cue                                                                                                                               | Duration |
| :-- | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| 1   | **Rules of the Road**                 | Visual: a dashboard with three big red stop signs. Rule 1: No PII. Rule 2: No Source Secrets. Rule 3: Use your Vopak account — always.                                                                                                                                              | "Before we touch any tool, we need to cover three non-negotiable rules. These protect you, your colleagues, and the company."                        | 3 min    |
| 2   | **What is PII? What are Secrets?**    | Two-column reference card. PII examples: employee names + salaries, customer passport data, health records. Secrets: API keys, system passwords, vulnerability details. Green column: "What IS safe" — anonymized data, public info, your own documents.                            | "The test: 'Would I be comfortable if this appeared in a public news article?' If not, don't paste it into any AI tool — including Gemini."          | 3 min    |
| 3   | **Enterprise vs Consumer AI**         | Side-by-side: Consumer Gemini (personal Google account) vs Enterprise Gemini for Workspace (Vopak account). Three ticks: prompts not used to train model, conversations not visible to Google, data stays within Vopak boundary. Visual: a "vault" icon around the Vopak Workspace. | "The tool at gemini.google.com logged in with your Vopak account IS enterprise protected. The exact same tool on a personal Gmail account IS NOT."   | 3 min    |
| 4   | **Trust But Verify — Hallucinations** | Bold headline: "AI is designed to sound confident — even when it's wrong." Three categories where AI fails: Made-up statistics, Outdated regulations, Fabricated citations. Visual: output with a caution badge.                                                                    | "Gemini never says 'I don't know.' It produces a plausible-sounding answer. Your job is always to verify before it reaches a stakeholder."           | 4 min    |
| 5   | **The SHEQ Double-Check Rule**        | Red-bordered callout box. Large bold text: "Safety output = First draft. Never final authority." Three icon steps: AI generates output → You compare against primary SOP → Expert signs off.                                                                                        | "If Gemini tells you about a permit requirement or an emergency procedure — go to the actual document. Always. No exceptions. This is not optional." | 3 min    |
| 6   | **Vopak's AI Principles**             | Three branded principle cards with Vopak cyan accents: 🔒 Trustworthy (verify outputs), 🤝 Collaborative (AI as co-pilot, not autopilot), 💡 Courageous (experiment safely).                                                                                                        | "These three principles guide how we use AI at Vopak. Keep them in mind every time you open Gemini."                                                 | 4 min    |

---

## Slide Notes

- **Slide 2:** Always adapt the PII examples to the audience — use Finance data examples for Finance, SHEQ incident data for Operations.
- **Slide 4:** Show a real hallucination example if possible (e.g., ask Gemini a very specific Vopak internal number and show how it fabricates a response).
- **Slide 5:** This slide is mandatory for SHEQ, Operations, and Maintenance audiences. Never skip it.
- **M3 must always precede any hands-on practice.** If running a short session, compress slide 6 to 1 minute but never remove slide 5.
