# ⚡ Flow Forward with AI: The "MyService Care" Master Training Guide

**Date:** February 11, 2026
**Target:** MyService Care Team (Consultants, BAs, Analysts)
**Mission:** Transform from reactive "Ticketmasters" to proactive "AI-Augmented Consultants".
**Trainer:** Patricio Soto Santamaria

---

## 🛠️ Required Assets (The "Sandbox")

_Ensure these files are shared with all participants before 09:30._

1.  **`MyService_Incident_Log_Q3.csv`**: 50 rows of incident data (created via script).
2.  **`Streamliner_Error_Log_Dump.txt`**: XML error log with code "ERR-902" (created via script).
3.  **`SLA_Agreement_Global.pdf`** (or .txt): Dummy vendor contract (created via script).
4.  **`Release_18_Tech_Specs.pdf`** (or .txt): Technical release notes (created via script).

---

## 📅 The Run of Show (09:30 - 16:00)

### 🔹 09:30 - 10:30 | BLOCK A: CRAWL (The First Win)

**Goal:** Build trust and master the PTCF (Persona, Task, Context, Format) Framework.

#### **09:30 - 09:50 | Welcome & The "Service Safety" Demo**

- **Script:** "Welcome. We are moving from firefighting to flow. Watch this."
- **Demo 1 (Docs):** Upload `Streamliner_Functional_Spec.pdf` to Gemini.
  - _Prompt:_ "I'm new to the team. Summarize the 'Bonded Stock' validation rules for me."
- **Demo 2 (Visual):** Use Gemini on Mobile. Point at a complex diagram (or screen).
  - _Prompt:_ "Explain this process flow like I'm a junior consultant. Where does the data go?"

#### **09:50 - 10:10 | The PTCF Framework (Theory)**

- **Concept:** "Garbage in, Garbage out."
- **Bad Prompt:** "Write a reply to this ticket."
- **Good Prompt (PTCF):**
  - **Task:** "Draft a Service Notification for the Portal."
  - **Context:** "P1 Incident. ATG Polling Down at Europoort. ETA 4 hours."
  - **Format:** "Professional, apologetic, bullet list of workarounds."

#### **10:10 - 10:30 | Exercise 1: The "Shift Handover" (Hands-On)**

- **Activity:** Everyone opens Google Docs.
- **Task:** Write a prompt to generate a Handover Email.
- **Winning Prompt:**
  > "Act as a Senior Consultant. Draft a handover email to Singapore.
  > Context: We had 3 P1s today (User Login, ATG Failure, Streamliner Timeout). All are resolved except Streamliner.
  > Format: Clear headers, bullet points for 'Action Items', tone is brief and urgent."

---

### 🔹 10:45 - 12:00 | BLOCK B: WALK (Workspace Lightning Round)

**Goal:** Manage the "Ticketmaster" noise using Gemini in Workspace.

#### **10:45 - 11:30 | The Tool Tour**

- **Gemini in Gmail:**
  - _Scenario:_ Catching up on a long thread.
  - _Prompt:_ "Summarize this email thread from Tan. Highlight the pending P1s and my action items."
- **Gemini in Drive:**
  - _Scenario:_ Understanding a new release.
  - _Prompt:_ (Right-click `Release_18_Specs.pdf`) "Summarize the changes to the Pricing Engine. How does this affect the terminal operators?"
- **Gemini in Sheets:**
  - _Scenario:_ Prioritizing the queue.
  - _File:_ Open `MyService_Incident_Log_Q3.csv`.
  - _Prompt:_ "Highlight all rows where 'Business Time Left' is less than 2.0. Create a bar chart showing incidents by 'Root Cause'."

#### **11:30 - 12:00 | Exercise 2: The "Hidden Gem" Hunt**

- **Task:** Find an old document in your Drive (e.g., a "Root Cause Analysis" or "Project Plan") and ask Gemini to extract the "Lessons Learned".
- **Share:** Ask 2 people to share what they found.

---

