# Design System Document: Technical Authority & Editorial Refinement

## 1. Overview & Creative North Star
**Creative North Star: The Precision Gallery**

This design system is built to reflect the intersection of high-level engineering and minimalist aesthetics. Unlike standard portfolios that rely on rigid grids and heavy borders, this system treats the UI as an editorial gallery. It prioritizes "Technical Authority" through expansive whitespace, sophisticated asymmetry, and a focus on tonal depth rather than structural lines.

The objective is to move away from "web-template" layouts. We achieve this by using exaggerated typography scales and overlapping elements that break the container, signaling a confident, bespoke engineering mindset.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Light Edition" philosophy: cool, breathable, and calm.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established through background color shifts. 
- Use `surface` (#f8f9fb) for the main page canvas.
- Use `surface-container-low` (#f2f4f6) or `surface-container-lowest` (#ffffff) to define content blocks.
- Transition between sections using generous vertical padding rather than horizontal dividers.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Layer 0 (Canvas):** `surface` (#f8f9fb).
- **Layer 1 (Cards/Sections):** `surface-container-lowest` (#ffffff).
- **Layer 2 (Inner Nesting):** If a card needs an inner section (e.g., a code snippet or a technical spec), use `surface-container` (#edeef0).

### The "Glass & Gradient" Rule
To elevate the experience from "flat" to "premium," use Glassmorphism for persistent elements like the Navigation Bar.
- **Glass Effect:** Background `surface` at 70% opacity with a `20px` backdrop-blur.
- **Signature Textures:** For primary CTAs and Hero accents, use a subtle linear gradient: `primary` (#1550d3) to `primary-container` (#3c6bed) at a 135-degree angle. This adds a "lithographic" depth that flat hex codes lack.

---

## 3. Typography
We use a dual-typeface strategy to balance technical rigor with modern elegance.

- **Headings (Space Grotesk):** This is our "Technical Authority" font. Its geometric quirks reflect engineering precision. 
    - Use `display-lg` (3.5rem) for hero statements with a `-0.02em` letter spacing.
    - Use `headline-md` (1.75rem) for project titles.
- **Body (Inter):** The workhorse for readability. 
    - Use `body-lg` (1rem) for descriptions with a generous `1.6` line-height to ensure an editorial, breathable feel.
    - **Labels:** Use `label-md` in `on-surface-variant` (#434654) for technical metadata (e.g., "Language: Rust" or "Latency: 2ms").

---

## 4. Elevation & Depth
Hierarchy is achieved through **Tonal Layering**, not shadows alone.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card onto a `surface` (#f8f9fb) background. This creates a "soft lift" that feels architectural.
- **Ambient Shadows:** For floating elements (Modals, Hovered Cards), use a hyper-diffused shadow:
    - `0 10px 30px rgba(15, 23, 42, 0.05)` 
    - The shadow color is derived from `on-background` at 5% opacity to ensure it looks like a natural light occlusion rather than a "drop shadow."
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#c3c5d7) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary-container`), `lg` (16px) corner radius. Typography: `label-md` in Medium weight.
- **Secondary:** `surface-container-low` background with `primary` text. No border.
- **Tertiary:** Pure text with an underline that appears only on hover, using the `primary` color.

### Project Cards
- **Structure:** No borders. Use `surface-container-lowest` (#ffffff) with the `xl` (1.5rem) corner radius. 
- **Interaction:** On hover, the card should scale slightly (1.02x) and the ambient shadow should increase in spread, simulating the card "lifting" toward the user.

### Chips (Technical Tags)
- Use `surface-container-highest` (#e1e2e4) backgrounds with `on-surface-variant` text.
- Roundness: `full` (9999px) to contrast with the `16px` radius of cards.

### Input Fields
- Background: `surface-container-low`.
- Border: None by default. On focus, a `2px` solid `primary` bottom-border only. This maintains the "Editorial" feel while providing clear focus states.

### Data Visualization (Engineering Specific)
- For charts and technical diagrams, use the `tertiary` (#924700) and `secondary` (#4c5c91) accents to differentiate data streams without clashing with the primary brand blue.

---

## 6. Do's and Don'ts

### Do:
- Use **asymmetric spacing**. For example, a project description might have 80px top padding but 120px bottom padding to create a sense of movement.
- Use **large-scale illustrations** or technical schematics that bleed off the edge of the screen.
- Rely on `surface-container` shifts to group related information.

### Don't:
- **No 1px Dividers:** Never use a `<hr>` or a `border-bottom` to separate list items. Use whitespace (`16px` to `24px`) or a subtle background change.
- **No Pure Black:** Never use `#000000`. Use `on-surface` (#191c1e) for text to maintain the "Premium Calm" aesthetic.
- **No Harsh Corners:** Avoid the `none` or `sm` roundness tokens unless working on a specific technical "terminal" component. Everything else must use `lg` (16px).

---

## 7. Director's Note on Editorial Layout
When designing a page, think of it as a physical magazine spread. If a project is significant, let its title (`display-lg`) take up 50% of the viewport width. Force the eye to travel. Engineering is about the details, but the *presentation* of engineering should be about the vision. Use the tokens provided not as constraints, but as the materials for a high-end digital build.