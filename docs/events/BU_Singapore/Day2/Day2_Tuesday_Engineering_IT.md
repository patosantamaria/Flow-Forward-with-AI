# 📅 Day 2 — Tuesday, 10 March 2026

## IT/Digital + Engineering + Ops + HR | 11 Participants

| #   | Name           | Department             |
| :-- | :------------- | :--------------------- |
| 1   | Mohit          | Digital / IT           |
| 2   | Shaoqun        | Digital / IT           |
| 3   | Wang Wei       | Engineering            |
| 4   | Dehua          | Engineering            |
| 5   | Sing Ee        | Engineering            |
| 6   | Kelvin Teo     | Engineering            |
| 7   | Constance      | Engineering            |
| 8   | Shao Kwan Kiat | BCSS GM                |
| 9   | Kelvin Leong   | Stock Controller Sakra |
| 10  | Chin Teck Ming | Ops Sebarok            |
| 11  | Vivian         | HR                     |

---

## 🎯 Day Character

**Most technically savvy group of the week.** Engineering (5) + IT/Digital (2) = 7 out of 11 are technical. These participants will learn fast and want to push boundaries. Move briskly through M1–M3 foundations — don't over-explain what they already intuitively understand. Spend extra time on M7 (heavy analysis), M9 (NotebookLM for technical docs), and the Capstone. Kelvin Leong (Stock Control), Chin Teck Ming (Ops), and Vivian (HR) will appreciate practical cross-function scenarios. Shao Kwan Kiat (BCSS GM) brings business services perspective.

---

## Slide Preparation

### Slides to Customise Before Tuesday

1. **Title Slide:** "Flow Forward with AI — BU Singapore, Day 2"
2. **M2 "Day in the Life" slide:** Use Engineering + IT friction examples (SoW review, change advisory, API debugging)
3. **M4 PTCF Demo slide:** Use the Engineering/IT-specific PTCF examples (see below)
4. **M5 Quick-Fire slide:** Pre-load IT + Engineering + Operations prompts
5. **Capstone brief slide:** "The BCSS JV Crude Alert Briefing" — 2-group challenge (Engineering + IT/OT)

---

## ⏰ Full Schedule with Exact Content

### 🟢 09:00 — Opening (10 min)

**Script:**

> "Good morning Day 2! Welcome to Flow Forward with AI. Today's group is the technical core of this BU — Engineering, IT, Operations, Stock Control. You're the people who keep the terminal running, the systems connected, and the projects delivered. Today I'm going to show you how AI becomes your most capable technical analyst."

> "By the end of today, you'll have used AI to stress-test a Scope of Work, diagnose an API error from a log file, compare engineering specs, and build a knowledge base from your own technical documents."

---

### 🤖 09:10 — M1: GenAI Foundations (15 min)

> Follow the standard M1 script. **Pacing note: this group will absorb M1 quickly.** You can trim the "What is AI" progression to 2 minutes and spend an extra minute on the Smart Intern analogy and the "what it's NOT good at" table — they'll appreciate the honesty about limitations.

**Extra point for this group:**

> "As technical professionals, you might be wondering about the model architecture. Gemini is a multimodal transformer-based model — it processes text, images, code, and audio natively. But the key insight for today isn't the architecture — it's that the interface is natural language. You don't need to code to use it. You explain what you need, like you would to a competent colleague."

**🌍 The Bigger Picture (2 min) — Deliver this before moving to M2:**

> "Before we go further — let me set expectations. What we'll cover today is the **foundation**, but AI is much bigger than this room. There's agentic AI — systems that don't just answer questions but execute multi-step workflows autonomously. Imagine an AI agent that monitors your SCADA data 24/7, detects anomalies, generates the incident ticket, drafts the root cause analysis, and notifies the right engineer — all before you've finished your coffee. That's where the industry is heading."
>
> "We're not there yet in this training — and that's by design. The intent is to **get everyone started**. Build a foundation so that when Vopak fully embarks on advanced AI — and it will — you're ready to build on top of what you learn today. You can adapt, you can adopt, and you're not starting from zero."
>
> "Think of today as your driver's licence. Once you can drive, the vehicle — sedan, truck, Formula 1 — that comes next."