### 🔹 13:00 - 14:15 | BLOCK C: RUN (Advanced Intelligence)

**Goal:** Deep diagnostics with NotebookLM and Custom Gems.

#### **13:00 - 13:45 | Exercise 3: The "Customs Debugger" (NotebookLM)**

- **Scenario:** A truck is stuck. The error is cryptic.
- **Step 1:** Open NotebookLM. Create a new Notebook.
- **Step 2:** Upload `Streamliner_Error_Log_Dump.txt` and `Streamliner_Functional_Spec.pdf`.
- **Step 3:** Prompt:
  > "Analyze the error code 'ERR-902' in the log file. Cross-reference it with the Functional Spec.
  > Does this mean the tank is Bonded or Free?
  > Provide a step-by-step fix for the operator."

#### **13:45 - 14:15 | Exercise 4: The "Global SDM" Gem**

- **Scenario:** Managing vendor performance without emotion.
- **Step 1:** Go to Gemini -> Gem Manager -> New Gem.
- **Step 2:** Name: **Global SDM**.
- **Step 3:** Instructions:
  > "You are the Global Service Delivery Manager. Your tone is Professional, Stern, and Factual.
  > Always reference the 'Agreed Response Time' vs 'Actual Response Time' from the SLA.
  > Never use exclamation marks."
- **Step 4:** Knowledge: Upload `SLA_Agreement_Global.pdf`.
- **Test:** "Draft an escalation for Incident 992. They took 4 hours to respond to a P1."

---

### 🔹 14:30 - 16:00 | BLOCK D: BUILD (The Capstone Challenge)

**Goal:** The "Friday Afternoon Crisis". Integrated simulation.

#### **The Scenario**

It is Friday, 16:30. The "Ticketmaster" queue just exploded with 50 new tickets. **Streamliner is down**. The Terminal Manager is calling. You have 20 minutes to fix it and handover to Singapore.

#### **Phase 1: Triage (Individual - 20 min)**

- **Tool:** Gemini in Sheets.
- **File:** `MyService_Incident_Log_Q3.csv`.
- **Task:** Find the 3 tickets that will breach SLA in < 2 hours.
- **Deliverable:** A screenshot of the filtered/highlighted Sheet.

#### **Phase 2: Diagnosis (Individual - 20 min)**

- **Tool:** NotebookLM (The "Customs Debugger").
- **File:** `Streamliner_Error_Log_Dump.txt`.
- **Task:** Identify the Root Cause (Bonded vs Free Mismatch).
- **Deliverable:** A one-sentence diagnosis.

#### **Phase 3: The "Hammer" (Individual - 20 min)**

- **Tool:** The "Global SDM" Gem.
- **Task:** Draft the escalation email to Stream Software.
- **Constraint:** Must cite "Clause 4.2" from the SLA PDF.
- **Deliverable:** The email draft.

#### **Phase 4: Deep Research & Handover (Group - 30 min)**

- **Tool:** Gemini (Web) + Google Docs.
- **Task:** The Manager asks _why_ this happens.
  1.  Use Gemini (Web) to research: "Common causes of Customs API latency in European ports 2025".
  2.  synthesize this with your internal findings.
  3.  Write a **"Crisis Report"** in a shared Doc containing:
      - The 3 Risky Tickets.
      - The Root Cause.
      - The Vendor Escalation.
      - The "Deep Research" Insight.

#### **15:30 - 16:00 | Show, Tell & Award**

- Groups present their "Crisis Report".
- Trainer awards the "AI Champion" title to the best PTCF prompt or finding.

---

## 📝 Trainer Cheat Sheet (The "Answers")

- **SLA Watchdog Answer:** Rows with "Business Time Left" < 2.0 should be Red.
- **NotebookLM Answer:** Error 902 = "Bonded Stock" was requested, but "Free Stock" was available (or vice versa).
- **Gem Answer:** The email should reference "Clause 4.2" (P1 Response Time 15 mins) and demand an RCA.
