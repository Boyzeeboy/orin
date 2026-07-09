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
6. `BUILD-SEQUENCE.md` — the build order and the Step-0 foundation gaps
7. `SETUP.md` — the token pipeline runbook and the one loop
8. `decisions.md` — why things are the way they are

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
- **`npm test` green before every push**: report 8/8, verify-build clean.
  CI does not run these — protection is local.
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

## Current task — Step 0 only

Execute **Step 0 of `BUILD-SEQUENCE.md`** and nothing after it. Close the
foundation gaps (token additions + CSS/structure), get the pipeline
green, then STOP before building any page.

Two Step-0 items are judgement calls — **confirm with Warren before
writing them**, do not decide unilaterally:

1. **Accent token naming.** Recommendation is semantic (not component):
   `colour/background/accent` → `{teal.500}`,
   `colour/background/accent-hover` → `{teal.600}`,
   `colour/text/on-accent` → `{neutral.0}`. Confirm names before adding.
2. **The inverse-section decision** (BUILD-SEQUENCE Step 0, item 2):
   keep inverse bands link-free (no new token), or add
   `colour/text/link-on-inverse` → `{teal.300}`. Confirm which.

The rest of Step 0 (button primitive, full-bleed section wrapper,
case-study card, nav wrap at 360px, skip link + `<main id>`,
`prefers-reduced-motion`, absolute `/partials/…` include paths, preserve
the specimen CSS for the `/tokens` page, fix the stale Source-Serif line
in `SETUP.md`) can proceed once those two are settled.

When done: `cd tokens && npm test` → report 8/8, verify clean. Log the
Step-0 changes in `decisions.md` (date, what changed, what was deferred).
Do not start Home or any other page — that's the next handoff.
