# Orin — Phase 5 Build Handover (Claude Code)

*Version 1.0 — 9 July 2026*
*Purpose: working context for Claude Code sessions building the Orin
website. Place in the orin repo root. Supersedes nothing — HANDOVER.md
(the Cowork handover) still holds; this document adds current build
state and the Home page specification.*

---

## Read first, in this order

1. MANIFESTO.md — source of truth for every judgement call
2. positioning.md — locked one-liner and 60-second version
3. Offer.md — engagement shapes, prices, refusals
4. voice.md — how prose gets written; governs every word of page copy
5. HANDOVER.md — sitemap, site-specific copy rules, attribution,
   exclusions. Its tone notes predate voice.md and defer to it.
6. decisions.md — why things are the way they are

CLAUDE.md carries the full ten-item version of this list; the six above
are the subset this document was written against. Keep the two in step.

Do not relitigate locked decisions. If something genuinely doesn't work,
flag it to Warren and log it in decisions.md.

*Status, 2026-08-16: Phase 5 is finished and the site is v1. Everything in
"After Home" below is done, including the QA pass and the v1 declaration.
This document is maintained as live reference, not archived, so the copy
specs below are kept true to what shipped. **Where this document and the
live site disagree, the site wins** — it is v1 and the spec is the record
of how it got there.*

## Current build state (9 July 2026, superseded)

- Repo set up; /site directory is the site source
- Token layer built: DTCG JSON → pipeline → vendor/tokens.css.
  All page values resolve through tokens. No hand-written values.
- Colour and type tokens done (Inter Tight display scale, teal accent,
  dark ink palette)