---

### 📘 09:25 — M2: The Flow Forward Vision (15 min)

> **Customise for this group.**

**Tailored "Day in the Life" opening (3 min):**

> **Engineering — The Scope of Work Review:**
> "A contractor sends you a 45-page Draft Scope of Work for Tank T-405 conversion. You need to cross-reference it against the HMD Safety Data Sheet, check the utility capacity report, verify pipe specifications, and flag any hidden cost drivers — before the budget gets locked at the next board meeting. This takes a senior engineer 2 full days."

> **With AI:** "You upload all three documents to Gemini and type: 'Act as a Forensic Project Manager. Stress-test this Scope of Work. Identify missing deliverables, underspecified requirements, unrealistic timelines, and hidden cost drivers. Present findings in a table: Section, Issue Found, Severity, Recommendation.' Done in 5 minutes. You spend your time _validating_ the findings instead of _finding_ them."

> **IT — The Incident Diagnosis:**
> "It's 2 AM. ServiceNow wakes you up. MyDocs API is throwing intermittent 400 errors. You pull the HAR file, scroll through 500 lines of XML, try to pattern-match the error codes against the functional spec. This debugging session takes 3 hours — and you're doing it from your phone."

> **With AI:** "You paste the HAR extract into Gemini and type: 'Analyze these API 400 errors. For each error: identify the root cause from the response headers, determine if it's authentication, payload, or endpoint related, and suggest remediation.' Done in 90 seconds."

**The ask:**

> "What's YOUR 45-page document you wish someone would read for you? What's YOUR 2 AM debugging session? That's what we're here to fix."

**Deliver the rest of M2 as standard:** Career Superpower, Strategic Context (EUR 4 billion Shifting Gears investment, 61% net profit increase FY2025 — do NOT cite the Project Ascend 292% ROI, those were from a capstone exercise), The Real KPI.

---

### 🛡️ 09:40 — M3: Security & Guardrails (15 min)

> Follow the standard M3 script.

**Technical audience additions:**

- **IT-specific emphasis:** "You handle API keys, database credentials, network configurations. **Never** paste raw credentials, API secrets, or vulnerability scan results into any AI tool. You can describe the _type_ of issue ('I have an API returning 400 errors on document migration') without exposing the actual endpoint or key."
- **OT boundary:** "For those working near operational technology systems — SCADA, DCS, ATG — remember that AI should never be given direct access to OT system data or configurations. Use AI for analysis of _exported_ data, never for direct system interaction."
- **Code review caveat:** "You can use Gemini to review code logic, suggest improvements, and debug errors. But any code that touches production systems goes through your normal change management and peer review process. AI assists the review — it doesn't replace it."

---

### 🧠 09:55 — M4: PTCF Prompting Framework (25 min)

**Tailored PTCF Demo for Engineering/IT:**

| Element     | Concept             | Engineering Example                                                           | IT Example                                                                 |
| :---------- | :------------------ | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| **Persona** | Give the AI a role  | "Act as a Forensic Project Manager"                                           | "Act as a Vopak IT Solutions Engineer"                                     |
| **Task**    | The specific action | "Stress-test this Scope of Work"                                              | "Analyze this HAR file extract"                                            |
| **Context** | Background info     | "Tank T-405 conversion to handle HMD product, contractor submitted draft SoW" | "Investigating incident PRB0047569, intermittent API 400 errors on MyDocs" |
| **Format**  | How you want output | "Table: Section, Issue Found, Severity, Recommendation"                       | "Incident analysis table with root cause and remediation"                  |

**The "Bad Briefing" Game:**

Say:

> "Help me with this error."

Wait. The engineers will immediately ask: "What error? What system? What happened before?"

> "You just wrote a prompt. You asked for Context. That's PTCF."

**Live PTCF comparison:**

