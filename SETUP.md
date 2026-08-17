# Orin — Setup & Runbook

*The operating manual for the Orin token pipeline and site. Built day-one from
the New Client Playbook — the live client pipeline this one was abstracted from,
now extracted as the `Orin Token Pipeline` repo (see `PIPELINE-LEDGER.md`) — so
there is no retrospective backlog: tokens exist before any CSS, and the site
consumes the semantic layer only.*

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
│   └── dist/light/             # build output (gitignored, regenerated)
└── site/                       # the static site (Cloudflare Pages)
    ├── vendor/tokens.css       # synced from the build — site reads THIS, never dist/
    ├── styles.css              # semantic aliases + local layout vars only
    ├── partials/ + includes.js # shared chrome, edited in one place
    ├── index.html              # Home
    ├── 404.html                # the one deliberate flat file: Pages wants this name
    └── <page>/index.html       # every other page is a folder
```

Nine pages ship against a sitemap of five: manifesto, how-it-works, work,
contact, plus `tokens` (the proof artefact), `work/vivo-energy`, and the `og`
and `icon` source pages the social card and favicon render from.

## The one loop

Every change to a colour, size, family, space, or radius follows the same path.
There is no other way to change a value on the site:

```
edit tokens/src/*.json  →  npm run build  →  npm run sync  →  use the token
```

There are **two** `npm test` entry points, and they are not the same. Run the
one at the repo root:

```
npm test                     # ROOT: verify:deliverable → build → sync → verify-build → report
cd tokens && npm test        # TOKENS ONLY: build → sync → verify-build → report
```

The root one runs a third guardrail the tokens one never sees. Run the root
command before every push. (First time only: `cd tokens && npm install`.)

- **verify:deliverable** *(root only)* — checks `deliverable.md` still describes
  the real client pipeline: every artefact it claims is present, everything it
  says is absent stays absent, every path classified. Runs from the root
  `package.json`, via `scripts/verify-deliverable.mjs`.
- **verify-build** — fails if the site references any `var(--orin-…)` the build
  doesn't define. The consumer contract.
- **report** — 9 lints, target 9/9: dist↔vendor sync, no doubled segments,
  dimensions carry units, no `$value`+children, no hardcoded hex, no hardcoded
  font-family, semantic-only consumption, fonts-link↔tokens match, no local
  custom properties.

**CI does not run these. Protection is local.** There is no `.github/`; nothing
checks this on the server.

The root `package.json` also has `npm run dev`, which serves `site/` on port
8000 for a quick look without touching the token chain.

## Deploy (Cloudflare Pages)

Static-first, no build step on the site itself (the token build is a local
pre-step; `vendor/tokens.css` is committed).

1. Cloudflare Pages → connect the GitHub repo → project **orin**.
2. Build command: *(none)*. Output directory: `site`.
3. Production branch: `main`. Deploys are boring from commit one.
4. Custom domain: **orinsystems.co**. Confirm SSL. The 301 from orindesign.co
   is **not in place** as of 2026-08-16: that domain still serves Warren's
   first site, which is due to be retired. Set the redirect when it comes
   down, rather than letting the domain lapse, so inbound links survive.

## Pre-push checklist

- [ ] `npm test` **from the repo root** → deliverable ok, report 9/9, verify
      clean. Not `cd tokens && npm test`: that skips `verify:deliverable`.
- [ ] No new literal value anywhere in `site/` (a new value = a token proposal)
- [ ] Fonts link still matches the tokens (the report proves it)

## Phase-0 decisions, settled by shipping (v1, 2026-08-16)

These were seeded with defensible placeholders so the pipeline could be proven
end-to-end. v1 shipped on all three, so they are decided rather than open. Each
is still a JSON edit + rebuild to change — cheap, by design.

- **Fonts** — Inter Tight (display), Inter (prose + UI). Swapping a family is
  one line in `tokens/src/primitives.json` plus the fonts link in every page
  head. Note this is now guardrailed: the report's fonts-link check fails the
  build if the link and the tokens diverge, so the two cannot drift apart.
- **Palette** — locked to the IDEM `neutral` + `teal` ramps (see decisions.md,
  2026-07-06). Refine in `primitives.json`; semantics don't move.
- **Dark mode** — still out, and still cheap to add: there is no dark token
  file, and the site consumes semantics only, so adding one later is authoring
  rather than a retrofit. Confirmed still absent 2026-08-16.

## Figma mirror

*Not re-verified in the 2026-08-16 audit: checking it needs Figma access, which
the auditing session didn't have. Everything else in this file was checked
against the repo; this section is trusted, not confirmed.*

A synced Figma view of the tokens lives in the Orin team:

- **File:** Orin Tokens (mirror) — renamed 2026-08-17 from `Orin-Token-Pipeline`,
  which collided with the `Orin Token Pipeline` *repo*. The repo is the
  Figma-first baseline that is for sale; this file is the opposite direction,
  generated from this repo's JSON. The name now says so. **The file key below is
  the stable identifier — match on that, not the name.**
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
