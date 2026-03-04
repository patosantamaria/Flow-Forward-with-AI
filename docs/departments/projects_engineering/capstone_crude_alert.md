# 🏆 Day 2 Capstone: "The BCSS JV Crude Alert Briefing"

## Theme: Critical Asset Recovery & AI Governance for the JV Board

**Time:** 60 minutes + 15 minutes pitches
**Teams:** 2 workstreams → converge for Board Briefing
**Difficulty:** ⭐⭐⭐⭐ (Technical + Strategic)

---

## The Scenario

A primary transfer pump (**P-501A**) serving the Crude Oil manifold at **BCSS** — Vopak's Joint Venture terminal in Singapore — has failed. A **VLCC (Very Large Crude Carrier)** is incoming in 10 days, and every hour of delay costs money.

A vendor has offered a "Quick-Ship" replacement pump (**Apex-610-C**), but the specs look questionable.

At the same time, the **JV Board** has requested that BCSS present its plans for AI adoption at the terminal — they want to see a governance framework and a 12-month roadmap before approving further technology investments.

**Kiat (BCSS GM)** must lead both workstreams and compile a single Board Briefing that covers the emergency pump fix AND the AI strategy.

---

## Team Structure

### Team A — Engineering Sprint (Operational Crisis)

**Suggested:** Wang Wei, Dehua, Sing Ee, Kelvin Teo, Constance, Chin Teck Ming

**Mission:** Vet the emergency replacement pump for safety (Sour Crude / H₂S / Ex-Rating), plan the 7-day recovery, and prepare the engineering section of the Board Briefing.

### Team B — IT/OT AI Strategy (JV Board Mandate)

**Suggested:** Mohit, Shaoqun, Kiat, Kelvin Leong, Vivian

**Mission:** Develop the BCSS AI Governance Framework and 12-month AI Roadmap for the JV Board. Show that the terminal is modernising safely — and use the pump crisis as a real-world example of how AI is already helping.

> **Kiat's role:** Kiat leads Team B but also acts as the "GM bridge" — at the end, he compiles both teams' outputs into a single JV Board presentation. This mirrors his real-world role perfectly.

---

## 📂 Data Room

Pre-share or distribute at challenge start:

| #   | Document                             | Used By | Format       |
| :-- | :----------------------------------- | :------ | :----------- |
| 1   | **Vendor Proposal — Apex-610-C**     | Team A  | Google Doc   |
| 2   | **HMD/Crude Safety Data Sheet**      | Team A  | Google Doc   |
| 3   | **BCSS Terminal Specifications**     | Both    | Google Doc   |
| 4   | **Vopak AI Acceptable Use Policy**   | Team B  | Google Doc   |
| 5   | **IT Security Policy (OT Boundary)** | Team B  | Google Doc   |
| 6   | **BCSS Budget Summary**              | Both    | Google Sheet |

---

## Team A: Engineering Sprint

### Task 1: Technical & Safety Vetting ⚡ REQUIRED

**The Problem:** The vendor proposes Carbon Steel / Carbon seals and a Non-Ex Rated motor for a Sour Crude / Condensate environment. These are potential safety red flags.

**Step 1 — NotebookLM (10 min):**
Upload the Vendor Proposal + Safety Data Sheet + Terminal Specifications into a NotebookLM notebook.

> **Prompt:** "Cross-reference the Apex-610-C vendor specifications against the safety requirements for Sour Crude containing H₂S. Identify any material incompatibilities, seal face concerns, or electrical classification mismatches. Cite specific documents."

**Step 2 — Deep Research (10 min):**
Use Gemini Deep Research to investigate the technical concerns:

> **Prompt:** "Evaluate whether Carbon Steel casing with Carbon vs. Carbon seal faces is acceptable for Sour Crude service containing H₂S. Compare against API 610 requirements for this service. Also assess the risk of installing a Non-Ex Rated 450kW motor in a Zone 1 Condensate area. What are the ignition risks per IEC 60079?"

**Step 3 — Drafting (15 min):**

> **Deliverable 1 — Technical Memo (REQUIRED):** "Draft a Technical Assessment Memo from the Engineering team to Kiat (BCSS GM). Structure: (1) Vendor Proposal Summary, (2) Red Flags Identified (material, seal, motor classification), (3) Recommended Corrections (e.g., Tungsten Carbide/Silicon Carbide seals, Ex-rated motor), (4) Approve/Reject with Conditions. Tone: technically rigorous, safety-first."

### Task 2: Execution Timeline ⚡ REQUIRED

> **Deliverable 2 — 7-Day Recovery Timeline:** "Create a 7-day schedule for P-501A replacement: Day 1 LOTO & Isolation → Day 2 Crude Flushing & Degas → Day 3-4 Crane Operations & Removal → Day 5 New Pump Installation & Alignment → Day 6 Piping Reconnection → Day 7 Vibration Testing & Commissioning. Include safety gates between each phase."

### Task 3: Job Safety Analysis 📋 OPTIONAL

