# Orin — Cowork Handover

*Version 1.0 — 2 July 2026*
*Purpose: context for the Cowork session building the Orin website (Phase 5).
Place this in the orin repo root alongside the other canonical files.*

---

## What this session is for

Build the Orin website. Design, code, and deployment. The thinking work
(manifesto, positioning, offer, pricing) is done and locked — this session
assembles it into a live site. Do not relitigate locked decisions; if
something genuinely doesn't work, flag it and log it in decisions.md
rather than silently changing it.

*Status, 2026-08-16: that session is finished and the site is v1; see
CLAUDE.md's stopping rule. This document is maintained as live reference,
not archived, so the sections below are kept true to the shipped site. The
"done and locked" claim above no longer holds for pricing: The Foundation
was added on 12 August and the Build's published floor changed on 16
August. Locked means logged in decisions.md, not frozen.*

## Canonical context files (read these first)

All in the orin repo root. These are the distilled output of the founding
conversations. They outrank anything else, including this document.

- MANIFESTO.md — the founding document and source of truth
- positioning.md — locked one-liner and 60-second version
- Offer.md — the four engagement shapes, prices, and refusals
  (The Foundation was added 2026-08-12; this list said three until
  2026-08-16)
- voice.md — how prose gets written; governs every word of page copy
- SOUL.md — who Warren is and how he works
- decisions.md — dated log of every significant decision

## Who Warren is (compressed)

Senior designer, ~10 years, Bath, UK. Has outgrown UI design as an
identity — Orin is a systems practice, not a design agency. Works
incrementally: MVP first, refine, ship, repeat. Thinks in FigJam flows.
Stack: Figma, Style Dictionary, GitHub (canonical source), Cloudflare
(hosting), Claude Code. WCAG AA is a baseline, not a bonus. Prefers
honest pushback over validation.

## Locked decisions the site must respect

1. **One-liner:** "For teams shipping product without a full design
   department: Orin builds the design system your developers ship from."
2. **Buyer:** technical — heads of engineering, CTOs, Technical Officers.
   People close enough to the work to see the value. Copy is written in
   their language (velocity, defects, source of truth, dev overhead),
   never in designer language (brand cohesion, visual polish, delight).
3. **Domain:** orinsystems.co. This document said "orindesign.co redirects
   to it". As of 2026-08-16 it does not: `orindesign.co` returns 200 and
   serves a separate page titled "Orin Design", carrying Google Analytics
   and Rewardful tags, from Cloudflare. It is not the Orin site and not a
   redirect. Unresolved: it is live under a name that decision 5 below
   rules out. Needs Warren's DNS action, not a repo change.
4. **Offer:** four shapes, two doors. Diagnostic (£3,000 fixed, 1–2 weeks)
   for a product that exists, or Foundation (£4,000 fixed, 2 weeks) for one
   that doesn't. Either scopes the Build (published as **from £12,000**,
   scoped £12k–18k, 4–6 weeks), which feeds the Retainer (£2,000/month,
   30-day cancel). Prices are published on the site. No day rates anywhere.
   Note `Offer.md` still reads "£14,000 base" for the Build: that is the
   internal modelling figure and is deliberately not the published one
   (see decisions.md, 2026-08-16). The Foundation was added 2026-08-12.
5. **Positioning posture:** never lead with the word "design" as Orin's
   category. "Design system" is fine as the buyer's word for the
   artefact; "design agency" or "design studio" is not.

## Sitemap (locked)

Five pages in the locked sitemap. Nine shipped: the five below, plus
`/tokens` (the proof artefact), `/work/vivo-energy`, `404.html`, and the
`/og` and `/icon` source pages the social card and favicon render from.
The five are the sitemap; the other four are machinery. FigJam reference:
the Site Map board.

- **Home** — the filter. One-liner, the problem in the buyer's language,
  the four shapes compressed, the Vivo proof point, one CTA.
