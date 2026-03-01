# SHEQ — Prompt Examples (Phase 2)

> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../training/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"Summarize this incident report in 3 key takeaways."** — Paste any report. Instant executive brief.
2. **"Write a 2-sentence safety reminder about PPE for a morning toolbox talk."** — Ready to read aloud to the team.
3. **"What should a risk assessment for working at heights include?"** — Get a checklist from general best practice.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: Near-Miss Incident Structuring (Docs)

Open Google Docs. Paste raw, unstructured witness statements from a simulated near-miss event.

> **Prompt:** "Act as a Vopak SHEQ Investigator. Structure these fragmented field notes and witness statements into a formal incident report compliant with the 'Vopak Major Incident Format.' Sections: (1) What happened (timeline), (2) Who was involved, (3) Root cause analysis (using 5-Why method), (4) Immediate corrective actions taken, (5) Recommended preventative measures, (6) HiPo (High Potential) classification: Yes/No with justification. Cross-reference any mechanical failures against Maximo preventive maintenance codes."

### Exercise 2: Permit to Work Compliance Check (Sheets)

Open Google Sheets with a list of active work permits.

> **Prompt:** "Act as a Vopak SHEQ Auditor. Analyze this Permit to Work (PtW) log and flag: (1) any permits for Zone 1 work where continuous LEL monitoring is not documented (LEL must be <10% before work starts), (2) permits expired or expiring within 24 hours without renewal, (3) high-risk activities (hot work, confined space) without a completed LMRA (Last Minute Risk Assessment), (4) permits with missing signatures or approvals. Flag each in a new column with status: Compliant / Needs Action / Expired / Critical Stop."

### Exercise 3: Safety Communication (Gmail)

> **Prompt:** "Act as the SHEQ Manager. Draft an urgent safety alert email to all terminal staff about a HiPo near-miss: a dropped object from height during scaffold dismantling near Tank Farm B. Include: what happened (factual, 3 sentences), the root cause (preliminary), the immediate corrective action (work stop on all scaffold activities pending re-inspection), and 3 specific safety reminders referencing the LMRA process. Tone: serious but not alarmist. Reference the Terminal Health Assessment (THA) standard for dropped object prevention."

---

## Gemini Web App — Advanced Analysis

### Exercise 4: Procedure Gap Analysis

Upload an existing SOP and the relevant Safety Data Sheet.

> **Prompt:** "Compare this Standard Operating Procedure against the Safety Data Sheet requirements. Identify any safety requirements in the SDS that are NOT addressed in the SOP. Present as a gap analysis table: SDS Requirement | Current SOP Coverage | Gap | Recommended Addition."

---

## NotebookLM — Document Synthesis

### Exercise 5: Multi-Report Trend Analysis

Upload current and previous SHEQ quarterly reports.

> **Prompt:** "Compare these two SHEQ reports. What are the top 3 areas of improvement and top 3 areas of decline? Cite specific data points from each report. Identify any recurring incident types that need targeted intervention."