**Bad prompt:**

> "Review this project document."

**PTCF prompt:**

> "**[Persona]** Act as a Vopak Lead Project Engineer preparing for Cold Commissioning.
> **[Task]** Synthesize these scattered documents into a Pre-Startup Safety Review (PSSR) Readiness Dashboard.
> **[Context]** We have contractor emails, hydro-testing certificates, and HAZOP excerpts for the Tank T-405 conversion project.
> **[Format]** Structure: (1) Category A Items (safety-critical — must resolve before commissioning) with status, (2) Category B Items (non-safety, can defer to post-commissioning), (3) Outstanding Non-Conformities with responsible parties and deadlines, (4) MOC status — any pending Enablon approvals."

---

### 💻 10:20 — M5: Live Demo + Quick-Fire (15 min)

**Demo 1 — The Difference (5 min):** Standard tank 405 safety email comparison.

**Demo 2 — Technical Quick-Fire (10 min):**

**Engineering prompt:**

> "Act as a Forensic Project Manager. List the top 5 risks for a terminal tank conversion project. For each risk: describe it, rate probability (1-5) and impact (1-5), calculate risk score, and propose one mitigation action. Present as a risk register table."

**IT prompt:**

> "Draft a change advisory notification email to all terminal IT coordinators about a planned maintenance window for the OT network. Include: date/time (Saturday 02:00-06:00 SGT), affected systems (SCADA, ATG dashboards, IS-Safe tablet sync), expected impact (read-only mode during maintenance), rollback plan, and the on-call engineer's contact. Reference ServiceNow ticket CHG0045892."

**Operations prompt:**

> "Summarize this shift log in 3 bullets: highlight any safety incidents, any equipment with defeated safety functions, and any pending maintenance tasks that need to be actioned by the incoming shift."

---

### 🔨 10:35 — PTCF Practice (15 min)

**Activity:** Each participant writes a PTCF prompt for their real work.

**Coaching prompts for this group:**

- "Think about the last technical document that took you more than an hour to review."
- "What's a report you have to create every week or month?"
- "What's an analysis you do manually that involves comparing two or more data sources?"

**Sharing:** With 11 people, pick 5-6 to share. Prioritise diversity — get at least one from IT, one from Engineering, one from Ops/Stock Control.

---

### ☕ 10:50 — Break (15 min)

---

### 🔷 11:05 — M6: Gemini in Workspace — The Side Panel (30 min)

**Demo 1 — Gmail (10 min):**

> **Prompt:** "Summarize this email thread. Identify the key technical decision, any outstanding blockers, and who needs to respond."

**Demo 2 — Docs with @ connector (10 min):**

> Open a blank Doc and show the `@` connector referencing a Drive document:
> **Prompt:** "Based on @[engineering spec document], draft a summary of the key design parameters for Tank T-405 conversion. Highlight any specifications that differ from our standard terminal design."

**Demo 3 — Sheets (10 min):**

> This group will love the Sheets demo — show a data set:
> **Prompt:** "Analyze this CAPEX dataset against the Work Breakdown Structure baseline. Which cost items exceed the baseline by more than 10%? Classify each variance as 'temporary' or 'permanent'."

---

### 🔨 11:35 — Practice: Side Panel (30 min)

**Split by department interest. Pre-load these exercises:**

#### Engineering team (Wang Wei, Dehua, Sing Ee, Kelvin Teo, Constance):

**Exercise 1 — PSSR Readiness Dashboard (Docs):**

> "Act as a Vopak Lead Project Engineer preparing for Cold Commissioning. Synthesize these scattered documents into a Pre-Startup Safety Review (PSSR) Readiness Dashboard. Structure: (1) Category A Items (safety-critical — must be resolved before commissioning) with status per item, (2) Category B Items (non-safety, can be deferred to post-commissioning), (3) Outstanding Non-Conformities with responsible parties and deadlines, (4) MOC (Management of Change) status — list any pending Enablon approvals."

