---
description: Create branded Vopak presentation slides — convert existing slides or generate from scratch
---

# /create_slides — Branded Slide Generator

> Uses the Vopak corporate template as the base, modifying text via the Slides API. Falls back to Nano Banana image generation for slides needing custom visuals.

## Prerequisites

Before running this workflow, load:

- `.agent/knowledge/vopak_brand.md` — Color palette, typography, content guidelines
- `.agent/knowledge/slide_layouts.md` — Corporate template layout reference

## Key Reference

- **Corporate Template ID:** `1Ue-A9CY5SQ5y7wf5aOP2qd2L8b2rJCoL8V91TF7srBw`
- **Template Slide Layouts (24 slides):** Cover, Content, Agenda, 50/50 Split, Section Header, 60/40 Split, Impact Text, Map, Four-Column, KPI Dashboard, Triple Boxes, Quote, Process Flow, Timeline, Closing

## Step 1: Determine Mode

Ask the user:

> **How would you like to create your slides?**
>
> 1. **Convert** — I have an existing Google Slides URL. Transform each slide into branded Vopak slides.
> 2. **Generate** — I have a topic or content. Design and create a branded deck from scratch.

## Step 2: Extract or Design Content

### Mode A: Convert Existing Slides

1. Get the **Google Slides URL** from the user
2. Use `slides_get` and `slides_get_page` to read the source presentation structure
3. For each slide, extract: title, body text, layout type, and speaker notes
4. Present the extracted content as a numbered slide inventory for user confirmation

### Mode B: Generate From Scratch

1. Get the **topic, audience, and key messages** from the user
2. Plan the slide structure using the corporate template layouts
3. Present the outline with layout assignments for user approval
4. **STOP and wait for user approval before proceeding**

## Step 3: Map Content to Template Layouts

For each content slide, choose the best corporate template layout:

| Content Type             | Template Layout                      | Template Slide # |
| :----------------------- | :----------------------------------- | :--------------- |
| Opening                  | Cover (50/50 blue + photo)           | 1                |
| Body text, instructions  | Content (white)                      | 2                |
| Index / Agenda           | Agenda (blue + arrow)                | 3                |
| Schedule / timetable     | 50/50 Split (white + photo)          | 4                |
| Chapter break            | Section Header (solid blue)          | 6                |
| Key message + visual     | 60/40 Split (white + photo right)    | 7                |
| Three-column layout      | Three-Column (white, 3 topic areas)  | 8                |
| Full-width map           | Map (solid blue)                     | 9                |
| Four-category comparison | Four-Column (white)                  | 11               |
| KPI / metrics dashboard  | KPI Dashboard (blue, 4 big numbers)  | 12               |
| Three-pillar framework   | Triple Boxes (white, 3 cards)        | 13               |
| Quote / statement        | Quote (white, large text)            | 14               |
| Section with photo strip | Section + Photo (blue + photo strip) | 15/16            |
| Workflow / steps         | Process Flow (white, 5-step arrows)  | 17               |
| Timeline / comparison    | Timeline (white, nodes on curve)     | 18               |
| Wrap-up, Q&A             | Closing (blue, social links)         | 24               |

## Step 4: Build the Deck via Slides API

### 4a. Copy the Template

```
drive_copy_file(fileId="1Ue-A9CY5SQ5y7wf5aOP2qd2L8b2rJCoL8V91TF7srBw", name="[Presentation Title]")
```

### 4b. Read the Copy's Structure

```
slides_get(presentationId="[NEW_COPY_ID]")
```

Extract all slide object IDs and their text shape IDs from the response.

### 4c. Edit Text on Each Slide

For each slide, use `slides_insert_text` with `replaceExisting=true` to update text:

```
slides_insert_text(
  presentationId="[COPY_ID]",
  shapeObjectId="[SHAPE_ID]",
  text="[NEW TEXT]",
  replaceExisting=true,
  insertionIndex=0
)
```

Key tips:

- Use `\n` for line breaks within a shape
- Use `•` for bullet points
- Title shapes have `placeholderType: "TITLE"` or `"CENTERED_TITLE"`
- Subtitle shapes have `placeholderType: "SUBTITLE"`
- Body text shapes usually have no placeholderType but have `textPreview`

### 4d. Delete Unused Template Slides

Remove template slides that don't map to any training content:

```
slides_delete_slide(presentationId="[COPY_ID]", slideObjectId="[SLIDE_ID]")
```

### 4e. Duplicate Slides for Additional Content

If you need more slides of the same layout, duplicate an existing slide:

```
slides_duplicate_slide(presentationId="[COPY_ID]", slideObjectId="[SOURCE_SLIDE_ID]")
```

Then edit the text on the duplicated slide.

### 4f. Custom Visuals (Nano Banana Fallback)

For slides where corporate template layouts don't fit (e.g., break slides, custom illustrations), use `generate_image` with branding from `vopak_brand.md` Section 7 to create a custom image, then insert it via browser.

## Step 5: Deliver

Present the user with:

- Link to the new Google Slides presentation
- Summary of slide count and structure
- Notes on any slides needing manual adjustment (e.g., table data, images)

## Tips for Best Results

- **Use the corporate template layouts first** — they're professionally designed and on-brand
- **Only fall back to image generation** for content that can't fit any template layout
- **For dense content:** Use the Content (slide 2) or Four-Column (slide 11) layouts
- **For section breaks:** Always use Section Header (slide 6) for visual consistency
- **For comparisons:** Timeline (slide 18) works well for side-by-side comparisons
