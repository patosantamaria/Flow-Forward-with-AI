# Vopak 'Flow Forward with AI': Strategic Measurement & Value Realization Report

**To:** Roel Pot (Director Data & Analytics / AI Lead), Martijn Sleijffers (Flow Forward Program Lead)  
**From:** Patricio Santamaria, Google Consultant & Lead Trainer  
**Date:** November 23, 2025  
**Subject:** Definitive Guide: SQL Framework, Advanced Analytics & Looker Studio Implementation  
**Version:** Final (Consolidated)

---

## 1. Executive Summary

This report consolidates the technical and strategic backbone of the "Flow Forward with AI" program. We have moved beyond simple license tracking to a **Value Realization Framework** that measures four distinct layers of success: Broad Adoption, Financial ROI, Champion Enablement, and Training Impact.

### Adoption Metric Refinement: Moving Beyond License Count

The primary metric for Broad Adoption is the **Gemini Penetration Rate**. The previous method of using the fixed overall license count (e.g., ~7,100 licenses) as the denominator led to an artificially low and demotivating result. Our validated approach provides an accurate, actionable rate:

$$ \text{Gemini Penetration Rate} = \frac{\text{Active Gemini Users (Numerator)}}{\text{Active Workspace Users (Denominator)}} $$

- **Numerator (Active Gemini Users):** Human accounts with at least one active, voluntary Gemini event in the measured period.
- **Denominator (Active Workspace Users):** Human accounts performing any meaningful action in Workspace (e.g., editing a doc, posting a chat) in the measured period.

### Context-Aware Adoption: The "Base Rate" Reality

We must measure Gemini Saturation against the **Active User Base** of each specific app, not the total population.

| App Context    | Base Adoption | Strategic Implication for Gemini                                                                              |
| :------------- | :------------ | :------------------------------------------------------------------------------------------------------------ |
| **Gmail**      | 86.1% (High)  | **Primary AI Hub.** High Gemini volume here is excellent; it proves AI is embedded in the flow of daily work. |
| **Drive/Docs** | 82.8% / 58.0% | **Strong Potential.** High base traffic means we should target "Creator" actions (`help_me_write`) here.      |
| **Sheets**     | 73.5%         | **Specialized.** Usage is naturally lower.                                                                    |
| **Meet**       | 52.5%         | **Event-Driven.** Gemini usage here is limited by meeting frequency.                                          |
| **Slides**     | 41.3% (Lower) | **Niche.** Success here is measured by impact per presentation, not raw volume.                               |

> **Strategic Rule:** A "High Gmail" skew is positive. We will track App Saturation (Gemini Users in App X / Active Users in App X) to normalize these differences.

---

## 2. Defining Value: The "Creator" vs. "Assistant" Model

To measure ROI accurately, we categorize every AI interaction into two intuitive buckets based on the type of work being performed. This distinction is critical because "Creating" saves significantly more time than "Assisting."

| Modality             | Definition                                                                                                    | Strategic Value & ROI                                                                                                         | Examples                                                                                                                                        |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **🎨 The Creator**   | **Generative Work:** The user asks AI to build something new from scratch or significantly transform content. | **High Value (Growth)**<br>Est. ROI: **15 mins** saved per event.<br>Focus: Innovation, Quality, Speed to First Draft.        | • `help_me_write` (Drafting a proposal)<br>• `generate_image` (Creating visuals)<br>• `generate_formula` (Writing complex spreadsheet logic)    |
| **🧠 The Assistant** | **Processing Work:** The user asks AI to process, summarize, or retrieve existing information.                | **High Efficiency (Speed)**<br>Est. ROI: **2 mins** saved per event.<br>Focus: Consumption, Quick Answers, Mobile Efficiency. | • `summarize_thread` (Reading emails faster)<br>• `active_conversations` (Q&A with a doc)<br>• `summarize_snippet` (Mobile on-the-go summaries) |

By tracking the ratio of Creator Events to Assistant Events, we can assess the maturity of our AI adoption. A high "Creator" ratio indicates deep integration into core workflows.

---

## 3. Data Architecture Overview

> [!WARNING]
> The `Department` and `Standardized_Job_Title` columns used throughout this analysis were generated using Gemini AI to normalize raw, unstructured HR data from the source logs. While highly accurate for analytical grouping, these fields **may not 100% align with official Vopak HR records**. Do not use them for headcount reporting, compliance documentation, or any HR decision-making without cross-referencing against the official HR Master.

This reporting suite is built on a Modern Data Stack using Google BigQuery. We do not report on raw logs directly; instead, we perform an **Enrichment Layer** to ensure accuracy.

### The Data Pipeline

1.  **Ingestion:** Google Workspace exports daily activity logs to BigQuery.
2.  **Enrichment:** We join the raw Activity Logs (`t1`) with the HR Master Data (`t2`).
3.  **Filtration:** We strip out service accounts, suspended accounts, contractors, and "noise" events.
4.  **Visualization:** Final Views are fed into Looker Studio.

### Table Schema & Logic

To produce valid metrics, every query performs a `LEFT JOIN` between two primary tables:

**Table 1: The Activity Log (`t1`)**

