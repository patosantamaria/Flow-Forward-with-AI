# M11 — Workspace Studio & Apps Script: Curriculum

> **Module:** M11 · **Duration:** 105 min net content (incl. practice) · **Standalone:** ✅ Yes (afternoon workshop)  
> **Slides:** [slides.md](slides.md) · **Phase overview:** [phase3_automate_build.md](../../phases/phase3_automate_build.md)  
> **Prerequisites:** M4 (TCF Framework); M10 (Gems) recommended.  
> **What they leave with:** 1 Studio flow running on autopilot + 1 Gemini-written Apps Script.

---

> [!IMPORTANT]
> **Studio is a personal tool.** It can draft emails (not send them), notify **you** in Chat (not a team space), and save files to **your personal Drive** (not Shared Drives). This is by design — a security feature. **Apps Script is the solution for team-shared workflows.**

---

## Part A: Workspace Studio (90 min = 30 min instruction + 60 min practice)

### What Studio Does (15 min)

> **Key message:** "Gems are your AI colleagues — they think on demand. Studio is where Gems go on autopilot. Describe what you want automated, and Studio builds a flow that runs in the background."

**The anatomy of a flow — 3 building blocks:**

| Building Block | What it does                                 | Examples                                             |
| :------------- | :------------------------------------------- | :--------------------------------------------------- |
| **Starter**    | The event or schedule that triggers the flow | "When I get an email from…" / "Every Monday at 9 AM" |
| **Steps**      | Actions the flow performs                    | Ask Gemini, draft a reply, add to a doc              |
| **Variables**  | Dynamic data passed between steps            | Sender's email, Gemini's response, a form value      |

**Three ways to create a flow:**

| Method             | How                                           | Best for                |
| :----------------- | :-------------------------------------------- | :---------------------- |
| **Create with AI** | Describe in plain language → Gemini builds it | Beginners (recommended) |
| **From Template**  | Browse the Discover page → customize          | Common use cases        |
| **Build Manually** | New flow → pick Starter → add Steps           | Power users             |

### What Studio CAN and CANNOT Do

| ✅ Studio CAN                                  | ❌ Studio CAN'T                                       |
| :--------------------------------------------- | :---------------------------------------------------- |
| Monitor your inbox and **draft** a reply       | Send emails or messages on your behalf                |
| Send a Chat notification **to yourself**       | Send Chat messages to team spaces or other people     |
| Summarize and classify content                 | Save to or read from **Shared Drives**                |
| Save a doc or sheet to **your personal Drive** | Share documents with teammates automatically          |
| Create flows triggered by your Calendar events | Cross-reference data between two separate Sheets      |
| Run on a schedule (e.g., every Monday 8 AM)    | Bulk-process files or run custom data transformations |

### Live Demo: Email Triage Flow (10 min)

