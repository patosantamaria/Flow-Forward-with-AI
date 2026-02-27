---
description: Run a Gemini adoption analysis for a department or the entire organization
---

# /analyse — Adoption Analysis

## Steps

1. **Clarify scope** — Ask: Which department? What time period? What question are we trying to answer?

2. **Check existing queries** — Review `coe_project/queries/` for a matching production query:
   - Overall adoption → `adoption_daily_pulse.sql`
   - Department drill-down → `adoption_master.sql`
   - Find champions → `champion_scout.sql`
   - Find dormant users → `dormant_users.sql`
   - App-level analysis → `app_saturation.sql`

3. **Adapt or compose** — If an existing query fits, adapt it. If not, compose a new one following:
   - Always filter `_PARTITIONTIME`
   - Always filter Active Human accounts
   - Always use Creator vs. Assistant event classification
   - Reference `.agent/knowledge/data_architecture.md` for table schemas

4. **Dry-run** — Use `estimate_query_cost` to validate cost

5. **Present** — Show the SQL in a code block with:
   - Estimated cost
   - What the results will tell us
   - Suggested follow-up analyses
   - How this connects to the 4-layer value framework (Adoption → ROI → Champions → Training)

6. **Interpret** — If the user executes and shares results, provide:
   - Key insights in plain language
   - Comparison to benchmarks (if available)
   - Recommended actions using the change management framework
   - Connection to the Gemini Personas analogy where relevant (e.g., "Gmail adoption is strong — the Chief of Staff persona resonates")
