# Flow Forward with AI: MyService Care Team Enablement

**Date:** February 11, 2026
**Target Audience:** MyService Care Team (Consultants, Business Analysts, Developers)
**Goal:** Transition from reactive "Ticketmaster" support to proactive AI-augmented service delivery.

> "The objective is to reduce the 'noise' of routine incidents and free human capital for strategic innovation."

---

## 1. Executive Summary & Context

The MyService Care Team is the operational backbone for Vopak's terminal functionality. You handle high-velocity data, strict SLAs (Gold Service), and complex integrations (OutSystems, AWS, Streamliner).
This training introduces **Gemini for Google Workspace** and **NotebookLM** not just as tools, but as **standard operational companions** to alleviate the cognitive load of the "Ticketmaster" role.

### Key Pain Points Addressed:

- **Ticketmaster Fatigue:** Constant context switching and triage pressure.
- **SLA Anxiety:** Monitoring "Business Time Left" for P1 incidents.
- **Manual Config:** Error-prone manual updates in "MyService Configuration".
- **Release Overhead:** Translating technical user stories into business-friendly release notes.
- **Customs Complexity:** Interpreting cryptic "Streamliner" error xml logs.

---

## 2. The Curriculum: Crawl, Walk, Run

### Phase 1: CRAWL – Trust & Foundations (The "Safe" Colleague)

_Goal: Establish psychological safety and master structure._

#### Module 1.1: The "NDA Stress Test" (Security First)

**Scenario:** Verify Vopak's specific "Enterprise" data protection.
**Activity:**

1.  Take a sanitised but sensitive text (e.g., draft access protocol).
2.  **Prompt:** "Analyze this text for strict PII or IP risks. act as a paranoid security officer."
3.  **Outcome:** Understand that Gemini processes data _within_ the Vopak tenant and does not train on it.

#### Module 1.2: The TCF Framework (Task, Context, Format)

**Scenario:** A "System Slow" ticket arrives.
**Activity:** Transform a lazy prompt into a TCF Prompt.

- **Bad Prompt:** "Write a reply to this ticket."
- **Good Prompt (TCF):**
  - **Task:** "Draft a Service Notification for the Service Portal."
  - **Context:** "For MyService Operations at Europoort. ATG polling is down due to line failure. ETD 4 hours. P1 Incident."
  - **Format:** "Professional, apologetic but firm. Bulleted list of manual workarounds."

---

### Phase 2: WALK – Collaboration & Integration (The "Smart" Analyst)

_Goal: Connect information across Workspace apps (Sheets, Drive, Docs)._

#### Module 2.1: The "SLA Watchdog" (Gemini in Sheets)

**Target:** Philippe, Angelica (The Ticketmasters)
**Scenario:** 50 active tickets. Who is about to breach SLA?
**Data:** `MyService_Incident_Log_Q3.xlsx` (Synthetic Data Provided)
**Action:**

1.  Open the Sheet.
2.  Open Gemini Side Panel.
3.  **Prompt:** "Analyze column 'Business Time Left'. Highlight all rows < 2 hours in Red. Create a pivot table showing 'Root Cause' for P1 incidents in the last 7 days."
4.  **Extension:** "Draft an email to DevOps summarizing the top 3 recurring issues."

#### Module 2.2: The "Release Note" Generator (Drive + Docs)

**Target:** Jan Willem, Roger (The Release Managers)
**Scenario:** Release 18 is live. Need to tell Terminal Managers about "Multi-Tiered Pricing".
**Data:** `Release_18_Tech_Specs.pdf`, `User_Stories.gsheet`
**Action:**

1.  Select files in Drive -> Right Click -> "Ask Gemini".
2.  **Prompt:** "Draft a 'Release Announcement' for Terminal Managers based on these technical specs. Remove jargon like 'API endpoint'. Focus on business value (e.g., 'Better visibility on costs'). Tone: Exciting."

---

### Phase 3: RUN – Agentic Automation (The "Expert" Partner)

_Goal: Build custom "Gems" and use NotebookLM for deep diagnostics._

#### Module 3.1: The "Global SDM" Gem (Custom AI Assistant)

**Target:** Philippe, Senior Consultants.
**Rationale:** Standardize the "stern but fair" tone for vendor escalations.
**Activity:** Build a Custom Gem.

- **Name:** Global SDM
- **Instructions:** (See `docs/training/myservice_care/Gem_Instructions.md`)
- **Knowledge:** Upload `SLA_Agreement_Dummy.pdf`.
- **Test:** "Draft an escalation for Incident INC-992. They responded in 4 hours, contract says 30 mins."

#### Module 3.2: The "Customs Debugger" (NotebookLM)

**Target:** Brigitte, Eveline.
**Rationale:** Semantic search over complex error logs.
**Activity:**

1.  Create a Notebook in NotebookLM.
2.  **Sources:** Upload `Streamliner_Functional_Spec.pdf`, `Error_Log_Dump.txt`.
3.  **Prompt:** "Correlate the error code 'ERR-902' in the log with the Functional Spec. Is this a Bonded or Free stock mismatch? Give me a step-by-step fix for the operator."

---

## 3. Required "Sandbox" Assets

_Ready-to-use synthetic data for the training session._

1.  **`MyService_Incident_Log_Q3.xlsx`**: 500 rows of incident data (SLA times, Categories).
2.  **`Streamliner_Error_Log.xml`**: Anonymized XML dump with specific "Customs" errors.
3.  **`Release_18_Specs.pdf`**: Dummy technical specifications.
4.  **`SLA_Agreement_Global.pdf`**: Dummy vendor contract with penalty clauses.

## 4. Success Metrics (The OODA Loop)

- **Observe:** Time to detect P1 risk (Goal: < 1 min via Sheets).
- **Orient:** Time to diagnose Error 902 (Goal: < 2 mins via NotebookLM).
- **Decide:** Time to choose escalation path (Goal: Instant via TCF).
- **Act:** Time to draft email (Goal: < 30 secs via Gem).
