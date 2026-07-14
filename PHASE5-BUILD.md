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
3. offer.md — engagement shapes, prices, refusals
4. HANDOVER.md — sitemap, voice rules, attribution rules, exclusions
5. decisions.md — why things are the way they are

Do not relitigate locked decisions. If something genuinely doesn't work,
flag it to Warren and log it in decisions.md.

## Current build state (9 July 2026)

- Repo set up; /site directory is the site source
- Token layer built: DTCG JSON → pipeline → vendor/tokens.css.
  All page values resolve through tokens. No hand-written values.
- Colour and type tokens done (Inter Tight display scale, teal accent,
  dark ink palette)
- Cloudflare Pages wired; orinsystems.co is live and deploying on push
- Current live page: token pipeline demonstration ("The substrate,
  proven end-to-end")

## Standing rule for the token demo page

When Home replaces the current placeholder, DO NOT delete it. Move it
to /tokens (or /colophon) and link it quietly from the footer, labelled
something like "This site runs on its own pipeline." It is a proof
artefact — technical buyers will view source.

## Next task: build Home

Six sections, top to bottom. Copy below is approved v1 — assemble it,
don't rewrite it. Small edits for flow are fine; changes of substance
go back to Warren.

### Section 1 — Hero
Eyebrow (optional): "A systems practice — Bath, UK"
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
Three blocks, prices visible:
  "The Diagnostic — £3,000, 1–2 weeks. I find where your substrate is
  broken and what it's costing you. Written diagnosis, useful whether
  or not we go further."
  "The Build — from £14,000, 4–6 weeks. The system, built and
  connected. Scoped from the Diagnostic — I don't price unscoped work."
  "The Retainer — £2,000/month. I stay close and the system stays
  alive. Cancel with 30 days' notice."
Link: "How it works →" → /how-it-works

### Section 5 — Proof
Header: "This works. I've measured it."
Body:
  "At Vivo Energy (contracted via Rethink), the development team had
  no design system — every developer making design calls alone. A
  simple component library, page patterns, and token setup aligned
  the team: fewer defects, less rework, and a sixty per cent saving
  in development time. The Technical Officer had something to point
  at when the business asked what changed."
Link: "Read the case studies →" → /work

### Section 6 — Close
Header: "That's the kind of problem I like to solve."
Body: "If your team is shipping without a source of truth, the
Diagnostic is where we start."
Button: "Get in touch" → Contact.

## After Home, in order

1. **Manifesto page** — MANIFESTO.md near-verbatim. Long-form reading
   typography: 65–75ch measure, generous leading, no decoration.
2. **How it works** — one scrolling page, three sections from offer.md,
   prices visible, ends with the single CTA. May include a softened
   "Orin isn't for everyone" section drawn from the refusals.
3. **Work** — shell page. Three cards (Vivo Energy, IDEM, KRM), title
   plus one-line summary each, clearly marked as essays coming soon.
   Do not draft the essays — that's Phase 6, done conversationally
   with Warren.
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
