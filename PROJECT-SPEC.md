# Project Spec — Taz Portfolio Website

Upload this file to any new Claude chat to resume work on this project with full context.

## What this is

A static personal portfolio website for **Md Tazammul Hossain Taz** — Civil Engineer &
Technical Manager positioning for international NGO, UN, and development-sector technical
management roles. Built as plain HTML/CSS/JS files only — no frameworks, no build system,
no npm. Opens directly in a browser via `file://`.

## Current file structure

```
/index.html          — Homepage
/experience.html      — Full Experience page (built)
/style.css            — Shared stylesheet for all pages
/script.js             — Shared vanilla JS (nav toggle, scroll fade-ins, active nav highlight)
/images/               — Photo assets (hero photo + case study photo already added by user)
```

All pages share the same `style.css` and `script.js` — any new page should reuse this
shell (see "Page template pattern" below) rather than introducing new styles/scripts.

## Person / positioning

- Civil engineer, 7+ years progressive experience in humanitarian/development programmes
  in Bangladesh (shelter, WASH, DRR, climate resilience, settlement planning, community
  infrastructure).
- Current role: Technical Manager, Housing Solutions — Habitat for Humanity International,
  Dhaka (Jan 2026–present).
- Positioning target audience: UN recruiters, international NGO hiring managers, donors,
  development-sector technical managers.
- Core positioning principle (agreed after brutal critique rounds): lead with **evidence**
  (numbers, decisions, scope) not self-description (adjectives, skills lists, motivational
  narrative). Avoid anything that reads as generic CV padding or unverifiable claims.

## Approved Information Architecture

**Nav order (must match page section order):**
About → Case Studies → Experience → Research → Contact

**Homepage section order:**
1. Hero (photo added by user)
2. Scale-of-authority stats strip (includes "MSc + BSc" combined stat — Jahangirnagar
   University & CUET)
3. About (brief)
4. Featured/flagship case study (photo added by user; summary card only — full case
   study page NOT yet built)
5. Experience snapshot (timeline) → links to `experience.html` (built)
6. Research & Technical Guidelines teaser → target page NOT yet built
7. Contact / closing CTA

**Key structural decisions from the critique rounds (do not violate these):**
- No standalone "Skills" page/nav item — skills only appear as evidence inside case
  studies and About, never as a bare claims list.
- No org logo strip (donor/UN affiliation-branding risk) — scale-of-authority facts are
  plain text/numerals instead.
- Research section splits into two tiers: **Published/External** vs. **Internal Technical
  Outputs** (currently mostly internal — Housing Design Manual, safety procedures, QA
  tools, Design Catalogue — must stay honestly labeled, never blended with external
  publications).
- Case studies need a "Decisions & Trade-offs" field (not just outcomes) to signal
  seniority/judgment, not just delivery.
- Experience page = organizational/scope facts (title, org, dates, team/budget scope,
  detailed highlights). Case Studies = narrative/technical depth with a
  "Decisions & Trade-offs" angle. Don't duplicate content wholesale between them.
- Stats/numbers must be dated and labeled per programme (don't blend metrics from
  different roles without attribution — flagged as an "exaggeration" risk).
- Contact section needs a specific, real availability statement — vague "open to
  opportunities" reads as amateur in this sector.

## Page template pattern (use for all new pages)

Every new page (Case Studies index, individual case study pages, Research page) should
follow the same shell as `experience.html`:

- Same `<head>` meta pattern (title, description, author) with page-specific title/desc
- Same sticky header/nav block, with the current page's nav link given `class="active"`
  and pointing to `index.html#section` for other items, and direct filenames
  (`experience.html`, `case-studies.html`, etc.) for pages that exist
- A `.page-header` section (eyebrow + h1 + intro paragraph) at the top, matching
  `experience.html`'s pattern
- Same footer block with `id="year"` (JS auto-populates) and back-to-top link
- Same `<script src="script.js"></script>` at the bottom — no new JS needed unless a page
  requires unique interactivity
- New CSS classes should be added to `style.css` in a clearly commented block (e.g.
  `/* ---------- CASE STUDIES PAGE ---------- */`), following the existing variable-driven
  approach (`:root` custom properties for color/spacing — never hardcode values)

## Full Career Data (source: CV, already fully incorporated into index.html and experience.html)

### Experience (reverse chronological) — full detail already on experience.html
1. Technical Manager, Housing Solutions — Habitat for Humanity International, Dhaka
   (Jan 2026–present)
2. Project Manager, HDC — BRAC, Cox's Bazar (Apr–Aug 2025) — EUR 4.2M EU-funded
3. Project Manager, Shelter — BRAC, Cox's Bazar (May 2022–Apr 2025) — UNHCR-funded,
   ~210,000 beneficiaries
