# Tailored Prompts for "MyService Care" Training Slide Deck

Use these specific prompts to replace the placeholder or generic prompts in your slide deck (`Flow Forward with AI - 2026 Template`).

---

## 1. Google Workspace Exercises

### Slide: "Gemini in Gmail" (The Thread Summarizer)

**Use Case:** Catching up on the overnight shift from Singapore.

- **Old Prompt:** "Summarize this email thread."
- **New Prompt:** "Summarize this handover email from Tan. Highlight any P1 incidents that are still open and list the action items for the Europe team."

### Slide: "Gemini in Docs" (The Communicator)

**Use Case:** Writing a release announcement for Terminal Managers.

- **Old Prompt:** "Write a blog post about the new features."
- **New Prompt:** "Draft a 'Service Update' for Terminal Managers about Release 18. Rewrite the technical points (e.g., 'API latency reduced') into business benefits (e.g., 'Faster truck processing at the gate'). Tone: Professional and exciting."

### Slide: "Gemini in Sheets" (The Analyst)

**Use Case:** Identifying SLA risks in the ticket queue.

- **Old Prompt:** "Analyze this sales data."
- **New Prompt:** "Analyze column D ('Business Time Left'). Highlight any row where the value is less than 2.0. Create a chart showing the top 'Root Causes' for P1 incidents this week."

### Slide: "Gemini in Slides" (The Presenter)

**Use Case:** Presenting a Root Cause Analysis (RCA) to management.

- **Old Prompt:** "Create a slide about Q3 results."
- **New Prompt:** "Create a slide titled 'Streamliner Outage RCA'. Include bullet points for 'Timeline', 'Root Cause', and 'Prevention'. Suggest an image for 'Network Architecture'."

---

## 2. Advanced Tooling (Gems & NotebookLM)

### Slide: "Building a Custom Gem" (The Specialist)

**Use Case:** The "Global SDM" (Service Delivery Manager) Gem.

- **Concept:** A bot that writes perfect, contract-compliant escalation emails.
- **Prompt to Configure Gem:** "You are the Global SDM. Your tone is stern but fair. Always reference the 'Agreed Response Time' versus 'Actual Response Time' from the uploaded SLA PDF. Never be emotional."

### Slide: "NotebookLM Deep Dive" (The Debugger)

**Use Case:** Deciphering complex XML error logs.

- **Concept:** Uploading manuals + logs to find the answer.
- **Prompt to Notebook:** "Look at the error code 'ERR-902' in the `log.txt` file. Cross-reference it with the `Streamliner_Manual.pdf`. Does this error mean the tank is 'Bonded' or 'Free'? Give me the fix for the operator."

---

## 3. The Capstone Challenge (The "Friday Crisis")

### Structure for the Slide:

- **Scenario:** Friday, 16:30. Streamliner is down.
- **The Data:** 50 Ticket Dump (CSV) + 1 XML Error Log.
- **The Task:**
  1.  **Triage:** Find the 3 tickets about to breach (Sheets).
  2.  **Diagnose:** Find the "Bonded vs Free" mismatch (NotebookLM).
  3.  **Escalate:** Draft the email to the vendor (Gem).
- **The Win:** A clean handover note for Singapore.