- **Table ID:** `gsuiteadminreports-on-bigquery.Admin_Reports.activity`
- **Key Fields:** `email`, `_PARTITIONTIME`, `gemini_for_workspace` (STRUCT), `client_type`.

**Table 2: The Master Data (`t2`)**

- **Table ID:** `gmail-logs-bigquery.accounts.master_data`
- **Key Fields:** `Primary_Email`, `Job_Title`, `Location_Name`, `Location_Type`.
- **The "Active Human" Filter:** `Account_Type = 'Internal' AND Is_Active = 'Yes' AND Offboarding_Status = 'Active'`

---

## 4. The Core Foundation: Production SQL Queries

These queries form the "Pulse" of the program. They are optimized for Looker Studio with clean, underscored column headers.

### Query 1: The Master Adoption Source (Detailed User Pivot)

**Use this for:** Drill-down dashboards, calculating ROI per department, and finding specific user trends.
**Refinement:** Wide format (one row per user/day). Filters system noise. Uses Standardized_Job_Title.

_(See `coe_project/queries/adoption_master.sql` for full code)_

### Query 2: The Flow Forward AI Champion Finder

**Use this for:** Identifying training leads, spotting "struggling" departments, and drill-downs.
**Refinement:** Granular drill-down by App and Action. Filters out passive system suggestions.

_(See `coe_project/queries/champion_scout.sql` for full code)_

### Query 11: Daily Adoption Pulse (Per-App & Total)

**Use this for:** High-level executive scorecards. Calculates Active Users (Adoption) per App and in Total.

_(See `coe_project/queries/adoption_daily_pulse.sql` for full code)_

---

## 5. Advanced Intelligence Queries (3-10)

### Query 3: The "Dormant License" Detector

**Purpose:** Find active employees who have NOT used Gemini in 30 days, excluding new hires.
**Strategy:** Cost Optimization. Reallocate licenses to eager users.

_(See `coe_project/queries/dormant_users.sql` for full code)_

### Query 4: Peak Productivity & Work Patterns

**Purpose:** Heatmap of usage by Day/Hour.
**Strategy:** Optimize training schedule (e.g., "Office Hours" on Tuesday at 10 AM).

_(See `coe_project/queries/productivity_heatmap.sql` for full code)_

### Query 5: App Saturation & Affinity Analysis

**Purpose:** Compare "Standard" vs. "Gemini" usage per App Context.
**Strategy:** Identify "Low Saturation" apps to target with specific campaigns.

_(See `coe_project/queries/app_saturation.sql` for full code)_

### Query 6: Global Gemini Action Leaderboard

**Purpose:** Company-wide ranking of specific AI actions.
**Strategy:** Understand user behavior (Writing vs. Summarizing).

_(See `coe_project/queries/action_leaderboard.sql` for full code)_

### Query 7: User Sophistication & Skill Breadth

**Purpose:** Measure if users are evolving from "Single-App" novices to "Multi-App" experts.
**Strategy:** Proven metric for Training Impact.

_(See `coe_project/queries/skill_sophistication.sql` for full code)_

### Query 8: Training Impact Correlation

**Purpose:** Join the Participant Tracker (training roster) with Workspace Admin logs to measure the before/after adoption delta for trained users.
**Strategy:** The core proof of training ROI. Compares each trained user's Gemini event volume pre-training vs. post-training. Also identifies **Module Mastery** (e.g. usage of M9-specific actions like NotebookLM Citations or M10 Gems sharing emerging post-workshop).

_(See `coe_project/queries/training_impact.sql` for full code)_

### Query 9: Action Detail Log

**Purpose:** Detailed breakdown of specific Gemini actions per user/day.
**Strategy:** Behavioral deep dives and forensic analysis.

_(See `coe_project/queries/action_detail_log.sql` for full code)_

### Query 10: Workspace Noise Analyzer

**Purpose:** Breakdown Total_Workspace_Events by Event_Name.
**Strategy:** Diagnostic. Identify automated system events that skew human reporting.

_(See `coe_project/queries/noise_analyzer.sql` for full code)_

---

## 6. Looker Studio Blueprint & Scheduling

### Scheduled Query Strategy (Daily Append)

To keep dashboards fast and costs low, use Query 1 and Query 11 as daily incremental loads.

1.  **Run Once:** Run Query 1 & 11 for the full history (July 13 - Yesterday). Save as tables (`gemini_daily_pivot` and `gemini_daily_pulse`).
2.  **Schedule Daily:** Create scheduled queries for both, changing the date filter to:
    ```sql
    AND t1._PARTITIONTIME >= TIMESTAMP_SUB(TIMESTAMP(CURRENT_DATE()), INTERVAL 1 DAY)
    AND t1._PARTITIONTIME < TIMESTAMP(CURRENT_DATE())
    ```
3.  **Append:** Set the destination to Append to the respective tables.

### Calculated Fields (Looker Studio)

- **Adoption Rate:** `SUM(Total_Active_Gemini_Users) / SUM(Total_Active_Workspace_Users)` (Using Query 11).
- **ROI Cost Avoidance:** Apply the regional weighted formula to `Creator_Events` and `Assistant_Events` from Query 1.

---

_Data provenance note moved to Section 3 — see WARNING callout above._
