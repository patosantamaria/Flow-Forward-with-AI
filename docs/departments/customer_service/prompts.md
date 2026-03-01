# Customer Service — Prompt Examples (Phase 2)

> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../training/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"Draft a polite reply to this customer complaint."** — Paste the complaint, get an empathetic response in 10 seconds.
2. **"Summarize this email thread in 3 bullets — what does the customer actually need?"** — Cut through the noise instantly.
3. **"Give me 5 ways to handle an angry customer who is asking for a discount."** — Instant de-escalation strategies.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: MSO Order Troubleshooting (Docs)

Open Google Docs. Paste a sample MyService Orders (MSO) error log.

> **Prompt:** "Act as a Vopak MyService Care Specialist. Analyze these MSO order processing errors. For each error: (1) identify the likely root cause (missing tolerance codes, ATG measurement mismatch, or data entry duplication), (2) suggest the correct reason code based on the movement type, (3) recommend whether the issue requires manual override or can be resolved in-system. Format as a troubleshooting log."

### Exercise 2: C2I Discrepancy Analysis (Sheets)

Open Google Sheets with sample Charge to Invoice (C2I) data.

> **Prompt:** "Act as a Customer Service Analyst. Review this C2I (Charge to Invoice) dataset and identify: (1) invoices where the automated charge differs from the manual calculation by more than 2%, (2) movements with missing measurement recordings that blocked the C2I workflow, (3) orders where concurrent movement values may have caused double-counting. Present discrepancies in a table with: Order ID | Expected Charge | Actual Charge | Variance | Root Cause."

### Exercise 3: Customer Communication — OVE Standard (Gmail)

> **Prompt:** "Act as a Vopak Customer Service Manager committed to the 'One Vopak Experience' (OVE) standard. Draft a professional response to a customer who is requesting an explanation for a demurrage charge incurred during vessel loading at our ARA terminal. Acknowledge their concern, explain how the charge is calculated based on manifold throughput rates, and offer to schedule a review call with the Terminal Operations team. Tone: empathetic, transparent, solution-oriented. Keep under 200 words."

---

## Gemini Web App — Advanced Analysis

### Exercise 4: Service Level Analysis

> **Prompt:** "Based on these response time metrics, identify which types of customer inquiries take the longest to resolve. Suggest 3 process improvements that could reduce average response time by 20%. Present as a recommendation memo."

---

## NotebookLM — Document Synthesis

### Exercise 5: Policy Quick Reference

Upload Vopak's Customer Service SLAs and escalation procedures.

> **Prompt:** "Create a quick-reference guide for customer service agents. For each type of inquiry (billing, scheduling, complaints, technical), list: the SLA response time, the escalation path, and the key contact person. Format as a single-page reference card."
