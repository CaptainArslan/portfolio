# CLAUDE.md — Arslan Developer Portfolio
## Permanent Project Context for AI-Assisted Development

---

## Project Identity

**Project Name:** Arslan Developer Portfolio  
**Owner:** Muhammad Arslan  
**Role:** Backend & Systems Engineer  
**Purpose:** Professional portfolio that demonstrates backend engineering expertise, system thinking, and architectural authority.

---

## Source of Truth Rules

These rules are non-negotiable during all development sessions:

1. **Resume is the primary source of truth** for:
   - Identity, role, and positioning
   - Skills and technology stack
   - Real projects and employers
   - Metrics and impact statements

2. **Design files and existing folder are the source of truth** for:
   - Design direction and visual language
   - Component base and layout references
   - Asset structure and naming

3. **If any conflict exists between code and resume → update code to match resume.**

4. **Never invent** fake projects, fake employers, fake metrics, or incorrect stack items.

---

## Engineer Identity

```
Name:     Muhammad Arslan
Role:     Backend & Systems Engineer
Stack:    Laravel · PHP · MySQL · Redis · AWS · REST API
Location: Gujranwala, Pakistan (Remote-First)
Email:    am1667099@gmail.com
LinkedIn: https://www.linkedin.com/in/muhammad-arslan-390448213
```

**Core Expertise:**
- Laravel / PHP Backend Systems
- REST API Design & Middleware Architecture
- MySQL Performance & Query Optimization
- Redis Caching & Queue Management
- Payment Gateway Integration
- GoHighLevel CRM Integration & Automation
- AWS Cloud Deployments
- CI/CD Pipelines
- Real-Time & Background Processing

**Real Projects — current source of truth is `data/projects.json` / `data/featured-projects.json` (10 case studies as of this update; do not invent additional ones — new projects are added there directly from the owner or from a GitHub/live link, never guessed):**
| Project | Employer / Client | Stack |
|---|---|---|
| PayYourCell | Hegemonic Inc | Laravel, GoHighLevel, AWS, MySQL |
| Noomerik.com | Hegemonic Inc | Laravel, PHP, MySQL, REST API |
| loom.dreamhoster.com | HexaTech Solution | Laravel, Redis, AWS, PHP |
| Ylaa.com | DevZone Solutions | Laravel, PHP, MySQL, jQuery |
| Catering d'Aran | Catering d'Aran | Laravel, PHP, MySQL, REST API, Payment APIs |
| Silent Partners | Silent Partners | Laravel, PHP, MySQL, REST API, AWS |
| Waste Pilot | Arcann Waste | Next.js, TypeScript, JWT, REST API, Vercel |
| PaymentCellular | PaymentCellular | Laravel, PHP, MySQL, Payment APIs, REST API, AWS |
| Pay Cellular Plan | Pay Cellular Plan | Laravel, PHP, MySQL, Payment APIs, REST API, AWS |
| HayWork | HayWork | Laravel, PHP, MySQL, REST API, Payment integration, AWS |

Note: for the last six, "Employer / Client" names the business the project was built for (not a line on the resume) — worth confirming with the owner exactly how each relates to the resume's employer history before treating that mapping as final.

---

## Tech Stack (STRICT — Do Not Deviate)

Claude must ONLY use the following technologies. Do NOT introduce additional libraries or frameworks without explicit user approval.

### Frontend
| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| UI Library | React 18+ |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| 3D (optional) | React Three Fiber + @react-three/drei + Three.js |
| Typography | next/font (Sora + Inter) |
| Icons | lucide-react |
| Forms | react-hook-form + zod |
| Deployment | Vercel |

### Backend (Future Phase — Do Not Build Yet)
| Layer | Technology |
|---|---|
| Runtime | Node.js / Next.js API Routes |
| Email | Resend or Nodemailer |
| CMS | MDX (blog posts) |
| AI Features | OpenAI API (Fit Check scoring — future) |

**Claude must NOT introduce:** Redux, MUI, Chakra UI, Styled Components, SASS, jQuery, Vue, Angular, Express, Prisma, or any other unlisted library.

---

## Project Structure