> **Deliverable 3 — 5-Point JSA (OPTIONAL):** "Generate a 5-point Job Safety Analysis for removing a 2-ton centrifugal pump from a live crude manifold. For each step: Activity, Hazard, Risk Rating, Control Measure, Responsible Role."

### Task 4: Digital Access Rule 📋 OPTIONAL

> **Deliverable 4 — Vendor Digital Access Policy (OPTIONAL):** "Draft a 1-paragraph Vendor Digital Access Policy to prevent the vendor's diagnostic 'Smart-Link' laptop from bridging into the BCSS control network during pump calibration. Reference the OT/IT boundary principle."

---

## Team B: IT/OT AI Strategy

### Task 5: AI Governance Framework ⚡ REQUIRED

**The Problem:** The JV Board is concerned about AI exposing terminal SCADA data or sensitive JV commercial terms. They want assurance before approving AI investments.

**Step 1 — NotebookLM (10 min):**
Upload the AI Acceptable Use Policy + IT Security Policy + Terminal Specifications into a NotebookLM notebook.

> **Prompt:** "Based on these documents, what are the current guardrails for AI use at BCSS? Identify any gaps in the policies regarding: OT system data, JV-sensitive commercial data, and data classification. Cite specific policy sections."

**Step 2 — Deep Research (10 min):**
Use Gemini Deep Research to investigate AI governance best practices:

> **Prompt:** "Research AI governance frameworks for industrial terminals and Joint Ventures. Focus on: data classification standards (what data can AI access vs. what must be restricted), OT/IT boundary enforcement, and 'Human-in-the-Loop' requirements for engineering calculations. Include examples from energy/chemical industry."

**Step 3 — Drafting (15 min):**

> **Deliverable 5 — AI Guardrails Document (REQUIRED):** "Draft a 1-page AI Governance Framework for BCSS. Include: (1) Data Classification — what is Secret (SCADA, JV commercial terms, pricing) vs. Restricted (operational reports, shift logs) vs. Open (public safety data, training materials), (2) Approved Tools — Enterprise Gemini for Workspace (approved) vs. public AI tools (prohibited), (3) 3 Security Guardrails to ensure AI tools on corporate devices cannot interact with OT systems, (4) Human-in-the-Loop Rule — all AI outputs affecting safety, engineering calculations, or JV decisions require human expert sign-off."

### Task 6: 12-Month AI Roadmap ⚡ REQUIRED

> **Deliverable 6 — 3-Phase AI Roadmap (REQUIRED):** "Design a 3-Phase, 12-month AI Roadmap for BCSS:
>
> - **Phase 1 (Month 1-3):** Governance & Foundation — SSO integration, data classification, AI Acceptable Use Policy rollout, Flow Forward training for all BCSS staff
> - **Phase 2 (Month 4-8):** Pilot Applications — Predictive Maintenance pilot (pump vibration data), AI-assisted shift handovers, NotebookLM for SOP knowledge base
> - **Phase 3 (Month 9-12):** Scaled Integration — BigQuery analytics for terminal performance, automated reporting for JV Board, AI-assisted procurement analysis
>
> For each phase: Objectives, Key Deliverables, Risks, Mitigations. Present as a table."

---

## 🔀 Mid-Challenge Curveball (at 30-min mark)

> **Facilitator announces:**
>
> **To Team A:** "Update from the vendor: they've confirmed the motor IS Ex-rated — but only to **Zone 2 (IIB)**. Your manifold area is classified **Zone 1 (IIC)** for hydrogen-containing atmospheres. The motor certification is insufficient. Factor this into your Technical Memo — do you still accept with conditions, or reject outright?"
>
> **To Team B:** "Update from the JV Board secretary: one Board member has asked specifically about 'how AI would have helped detect the P-501A pump issue earlier — could predictive maintenance have prevented this?' Work this into your roadmap as Phase 2's anchor use case."

---

## Part 3: The Convergence — Kiat's Board Briefing ⚡ REQUIRED

### Task 7: Executive Board Briefing (10 min)

**Both teams come together.** Kiat compiles both workstreams into a single Board update.

**Step 4 — Vopak Slide Designer:**

> **Deliverable 7 — JV Board Briefing Deck (REQUIRED):** "Create a 7-slide executive presentation for the BCSS JV Board:
>
> - Slide 1: Title — 'BCSS Operational & Strategic Update'
> - Slide 2: P-501A Situation Summary — what happened, VLCC timeline
> - Slide 3: Engineering Assessment — vendor evaluation, corrective actions
> - Slide 4: 7-Day Recovery Plan — timeline with safety gates
> - Slide 5: AI Governance Framework — data classification, guardrails
> - Slide 6: 12-Month AI Roadmap — 3 phases with the predictive maintenance anchor
> - Slide 7: Recommendation & Next Steps
>
> Position the pump crisis as proof that AI is already delivering value (the team used it to vet specs and plan recovery in 1 hour vs. days), and the AI Roadmap as the logical next step."

### Optional Bonus: Google Vids (5 min)

> **Deliverable 7b — Narrated Board Briefing (OPTIONAL):** Turn the slide deck into a 2-minute narrated video using Google Vids for Board members who can't attend in person.

---

## 📋 Deliverables Summary

