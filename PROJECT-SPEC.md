# Project Spec — Taz Portfolio Website

Upload this file to any new chat to resume work on this project with full context.

## What this is

A static personal portfolio website for **Md Tazammul Hossain Taz** — Civil Engineer &
Technical Manager positioning for international NGO, UN, and development-sector technical
management roles. Built as 3 files only: `index.html`, `style.css`, `script.js`. No
frameworks, no build system, no npm — opens directly in a browser.

## Person / positioning

- Civil engineer, 7+ years progressive experience in humanitarian/development programmes
  in Bangladesh (shelter, WASH, DRR, climate resilience, settlement planning, community
  infrastructure).
- Current role: Technical Manager, Housing Solutions — Habitat for Humanity International,
  Dhaka (Jan 2026–present).
- Positioning target audience: UN recruiters, international NGO hiring managers, donors,
  development-sector technical managers.
- Core positioning principle (agreed after brutal critique round): lead with **evidence**
  (numbers, decisions, scope) not self-description (adjectives, skills lists, motivational
  narrative). Avoid anything that reads as generic CV padding or unverifiable claims.

## Approved Information Architecture

**Nav order (must match page section order):**
About → Case Studies → Experience → Research → Contact

**Homepage section order:**
1. Hero
2. Scale-of-authority stats strip
3. About (brief)
4. Featured/flagship case study
5. Experience snapshot (timeline)
6. Research & Technical Guidelines teaser
7. Contact / closing CTA

**Key structural decisions from the critique rounds:**
- No standalone "Skills" page/nav item — skills only appear as evidence inside case
  studies and About, never as a bare claims list.
- No org logo strip (donor/UN affiliation-branding risk) — scale-of-authority facts are
  plain text/numerals instead.
- Research section splits into two tiers: **Published/External** vs. **Internal Technical
  Outputs** (currently mostly internal — Housing Design Manual, safety procedures, QA
  tools — must stay honestly labeled, never blended with external publications).
- Case studies need a "Decisions & Trade-offs" field (not just outcomes) to signal
  seniority/judgment, not just delivery.
- Experience section = organizational/scope facts only (title, org, dates, team/budget
  scope). Case Studies = narrative/technical depth. Don't duplicate content between them.
- Stats/numbers must be dated and labeled per programme (don't blend metrics from
  different roles without attribution — this was flagged as an "exaggeration" risk).
- Contact section needs a specific, real availability statement — vague "open to
  opportunities" reads as amateur in this sector.

## Full Career Data (source: CV, uploaded in full)

### Experience (reverse chronological)
1. **Technical Manager, Housing Solutions** — Habitat for Humanity International, Dhaka
   (Jan 2026–present). National technical lead for 4 projects (Dhaka, Satkhira, Cox's
   Bazar), funded by DFAT, Green Climate Fund, HFH. Final technical reviewer/approver for
   designs, BOQs, cost estimates, procurement specs. Mentors 4 engineers. Drafted Housing
   Design Manual (under review). Introduced SharePoint engineering review system.
   Facilitated Satkhira green housing workshop.
2. **Project Manager, HDC (Humanitarian-Development Co-existence)** — BRAC, Cox's Bazar
   (Apr–Aug 2025). Led establishment of EUR 4.2M EU-funded programme (WASH, climate
   resilience, settlement planning, livelihoods) after ~18 months as programme focal point
   during design/proposal phase. Recruited/led 43-member team. Coordinated with EU, UNHCR,
   RRRC, Camp-in-Charge offices.
3. **Project Manager, Shelter** — BRAC, Cox's Bazar (May 2022–Apr 2025). Managed
   UNHCR-funded shelter programme, ~210,000 refugees, 7 camps, 3 years. ~12,000 annual
   shelter repairs. Budget holder, USD 2M+/year, 99% utilization. Supervised 35 staff (6
   direct reports). Trained 28 engineers. 71% cyclone tie-down coverage campaign.
   Post-fire reconstruction (50 shelters). Contributed to 3 successful UNHCR funding
   proposals.
4. **Senior Sector Specialist, WASH** — BRAC, Dhaka (Oct 2019–Jan 2022). Technical lead
   across 4 districts (Jamalpur, Sylhet, Bagerhat, Satkhira). Guided 8 field engineers, 4
   District Managers. Remote-commissioned UK water treatment plant during COVID. Master
   trainer (ITN-BUET initiative).
