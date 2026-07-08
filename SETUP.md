# Orin — Setup & Runbook

*The operating manual for the Orin token pipeline and site. Built day-one from
the New Client Playbook so there is no retrospective backlog: tokens exist
before any CSS, and the site consumes the semantic layer only.*

---

## Repo layout

Single repo (deliberate deviation from the playbook's two-repo pattern — see
decisions.md, 2026-07-05). Orin is the practice, not a client with a separate
product, so the pipeline and the site live together:

```
orin/
├── tokens/                     # the token pipeline (source of truth)
│   ├── src/*.json              # DTCG tokens — the ONLY place values are authored
│   ├── sd.config.mjs           # Style Dictionary v4 build
│   ├── scripts/                # sync, verify-build, report
│   └── dist/                   # build output (gitignored, regenerated)
└── site/                       # the static site (Cloudflare Pages)
    ├── vendor/tokens.css       # synced from the build — site reads THIS, never dist/
    ├── styles.css              # semantic aliases + local layout vars only
    ├── partials/ + includes.js # shared chrome, edited in one place
    └── index.html              # pages
```

## The one loop

Every change to a colour, size, family, space, or radius follows the same path.
There is no other way to change a value on the site:

```
edit tokens/src/*.json  →  npm run build  →  npm run sync  →  use the token
```

`npm test` (in `tokens/`) runs the whole chain and both guardrails:

```
cd tokens && npm install     # first time only
npm test                     # build → sync → verify-build → report
```

- **verify-build** — fails if the site references any `var(--orin-…)` the build
  doesn't define. The consumer contract.
- **report** — 8 lints, target 8/8: dist↔vendor sync, no doubled segments,
  dimensions carry units, no `$value`+children, no hardcoded hex, no hardcoded
  font-family, semantic-only consumption, fonts-link↔tokens match.

**CI does not run these. Protection is local. Run `npm test` before every push.**

## Deploy (Cloudflare Pages)

Static-first, no build step on the site itself (the token build is a local
pre-step; `vendor/tokens.css` is committed).

1. Cloudflare Pages → connect the GitHub repo → project **orin**.
2. Build command: *(none)*. Output directory: `site`.
3. Production branch: `main`. Deploys are boring from commit one.
4. Custom domain: **orinsystems.co** (orindesign.co → 301 redirect). Confirm SSL.

## Pre-push checklist

- [ ] `cd tokens && npm test` → report 8/8, verify clean
- [ ] No new literal value anywhere in `site/` (a new value = a token proposal)
- [ ] Fonts link still matches the tokens (the report proves it)

## Phase-0 decisions still open (confirm, then they're locked)

These were seeded with defensible placeholders so the pipeline could be proven
end-to-end. Each is a JSON edit + rebuild to change — cheap, by design.

- **Fonts** — seeded as Inter Tight (display), Source Serif 4 (prose), Inter
  (UI). Confirm against Figma's hosted set before designing. Swapping a family
  is one line in `tokens/src/primitives.json` + the fonts link in `index.html`.
- **Palette** — seeded as warm-neutral ramp + muted slate-blue accent.
  Deliberately not KR's teal. Refine in `primitives.json`; semantics don't move.
- **Dark mode** — out for v1, but the site consumes semantics only, so adding
  `tokens.dark.json` later is authoring, not a retrofit.

## Figma mirror

A synced Figma view of the tokens lives in the Orin team:

- **File:** Orin-Token-Pipeline
- **File key:** `b0iEr8pYmfepSj4YkzFsoY`
- **URL:** https://www.figma.com/design/b0iEr8pYmfepSj4YkzFsoY

Five variable collections mirror the JSON 1:1 (light mode): **Primitives**
(neutral, teal — zero-scoped), **Semantic** (aliased to primitives, scoped by
role), **Fonts** (family, weight, size 100–1100, role-based line-height, and
letter-spacing — a 7-step scale plus role aliases), **Spacing**, **Radius**.
Line-height and letter-spacing follow IDEM's Material-3 role model
(display/headline/title/body/label × large/medium/small); in Figma both are
stored as percent (line-height = ratio×100, letter-spacing = em×100). Every
variable carries WEB code syntax (e.g. `var(--orin-colour-text-link)`). A
specimen frame in the file doubles as the style guide (currently a type-size
specimen; it does not yet showcase the line-height/letter-spacing roles).

**Direction of truth: JSON → Figma, never the reverse.** The JSON in
`tokens/src/` is the source; Figma is a synced view. Change tokens in the JSON,
rebuild, then re-mirror into Figma. Never edit these Figma variables as the
origin, or the two drift.

The specimen's display text renders in real **Inter Tight** (Figma added it to
its hosted library — if a machine shows it missing, apply it once via the font
picker to activate it). Body and UI render in Inter. Note the style-name quirk:
Inter Tight uses `SemiBold` (no space), whereas Inter uses `Semi Bold`.