4. Senior Sector Specialist, WASH — BRAC, Dhaka (Oct 2019–Jan 2022) — 4 districts
5. Project Engineer, WASH — BRAC, Cox's Bazar (Nov 2017–Oct 2019) — IOM/DFAT-funded,
   ~47,000 beneficiaries

### Education (already on experience.html)
- MSc Environmental Sciences — Jahangirnagar University (2024–2026, CGPA 3.6/4.00)
- Master of Governance & Development Studies — Jahangirnagar University (2026–ongoing)
- BSc Civil Engineering — CUET (2012–2018)
- Certificate, Humanitarian Crisis Management — BRAC University (2023)

### Trainings, Languages, Tools — already on experience.html in full

### Contact
Dhaka, Bangladesh · +88 01675291441 · tazammul.h.t@gmail.com ·
linkedin.com/in/Tazammul

## Available source material for future pages (from memory/prior conversation)

- **29-page Design Catalogue** — covers shelter, WASH, and civil infrastructure designs.
  Strong candidate for the Research & Technical Guidelines page (internal tier) or as
  supporting visual material for case studies.
- **Construction Safety Manual (Annex 6)** — rewritten with programme-specific hazard
  tables. Internal technical output — Research page material.
- **Environmental Screening Checklist** — pre-construction Environmental Assessment and
  Screening Checklist built for HFHB construction/infrastructure works. Internal
  technical output — Research page material.
- **Satkhira climate-adaptive housing workshop** — facilitator guideline development for
  a community participatory workshop. Good case-study or Research page candidate.
- Additional one-off outputs on file (logframe training materials, water quality testing
  protocol, various field reports) — lower priority, can be mentioned briefly if needed.

## THREE PAGES STILL TO BUILD (the actual task for next session)

These three homepage links currently point back to on-page anchors as placeholders and
need real destination pages:

### 1. "Read Full Case Study →" — individual case study page
- Currently on homepage linking to `#case-studies` (same section, placeholder behavior)
- Needs: a dedicated page (e.g. `case-study-shelter-coxsbazar.html`) using the approved
  case-study template: Context & Challenge → Objective → My Role & Responsibilities →
  **Decisions & Trade-offs** → Approach & Methodology → Scale & Numbers → Challenges &
  Adaptations → Outcomes & Impact → Visuals
- Subject: UNHCR Shelter Programme, BRAC, Cox's Bazar, May 2022–Apr 2025 (same one
  featured on homepage)
- Source data already exists in the Full Career Data above (fire response, funding-cut
  adaptation, material-quality dispute, cyclone campaign) — needs to be expanded into
  full narrative form, not just re-stated as bullets

### 2. "See All Projects →" — case studies index/library page
- Currently on homepage linking to `#case-studies`
- Needs: a dedicated page (e.g. `case-studies.html`) listing 4-6 flagship case studies
  as cards (per the approved Portfolio structure), each linking to its own detail page
  like #1 above
- Only one case study (Shelter, Cox's Bazar) currently has enough detail to build a full
  page — the other 3-5 need to be selected and drafted. Strong candidates from the CV:
  the EU-funded HDC programme establishment (2025), the WASH portfolio across 4 districts
  (2019-22), the emergency WASH response (2017-19), and the current Technical Manager
  role's Housing Design Manual/standards work (2026-present)

### 3. "View Research & Technical Guidelines →" — Research page
- Currently on homepage linking to `#research`
- Needs: a dedicated page (e.g. `research.html`) with the two-tier structure:
  **Published/External** (likely empty or thin — be honest if so) and **Internal
  Technical Outputs** (Housing Design Manual, Construction Safety Manual/Annex 6,
  Environmental Screening Checklist, Design Catalogue, Satkhira workshop facilitator
  guide, standard drawings/QA tools)
- Each entry: title, one-line description, organization/context, date if known, and a
  note on internal vs. external status

## Technical build notes

- Palette: deep teal-charcoal primary (`#1f3a3d`), warm off-white background
  (`#f6f5f2`), muted ochre accent (`#a9762f`) — deliberately non-flashy/professional.
- Serif headings (Georgia) for authority, sans body text.
- All CSS values centralized in `:root` custom properties in `style.css`.
- Mobile breakpoints already established at 900px and 720px — follow the same pattern
  for new page responsive rules.
- IntersectionObserver-based `.fade-in` class used throughout for scroll animations —
  reuse this class on new page content rather than inventing new animation patterns.

## Outstanding placeholders (still need real content)

1. CV download link (currently `href="#"` in index.html — needs real PDF path)
2. Contact section availability statement (currently generic — needs Taz's real answer
   on relocation/remote/region preference)
3. The three pages listed above (Case Study detail, Case Studies index, Research page)
4. Full About page (beyond homepage brief) — not yet requested but implied by original
   approved IA