- **Manifesto** — top-level page with its own URL (decided 2 July 2026).
  Published close to verbatim from MANIFESTO.md. It is the About page;
  no separate About exists.
- **How it works** — one scrolling page, four sections: Diagnostic,
  Foundation, Build, Retainer, in that order, with prices, plus a
  "When it's a no". Content from Offer.md.
- **Work** — case study index. Three essays: Vivo Energy, IDEM, KRM.
  Vivo Energy is written and shipped at `/work/vivo-energy`. IDEM and KRM
  are still Phase 6 and read "Essay coming" on the index.
- **Contact** — direct. Email link, no forms-into-the-void.

Conversion logic: every case study and How it works ends with a single
CTA to Contact. One action sitewide: get in touch.

## Deliberately absent — do not add

- About page (the manifesto is the about)
- Blog/writing section (parked; see Notion "parked" page)
- Services-as-a-menu framing or the word "services" as navigation
- Newsletter capture, chat widgets, secondary CTAs
- Testimonial carousels, logo walls, stock imagery

## Voice and copy rules

- **`voice.md` in the repo root is the governing document for prose.** It
  is the writing-voice source of truth and outranks the tone notes below,
  which predate it. Read it before writing or editing any page copy.
- First person singular. Orin is Warren; don't hide behind "we" except
  where it reads naturally.
- British English.
- Honest, direct, conversational. No agency-speak, no "passionate about
  pixel-perfect experiences," no superlatives.
- Prose over bullet walls. Short sentences that can be read aloud.
- Numbers as evidence inside stories, not as headline claims. The 60 per
  cent development-time saving at Vivo Energy lives inside its narrative.
  It is a saving in development time, not a defect reduction: fewer
  defects were the mechanism, the time was the outcome. Written "60 per
  cent": digits, British, one spelling sitewide.
- **Separators.** The interpunct `·` separates metadata fields: price ·
  duration, client · attribution, size · px · family. Use it for eyebrows,
  card titles, and any label that lists discrete facts. Do not use an em
  dash for that job; the two were mixed on the same information until
  2026-08-16.
- **Em dashes in prose.** `voice.md` bans them. Three on the site are
  deliberate survivors, because they join a name to a phrase rather than
  separating metadata: the footer tagline, the case-study `h1`, and the
  manifesto signature. The `—` in the how-it-works "When it's a no" rail is
  a section marker, not prose. Everything else in body copy resolves to a
  comma, colon, or full stop. The manifesto keeps seven on stated
  rhetorical grounds; see the 2026-08-16 entries in `decisions.md` before
  changing any of this.
- Attribution rules: Vivo Energy work was "contracted via Rethink."
  IDEM is a personal rebuild done after the original Momentum Studio
  engagement closed — it is Warren's own work, no client attribution.
  KRM is fully owned end-to-end.

## Build approach

- MVP first. A live one-page version beats an unshipped five-page
  version. Ship, then extend page by page.
- Tokens from the start — the site is itself a demonstration of the
  substrate approach. Style Dictionary or equivalent token layer;
  no hardcoded values in components.
- Accessibility: WCAG AA minimum. Real focus states, real contrast.
- Performance: static-first, Cloudflare Pages deployment, no heavy
  frameworks unless earned.
- Repo: /site directory in the orin repo. GitHub is canonical.

## Open items (not this session's job, but don't block on them)

- Case study essays: structure built and Vivo Energy written. IDEM and KRM
  remain Phase 6.
- 3-minute positioning version: **done.** `positioning.md` §3-minute
  version, in the 1.1 revision of 14 July 2026.
- Business admin: HMRC sole trader registration, business bank account,
  PI insurance, contract template. Status not verifiable from the repo;
  contract templates were active work as of 2026-08-16.
- **`orindesign.co` does not redirect.** See the domain note above.

## Working agreement

Warren drives design direction — this is his craft. Claude executes,
challenges structure and copy where warranted, and keeps decisions.md
updated when anything of consequence is decided. When in doubt, the
question is always: does this fit the manifesto?
