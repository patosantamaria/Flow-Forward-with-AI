# Capstone Challenge: "The Friday Afternoon Crisis"

**Project Name:** Operation Flow State
**Target Audience:** MyService Care Team
**Duration:** 45 Minutes

---

## 1. The Scenario

It is Friday at 16:30. You are the "Ticketmaster" for the day.
The Europoort Terminal Manager just called: _"Streamliner is down. Trucks are backed up at the gate. We are losing 50k per hour."_
Simultaneously, the "Global Service Desk" has flooded your queue with 50 new tickets.
Your shift ends in 30 minutes, and you need to hand over to the Singapore team (Tan Chong Hock).

**Your Mission:**
Restore order, identify the root cause, escalate to the vendor, and leave a clean handover.

---

## 2. The Dataset (Your "Inbox")

You have access to the following files in the `sandbox_data` folder:

1.  **`MyService_Incident_Log_Q3.csv`**: The raw dump of current tickets.
2.  **`Streamliner_Error_Log_Dump.txt`**: The technical error log from the failed truck transaction.
3.  **`SLA_Agreement_Global.txt`**: The vendor contract.

---

## 3. The Challenge Tasks

### Task 1: Triage the Noise (Gemini in Sheets)

_The queue is flooded. Which tickets are actually critical?_

1.  Open `MyService_Incident_Log_Q3.csv` in Google Sheets.
2.  Use Gemini to:
    _ "Highlight all **P1** incidents in Red."
    _ "Filter for tickets where 'Business Time Left' is less than **2 hours**." \* "Create a Pivot Table counting incidents by 'Root Cause'."
    **Deliverable:** A screenshot of your Sheet showing the 3 critical tickets that are about to breach SLA.

### Task 2: Decode the Error (NotebookLM)

_The Terminal Manager says "System Down," but the logs say something else._

1.  Open your **"Customs Debugger"** Notebook (created in the Walk phase).
2.  Upload `Streamliner_Error_Log_Dump.txt` as a new source.
3.  Ask: _"Analyze this error log. What is the specific 'CustomsStatus' mismatch? Is the tank Bonded or Free?"_
    **Deliverable:** A one-sentence diagnosis (e.g., "The truck is trying to load Free stock from a Bonded tank (TK-101).").

### Task 3: The "Hammer" Escalation (Gemini / Custom Gem)

_The vendor (Stream Software) is blaming the network. You know it's a configuration issue. Enforce the contract._

1.  Use your **"Global SDM" Gem** (or a fresh chat with the instructions).
2.  Prompt: _"Draft an escalation email to Stream Support for Incident INC-9928374. They claimed it was a network issue, but our analysis shows a 'Bonded/Free' config mismatch. Remind them of the P1 Resolution S.L.A. (4 hours) which expires in 20 minutes."_
    **Deliverable:** The draft email text, referencing the specific SLA clause.

### Task 4: The Perfect Handover (Gemini in Docs/Gmail)

_You are leaving. Don't leave Tan in the dark._

1.  Open a new Google Doc.
2.  Paste your findings from Task 1 (The 3 risky tickets) and Task 2 (The Root Cause).
3.  Prompt: _"Draft a Shift Handover summary for the Singapore team. List the 'Top Priority' actions they must take immediately. Keep it bulleted and urgent."_
    **Deliverable:** A clear, structured handover note.

---

## 4. Evaluation Criteria

1.  **Accuracy:** Did you identify the _real_ root cause (Bonded vs Free) or did you just say "System Error"?
2.  **Speed:** Did you use AI to filter the 50 rows, or did you scroll manually?
3.  **Tone:** Was the escalation email professional yet firm?
4.  **Clarity:** Can Tan pick up the work without calling you back?
