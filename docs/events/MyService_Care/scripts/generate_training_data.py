
import csv
import random
import datetime
import os

# Configuration
OUTPUT_DIR = "docs/events/MyService_Care/sandbox_data"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 1. Generate Incident Log (CSV)
def generate_incident_log():
    filename = os.path.join(OUTPUT_DIR, "MyService_Incident_Log_Q3.csv")
    headers = ["Incident ID", "Short Description", "Priority", "State", "Created", "Business Time Left (Hours)", "Root Cause", "Assignment Group"]
    
    descriptions = [
        "ATG Polling Failure", "User Cannot Login", "Tank Level Discrepancy", 
        "Report Timeout", "API 500 Error", "Password Reset", 
        "Streamliner Connection Lost", "Truck Gate Stuck", "Work Instruction Blocked"
    ]
    
    root_causes = ["Software Defect", "Configuration Error", "User Error", "Network Outage", "Vendor Issue"]
    groups = ["MyService Care", "DevOps", "Integration Team", "Stream Support"]
    
    rows = []
    start_date = datetime.datetime.now() - datetime.timedelta(days=7)
    
    for i in range(1, 51): # 50 rows
        inc_id = f"INC-{100000 + i}"
        desc = random.choice(descriptions)
        prio = random.choice(["P1", "P2", "P3", "P4"])
        state = random.choice(["New", "In Progress", "On Hold", "Resolved"])
        
        # Logic for "Business Time Left" - Make some P1s critical (< 2 hours)
        if prio == "P1":
            time_left = float(f"{random.uniform(0.5, 4.0):.1f}")
        else:
            time_left = float(f"{random.uniform(10.0, 48.0):.1f}")
            
        created = (start_date + datetime.timedelta(hours=random.randint(1, 160))).strftime("%Y-%m-%d %H:%M:%S")
        rc = random.choice(root_causes)
        group = random.choice(groups)
        
        rows.append([inc_id, desc, prio, state, created, time_left, rc, group])
        
    with open(filename, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        writer.writerows(rows)
    print(f"Generated {filename}")

# 2. Generate Streamliner Error Log (XML/Text)
def generate_error_log():
    filename = os.path.join(OUTPUT_DIR, "Streamliner_Error_Log_Dump.txt")
    content = """
<StreamlinerMessage>
    <Header>
        <MessageID>MSG-9928374</MessageID>
        <Timestamp>2026-02-11T09:15:00Z</Timestamp>
        <Source>Vopak_MyService</Source>
        <Target>Customs_EU</Target>
    </Header>
    <Body>
        <Declaration>
            <Type>IMPORT</Type>
            <Reference>REF-2026-KK-99</Reference>
            <Goods>
                <Code>27101999</Code>
                <Quantity>5000</Quantity>
                <Unit>MT</Unit>
            </Goods>
        </Declaration>
        <Error>
            <Code>ERR-902</Code>
            <Severity>CRITICAL</Severity>
            <Description>Stock Mismatch: Insufficient Bonded Quantity.</Description>
            <Detail>
                <Field>CustomsStatus</Field>
                <Value>BONDED</Value>
                <Expected>FREE</Expected>
                <Message>The tank TK-101 requires status 'FREE' for this operation type.</Message>
            </Detail>
        </Error>
    </Body>
</StreamlinerMessage>
    """
    with open(filename, 'w') as f:
        f.write(content.strip())
    print(f"Generated {filename}")

# 3. Generate Release Specs (Text)
def generate_release_specs():
    filename = os.path.join(OUTPUT_DIR, "Release_18_Tech_Specs.txt")
    content = """
# MyService Release 18.0 - Technical Specifications
# Date: Feb 10, 2026
# Status: RELEASED

## Feature 1: Multi-Tiered Pricing Engine (MTP)
- **Technical ID:** FEAT-2024
- **Component:** Pricing_Service_v2
- **Description:** Implemented tiered logic for storage fees.
- **API Changes:** POST /api/v2/calculate_price now accepts 'tier_level' parameter (int).
- **Database:** Added 'tier_config' table to RDS.
- **User Story:** "As a Commercial Manager, I want to define different rates for high-volume customers."

## Feature 2: Terminal Gate Integration Update
- **Technical ID:** FEAT-2099
- **Component:** Gate_Connector
- **Description:** Updated polling frequency from 60s to 10s.
- **Protocol:** MQTT over WebSocket.
- **User Story:** "As a Terminal Operator, I want near-real-time truck status."

## Bug Fixes
- **BUG-991:** Fixed NullPointerException in User Login when SSO is down.
- **BUG-992:** Corrected floating point error in Tank Level display (rounding to 3 decimals).
    """
    with open(filename, 'w') as f:
        f.write(content.strip())
    print(f"Generated {filename}")

# 4. Generate SLA Contract (Text)
def generate_sla_contract():
    filename = os.path.join(OUTPUT_DIR, "SLA_Agreement_Global.txt")
    content = """
# MASTER SERVICE AGREEMENT - SERVICE LEVEL ADDENDUM
# Vendor: TechStream Global
# Client: Vopak MyService

## 4. Service Level Objectives (SLOs)

### 4.1 Priority Definitions
- **P1 (Critical):** Complete loss of service. Terminal operations halted.
- **P2 (High):** Major functionality impaired. Workaround difficult.

### 4.2 Response & Resolution Times
| Priority | Response Time (Ack) | Resolution Time (Fix) |
|----------|---------------------|-----------------------|
| P1       | 15 Minutes          | 4 Hours               |
| P2       | 30 Minutes          | 8 Hours               |
| P3       | 4 Hours             | 24 Hours              |

### 5. Penalties & Credits
- **Clause 5.1:** Failure to meet P1 Response Time results in a 5% credit of the monthly fee per incident.
- **Clause 5.2:** Failure to meet P1 Resolution Time results in a 10% credit.
    """
    with open(filename, 'w') as f:
        f.write(content.strip())
    print(f"Generated {filename}")

if __name__ == "__main__":
    generate_incident_log()
    generate_error_log()
    generate_release_specs()
    generate_sla_contract()