| #   | Deliverable                  | Team      | Status      | Tool Coverage                       |
| :-- | :--------------------------- | :-------- | :---------- | :---------------------------------- |
| 1   | Technical Assessment Memo    | A (Eng)   | ⚡ REQUIRED | NotebookLM → Deep Research → Gemini |
| 2   | 7-Day Recovery Timeline      | A (Eng)   | ⚡ REQUIRED | Gemini Web App                      |
| 3   | 5-Point JSA                  | A (Eng)   | 📋 OPTIONAL | Gemini Web App                      |
| 4   | Vendor Digital Access Policy | A (Eng)   | 📋 OPTIONAL | Gemini Web App                      |
| 5   | AI Guardrails Document       | B (IT/OT) | ⚡ REQUIRED | NotebookLM → Deep Research → Gemini |
| 6   | 3-Phase AI Roadmap           | B (IT/OT) | ⚡ REQUIRED | Deep Research → Gemini              |
| 7   | JV Board Briefing Deck       | Both      | ⚡ REQUIRED | Vopak Slide Designer              |
| 7b  | Narrated Video               | Both      | 📋 OPTIONAL | Google Vids                         |

**Required:** 5 deliverables · **Optional:** 3 deliverables

---

## 🏅 Scoring Rubric

| Criteria                  | Points    | What Judges Look For                                                                                |
| :------------------------ | :-------- | :-------------------------------------------------------------------------------------------------- |
| **Technical Accuracy**    | /25       | Did Team A catch ALL the spec red flags? (Carbon Steel seals, Non-Ex motor, Zone mismatch)          |
| **AI Tool Breadth**       | /20       | Used NotebookLM + Deep Research + Gemini + Slides? Source citations present?                        |
| **Strategic Thinking**    | /20       | Does the AI Roadmap connect to the pump crisis? Is the governance framework practical?              |
| **Board Readiness**       | /20       | Would a JV Board member actually approve this? Professional tone, clear recommendations?            |
| **Convergence Quality**   | /15       | How well did the two workstreams integrate? Does it feel like one briefing or two stapled together? |
| **Optional Deliverables** | Bonus +10 | JSA quality, Digital Access Policy, Google Vids                                                     |

---

## ⏱️ Timing Guide

| Time        | Activity                                                             |
| :---------- | :------------------------------------------------------------------- |
| 0:00 – 0:05 | Brief the challenge, distribute Data Room, form teams                |
| 0:05 – 0:15 | **Both teams:** NotebookLM — upload documents, initial analysis      |
| 0:15 – 0:25 | **Both teams:** Deep Research — investigate key questions            |
| 0:25 – 0:30 | **Both teams:** Begin drafting deliverables                          |
| **0:30**    | **🔀 Mid-Challenge Curveball** — facilitator delivers updates        |
| 0:30 – 0:45 | **Both teams:** Complete drafting, incorporate curveball             |
| 0:45 – 0:55 | **Convergence:** Teams combine → Kiat leads Board Briefing assembly  |
| 0:55 – 1:00 | Final polish on slide deck                                           |
| 1:00 – 1:15 | **Pitch:** Kiat (or team representative) presents the Board Briefing |

---

## 🔧 Vendor Reference Material: Apex-610-C

> **Share this with all participants at challenge start.**

| Specification          | Detail                       |
| :--------------------- | :--------------------------- |
| **Model**              | Apex-610-C (Centrifugal)     |
| **Design Standard**    | API 610 (Partial Compliance) |
| **Flow Rate**          | 2,200 m³/hr                  |
| **Casing Material**    | Carbon Steel (ASTM A216 WCB) |
| **Seal Type**          | Single Mechanical Seal       |
| **Seal Face Material** | Carbon Steel vs. Carbon      |
| **Elastomers**         | Nitrile (Buna-N)             |
| **Motor**              | 450kW, 3.3kV (Non-Ex Rated)  |
| **Lead Time**          | 4 days (Ex-Stock Singapore)  |

> ⚠️ **Facilitator Note:** The red flags are: (1) Carbon Steel/Carbon seal faces are unacceptable for H₂S service — needs Tungsten Carbide/Silicon Carbide, (2) Nitrile elastomers degrade in Sour Crude — needs Viton/FKM, (3) Non-Ex Rated motor in Zone 1 is a safety violation — needs Ex d IIC T3 minimum, (4) Single mechanical seal insufficient for toxic service — needs double/tandem seal with barrier fluid.

---

## Why This Works

- **Two real workstreams** that mirror the actual Day 2 audience — Engineers do engineering, IT/OT does strategy
- **Kiat leads the convergence** — exactly what a BCSS GM would do in real life
- **The pump crisis validates the AI strategy** — "We just used AI to vet specs and plan a recovery in 1 hour. Imagine what we could do with a proper governance framework and predictive maintenance."
- **Every tool gets used** — NotebookLM, Deep Research, Gemini Web App, Vopak Slide Designer, Google Vids (optional)
- **JV Board context** gives IT/OT people meaningful strategic work instead of supporting engineering
- **The curveball** forces both teams to adapt — just like real operations
