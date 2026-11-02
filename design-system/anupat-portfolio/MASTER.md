# Design System Master File (ui-ux-pro-max)

> **LOGIC:** When building or modifying a specific page, first check `design-system/anupat-portfolio/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below alongside the root `DESIGN.md` ("The Architecture Ledger").

---

**Project:** Anupat Kaewmee — Engineering Portfolio
**Generated & Calibrated via:** `ui-ux-pro-max`
**Creative Direction:** The Architecture Ledger (Swiss Modernism 2.0 + Bento Box Grid + Minimalist Light Mode)

---

## Global Rules

### Color Palette (Semantic Three-Accent Discipline)

| Role | Hex | CSS Variable | Usage & Semantic Rule |
|------|-----|--------------|-----------------------|
| Canvas Slate | `#F8FAFC` | `--color-canvas` | Primary page background |
| Surface White | `#FFFFFF` | `--color-surface` | Elevated cards, sticky header, architectural nodes |
| Surface Recessed | `#F1F5F9` | `--color-surface-recessed` | Architectural diagram wells, segmented tracks |
| Ink Primary | `#0F172A` | `--color-ink-primary` | Display & section headings, primary CTA fill (17.4:1 contrast) |
| Ink Body | `#334155` | `--color-ink-body` | Primary body copy & engineering highlights (10.3:1 contrast) |
| Ink Muted | `#64748B` | `--color-ink-muted` | Secondary metadata, timestamps, captions (4.76:1 contrast — WCAG AA) |
| Hairline Slate | `#E2E8F0` | `--color-border` | `1px` structural card & node borders |
| Engineering Blue | `#2563EB` | `--color-engineering-blue` | Interactive controls, navigation states, Business Lens, focus rings |
| Engineering Blue Deep | `#172554` | `--color-engineering-blue-deep` | High-contrast text on `#EFF6FF` blue tint surfaces |
| Architecture Indigo | `#4F46E5` | `--color-architecture-indigo` | System Architecture Lens, pipeline connectors, layer icons |
| Architecture Indigo Deep | `#1E1B4B` | `--color-architecture-indigo-deep` | High-contrast text on `#EEF2FF` indigo tint surfaces |
| Impact Emerald | `#047857` | `--color-impact-emerald` | Verified business outcomes, First Class Honors (GPA 3.84), copy confirmation |

**Named Color Rules:**
1. **The Semantic Accent Rule:** Never mix accent roles for decoration — Blue = interactive/navigation, Indigo = system architecture, Emerald = verified outcome/honors.
2. **The Tinted-Ink Rule:** Text placed on a tinted accent surface (`#EFF6FF`, `#EEF2FF`, `#ECFDF5`) must use a deep shade of that same hue (`#172554`, `#1E1B4B`, `#047857`) rather than neutral gray or slate.
3. **The WCAG 4.5:1 Contrast Rule:** Never use `text-slate-400` (`#94A3B8`) for readable text or metadata badges; use `text-slate-500` (`#64748B`) or darker (`text-slate-600` `#475569`) to guarantee ≥ 4.5:1 contrast on light surfaces.

---

### Typography & Bilingual Vertical Rhythm

- **English Display & Body:** `Inter`, `system-ui`, `-apple-system`, `sans-serif` (`line-height: 1.6`)
- **Thai Display & Body:** `IBM Plex Sans Thai`, `Inter`, `system-ui`, `sans-serif` (`line-height: 1.75` for upper/lower vowel and tone mark clearance)
- **Technical Monospace:** `JetBrains Mono`, `monospace` (`font-variant-numeric: tabular-nums`)

---

### Layout & Spacing System (8dp Mathematical Rhythm)

- **Container:** `max-w-6xl` (`1152px`) centered with responsive padding (`16px` mobile, `24px` tablet, `32px` desktop).
- **Grid Pattern:** 12-column Bento Grid (`lg:grid-cols-12`) for Projects, Experience + Education dual timeline (`7 cols + 5 cols`), and Skills categories.
- **Scroll Clearance:** Every targetable section (`#about`, `#projects`, `#experience`, `#education`, `#skills`, `#contact`) must include `scroll-mt-20` so sticky navigation (`64px` height) never obscures section headings.

---

## Interaction & Accessibility Standards (`ui-ux-pro-max` Audit Rules)

1. **Skip Navigation Link:** Provide a keyboard-accessible "Skip to main content" link at the top of the document that becomes visible on `:focus`.
2. **Interactive Architecture Nodes:** Allow users to click/select individual architectural pipeline nodes (`01`, `02`, `03`, `04`) in `ArchitectureDiagram` to inspect active data-flow responsibility with clear `aria-pressed` and focus states.
3. **Touch Target Minimums:** Interactive controls in navigation and contact strips must maintain comfortable tap target heights and `cursor-pointer`.
4. **Reduced Motion Compliance:** Respect `@media (prefers-reduced-motion: reduce)` by disabling smooth scroll, continuous pulse animations, and non-essential transitions when requested by the OS.
5. **No Layout-Shifting Hovers:** Use border color (`hover:border-blue-500/40`), background tint, and subtle shadow transitions (`150ms–250ms`) instead of layout-shifting scale transforms.

---

## Pre-Delivery Checklist

- [x] No emojis used as structural icons (Lucide SVG icons used throughout)
- [x] `cursor-pointer` on all clickable buttons and interactive cards
- [x] Smooth transitions (`150-250ms`) on interactive elements
- [x] Light mode text contrast ≥ 4.5:1 across all labels, steps, and body copy
- [x] Visible `:focus-visible` ring (`2px solid #2563EB`) for keyboard navigation
- [x] Skip-to-content link and `scroll-mt-20` section clearance
- [x] `@media (prefers-reduced-motion: reduce)` respected in `src/index.css`
- [x] Responsive across `375px`, `768px`, `1024px`, and `1440px`