**Exercise 2 — VPM Stage Gate Update (Gmail):**

> "Act as a Vopak Project Manager. Draft a fortnightly progress update email to the BU Director for a project currently at SIP (Select) stage. Include: completed milestones, current Stage Gate status with Red/Yellow/Green traffic lights per workstream, outstanding engineering deliverables, updated cost estimate confidence level, and decisions needed from the BU Director."

#### IT/Digital team (Mohit, Shaoqun):

**Exercise 1 — API Error Diagnosis (Docs):**

> "Act as a Vopak IT Solutions Engineer investigating incident PRB0047569. Analyze this HAR file extract showing intermittent API 400 errors when MyDocs attempts to migrate documents from 'Workflow' to 'Release' directories. For each error: identify the likely root cause from the response headers, determine if the failure is authentication, payload, or endpoint related, suggest a remediation step. Format as an incident analysis table."

**Exercise 2 — Change Advisory (Gmail):**

> "Draft a change advisory notification email to all terminal IT coordinators about a planned maintenance window for the OT network. Include: date/time (Saturday 02:00-06:00 SGT), affected systems (SCADA, ATG dashboards, IS-Safe tablet sync), expected impact, rollback plan, and on-call engineer contact."

#### Ops/Stock Control/BCSS (Kelvin Leong, Chin Teck Ming, Shao Kwan Kiat, Vivian):

**Exercise 1 — Shift Handover (Docs):**

> "Act as a Vopak Operations Superintendent. Structure these raw shift notes into a formal Daily Shift Handover Report. Sections: Safety Incidents & Observations, Equipment Status — especially any defeated safety-critical equipment, Active Permits to Work with status, Ongoing Jetty Activities, Pending Maintenance Tasks."

**Exercise 2 — Freestyle:**

> Let them pick a real document or email to summarize or analyze.

**Sharing (5 min):** 2 people share their best result.

---

### 🔶 12:05 — M7: Gemini Web App — Heavy Lifting (35 min)

**Demo 1 — SoW Stress Test (10 min):**

> Upload a draft SoW (or paste an excerpt):
> **Prompt:** "Act as a Forensic Project Manager. Stress-test this Scope of Work: identify missing deliverables, underspecified requirements, unrealistic timelines, and hidden cost drivers. Present findings in a table: Section | Issue Found | Severity | Recommendation."

**Demo 2 — Visual Analysis (10 min):**

> Upload a terminal or engineering photo.
> **Prompt:** "Analyze this image of a terminal area. Identify any visible safety concerns, classify severity, and recommend corrective actions."
> _(This is the wow moment for this technical group)_

**Demo 3 — Time Saved Exercise (15 min):**

| My Repetitive Task               | How often? | Time per occurrence | AI alternative                    | Time with AI |
| :------------------------------- | :--------- | :------------------ | :-------------------------------- | :----------- |
| _e.g. Reviewing contractor SoWs_ | _Monthly_  | _2 days_            | _Gemini: stress test + compare_   | _2 hours_    |
| _e.g. Writing change advisories_ | _Weekly_   | _45 min_            | _Side panel: draft from template_ | _5 min_      |
| _e.g. Debugging from log files_  | _Ad hoc_   | _3 hours_           | _Gemini: paste + analyze_         | _15 min_     |

> **Read the totals aloud.** This group will have the biggest numbers — engineering/IT tasks are notoriously time-consuming.

---

### 🍽️ 12:40 — Lunch (60 min)

**Before lunch:**

> "This morning you stress-tested a Scope of Work in 5 minutes that would take 2 days. You diagnosed an API error from a log dump in 90 seconds. After lunch, you'll see Gemini on your phone, build a technical knowledge base that your whole team can query, and tackle a project risk scenario where the clock is ticking."

---

### 📱 13:40 — M8: Gemini on Mobile (20 min)

**Engineering-relevant demos:**

**Demo 1 — Photo → Structured Data:**

> Take a photo of any technical diagram, whiteboard sketch, or equipment label. Show how Gemini reads and structures it.

