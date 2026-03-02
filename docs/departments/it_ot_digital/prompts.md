# IT, OT & Digital Solutions — Prompt Examples (Phase 2)

> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../admin/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"Draft a change advisory email for a scheduled maintenance window this Saturday."** — Professional IT comms in seconds.
2. **"Summarize this IT support ticket log — what are the top 3 recurring issues?"** — Paste a data dump, get insights instantly.
3. **"Explain what an API integration is in simple terms for a non-technical colleague."** — Instant translation from tech to human.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: MyDocs API Error Diagnosis (Docs)

> **Prompt:** "Act as a Vopak IT Solutions Engineer investigating incident PRB0047569. Analyze this HAR (HTTP Archive) file extract showing intermittent API 400 errors when MyDocs attempts to migrate documents from 'Workflow' to 'Release' directories. For each error: (1) identify the likely root cause from the response headers, (2) determine if the failure is authentication, payload, or endpoint related, (3) suggest a remediation step. Format as an incident analysis table."

### Exercise 2: Security Incident Log Analysis (Sheets)

> **Prompt:** "Act as a Vopak Security Analyst reviewing incident INC0973773. Analyze this Google Workspace audit log export and identify: (1) all bulk download events exceeding 1,000 files in a 24-hour window, (2) the IP addresses and device IDs associated with each event, (3) any files classified as 'Confidential' — especially HAZOP reports, P&IDs, and crisis management plans. Flag events where the 'Drive - bulk download' alert should have fired but was blocked by the misconfigured Chat space (alert-space.personal@vopak.com). Present as a forensic timeline."

### Exercise 3: Change Advisory Communication (Gmail)

> **Prompt:** "Draft a change advisory notification email to all terminal IT coordinators about a planned maintenance window for the OT network. Include: date/time (Saturday 02:00-06:00 CET), affected systems (SCADA, ATG dashboards, IS-Safe tablet sync), expected impact (read-only mode during maintenance), rollback plan, and the on-call engineer's contact. Reference ServiceNow ticket CHG0045892. Tone: clear, technical, professional."

---

## Gemini Web App — Advanced Analysis

### Exercise 4: Technology Roadmap

> **Prompt:** "Draft a 12-month technology roadmap for deploying AI capabilities across Vopak's terminal operations. Cover: Phase 1 (Security & Governance), Phase 2 (Pilot Deployments), Phase 3 (Scale). For each phase: objectives, key activities, success metrics, resource requirements."

---

## NotebookLM — Document Synthesis

### Exercise 5: Policy Alignment

Upload Vopak's IT Security Policy and the AI Acceptable Use Policy.

> **Prompt:** "Cross-reference these two policies. Identify any gaps where the AI Acceptable Use Policy doesn't address risks mentioned in the IT Security Policy. Also flag any contradictions between the two documents."
