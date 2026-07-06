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

## Canonical context files (read these first)

All in the orin repo root. These are the distilled output of the founding
conversations. They outrank anything else, including this document.

- MANIFESTO.md — the founding document and source of truth
- positioning.md — locked one-liner and 60-second version
- offer.md — the three engagement shapes, prices, and refusals
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
3. **Domain:** orinsystems.co (orindesign.co redirects to it).
4. **Offer:** Diagnostic (£3,000 fixed, 1–2 weeks) → Build (£14,000 base,
   scoped £12k–18k, 4–6 weeks) → Retainer (£2,000/month, 30-day cancel).
   Prices are published on the site. No day rates anywhere.
5. **Positioning posture:** never lead with the word "design" as Orin's
   category. "Design system" is fine as the buyer's word for the
   artefact; "design agency" or "design studio" is not.

## Sitemap (locked)

Five pages. FigJam reference: the Site Map board.

- **Home** — the filter. One-liner, the problem in the buyer's language,
  the three shapes compressed, the Vivo proof point, one CTA.
- **Manifesto** — top-level page with its own URL (decided 2 July 2026).
  Published close to verbatim from MANIFESTO.md. It is the About page;
  no separate About exists.
- **How it works** — one scrolling page, three sections: Diagnostic,
  Build, Retainer, in that order, with prices. Content from offer.md.
- **Work** — case study index. Three essays: Vivo Energy, IDEM, KRM.
  (Essays are Phase 6 — build the structure now, placeholder gracefully.)
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

- First person singular. Orin is Warren; don't hide behind "we" except
  where it reads naturally.
- British English.
- Honest, direct, conversational. No agency-speak, no "passionate about
  pixel-perfect experiences," no superlatives.
- Prose over bullet walls. Short sentences that can be read aloud.
- Numbers as evidence inside stories, not as headline claims. The 60%
  defect reduction at Vivo Energy lives inside its narrative.
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

- Case study essays (Phase 6) — structure the Work page to receive them.
- 3-minute positioning version — pending, lives in positioning.md when done.
- Business admin in progress: HMRC sole trader registration, business
  bank account, PI insurance, contract template.

## Working agreement

Warren drives design direction — this is his craft. Claude executes,
challenges structure and copy where warranted, and keeps decisions.md
updated when anything of consequence is decided. When in doubt, the
question is always: does this fit the manifesto?
