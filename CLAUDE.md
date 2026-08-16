# Orin — working context for Claude Code

This is a systems practice's own website: a five-page static site that
runs on its own token pipeline. The site *is* the proof of the practice,
so how it's built matters as much as what it says.

## Read first, in this order

1. `MANIFESTO.md` — source of truth for every judgement call
2. `positioning.md` — locked one-liner and 60-second version
3. `Offer.md` — engagement shapes, prices, refusals
4. `HANDOVER.md` — sitemap, voice rules, attribution rules, exclusions
5. `PHASE5-BUILD.md` — approved page copy and the constraints
6. `design.md` — layout principles; how tokens become page composition
7. `BUILD-SEQUENCE.md` — the build order and the Step-0 foundation gaps
8. `SETUP.md` — the token pipeline runbook and the one loop
9. `decisions.md` — why things are the way they are

Do not relitigate locked decisions. If something genuinely doesn't work,
flag it to Warren and log it in `decisions.md`.

## How this repo works

- `tokens/` is the source of truth for every value. `tokens/src/*.json`
  (DTCG) is the ONLY place colours, sizes, families, spacing, and radius
  are authored.
- The one loop: **edit `tokens/src/*.json` → `npm run build` → `npm run
  sync` → use the token.** `npm test` (in `tokens/`) runs the whole chain
  plus both guardrails.
- `site/` consumes the **semantic** token layer only, via `vendor/
  tokens.css` (synced from the build — never edit it by hand, never read
  from `dist/`). `site/styles.css` holds semantic aliases + local layout
  vars only.
- Two token layers exist: primitives (`neutral`, `teal`) and semantic
  (`colour/text`, `colour/background`, `colour/border`). There is no
  component-token layer yet, and MVP does not add one.

## Guardrails that do not move

- **Every value resolves through the token layer.** A value the design
  needs but doesn't have is a TOKEN PROPOSAL — edit the JSON, rebuild,
  sync. Never add a literal colour/size/family to `styles.css` or a page.
- **`npm test` green before every push.** From the repo root it runs
  `verify:deliverable` (does `deliverable.md` still describe the real
  client pipeline?) then the token chain in `tokens/` — report 8/8,
  verify-build clean. CI does not run these; protection is local.
- **WCAG AA minimum.** Real focus states, real contrast.
- **Static-first.** No frameworks that aren't earned. Cloudflare Pages,
  output dir `site`, no site build step.
- **British English. First person singular. No agency-speak.**
- **One CTA sitewide: "Get in touch."** No newsletter, no chat widget,
  no secondary asks.
- **Component budget** (PHASE5-BUILD.md): primitives only — heading set,
  body, link, one primary button, nav, footer, section wrapper,
  case-study card. Build nothing else unless a page demands it.
- Never frame Orin as a "design agency" or "design studio." "Design
  system" is fine as the artefact's name.
- Attribution: Vivo = "contracted via Rethink"; IDEM = personal rebuild,
  no attribution owed; KRM = fully owned.

## Working method

Substrate first, then assembly, ship live as you go. Lock the primitive
kit once; pages become composition, not design. Design in the browser —
no Figma round-trip for this build. MVP over polish: the moment a
stranger gets what / who / cost / credibility / contact in 90 seconds,
ship and stop.

---

## The site is v1. Stop building it. (declared 2026-08-16)

All five build-order steps are closed and v1 is logged in `decisions.md`.
Nine pages shipped against a sitemap of five: the five, plus `/tokens`,
`/work/vivo-energy`, `404.html`, and the `/og` and `/icon` source pages
the social card and favicon render from. Pages are folders with an
`index.html` — `404.html` is the one deliberate exception, because
Cloudflare Pages looks for it by name.

Measured at v1, not asserted: Lighthouse accessibility 100, best
practices 100, SEO 100, performance 94; zero contrast failures across
eight pages; no overflow at 360px; real focus states on every tab stop.
CLS is 0.14 and is a **known, logged** characteristic of the client-side
partial include — do not "fix" it with a height reservation, and read the
2026-08-16 QA entry before touching it.

**The stopping rule now applies.** A change to `site/` needs a reason
beyond "it could be better." The deferred list — Phase 6, the two unwritten
case-study essays, per-page social cards, the infographic restyle — is in
the v1 entry with the reasoning. Don't start any of it because it is
sitting there looking unfinished.

Settled long ago and not to be reopened: the accent token names, and
inverse bands staying **link-free** (so no `colour/text/link-on-inverse`
token exists) — both from 2026-07-09.

## What is actually active

Since 2026-08-05 the work has been the commercial layer, and v1 changes
nothing about that: the positioning word, `Offer.md`, **The Foundation**
(greenfield entry engagement, 2026-08-12), the contract templates, and the
material in `notes/`.

So: **the site is not the current task**, and now has a declared version
saying so. Ask before starting site work.

## Before starting anything

Read `decisions.md` from the most recent entry backwards far enough to
cover the area you're touching. It is the log of what was already
decided, and it is long — the stale block this section replaced is what
happens when a task description outlives the work it described.

`cd tokens && npm test` → 8/8, verify clean, before every push. Log what
you change in `decisions.md` (date, what changed, what was deferred).
