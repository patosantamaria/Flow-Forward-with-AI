# M3 — Security & Zero Trust: Curriculum

> **Module:** M3 · **Duration:** 20 min (incl. brief Q&A) · **Standalone:** ⚠️ Needs M1 · **Must always run before any practice**  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase1_foundation_ethics.md](../../phases/phase1_foundation_ethics.md)

---

## Learning Objective

Every participant understands the non-negotiable rules of engagement for AI at Vopak — what they can and must never share, and why the enterprise version is safe to use.

> [!CAUTION]
> This is the most critical section of Phase 1. Employees must understand that Gemini is a powerful tool, but they are absolutely accountable for the output.

---

## 2.1 The Zero Trust Paradigm

- **No PII:** Never input Personally Identifiable Information (external customer names, employee salaries, medical data).
- **No Source Secrets:** Never paste raw API keys, passwords, or critical security vulnerabilities.
- **Vopak Data Boundaries:** Differentiate between Gemini (Enterprise Data Protection enabled via Vopak account) and public consumer tools. _Our data is not used to train the public model._

---

## 2.2 The Limits of the Machine

- **Data Cutoffs:** Base models have a knowledge cutoff date. For real-time Vopak data, use the Google Workspace integration (`@Google Drive`, `@Docs`) to ground the AI in live context.
- **Hallucinations:** AI is designed to sound confident, even when wrong. **Trust but Verify.**
- **The Financial/Legal Guardrail:** AI does not perform official auditing or legally binding approval workflows. All high-stakes output (contracts, budget approvals, safety procedures) _must_ be validated by a qualified human expert.

---

## 2.3 Vopak's AI Principles

- **Trustworthy:** Outputs are checked and verified before use.
- **Collaborative:** AI acts as a co-pilot, not an autopilot.
- **Courageous:** Don't be afraid to push the tool to its limits in a safe environment.

---

## 2.4 The Safety Double-Check Rule

> [!CAUTION]
> **For SHEQ & Operations:** For any output that touches safety procedures, Permit to Work requirements, incident classification, or emergency response steps — **always verify the AI response against the primary source document before acting**. AI hallucinations in safety-critical contexts are not an inconvenience — they are an operational hazard. Treat Gemini's safety-related output as a first draft, never as a final authority.

---

## Facilitator Notes

- Always adapt the PII examples to the audience — Finance data examples for Finance, SHEQ incident data for Operations.
- Consider showing a real hallucination live: ask Gemini a specific Vopak internal number and let it fabricate an answer. That moment sticks.
- Tone for this module: matter-of-fact, not alarmist. "Here are the rules. They exist for your protection."
