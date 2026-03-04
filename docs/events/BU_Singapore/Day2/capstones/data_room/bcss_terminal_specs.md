# 📄 Data Room: BCSS Terminal Specifications — Crude Oil Manifold Area

## Terminal Overview

**Terminal:** BCSS (Joint Venture)
**Location:** Jurong Island, Singapore
**Operator:** Vopak (JV Partner)
**Primary Products:** Crude Oil, Condensate, Fuel Oil

---

## Crude Oil Manifold — P-501 System

### Equipment Configuration

| Item                   | Specification                                                 |
| :--------------------- | :------------------------------------------------------------ |
| **Primary Pump**       | P-501A (FAILED — awaiting replacement)                        |
| **Standby Pump**       | P-501B (under planned maintenance — unavailable until Week 3) |
| **Service**            | Sour Crude Oil with H₂S content up to 3.5% mol                |
| **Design Pressure**    | 25 barg                                                       |
| **Design Temperature** | -10°C to +120°C                                               |
| **Pipe Material**      | Duplex Stainless Steel (UNS S31803)                           |
| **Gasket Material**    | Spiral Wound with PTFE filler                                 |

### Area Classification

| Zone                 | Classification | Gas Group                                 | Temperature Class |
| :------------------- | :------------- | :---------------------------------------- | :---------------- |
| Pump House P-501     | **Zone 1**     | **IIC** (Hydrogen-containing atmospheres) | **T3**            |
| Manifold Area        | **Zone 1**     | **IIC**                                   | **T3**            |
| Pipe Rack (elevated) | Zone 2         | IIA                                       | T3                |

> ⚠️ **Critical:** All electrical equipment in the P-501 pump house and manifold area MUST carry Ex d IIC T3 certification minimum. Zone 2 equipment certification is NOT acceptable in Zone 1 areas.

### Product Characteristics — Sour Crude

| Property                  | Value                                                             |
| :------------------------ | :---------------------------------------------------------------- |
| **H₂S Content**           | Up to 3.5% mol                                                    |
| **Specific Gravity**      | 0.85 – 0.92                                                       |
| **Flash Point**           | < -20°C                                                           |
| **Operating Temperature** | 35°C – 65°C                                                       |
| **Corrosive Properties**  | Highly corrosive to Carbon Steel; requires NACE MR0175 compliance |
| **Toxicity**              | H₂S is lethal at 100 ppm; IDLH at 50 ppm                          |

### Material Requirements (per NACE MR0175 / ISO 15156)

| Component          | Required Material                                   | Reason                                   |
| :----------------- | :-------------------------------------------------- | :--------------------------------------- |
| Casing             | Duplex Stainless Steel or equivalent                | H₂S resistance                           |
| Impeller           | Duplex Stainless Steel or equivalent                | Erosion + corrosion resistance           |
| Seal Faces         | Tungsten Carbide / Silicon Carbide                  | Chemical compatibility, hardness         |
| Elastomers         | Viton (FKM) or FFKM                                 | Resistance to H₂S and hydrocarbons       |
| Seal Configuration | Double/Tandem with barrier fluid (API 682 Plan 53A) | Toxic service — single seal insufficient |

---

## OT/IT Network Architecture

### Network Segmentation

| Network                      | Access Level                         | Connected Systems                    |
| :--------------------------- | :----------------------------------- | :----------------------------------- |
| **Level 0 — OT Field**       | Restricted — no external access      | SCADA sensors, RTUs, PLCs            |
| **Level 1 — OT Control**     | Restricted — no external access      | DCS, SIS, ESD systems                |
| **Level 2 — OT Supervisory** | Restricted — approved terminals only | HMI workstations, historian          |
| **Level 3 — IT/OT DMZ**      | Controlled — firewall separated      | Data diode, patch management         |
| **Level 4 — Corporate IT**   | Standard corporate access            | Email, Office, SAP, Google Workspace |

> 🔒 **BCSS Policy:** No external device (vendor laptop, USB, diagnostic equipment) may connect to Level 0–2 networks without a formal Risk Assessment approved by the Terminal Manager and IT Security. Vendor diagnostic systems must operate in **air-gapped mode** or connect only to Level 4 networks via a dedicated, monitored VLAN.

---

## VLCC Schedule

| Vessel                 | ETA                     | Product                   | Volume     | Berth   |
| :--------------------- | :---------------------- | :------------------------ | :--------- | :------ |
| **MT Pacific Courage** | Training Date + 10 days | Sour Crude (Basrah Heavy) | 280,000 MT | Berth 3 |

**Estimated demurrage cost:** USD 45,000 – 65,000 per day of delay.

> If P-501A is not operational by the VLCC arrival, BCSS will need to request a berth delay or divert to alternative discharge — both options carry significant commercial penalties and JV Board scrutiny.