**Demo 2 — Voice → Inspection Report:**

> **Say into Gemini mobile:** "I just completed an SOR — Safety Observation Round — at Bay 3 of the Sakra terminal. Loading Arm A has a visible gasket leak — needs a PtW before repair, priority high. Bay 5 LMRA completed, all clear. Bay 7 trace heating appears inactive on the product line — needs Engineering check before HMD operations. Scaffold in Tank Farm B looks sound but tagging is expired."
>
> **Then type:** "Turn this into a Safety Observation Round report with columns: Location | Observation | Priority | Action Required | PtW Needed (Yes/No)."

**Live exercise:** Participants take a photo of whiteboard notes → share results.

---

### 📚 14:00 — M9: NotebookLM — Your Team's Brain (30 min)

**Engineering/IT-tailored demo (15 min):**

> "For Engineering, NotebookLM is your project memory. Upload your VPM stage gate checklists, HAZOP reports, API 650 specs, and historical project delay logs. Suddenly any engineer on the team can ask: 'What Category A items blocked commissioning on the last 3 projects?' and get a source-cited answer."

**Demo 1 — Multi-Document Conflict Detection:**

> Upload a SoW + Safety Data Sheet + utility capacity report:
> **Prompt:** "Cross-reference these three documents. Identify any conflicts between: the SoW requirements and the available utility capacity, and the SoW specifications and the product safety requirements. List each conflict with the exact document and section reference."

**Demo 2 — IT Policy Alignment:**

> Upload IT Security Policy + AI Acceptable Use Policy:
> **Prompt:** "Cross-reference these two policies. Identify any gaps where the AI Acceptable Use Policy doesn't address risks mentioned in the IT Security Policy. Also flag any contradictions between the two documents."

**Practice (15 min):**

1. Everyone creates a notebook with 2-3 documents from their domain
2. Ask progressively specific questions
3. Try an Audio Overview

---

### ☕ 14:30 — Break (15 min)

---

### 🏆 14:45 — Capstone: "The BCSS JV Crude Alert Briefing" (60 min)

