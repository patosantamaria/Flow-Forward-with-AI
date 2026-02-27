# Vopak Design System & Branding Tokens (v3.0)

## 1. Design Tokens (CSS Variables)

Use these variables as the foundation for all styling:

```css
:root {
  /* Primary Colors */
  --vopak-deep-blue: #0a2373; /* RGB(10, 35, 115) */
  --vopak-cyan: #00cfe1; /* RGB(0, 207, 225) */

  /* Secondary Colors */
  --vopak-light-blue: #009ef5;
  --vopak-cobalt: #283ce1;
  --vopak-orange: #fc7000;
  --vopak-green: #52d400;
  --vopak-steel: #46555a;
  --vopak-grey: #e1e1e1;

  /* Typography */
  --font-family-primary: "Inter", sans-serif; /* Corporate Primary */
  --font-family-system: "Arial", sans-serif; /* Corporate Alternative */

  /* UI Constants */
  --border-width-thin: 0.5pt;
}
```

## 2. Global UI Logic

**Alignment:** All text and containers must be **Left Aligned**.

**Typography Hierarchy:**

- **Headings:** Inter, Regular (Semibold allowed only for emphasis), Color: `--vopak-deep-blue`.
- **Body:** Inter, Regular/Light, Color: `--vopak-deep-blue`.
- **STRICT CONSTRAINT:** NEVER use Bold for Titles, Headings, or Subtitles. Bold is strictly reserved for highlighting specific words within a sentence.

**Buttons:**

- **Primary:** Background `--vopak-deep-blue`, Text White.
- **Active/Highlight:** `--vopak-cyan`.

### Logos

- **Deep Blue (Primary):** `https://storage.googleapis.com/vopak-asset-library-prod/raw/elements/1gMn-PsnboxkQ7hpJCWMDXImOCsf9C3qO_Logo_VOPAK_deepblue_300_RGB.png`
- **White (Dark Mode/Overlay):** `https://storage.googleapis.com/vopak-asset-library-prod/raw/elements/1llsQNf8T1hY9yTLBf3CRpQYDSJmQjN79_Logo_VOPAK_diap_300_RGB.png`

## Corporate Assets (Firestore)

- **Project ID:** `image-describer-476013`
- **Collection:** `elements`
- **Access:** Use `v1` REST API (ReadOnly).
- **Storage Bucket:** `vopak-asset-library-prod`

## 3. Component Specifications

**Logo:** Horizontal only. Icon left, word-mark right. On light bg use Deep Blue; on dark bg use White. **Never black.**

**Flow Forward Arrows:**

- **Left/Backward:** Deep Blue (on white) or White (on deep blue).
- **Right/Forward:** MUST be Cyan (`#00cfe1`).
- **Alignment:** Text left of arrow = `text-align: right`. Text right of arrow = `text-align: left`.

**Icons:** Thin lines, solid colored fills.

- Light Mode: Deep Blue + Cobalt.
- Dark Mode: White + Cyan.

## 4. Content Strategy (Voice, Tone & Culture)

**The Vopak Voice**
Our voice reflects our role in providing essential infrastructure. It is built on three pillars:

1.  **Trust:** "Trust is earned every day."

    - **Do:** Use language emphasizing reliability, safety, transparency, and consistency.
    - **Don't:** Use hedging words ("may", "possibly", "hope to") or over-promise.

2.  **Collaboration:** "Together is better."

    - **Do:** Use inclusive language ("we", "let's", "partnerships").
    - **Don't:** Use isolationist or commanding language ("must", "ought").

3.  **Courage:** "We create the future."
    - **Do:** Use proactive, future-focused language ("driving progress", "accelerate", "can-do").
    - **Don't:** Use passive, problem-focused, or overly cautious language.

**Writing Principles (Be Human)**

- **Be Relevant:** Understand the audience and the "why".
- **Be Simple:** Write less, say more. No jargon. Front-load important info.
- **Be Human:** Write like a person, to a person. Use personal pronouns ("we", "you"). Vary sentence length.

**Tone Matrix**

- **Matter-of-fact / Formal:** Annual reports, legal docs. (Professional, Clear, Direct).
- **Matter-of-fact / Casual:** Internal emails, intranet. (Direct, Informative, Warm, Empathic).
- **Enthusiastic / Formal:** Marketing releases, strategic announcements. (Inform, Inspire, Professional Excitement).
- **Enthusiastic / Casual:** Social media, celebrations. (Positive, Energetic, Engaging).

## 5. Imagery Constraints

- **Style:** Authentic, industrial-style photos. Use depth/layering.
- **Layout:** "Duo-imagery" (split-screen) representing Narrative: Action (Left) -> Impact (Right).

## 6. Dark Mode / Glassmorphic UI Patterns

When building UIs on Vopak Deep Blue backgrounds, use these patterns for visibility and brand consistency:

### Container & Card Styling

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1); /* Tailwind: bg-white/10 */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Tailwind: border-white/20 */
  backdrop-filter: blur(8px);
}
```

### Toggle/Switch Components

- **Unchecked (OFF):** `bg-white/20` – Ensures visibility on dark backgrounds.
- **Checked (ON):** `bg-vopak-cyan` (`#00cfe1`) – High-contrast active state.

### Input Fields

- **Background:** `bg-white/10` or `bg-[#6c7ba9]`
- **Border:** `border-white/20` or `border-transparent`
- **Focus Ring:** `focus:ring-vopak-cyan`