1. Open [studio.workspace.google.com](https://studio.workspace.google.com)
2. In **"Describe a task for Gemini"**, type:
   > "When I receive an email with the word 'complaint' or 'urgent', classify it as High Priority, draft a professional acknowledgment reply, and send me a Chat notification with the sender name and subject."
3. Show the generated flow: Starter (email arrives) → Step 1 (classify with Gemini) → Step 2 (create a draft reply) → Step 3 (Chat notification to you)
4. Click **Test run** → show the draft in Gmail + the Chat notification to yourself.
5. Click **Turn on** → it now runs automatically for every matching email.

> **Key clarification to make explicitly:** Studio creates a **Gmail draft**, not a sent email. The Chat notification goes to **your own Chat**, not a team space. You are always in control.

### Sharing & Monitoring (5 min)

- **Share:** Click Share → "Anyone in your org with the link can make a copy" → recipients get their own personal copy.
- **Monitor:** My flows → Activity.
- **Manage:** Edit/reorder steps, Turn off instantly, Make a copy to experiment safely.

### Practice: Guided Studio Flow (30 min)

Build a **"Weekly Report Summarizer"** together:

1. Type: "Every Monday at 8 AM, find all Google Docs in my personal 'Weekly Reports' Drive folder modified in the last 7 days. Summarize each in 3 bullet points. Create a new Doc in my Drive with all summaries combined, and send me a Chat notification with a link."
2. Review the Starter (Monday 8 AM) + Steps.
3. Click **Test run** → verify the new Doc is created in your personal Drive + Chat notification to you.
4. Click **Turn on** → runs automatically every week.

> The summary Doc is saved to **your personal Drive** and the notification goes to **you**. To share the result with the team → use Apps Script (Part B).

### Practice: Solo Studio Flow (30 min)

Build a flow that solves a real personal productivity problem:

| Flow Idea         | Starter                     | AI Step                      | Output (Personal)                     |
| :---------------- | :-------------------------- | :--------------------------- | :------------------------------------ |
| Inbox Classifier  | New email arrives           | Classify by urgency/category | Gmail draft reply + Chat alert to you |
| Document Reviewer | New file in my Drive folder | Review for completeness      | Summary Doc saved to your Drive       |
| Meeting Prep      | Calendar event in 1 hour    | Gather related docs          | Draft email briefing to yourself      |
| Customer Watch    | Email from specific domain  | Sentiment analysis           | Save summary to a Sheet in your Drive |

**Most common question:** "How do I share this with my team?" → **Apps Script** (Part B) is the answer. Studio automates your personal workflow; Apps Script can push results to a Shared Drive, team email, or shared Sheet.

---

## Part B: Apps Script — Gemini Writes the Code, You Click Run (45 min)

> **Framing before starting:**  
> _"You've built AI colleagues (M10) and personal automated flows (Part A). Apps Script handles the things Studio can't do yet — and Gemini writes every single line. You describe the problem. Gemini writes the solution. You click Run. We are not learning to code today."_

### The "Last Mile" Problem (5 min)

Things Studio can't do yet:

- ❌ Move files between Shared Drives
- ❌ Pull data from one Sheet into another automatically
- ❌ Run scheduled batch operations with custom logic

Apps Script fills this gap. Gemini writes it for you.

> **Analogy:** You don't need to know how a car engine works to drive. Gemini is your mechanic. You just describe the problem.

### The 3-Step Pattern (5 min)

| Step            | What you do                                                   | What Gemini does     |
| :-------------- | :------------------------------------------------------------ | :------------------- |
| 1. **Describe** | Tell Gemini your problem in plain English                     | Writes the code      |
| 2. **Deploy**   | Copy → open a Sheet → Extensions → Apps Script → Paste → Save | Nothing — you did it |
| 3. **Run**      | Click ▶️ Run (authorize once)                                 | The script executes  |

### Live Demo: The Treasury Automation (5 min)

> A real example from a Vopak treasury team's Phase 3 session: automated a file movement between drives using Apps Script — written entirely by Gemini in 90 seconds.

**Prompt used:**

> "Write a Google Apps Script that moves a file from My Drive to a Shared Drive folder. The file ID and folder ID should be variables I can easily change at the top. Add comments explaining each line."

Copy → Extensions → Apps Script → Paste → Run. Done.

**Key message:** "The code is Gemini's — not yours. Your job is to describe the problem clearly."

### Practice: Automate One Task with Gemini (30 min)

**Step 1 — Identify (5 min):** Find a gap that Studio couldn't fill:

- Moving/copying files between drives
- Pulling data from one Sheet into another
- Generating a document from a template on a schedule

**Step 2 — Describe (10 min):** Use this template:

> "Write a Google Apps Script that [WHAT YOU WANT]. The [INPUT/IDs] should be variables at the top I can easily change. Add comments explaining each step."

**Step 3 — Deploy & Run (15 min):**

1. Copy Gemini's output → any Sheet → Extensions → Apps Script → Paste → Run.
2. **If it fails:** Copy the error → paste back to Gemini → "Fix this error: [ERROR]."
3. **If it works:** Set a time trigger if applicable (Edit → Triggers → Every day at X AM).

> [!CAUTION]
> **IT/OT — Shadow IT Prevention:** Any Apps Script that accesses shared data (Shared Drives, team Sheets, Gmail distribution lists) **must be logged with the IT team**. Personal scripts are fine to keep private; any script that touches shared team resources or runs on a schedule must be registered. This prevents Shadow IT and ensures business continuity when people change roles.

---

## Facilitator Preparation Checklist

- [ ] Confirm all participants have Workspace Business/Enterprise licence (5 days ahead)
- [ ] Confirm Apps Script is not organizationally blocked
- [ ] Pre-create "Tone Translator" and "Gem Architect" Gems for demos
- [ ] Prepare 2 pages of sample meeting notes for Practice A
- [ ] Test Workspace Studio access — do a full test run of the Email Triage demo
- [ ] Pre-build one Studio flow template for the demo (ready to show "Turn on")
- [ ] Have 2–3 real file IDs and Shared Drive folder IDs ready for the Apps Script demo
- [ ] Set up Google Chat space for the workshop (for sharing Gem links and flows)
- [ ] Have the feedback survey QR code on the closing slide
- [ ] Know the AI Champions nominees — plan the closing recognition moment