> **Primary:** [`capstones/capstone_crude_alert.md`](capstones/capstone_crude_alert.md)
> **Alternative:** [`capstones/capstone_risk_radar.md`](capstones/capstone_risk_radar.md) _(generic version — use if the BCSS scenario doesn't fit)_
> **Facilitator Gem:** [`gems/gem_crude_alert_coach.md`](gems/gem_crude_alert_coach.md)

**Brief the challenge (5 min):**

> "Here's the scenario: A primary transfer pump — P-501A — at the BCSS terminal has failed. A VLCC is incoming in 10 days, and every hour of delay costs money. A vendor has offered a Quick-Ship replacement pump, but the specs look questionable."
>
> "At the same time, the JV Board has asked BCSS to present its plans for AI adoption at the terminal. They want a governance framework and a 12-month roadmap."
>
> "So we're splitting into two teams. **Team A: Engineering Sprint** — you vet the vendor pump and plan the 7-day recovery. **Team B: IT/OT AI Strategy** — you build the AI Governance Framework and Roadmap for the JV Board."
>
> "At the end, **Kiat** — as BCSS GM — compiles both outputs into a single JV Board Briefing. Because that's exactly what a terminal GM does in real life."

**Team Split:**

- **Team A — Engineering Sprint:** Wang Wei, Dehua, Sing Ee, Kelvin Teo, Constance, Chin Teck Ming (6 people)
- **Team B — IT/OT AI Strategy:** Mohit, Shaoqun, Kiat, Kelvin Leong, Vivian (5 people)

**Data Room** (pre-shared or share now):

- [`vendor_proposal_apex610c.md`](capstones/data_room/vendor_proposal_apex610c.md) — for Team A
- [`bcss_terminal_specs.md`](capstones/data_room/bcss_terminal_specs.md) — for both teams
- [`ai_policy_it_security.md`](capstones/data_room/ai_policy_it_security.md) — for Team B

**Step 1: NotebookLM (10 min)** — Both teams upload their Data Room documents and do initial analysis.

**Step 2: Deep Research (10 min):**

> **Team A:** "Evaluate whether Carbon Steel/Carbon seal faces are acceptable for Sour Crude with H₂S. Also assess risk of a Non-Ex Rated motor in Zone 1."
> **Team B:** "Research AI governance frameworks for industrial terminals and Joint Ventures. Focus on OT/IT boundary enforcement and data classification."

**Step 3: Drafting (15 min):**

> **Team A Deliverables:**
>
> - ⚡ **Technical Assessment Memo** (REQUIRED) — Approve/Reject with conditions
> - ⚡ **7-Day Recovery Timeline** (REQUIRED) — with safety gates
> - 📋 **5-Point JSA** (OPTIONAL) — for pump removal
> - 📋 **Vendor Digital Access Policy** (OPTIONAL) — for Smart-Link laptop

> **Team B Deliverables:**
>
> - ⚡ **AI Guardrails Document** (REQUIRED) — data classification, OT security, human-in-the-loop
> - ⚡ **3-Phase AI Roadmap** (REQUIRED) — 12 months, connect to predictive maintenance

**Mid-Challenge Update (at 30-min mark):**

> **To Team A:** "Update: the vendor confirms the motor IS Ex-rated — but only to Zone 2 (IIB). Your manifold is Zone 1 (IIC). The certification is insufficient."
> **To Team B:** "Update: a JV Board member asks specifically 'How would AI have helped detect the pump issue earlier? Could predictive maintenance have prevented this?' Work this into your roadmap."

**Step 4: Convergence (10 min):**

> Both teams bring their outputs together. Kiat leads the assembly of a single JV Board Briefing deck using the **Vopak Slide Designer**. The story: "We handled the crisis using AI today — here's how we scale that capability across the terminal."

> ⚡ **Board Briefing Deck** (REQUIRED) — 7 slides covering the pump fix AND the AI strategy.
> 📋 **Narrated Video via Google Vids** (OPTIONAL BONUS)

---

### 📢 15:45 — Pitches (15 min)

Each team: 2 minutes to present their Risk Radar findings:

1. Top 3 risks identified
2. Budget impact
3. Recommended course of action

**Award "Risk Radar Champion"** to the team with the sharpest analysis.

---

### 🎯 16:00 — Closing (15 min)

**Quick wins (5 min):** "What's one technical task you'll attack with AI this week?"

**Survey QR code (3 min).**

**Homework for Phase 3 (5 min):**

> "Identify one process that involves comparing or cross-referencing multiple documents — that's your automation target. Draft a 1-paragraph Gem idea for your team."

**Phase 3 preview (2 min):**

> "Next time, you build it. You create the automation. You become the architect."

---

## ✅ Day 2 Checklist

### Before the Session

- [ ] Customise slides with Engineering/IT "Day in the Life" examples
- [ ] Pre-load the SoW stress-test demo prompt and API error diagnosis prompt
- [ ] Prepare Data Room documents for "BCSS Crude Alert" capstone (vendor proposal, terminal specs, AI policies)
- [ ] Share Crude Alert Coach Gem link with participants
- [ ] Have a terminal/engineering photo ready for the Visual Analysis demo
- [ ] Print name cards for 11 participants
- [ ] Pre-open: `projects_engineering/prompts.md`, `it_ot_digital/prompts.md`, `operations/prompts.md`

### During the Session

- [ ] Move briskly through M1-M3 (technical audience absorbs foundations fast)
- [ ] Split into 2 teams: Engineering Sprint (6) + IT/OT Strategy (5) — Kiat leads Team B
- [ ] Deliver team-specific mid-challenge updates at 30-min mark
- [ ] Facilitate convergence — Kiat compiles both outputs into Board Briefing

### After the Session

- [ ] Collect survey responses
- [ ] Note potential AI Champions — this group will likely produce the strongest technical users
- [ ] Save standout outputs to Shared Drive
