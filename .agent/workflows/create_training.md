---
description: Design a Gemini training session for a Vopak department
---

# /training — Design Training Session

## Steps

1. **Understand the audience** — Ask:
   - Which department?
   - How many participants?
   - What Workspace apps do they use most?
   - What's their current Gemini adoption level? (Check BigQuery if needed)
   - Any specific pain points or repetitive tasks?

2. **Reference templates** — Check `docs/training/MyService_Care/` for the proven 5-doc format:
   - `00_MASTER_GUIDE.md` — Consolidated trainer reference
   - `01_Schedule.md` — Timing and activities
   - `02_Slide_Prompts.md` — Presenter notes
   - `03_Capstone_Challenge.md` — Hands-on final exercise
   - `04_Gem_Instructions.md` — Custom Gems for participants

3. **Design with the Mindshift Model** — Structure the session around transformation, not features:

   **Opening (15 min):** Introduce Gemini as a new team member, not a tool
   - Use the Gemini Personas analogy (`.agent/knowledge/flow_forward_program.md`)
   - "Today I'm introducing you to 6 new colleagues who already work here"
   - Show a 10-second "wow" demo using their real department context

   **Core (60-90 min):** Progressive exercises — Simple → Complex
   - Start with "explain to a colleague" prompting technique
   - Use department-specific scenarios (not generic examples)
   - Each exercise maps to a Gemini Persona (Librarian, Chief of Staff, etc.)

   **Capstone (30 min):** Real-work challenge
   - "Solve a real task from YOUR inbox/agenda using Gemini"
   - Participants create their own Gem as a takeaway

4. **Create deliverables:**
   - Schedule with timing
   - 3-5 hands-on exercises with department context
   - 1 Capstone Challenge
   - 1-2 custom Gems tailored to the department
   - Measurement plan: which BigQuery query to run pre/post

5. **Save** — Write all materials to `docs/training/{DepartmentName}/`
