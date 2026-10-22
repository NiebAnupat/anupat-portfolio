---
name: Anupat Kaewmee — Engineering Portfolio
description: Minimalist corporate-engineering light-mode design system with interactive dual-lens architecture diagrams and bilingual (TH/EN) typographic precision.
colors:
  engineering-blue: "#2563eb"
  engineering-blue-tint: "#eff6ff"
  engineering-blue-border: "#bfdbfe"
  engineering-blue-deep: "#172554"
  architecture-indigo: "#4f46e5"
  architecture-indigo-tint: "#eef2ff"
  architecture-indigo-border: "#c7d2fe"
  architecture-indigo-deep: "#1e1b4b"
  impact-emerald: "#047857"
  impact-emerald-tint: "#ecfdf5"
  impact-emerald-border: "#a7f3d0"
  canvas-slate: "#f8fafc"
  surface-white: "#ffffff"
  surface-recessed: "#f1f5f9"
  hairline-slate: "#e2e8f0"
  hairline-hover: "#cbd5e1"
  hairline-strong: "#94a3b8"
  ink-primary: "#0f172a"
  ink-body: "#334155"
  ink-muted: "#64748b"
typography:
  display:
    fontFamily: "'Inter', 'IBM Plex Sans Thai', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Inter', 'IBM Plex Sans Thai', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Inter', 'IBM Plex Sans Thai', system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Inter', 'IBM Plex Sans Thai', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink-primary}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-accent:
    backgroundColor: "{colors.engineering-blue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  chip-architecture:
    backgroundColor: "{colors.architecture-indigo-tint}"
    textColor: "{colors.architecture-indigo}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  callout-impact:
    backgroundColor: "{colors.impact-emerald-tint}"
    textColor: "{colors.impact-emerald}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

# Design System: Anupat Kaewmee — Engineering Portfolio

## Overview

**Creative North Star: "The Architecture Ledger"**

The Architecture Ledger treats a software engineer's portfolio like a living technical specification from Stripe Docs or Linear (Light). Rather than decorating enterprise work with dark cyber gradients or synthetic mockups, the interface uses crisp paper-white containers on a cool slate canvas, `1px` structural hairlines, and semantic color coding that distinguishes business outcomes from system architecture.

Every visual element serves comprehension and verification. When a recruiter scans the page, academic standing (`GPA 3.84`, First Class Honors) and operational outcomes surface in calm emerald callouts. When a Tech Lead toggles to the System Architecture lens, indigo-badged node pipelines illustrate exact client, API, and persistence responsibilities across mobile and desktop viewports.

**Key Characteristics:**
- Daylight-first corporate-engineering surface hierarchy (`#F8FAFC` canvas, `#FFFFFF` cards, `#F1F5F9` recessed diagram wells).
- Semantic three-accent discipline: Engineering Blue for interactive controls, Architecture Indigo for system layers, and Impact Emerald for verified business outcomes and academic honors.
- Bilingual typographic precision with automatic vertical rhythm adaptation between English (`line-height: 1.6`) and Thai (`line-height: 1.75`).
- Interactive Dual-Lens switching (global and per-card) that transforms prose case studies into structured architectural node pipelines.

## Colors

A high-contrast daylight palette anchored in cool slate neutrals with three strictly assigned semantic accents.

### Primary
- **Engineering Blue** (`#2563EB`): Primary interactive accent for active navigation states, global Business Lens selection, primary contact triggers, and focus rings. Paired with **Engineering Blue Tint** (`#EFF6FF`), **Engineering Blue Border** (`#BFDBFE`), and **Engineering Blue Deep** (`#172554`) for high-contrast text on tinted chips.

### Secondary
- **Architecture Indigo** (`#4F46E5`): Dedicated exclusively to the System Architecture lens, architectural flow connectors, and monospace technology stack badges. Paired with **Architecture Indigo Tint** (`#EEF2FF`), **Architecture Indigo Border** (`#C7D2FE`), and **Architecture Indigo Deep** (`#1E1B4B`).

### Tertiary
- **Impact Emerald** (`#047857`): Reserved for verified operational impact callouts, First Class Honors (`3.84 GPA`) academic credentials, clipboard copy confirmation states, and engineering radar highlights. Paired with **Impact Emerald Tint** (`#ECFDF5`) and **Impact Emerald Border** (`#A7F3D0`).

