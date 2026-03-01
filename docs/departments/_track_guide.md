# Workshop Track Guide (Facilitator Reference)

> This guide maps each department to its workshop track and provides the cross-department collaboration schedule.

---

## Track → Department Mapping

| Track | Code       | Name                   | Departments                                                    | Capstone Theme                              | Methodology             |
| :---- | :--------- | :--------------------- | :------------------------------------------------------------- | :------------------------------------------ | :---------------------- |
| **A** | GROW       | Commercial & BD        | Commercial & BD, Customer Service                              | "Speed to Deal"                             | Search → Apply → Refine |
| **B** | ACCELERATE | Projects & Engineering | Projects, Engineering                                          | "The Risk Radar"                            | Search → Apply → Refine |
| **C** | IMPROVE    | Operations & SHEQ      | Operations, SHEQ                                               | "The Procedure Flow" / "Terminal Optimizer" | Search → Apply → Refine |
| **D** | SUSTAIN    | Maintenance            | Maintenance                                                    | "Root Cause Detective"                      | Search → Apply → Refine |
| **E** | ENABLE     | Support Functions      | HR, Finance, Communications, Audit, Procurement, IT/OT/Digital | Varies by department                        | Search → Apply → Refine |

---

## Unified Scenario: The ApexChem HMD Deal

All tracks work on the same trigger: **ApexChem Global** has submitted an RFP for **20,000 cbm of Hexamethylenediamine (HMD)** storage. Each department sees this deal from their perspective. The cross-department checks at 60 minutes force collaboration.

---

## Cross-Department Collaboration Map (at 60 min mark)

```
Track A (Commercial) ←→ Track C (Operations/SHEQ): Vapor Treatment Surcharge
Track A (Commercial) ←→ Track D (Maintenance): Q3 impossibility
Track B (Engineering) ←→ Track D (Maintenance): Gasket lead times
Track B (Engineering) ←→ Track E (Legal/Finance): VTU CAPEX approval
Track C (Operations) ←→ Track C (SHEQ): PPE and SOP alignment
Track E (HR) ←→ Track E (Communications): Reskilling timeline alignment
Track E (Finance) ←→ Track E (Audit): CAPEX approval path
Track E (IT/OT) ←→ Track E (HR): AI governance for reskilling
```

---

## How to Adapt for Any Workshop

1. **Identify which departments are attending** the workshop
2. **Pick the matching department folder** from `docs/departments/`
3. **Use the generic slides** (core curriculum) for Phase 1 and Phase 2 theory
4. **Swap in the department-specific files** for:
   - Phase 2 Guided Practice → `departments/<dept>/prompts.md`
   - Phase 3 Capstone → `departments/<dept>/capstone.md`
   - Gem Ideas → `departments/<dept>/gems.md`
5. **Prepare Data Rooms** in NotebookLM using the file lists in each capstone

---

## Data Room Preparation Checklist

For each track, prepare a NotebookLM notebook with the documents listed in the capstone's "Data Room" section. These should include:

- [ ] ApexChem RFP (shared across all tracks)
- [ ] HMD Safety Data Sheet (shared across all tracks)
- [ ] Department-specific documents (see each capstone's Data Room section)
