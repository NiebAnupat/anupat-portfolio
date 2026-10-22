# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Engineering Managers & Tech Leads** evaluating Full Stack Developer candidates for C# .NET and React roles; they need to inspect architectural understanding, system layering, API/database design responsibilities, and production engineering rigor without violating enterprise NDAs. *(Inferred from explicit specification brief)*
- **HR & Technical Recruiters** screening candidates quickly; they need immediate clarity on academic standing (First Class Honors, GPA 3.84), production experience at Siam Smile Insurance, core stack match (.NET & React), and a one-click downloadable PDF resume (`anupat-resume.pdf`) plus copyable contact details. *(Inferred from explicit specification brief)*

## Product Purpose

A production-ready, bilingual (Thai / English) engineering portfolio for **Anupat Kaewmee** (Full Stack Developer specializing in C# .NET and React). Success means visitors can immediately understand both the business outcomes and technical architecture of five internal enterprise insurance systems, switch effortlessly between Thai and English, and contact Anupat or download his resume with zero friction. *(Inferred from explicit specification brief)*

## Positioning

**Interactive Architecture View (Dual-Lens Project Showcase):** Because enterprise insurance platforms at Siam Smile Insurance are internal and bound by NDA/PDPA, projects do not rely on raw screenshots. Instead, visitors can toggle globally or per project between:
1. **Business Impact Lens (HR / Product View):** Context & challenge, implemented solution, and operational impact.
2. **System Architecture Lens (Tech Lead View):** Step-by-step interactive architectural node pipeline (`Client Layer` → `Application / API Layer` → `Persistence / Core Engine`) and specific engineering responsibilities. *(Inferred from explicit specification brief)*

## Operating Context

- Evaluated on both desktop workstations (by recruiters and hiring managers reviewing applications alongside PDF resumes) and mobile devices (via links shared in chat, email, or LINE).
- Bilingual operating environment across Thailand's corporate technology sector (`th` and `en`), requiring instant client-side switching persisted in `localStorage` and dynamic `<html lang>` typography adjustments. *(Inferred from explicit specification brief)*

## Capabilities and Constraints

- **Tech Stack:** React 19 + TypeScript + Tailwind CSS v4 + `lucide-react`, bundled via Vite and deployed on GitHub Pages (`/anupat-portfolio/`).
- **Strict Factual Integrity:** Uses only the verified metrics, dates, coursework, and five production systems from `portfolio_technical_specification.md` and `public/anupat-resume.pdf`.
- **Responsive Pipeline Constraint:** System architecture diagrams must stack vertically (`flex-col` with downward connectors) below `768px` and align horizontally (`md:flex-row` with rightward connectors) at `768px` and above.

## Brand Commitments

- **Minimalist Professional Light Mode:** Clean corporate-engineering aesthetic inspired by Stripe Docs, Linear (Light), and Vercel.
- **Pinned Palette & Typography:** Cool slate canvas (`#F8FAFC`), pure white elevated cards (`#FFFFFF`) with `1px` structural hairlines (`#E2E8F0`), royal engineering blue primary accent (`#2563EB`), architectural indigo (`#4F46E5`), and operational impact emerald (`#047857`). Typography pairs `Inter` (English), `IBM Plex Sans Thai` (Thai with `1.75` line-height for vowel/tone marks), and `JetBrains Mono` (technical layer tags and metrics). *(Pinned in `portfolio_technical_specification.md`)*

## Evidence on Hand

- Verified resume document: `public/anupat-resume.pdf`
- Complete bilingual technical specification and dataset: `portfolio_technical_specification.md` and `src/data/portfolioData.ts`
- Five production enterprise systems delivered at Siam Smile Insurance Public Co., Ltd.:
  1. `Customer Portal` (React, LINE LIFF, TypeScript, REST API)
  2. `Branch Service Platform` (C# .NET, React, SQL)
  3. `Assessment Zebra` (C# .NET, React, SQL)
  4. `Assessment Branch` (C# .NET, React, SQL)
  5. `Underwrite Branch` (C# .NET MVC, SQL)

## Product Principles

1. **Dual-Audience Clarity:** Serve both non-technical recruiters (business problem/impact) and technical leads (system flow/layering) on the same surface without overwhelming either.
2. **Zero-Friction Verification:** Keep resume download, email copy, phone action, and key credentials visible and reachable within one click from the first viewport.
3. **Bilingual Parity:** Treat Thai and English as equal first-class experiences with language-specific vertical rhythm and line-height tuning.
4. **Honest Engineering Representation:** Represent internal NDA-protected systems through truthful architectural data flows rather than fabricated UI mockups.