```
/app                    Next.js App Router — pages and layouts
  /about
  /projects
  /projects/[slug]
  /projects/payyourcell
  /skills
  /blog
  /contact
  /fit-check
  layout.tsx
  page.tsx
  globals.css

/components
  /ui                   Primitive UI components (Button, Badge, Card, etc.)
  /layout               Navigation, Footer
  /sections             Large page sections (Hero, TrustMetrics, etc.)
  /three                Three.js / R3F scenes

/data                   All portfolio content (single source of truth — JSON, one file per page/section)
  about.json            Experience timeline, philosophy, tech stack, credentials
  skills.json            Skill categories for /skills (exact 5 categories below)
  projects.json          Full case studies for /projects and /projects/[slug]
  featured-projects.json Home page featured-project cards
  hero.json, capabilities.json, cta-section.json, trust-metrics.json

/lib
  utils.ts              Utility functions (cn, formatDate, slugify, etc.)
  animations.ts         Shared Framer Motion variants

/public
  /images               Optimized images
  Muhammad_Arslan_Resume.pdf   Muhammad Arslan's resume (linked from About/Hero — keep this exact filename in sync with any links to it)

CLAUDE.md               This file
package.json
tsconfig.json
tailwind.config.ts
next.config.ts
vercel.json
```

---

## Design System

### Color Tokens
```css
--background:    #F8FAFC    /* Page background */
--surface:       #FFFFFF    /* Card/panel surfaces */
--soft-surface:  #F1F5F9    /* Muted section backgrounds */
--border:        #E2E8F0    /* Default borders */
--text-primary:  #0F172A    /* Headings, important text */
--text-secondary:#475569    /* Body text, descriptions */
--text-muted:    #94A3B8    /* Labels, timestamps, captions */
--accent:        #2563EB    /* Primary accent — CTA, links, highlights */
--accent-hover:  #1D4ED8    /* Accent on hover */
--soft-accent:   #DBEAFE    /* Accent tint — backgrounds, badges */
```

### Typography
| Use Case | Font | Weight |
|---|---|---|
| Display headings | Sora | 700–800 |
| Section headings | Sora | 600–700 |
| Body text | Inter | 400–500 |
| Labels, captions | Inter | 400 |
| Code snippets | JetBrains Mono / system-mono | 400 |

**CSS Variables:**
```css
--font-sora:  var(--font-sora)
--font-inter: var(--font-inter)
```