### Neutral
- **Canvas Slate** (`#F8FAFC`): Primary page background providing subtle contrast behind pure white cards.
- **Surface White** (`#FFFFFF`): Elevated card surface, sticky header base, and architectural node surface.
- **Surface Recessed** (`#F1F5F9`): Secondary well surface used for architectural diagram canvases, segmented control tracks, and metadata badges.
- **Hairline Slate** (`#E2E8F0`) & **Hairline Hover** (`#CBD5E1`): `1px` structural borders defining card and node boundaries.
- **Ink Primary** (`#0F172A`), **Ink Body** (`#334155`), & **Ink Muted** (`#64748B`): Three-tier text hierarchy ensuring WCAG AAA/AA contrast across all light surfaces.

### Named Rules
**The Semantic Accent Rule.** Never mix accent roles for decoration: Blue means interactive/navigation, Indigo means system architecture, and Emerald means verified outcome/honors.
**The Tinted-Ink Rule.** Text placed on a tinted accent surface (`#EFF6FF`, `#EEF2FF`, `#ECFDF5`) must use a deep shade of that same hue (`#172554`, `#1E1B4B`, `#047857`) rather than neutral gray or slate.

## Typography

**Display & Body Font:** `Inter` (English) paired with `IBM Plex Sans Thai` (Thai), with system sans-serif fallbacks.
**Label/Mono Font:** `JetBrains Mono` (technical stack tags, architectural step indices, GPA/metrics numerals, and language codes).

**Character:** Crisp, geometric, and unpretentious—pairing the legibility of `Inter` with the modern loopless/loop-balanced clarity of `IBM Plex Sans Thai` and the technical precision of `JetBrains Mono`.

### Hierarchy
- **Display** (`700` weight, `clamp(1.875rem, 4vw, 3rem)`, `1.15` line-height, `-0.025em` tracking): Hero identity headline (`Anupat Kaewmee` / `อนุภัทร แก้วมี`).
- **Headline** (`700` weight, `clamp(1.5rem, 2.5vw, 1.875rem)`, `1.25` line-height, `-0.02em` tracking): Major section headings (`Projects`, `Experience`, `Education`, `Skills`, `Contact`).
- **Title** (`700` weight, `1.25rem` / `20px`, `1.35` line-height): Project card titles, job roles, and university name.
- **Body** (`400` weight, `0.875rem–1rem` / `14px–16px`, `1.6` EN / `1.75` TH line-height, `65ch` max measure): Case study problem/solution descriptions and experience highlights.
- **Label** (`600` weight, `0.75rem` / `12px`, `JetBrains Mono`, `tabular-nums`): Technology stack pills, architectural layer headers, date ranges, and GPA metrics.

### Named Rules
**The Bilingual Breathing Room Rule.** Dynamically bind `lang="th"` or `lang="en"` on `<html>` so Thai copy automatically receives `line-height: 1.75` to accommodate upper and lower vowel/tone marks without clipping.
**The No-Kicker Rule.** Section headings stand on their own typographic weight; never place decorative uppercase eyebrows or arbitrary section numbers above `<h2>` headings.

## Layout

- **Container:** `max-w-6xl` (`1152px`) centered with mobile-first horizontal padding (`16px` default, `24px` at `640px+`, `32px` at `1024px+`).
- **Responsive Breakpoints:**
  - `< 640px` (Mobile): Single-column stack (`grid-cols-1`), full-width primary CTAs, vertical architecture flow diagrams (`flex-col` with downward arrows), collapsible mobile drawer.
  - `>= 640px` (`sm`): Inline CTA buttons, 3-column hero metrics strip.
  - `>= 768px` (`md`): 2-column project grid (`md:grid-cols-2`), horizontal desktop navigation bar, horizontal architecture flow diagrams (`md:flex-row` with rightward arrows).
  - `>= 1024px` (`lg`): 12-column Bento grid (`lg:grid-cols-12`) with flagship project spans and side-by-side Experience (7 columns) & Education (5 columns) dual timeline.

## Elevation & Depth

