---
description: Create a department use case and matching Gem for the Flow Forward program
---

# /usecase — Create Department Use Case & Gem

## Steps

1. **Understand the context** — Ask:
   - Which department?
   - What repetitive task wastes the most time?
   - Which Workspace app is involved?
   - Who would benefit most?

2. **Map to a Persona** — Connect the use case to the Gemini Personas analogy:
   - Email task → 📬 Chief of Staff
   - Finding documents → 📚 Librarian
   - Writing content → ✍️ Co-Writer
   - Data work → 📊 Analyst
   - Presentations → 🎨 Designer
   - Meeting follow-ups → 📝 Note-Taker

3. **Classify the event type:**
   - 🎨 **Creator** (generates new content) → 15 min saved per use
   - 🧠 **Assistant** (processes existing content) → 2 min saved per use

4. **Write the use case** — Follow the format in `coe_project/toolkit/use_cases/use_cases.csv`:
   - Department, Use Case Title, Description, App, Type (Creator/Assistant), Impact
   - Write the description as a Before → After story
   - Apply the "Coffee Test" — can you explain it in 2 minutes over coffee?

5. **Design the matching Gem** — Follow the format in `coe_project/toolkit/start/gems.csv`:
   - Name, Department, Description, Prompt, Category
   - The prompt should use the "colleague" technique:
     - What context would you give a new colleague?
     - What does "good" look like?
     - What format should the output be in?

6. **Validate** — Check:
   - Does this use case pass the "Coffee Test"?
   - Is the Gem prompt specific enough (not generic)?
   - Does it reference Vopak-specific terminology?
   - Is the time-saved estimate realistic?

7. **Save** — Append to the existing CSV files or create new Markdown in `coe_project/toolkit/`