5. **Project Engineer, WASH** — BRAC, Cox's Bazar (Nov 2017–Oct 2019). IOM/DFAT-funded
   emergency WASH, ~47,000 refugees, 4 camps. Supervised ~100 emergency latrines, 40 deep
   tube wells, 2 water distribution networks. Coordinated 6 contractors.

### Education
- MSc Environmental Sciences — Jahangirnagar University (2024–2026, CGPA 3.6/4.00;
  certificate pending)
- Master of Governance & Development Studies — Jahangirnagar University (2026–expected
  2027, ongoing)
- BSc Civil Engineering — Chittagong University of Engineering and Technology (CUET)
  (2012–2018)
- Certificate, Humanitarian Crisis Management — BRAC University (2023)

### Selected Trainings
RBM (UN Women, 2024) · Strategic Project Risk Management (PMI/LinkedIn Learning, 2025) ·
Change Management for Projects (PMI/LinkedIn Learning, 2025) · Sustainable Project
Management (PMI/LinkedIn Learning, 2025) · 2030 Agenda & Gender Equality (UN Women, 2025)
· Disability-Inclusive DRR (CBM Global, 2026) · Negotiation & Strategic Influencing (BRAC,
2024) · Corruption Prevention for Managers (IFRC, 2026)

### Languages & Tools
- English: fluent, IELTS 7.0 (2020) | Bangla: native
- MS 365, Excel, PowerPoint, SharePoint, OneDrive, Kobo Toolbox, Power BI, AutoCAD, QGIS,
  SketchUp, Google Workspace

### Contact
Dhaka, Bangladesh · +88 01675291441 · tazammul.h.t@gmail.com ·
linkedin.com/in/Tazammul

## Current flagship case study (homepage)

UNHCR Shelter Programme, Cox's Bazar (BRAC, May 2022–Apr 2025) — chosen as flagship for
strongest quantified outcomes (210,000 beneficiaries, USD 2M+/99% utilization, 71%
cyclone coverage, 35 staff supervised). **Full case-study page (Context → Decisions &
Trade-offs → Outcomes) not yet drafted — homepage currently shows a summary card only.**

## Technical build

- Files: `index.html`, `style.css`, `script.js` — no other files, no build tools.
- Must open directly via `file://` — no server required.
- Vanilla JS only: mobile nav toggle, IntersectionObserver-based scroll fade-ins, active
  nav-link highlighting on scroll.
- Palette: deep teal-charcoal primary (`#1f3a3d`), warm off-white background
  (`#f6f5f2`), muted ochre accent (`#a9762f`) — deliberately non-flashy/professional.
- Serif headings (Georgia) for authority, sans body text.
- All CSS values centralized in `:root` custom properties for easy maintenance.
- Placeholder content marked inline with `<!-- UPDATE: -->` (HTML) / `/* UPDATE: */`
  (CSS) comments.

## Outstanding placeholders (need real content before launch)

1. Hero field/site photo (currently dashed-border placeholder box)
2. Flagship case study photo (currently dashed-border placeholder box)
3. CV download link (currently `href="#"` — needs real PDF path)
4. Contact section availability statement (currently generic placeholder line — needs
   Taz's real answer on relocation/remote/region preference)
5. Full flagship case-study narrative page/section (Context, Decisions & Trade-offs,
   Outcomes — beyond the current summary card)
6. Additional case studies beyond the one flagship (target: 4-6 total per approved
   Portfolio structure)
7. Full Experience page (beyond homepage snapshot)
8. Full Research & Technical Guidelines page (two-tier: external vs. internal)
9. Full About page (beyond homepage brief)

## Known-fixed issues (do not reintroduce)

- Case study card had a grid/visual bug (mismatched column heights, stray dashed seam
  down the middle) — fixed by making `.case-card-media` and content stretch to equal
  height with no gap, padding moved into `.case-card-content` only.
- Nav order previously listed Experience before Case Studies while the page body had
  Case Studies before Experience — nav now matches page order (About → Case Studies →
  Experience → Research → Contact).
