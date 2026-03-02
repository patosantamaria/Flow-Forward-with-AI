# Audit — Prompt Examples (Phase 2)

> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../admin/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"List the top 5 items an internal auditor should check during a terminal visit."** — Instant checklist.
2. **"Summarize this audit report in 3 key findings and 1 recommendation."** — Paste any report, get the essentials.
3. **"Draft a short email requesting an extension on an audit deadline."** — Professional tone in 10 seconds.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: Google Vault Compliance Query (Docs)

> **Prompt:** "Act as a Vopak Internal Auditor preparing for a Singapore regulatory audit. Generate 5 complex, Boolean-heavy search queries for Google Vault that will locate: (1) all payroll-related documents for the past 5 years (required for CPF and IRAS compliance), (2) any emails containing 'termination' AND ('severance' OR 'settlement') sent by HR, (3) all documents with 'confidential' classification shared externally. For each query, explain: the syntax, expected result volume, and any retention policy concerns."

### Exercise 2: Permission Rot Analysis (Sheets)

Open Google Sheets with a sample Florbs external sharing report (CSV export).

> **Prompt:** "Act as a Vopak Compliance Officer. Analyze this Florbs external sharing report and identify: (1) files shared with vendor email addresses that haven't been accessed in 12+ months (stale permissions), (2) any files shared via 'Anyone with the link' — flag these as critical risk per the domain-wide policy change, (3) sensitive file types (HAZOP, P&ID, crisis management) shared externally. Prioritize by risk level and recommend: revoke immediately / review with owner / acceptable. Note: 'Anyone with the link' sharing grew from 206,000 files (2022) to 1 million (2024)."

### Exercise 3: Audit Finding Communication (Gmail)

> **Prompt:** "Act as a Senior Internal Auditor. Draft a formal audit finding email to the BU Director following a Terminal Health Assessment (THA). Structure: Finding Description (data retention gaps for Singapore operations), Risk Level (High — regulatory non-compliance), Evidence (Google Vault retention policies do not guarantee 5-year access to payroll records), Root Cause (ambiguous global retention policy definitions), Recommended Corrective Action (implement region-specific Vault retention rules within 60 days), Deadline. Tone: objective, factual, professional."

---

## NotebookLM — Document Synthesis

### Exercise 4: Policy Compliance Check

Upload company policies and recent operational reports.

> **Prompt:** "Cross-reference these operational reports against the company policies. Identify any activities described in the reports that deviate from stated policy. Cite specific clauses from both documents."