- Cloudflare Pages wired; orinsystems.co is live and deploying on push
- Current live page: token pipeline demonstration ("The substrate,
  proven end-to-end")

## Standing rule for the token demo page (done)

When Home replaces the current placeholder, DO NOT delete it. Move it
to /tokens (or /colophon) and link it quietly from the footer, labelled
something like "This site runs on its own pipeline." It is a proof
artefact — technical buyers will view source.

*Followed. The page lives at `/tokens` and the footer links it with that
exact sentence. Keep it that way.*

## Next task: build Home

Six sections, top to bottom. Copy below is approved v1 — assemble it,
don't rewrite it. Small edits for flow are fine; changes of substance
go back to Warren.

### Section 1 — Hero
Eyebrow (optional): "A systems practice · Bath, UK"
  (interpunct, not an em dash — see the separator rule in HANDOVER.md)
Heading, split over two lines:
  "For teams shipping product without a full design department."
  "Orin builds the design system your developers ship from."
One button: "Get in touch" → Contact.
No illustration. The type scale is the visual.

### Section 2 — The problem
Header: "Developers are carrying the design load."
Body:
  "Most product teams are shipping without a full design department.
  Either they never had one, or they're leaner than they used to be.
  So the developers carry the design load — and every sprint they're
  reinventing components, making design calls in silos, and building
  up debt that slows the whole team down. Multiple versions of the
  same component. Fourteen shades of grey. Nobody's fault. No source
  of truth."

### Section 3 — What Orin does
Header: "Orin builds the substrate."
Body:
  "The design system, the tokens, the component library, the pipeline
  that connects Figma to the codebase. One source of truth your team
  ships from — built in your workflow, not delivered over a wall.
  This site runs on the same pipeline it sells."
Inline link at end: "View the tokens →" → /tokens

### Section 4 — How it works (compressed)
Four cards, prices visible. Was three; The Foundation was added
2026-08-12. Titles use the interpunct, and the Build's published floor
is £12,000, not the £14,000 this section specified until 2026-08-16:
  "The Diagnostic · £3,000 · 1–2 weeks. I find where your design system
  is broken and what it's costing you. Written diagnosis, useful whether
  or not we go further."
  "The Foundation · £4,000 · 2 weeks. The other way in, for a product
  that doesn't exist yet. The token layer authored and wired in, ending
  with one real screen."
  "The Build · from £12,000 · 4–6 weeks. The system, built and
  connected. Scoped from the Diagnostic — I don't price unscoped work."
  "The Retainer · £2,000/month. I stay close and the system stays
  alive. Cancel with 30 days' notice."
Link: "How it works →" → /how-it-works

### Section 5 — Proof
Header: "This works. I've measured it."
Body:
  "At Vivo Energy (contracted via Rethink), the development team had
  no design system — every developer making design calls alone. A
  simple component library, page patterns, and token setup aligned
  the team: fewer defects, less rework, and a 60 per cent saving
  in development time. The Technical Officer had something to point
  at when the business asked what changed."
Link: "Read the case studies →" → /work

### Section 6 — Close
Header: "That's the kind of problem I like to solve."
Body: "If your team is shipping without a source of truth, the
Diagnostic is where we start."
Button: "Get in touch" → Contact.

## After Home, in order (all done; v1 declared 2026-08-16)

1. **Manifesto page** — MANIFESTO.md near-verbatim. Long-form reading
   typography: 65–75ch measure, generous leading, no decoration.
2. **How it works** — one scrolling page, four sections from Offer.md,
   prices visible, ends with the single CTA. May include a softened
   "Orin isn't for everyone" section drawn from the refusals.
3. **Work** — shell page. Three cards (Vivo Energy, IDEM, KRM), title
   plus one-line summary each, clearly marked as essays coming soon.
   Do not draft the essays — that's Phase 6, done conversationally
   with Warren. *(Vivo Energy has since been written and shipped at
   `/work/vivo-energy`. IDEM and KRM still read "Essay coming" and are
   still Phase 6, so the rule still applies to those two.)*
4. **Contact** — heading, two honest sentences, mailto link. No form.
5. **QA pass** — keyboard navigation end to end; visible focus states;
   AA contrast verified; 360px layout check; Lighthouse; meta
   descriptions; OG tags (outreach links must unfurl properly);
   favicon; one-line 404 with a link home.
6. **Declare v1** — log the launch in decisions.md: date, what
   shipped, what was deferred. Then stop building.

## Component budget

Primitives only: heading set, body text, link, one primary button,
nav header, footer, section wrapper, case-study card. Build nothing
else unless a page demands it. This is a five-page site, not a
component library project.

*Held at v1, and audited 2026-08-16. What exists beyond the eight is
either an accessibility utility (`.skip-link`, `.visually-hidden`), a
typographic label rather than a component (`.eyebrow`, `.rail`,
`.card__index`), grid scaffolding (`.container`, `.section-grid`), the
hero's decorative overlay, or confined to `/tokens` (`.swatch`,
`.specimen-row`) which is machinery, not one of the five. The case-study
card is reused for the pricing cards rather than a second card being
built. Nine pages shipped against a sitemap of five; the budget still
governs the five.*

## Hard constraints

- Every value resolves through the token layer. No hardcoded values
  in components — the site is a demonstration of the practice.
- WCAG AA minimum. Real focus states, real contrast.
- Static-first. No frameworks that aren't earned. Cloudflare Pages.
- British English. First person singular. No agency-speak.
- One CTA sitewide: "Get in touch." No newsletter capture, no chat
  widgets, no secondary asks.
- Attribution rules (from HANDOVER.md): Vivo = "contracted via
  Rethink"; IDEM = personal rebuild after the original engagement
  closed, no attribution owed; KRM = fully owned.
- Never frame Orin's category as "design agency" or "design studio".
  "Design system" is fine as the artefact's name.

## Definition of done for Phase 5

A stranger lands on orinsystems.co and understands within ninety
seconds: what Orin is, who it's for, what it costs, why it's credible,
and how to get in touch. Every commit ships live. MVP over polish —
the manifesto's own rule applies to its website.
