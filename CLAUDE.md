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

## Where the build stands (as of 2026-08-15)

**Step 0 and Step 0.5 are closed.** Both judgement calls that used to sit
here were settled on 2026-07-09 and logged in `decisions.md`: the accent
tokens went in with the recommended semantic names
(`colour/background/accent`, `…/accent-hover`, `colour/text/on-accent`),
and inverse bands stay **link-free** — option (a), so no
`colour/text/link-on-inverse` token exists. Don't reopen either.

**All five pages are built**, plus two beyond the sitemap: `/tokens` (the
token demo, moved not deleted — it backs the "this site runs on the
pipeline it sells" claim) and `/work/vivo-energy`. Pages are folders with
an `index.html`, never `.html` files. Home carries the Step-0.5 grid.

**The batched QA pass (`BUILD-SEQUENCE.md`, build order step 4) is
partly done, and v1 has not been declared.** Verified state:

- Every page has a `meta name="description"`. ✓
- **No page has OG tags** — outreach links will not unfurl, and the
  launch pack depends on them.
- **No favicon** is linked anywhere.
- **No `site/404.html`.**
- Keyboard nav, focus states, AA contrast, 360px and Lighthouse are not
  verifiable from the files alone — treat them as unconfirmed, not done.

Step 5 (declare v1 in `decisions.md` — date, what shipped, what was
deferred) has not been logged.

## What is actually active

Since 2026-08-05 the work has moved off the site and onto the commercial
layer: the positioning word, `Offer.md`, **The Foundation** (greenfield
entry engagement, added 2026-08-12), the contract templates, and the
material in `notes/`. `Offer.md`, `PIPELINE-LEDGER.md` and `decisions.md`
all have uncommitted changes.

So: **do not assume the site is the current task.** Ask before starting
site work. If the answer is "finish v1," it is the QA gaps above plus the
v1 entry — not new pages and not new components.

## Before starting anything

Read `decisions.md` from the most recent entry backwards far enough to
cover the area you're touching. It is the log of what was already
decided, and it is long — the stale block this section replaced is what
happens when a task description outlives the work it described.

`cd tokens && npm test` → 8/8, verify clean, before every push. Log what
you change in `decisions.md` (date, what changed, what was deferred).