### Spacing
Use Tailwind's default spacing scale. Prefer generous whitespace.
- Section padding: `py-20 lg:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Component gaps: `gap-6 lg:gap-8`

### Border Radius
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Badges: `rounded-full`
- Inputs: `rounded-lg`

---

## Design Rules (Non-Negotiable)

### DO use:
- Light, airy backgrounds (#F8FAFC, #FFFFFF, #F1F5F9)
- Clean serif-less typography hierarchy
- Generous whitespace
- Subtle shadows (not harsh drop shadows)
- Accent blue (#2563EB) sparingly — only for interactive/highlighted elements
- Smooth, restrained animations
- Editorial layout structure

### DO NOT use:
- Dark backgrounds or dark theme
- Cyberpunk or neon aesthetics
- Heavy gradients across large areas
- Excessive particle systems or motion
- Bright competing colors
- Generic bootstrap-style layouts
- Comic Sans, display fonts other than Sora/Space Grotesk
- Clipart-style illustrations

---

## Animation System

All animations must use **Framer Motion**. Animation should feel:
**calm · refined · premium · responsive**

### Standard Variants (defined in `/lib/animations.ts`)
```typescript
fadeInUp       // opacity 0→1, y 20→0, duration 0.6
fadeIn         // opacity 0→1, duration 0.5
staggerContainer  // staggerChildren: 0.08
scaleIn        // scale 0.95→1, opacity 0→1
slideInLeft    // x -20→0, opacity 0→1
```

### Rules
- Use `viewport={{ once: true, margin: "-100px" }}` for scroll reveals
- Keep durations between 0.4s and 0.8s
- Ease: `easeOut` for entrances, `easeInOut` for loops
- Never use `bounce` easing
- Stagger delays: 0.06–0.12s between children
- Hover lifts: `translateY: -4px` to `-6px`, never more
- Respect `prefers-reduced-motion`

---

## Component Conventions

### File Naming
- Components: `PascalCase.tsx` (`HeroSection.tsx`, `ProjectCard.tsx`)
- Pages: `page.tsx` (Next.js App Router convention)
- Utilities: `camelCase.ts`
- Data files: `camelCase.ts`

### Component Structure
```typescript
// 1. "use client" (if interactive)
// 2. Imports (React, next, framer-motion, @/components, @/lib)
// 3. TypeScript interfaces/types
// 4. Constants (variants, static data)
// 5. Component function
// 6. export default
```

### Styling Rules
- Use Tailwind CSS classes exclusively
- No inline `style={{}}` unless required for dynamic values (e.g., transform, specific px values)
- Use `cn()` from `@/lib/utils` for conditional classes
- No CSS Modules
- No Styled Components

### TypeScript Rules
- All props must be typed with interfaces
- No `any` types
- Use `React.FC` sparingly — prefer explicit return type annotation
- Export types alongside components when reused

---

## Pages — Responsibilities

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Hero, metrics, featured projects, capabilities, CTA |
| About | `/about` | Engineering philosophy, experience timeline, stack |
| Projects | `/projects` | All real projects (currently 10) with case study previews |
| Project Detail | `/projects/[slug]` | Full case study: problem, architecture, outcomes |
| Skills | `/skills` | Interactive skill categories + visual system map |
| Blog | `/blog` | Technical insights (MDX, frontend-only initially) |
| Contact | `/contact` | Real contact info + form UI |
| Fit Check | `/fit-check` | AI job fit tool — frontend UI only until backend ready |

---

## Content Rules

### Tone
- Confident, precise, technical
- No marketing fluff
- No generic phrases ("passionate developer", "team player")
- Metrics where available ("25% response time reduction", "60% query improvement")

### Skill Categories (EXACT — do not rename or add)
1. Backend Systems & API Architecture
2. Database & Performance Optimization
3. Payments & CRM Integrations
4. Cloud & Deployment Workflows
5. Real-Time & Background Processing

### Projects (use EXACT names and employers/clients — see the Real Projects table above for the current full list of 10)

---

## Fit Check Feature (Frontend UI — Future Backend)

### Purpose
User pastes a job description. System analyzes and returns a fit score with matched skills and relevant projects.

### Frontend Structure (built now)
- Textarea input for job description
- Example prompt chips
- CTA button ("Analyze Fit")
- Loading state (skeleton/spinner animation)
- Result card with:
  - Confidence score (circular progress visual)
  - Matched skills list
  - Recommended projects
  - Summary paragraph
  - CTA ("View My Projects" / "Get in Touch")

### Backend Hook (future — do not implement yet)
```
POST /api/fit-check
Body: { jobDescription: string }
Response: { score, matchedSkills, projects, summary }
```

---

## Performance Requirements

| Metric | Target |
|---|---|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |

### Performance Rules
- Lazy load all Three.js / R3F scenes with `dynamic(() => import(...), { ssr: false })`
- Use `next/image` for all images
- Use `next/font` for typography (no Google Fonts CDN)
- Avoid unnecessary `useEffect` chains
- Keep bundle size lean — no heavy icon libraries

---

## Accessibility

- All interactive elements must be keyboard-navigable
- All images must have meaningful `alt` text
- Color contrast must pass WCAG AA (4.5:1 for text)
- Focus states must be visible (`focus-visible:ring-2`)
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- Support `prefers-reduced-motion` in animation code

---

## Development Phases

| Phase | Scope | Status |
|---|---|---|
| Phase 1 | Project scaffold, config, design system | ✅ Complete |
| Phase 2 | All page layouts and sections (frontend-only) | 🔄 In Progress |
| Phase 3 | Animations, interactions, premium polish | 🔄 In Progress |
| Phase 4 | Blog (currently hardcoded posts, not MDX yet) | 🔄 In Progress |
| Phase 5 | Contact form backend (Resend API) | ✅ Complete |
| Phase 6 | Fit Check backend (AI scoring) | ⬜ Pending |
| Phase 7 | Performance optimization + Lighthouse pass | ⬜ Pending |
| Phase 8 | Production deployment on Vercel | ⬜ Pending |

---

## Claude Behavior Rules

During all development sessions, Claude must:

1. **Never introduce unlisted technologies** without explicit user approval
2. **Never redesign the architecture** unless specifically requested
3. **Never invent new features** not described in this document
4. **Never use fake content** — all text must be based on real resume data
5. **Ask clarifying questions** when requirements are ambiguous
6. **Build incrementally** — complete one section fully before moving to the next
7. **Check this file first** before making any architectural decision
8. **Keep components small** — one responsibility per component
9. **Keep the data layer separate** — content lives in `/data/*.json`, not inside components (this superseded the earlier `/lib/data.ts` plan, which was never wired up and has been removed)
10. **Flag backend dependencies** clearly when they arise in frontend work

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build & check
npm run build        # Production build
npm run lint         # ESLint check

# Deploy
vercel               # Deploy to Vercel (requires Vercel CLI)
vercel --prod        # Deploy to production
```

---

## Notes

- Resume PDF lives at `/public/Muhammad_Arslan_Resume.pdf` — the About/Hero download buttons link to that exact filename, so keep them in sync if the file is ever renamed
- All 3D scenes must use `dynamic(() => import(...), { ssr: false })` to prevent SSR errors
- The `cn()` utility (clsx + tailwind-merge) must be used for all conditional classNames
- This file should be updated whenever the project scope changes significantly

---

*Last updated: Phase 2 — Premium Frontend Build*  
*Stack version: Next.js 14, React 18, TypeScript 5, Tailwind 3, Framer Motion 11*
