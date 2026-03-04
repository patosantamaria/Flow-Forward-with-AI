# 📄 Data Room: AI Acceptable Use Policy & IT Security Summary — BCSS

## Section 1: AI Acceptable Use Policy (Summary)

### Approved AI Tools at Vopak

| Tool                                         | Status        | Data Boundary                                   |
| :------------------------------------------- | :------------ | :---------------------------------------------- |
| **Gemini for Google Workspace** (Side Panel) | ✅ Approved   | Enterprise — data stays within Vopak tenant     |
| **Gemini Web App** (gemini.google.com)       | ✅ Approved   | Enterprise — logged in via Vopak Google account |
| **NotebookLM**                               | ✅ Approved   | Enterprise — documents stay within Vopak tenant |
| **Google Vids**                              | ✅ Approved   | Enterprise — within Workspace boundary          |
| **ChatGPT / OpenAI**                         | ❌ Prohibited | Public — data may be used for training          |
| **Claude / Anthropic**                       | ❌ Prohibited | Public — data retention unclear                 |
| **Meta AI / Llama**                          | ❌ Prohibited | Public — no enterprise agreement                |
| **Any AI tool on personal accounts**         | ❌ Prohibited | No data protection guarantee                    |

### Data Classification for AI Use

| Classification   | Examples                                                                       | AI Usage                                                     |
| :--------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **Confidential** | Client pricing, JV commercial terms, salary data, M&A information              | ❌ Never input to any AI tool                                |
| **Restricted**   | Operational data, shift logs, incident reports (anonymised), internal policies | ⚠️ Permitted in Enterprise Gemini only — anonymise PII first |
| **Internal**     | Training materials, general procedures, org charts                             | ✅ Permitted in Enterprise Gemini                            |
| **Public**       | Published safety data, annual reports, press releases                          | ✅ Permitted in any approved tool                            |

### Key Rules

1. **No PII** — Never input employee names, ID numbers, or personal data into AI tools
2. **No credentials** — Never input passwords, API keys, or system credentials
3. **Human review required** — All AI-generated content must be reviewed by a qualified person before use in any official capacity
4. **Safety override** — AI outputs related to safety procedures, Permits to Work, or emergency response must ALWAYS be verified against primary source documents by a qualified safety professional

---

## Section 2: IT Security Policy — OT/IT Boundary (Summary)

### The Air Gap Principle

BCSS operates a strict **OT/IT segregation policy** based on IEC 62443 and the Purdue Model:

- **OT Systems** (Levels 0-2): SCADA, DCS, SIS, ESD, ATG — **completely isolated** from corporate IT
- **DMZ** (Level 3): Data diode and firewall — one-way data flow from OT to IT only
- **Corporate IT** (Level 4): Email, Google Workspace, SAP, AI tools

### Vendor Access Policy

- No external device (laptop, tablet, USB drive) may connect to OT networks (Levels 0-2) without:
  1. Formal Risk Assessment approved by Terminal Manager
  2. IT Security review and approval
  3. Device scan and quarantine procedure
  4. Supervised access with logging
- Vendor diagnostic systems must operate in **air-gapped mode** or connect to a dedicated, monitored VLAN on Level 4 only
- **No vendor system may bridge OT and IT networks under any circumstances**

### AI Tools and OT Data

- AI tools (including Enterprise Gemini) must **never** be given direct access to OT system data
- Exported summaries and anonymised reports from OT systems may be analysed using approved AI tools
- Real-time OT data feeds must not be connected to any AI system without formal Architecture Review Board approval

---

## Section 3: JV-Specific Considerations

### BCSS Joint Venture Data Handling

As a JV terminal, BCSS handles data that belongs to multiple parties:

| Data Category               | Owner               | AI Policy                                                      |
| :-------------------------- | :------------------ | :------------------------------------------------------------- |
| Operational throughput data | JV (shared)         | Restricted — permitted in Enterprise Gemini with anonymisation |
| Commercial terms & pricing  | JV (confidential)   | Confidential — never input to AI                               |
| Safety data & incidents     | Vopak (as operator) | Restricted — anonymise before AI use                           |
| Employee data               | Respective employer | Confidential — never input to AI                               |
| Terminal technical specs    | JV (shared)         | Internal — permitted in Enterprise Gemini                      |

### Board Reporting

- JV Board presentations may reference AI-generated analysis but must disclose the methodology
- Any AI-generated financial projections must include a disclaimer: "AI-assisted analysis — verified by [Name, Role]"
- Competitive intelligence from AI research must be based on publicly available information only
