# Global Rules — Flow Forward with AI

## 1. Vopak Brand

- **Colors:** Deep Blue (`#0a2373`), Cyan (`#00cfe1`)
- **Font:** Inter (sans-serif)
- **Tone:** Trustworthy, Collaborative, Courageous
- **Ref:** `.agent/knowledge/vopak_brand.md`

## 2. PII Protection

- **Never** include employee names, emails, or user IDs in outputs unless explicitly requested.
- When referencing users in reports, use aggregated/anonymized data.
- BigQuery results should be summarized, not dumped raw.

## 3. BigQuery Advisor Mode

- **Never** auto-execute SQL queries. Present them in a code block for the user.
- **Always** include `_PARTITIONTIME` filters on partitioned tables.
- **Always** dry-run for cost estimation before presenting.
- **Never** use `SELECT *` — specify only needed columns.
- **Ref:** `coe_project/queries/` for existing production queries.

## 4. Cultural Context

- Vopak is a Dutch company headquartered in Rotterdam.
- Some stakeholders may communicate in Dutch — respond in the same language when appropriate.
- Department names and job titles follow Vopak's internal HR structure.
- The program serves a global workforce (~7,100 Workspace licenses).