The system uses **structural hairline layering** reinforced by an ultra-subtle resting whisper shadow. Depth comes from surface contrast (`#FFFFFF` elevated over `#F8FAFC`, with `#F1F5F9` recessed wells inside cards) rather than heavy drop shadows.

### Shadow Vocabulary
- **Structural Whisper** (`box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`): Applied to primary white cards and interactive pills on the slate canvas.

### Named Rules
**The Hairline First Rule.** Every elevated surface is bounded by a `1px solid #E2E8F0` border that shifts toward `#CBD5E1` or `rgba(37, 99, 235, 0.4)` on hover. Never use wide blurry drop shadows or colored neon glows.

## Shapes

- **Cards & Containers:** Generous, clean `12px` (`rounded-xl`) exterior radius for project, experience, education, and skill cards; `16px` (`rounded-2xl`) for the footer contact banner.
- **Inner Wells & Controls:** `8px` (`rounded-lg`) for buttons, segmented switchers, and architectural node cards; `6px` (`rounded-md`) for monospace technology badges.
- **Filter & Status Pills:** Full capsule radius (`9999px`) reserved strictly for category filter pills and the hero academic honors badge.

## Components

### Buttons
- **Shape:** Gently rounded corners (`8px` radius).
- **Primary (`button-primary`):** Deep slate ink (`#0F172A`) background with white text (`#FFFFFF`), `12px 20px` padding, shifting to `#1E293B` on hover. Used for the primary Resume PDF download action.
- **Accent (`button-accent`):** Engineering Blue (`#2563EB`) background with white text, shifting to `#1D4ED8` on hover. Used for Contact CTAs and active global Business lens toggle.
- **Secondary (`button-secondary`):** Pure white (`#FFFFFF`) background with `#334155` text and `1px solid #CBD5E1` border, shifting to `#F8FAFC` background and `#2563EB` text on hover.

### Chips
- **Style:** Compact monospace badges (`6px` radius, `2px 8px` padding, `12px` `JetBrains Mono`).
- **State:** Neutral recessed (`#F1F5F9` background, `#1E293B` text, `#E2E8F0` border) for card tech lists; Architecture Indigo (`#EEF2FF` background, `#4F46E5` text, `#C7D2FE` border) inside architectural flow nodes.

### Cards / Containers
- **Corner Style:** `12px` radius (`rounded-xl`).
- **Background:** Pure white (`#FFFFFF`) on `#F8FAFC` canvas.
- **Shadow Strategy:** Structural Whisper shadow paired with `1px solid #E2E8F0`.
- **Internal Padding:** `20px` on mobile, `24px` on `640px+`.

### Navigation
- **Sticky Header:** `64px` height, `rgba(255, 255, 255, 0.85)` background with `backdrop-filter: blur(12px)` and `1px solid #E2E8F0` bottom border. Includes segmented `TH | EN` language switcher and mobile drawer below `768px`.

### Interactive Architecture Diagram (`ArchitectureDiagram`)
- **Structure:** Recessed well (`#F1F5F9`, `12px` radius, `16px` padding) containing sequential step nodes (`#FFFFFF`, `8px` radius, `1px solid #E2E8F0`) connected by circular `24px` arrow tokens (`ArrowDown` on `< 768px`, `ArrowRight` on `>= 768px`).

## Do's and Don'ts

### Do:
- **Do** keep the page strictly in Minimalist Light Mode (`#F8FAFC` canvas, `#FFFFFF` cards, `#0F172A` headings).
- **Do** support both global and per-card toggling between `Business Impact` and `System Architecture` views.
- **Do** use `tabular-nums` on all GPA metrics, counts, step indices, and phone numbers.
- **Do** theme browser defaults (`::selection`, `:focus-visible`, scrollbars, caret) to match Engineering Blue (`#2563EB`).

### Don't:
- **Don't** use dark-mode backgrounds, neon gradients, or gradient text.
- **Don't** place neutral gray/slate text on colored pastel backgrounds (`#EFF6FF`, `#EEF2FF`, `#ECFDF5`); always tint the text to the matching deep hue.
- **Don't** add decorative two-axis CSS grid-line backgrounds or uppercase eyebrow kickers above section headings.
- **Don't** fabricate screenshots or metrics for internal NDA-bound insurance systems.
