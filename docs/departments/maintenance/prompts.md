# Maintenance — Prompt Examples (Phase 2)

> **Track D: SUSTAIN** | Use these prompts during the Phase 2 Guided Practice session.
> 💡 Ground your prompts with precise Vopak terminology: [Vopak Glossary](../../training/vopak_glossary.md)

---

## ⚡ Starter Prompts (60-second wins — try these first!)

> These require zero setup. Just open Gemini and type. Perfect for your first day.

1. **"List the most common root causes of pump failures in industrial terminals."** — Instant troubleshooting checklist.
2. **"Draft a short work order summary for a valve replacement on Tank 12."** — Professional write-up in seconds.
3. **"Summarize this maintenance report in 3 bullets."** — Paste any report, get the key points instantly.

---

## Gemini in Workspace — Guided Practice

### Exercise 1: Maximo Work Order Analysis (Docs)

Open Google Docs. Paste a batch of maintenance work order summaries.

> **Prompt:** "Act as a Vopak Maintenance Reliability Engineer. Analyze these Maximo CMMS work orders and identify: (1) orders open longer than 90 days that are blocking the PDCA (Plan-Do-Check-Act) cycle, (2) recurring failure patterns for the same equipment tag, (3) preventive maintenance tasks overdue by more than 2 weeks. Group findings by equipment type and prioritize by safety criticality. Format as an action plan."

### Exercise 2: RBI Inspection Planning (Sheets)

Open Google Sheets with sample inspection data.

> **Prompt:** "Act as a Vopak Asset Integrity Engineer. Review this Risk Based Inspection (RBI) dataset and flag: (1) tanks where cathodic protection voltage has been insufficient for 3+ consecutive months (similar to Tank T-112 finding), (2) secondary containment zones showing coating failure indicators, (3) any equipment approaching its API 574 / EEMUA 159 inspection deadline within 60 days. Present as a 3YMP (3-Year Maintenance Plan) priority table with columns: Asset ID | Issue | Standard Reference | Risk Level | Recommended Action."

### Exercise 3: Maintenance Communication (Gmail)

> **Prompt:** "Act as the Maintenance Superintendent. Draft an email to the Terminal Manager requesting emergency budget allocation for accelerated coating repair in Tank Farm B secondary containment. Reference the recent Level 1 non-conformance findings from the Asset Integrity Audit (Q3 2025) showing visual signs of disbonding. Include: scope of work, estimated cost, safety justification, and proposed timeline. Tone: urgent, factual, safety-first."

---

## Gemini Web App — Advanced Analysis

### Exercise 4: 5-Why Root Cause Analysis

> **Prompt:** "Act as a Reliability Engineer. Perform a 5-Why analysis on this valve leak. Context: Valve A on Tank 405 leaked during a routine transfer operation last Tuesday. Ask me one clarifying question at a time to drill down to the root cause."

### Exercise 5: Material Compatibility Check

> **Prompt:** "Based on the chemical properties of Hexamethylenediamine (HMD), evaluate whether the following materials are compatible for long-term storage: carbon steel, stainless steel 316L, PTFE gaskets, copper-alloy fittings, EPDM seals. For each, rate compatibility as: Compatible / Conditional / Incompatible, and cite the reason."

---

## NotebookLM — Document Synthesis

### Exercise 6: Technical Manual Extraction

Upload an equipment manufacturer manual.

> **Prompt:** "Extract the maintenance schedule from this manufacturer manual: recommended inspection intervals, component replacement schedules, required spare parts, and any special tools needed. Present as a table that can be imported into our CMMS."
