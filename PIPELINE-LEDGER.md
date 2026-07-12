# Orin — Pipeline Ledger

*What Orin's scaffold kept, dropped, flipped, and deferred relative to the
client token-pipeline template it was abstracted from — and why.*

---

## Why this file exists

`SETUP.md` and `decisions.md` both refer to a "New Client Playbook" that Orin
was built from and deliberately deviates from. That playbook is not a document
in this repo — it lives in the **KR Token Pipeline** (`TEMPLATE-ARCHITECTURE.md`
+ `PROCESS.md`), the real, running client template Orin was abstracted from.

This ledger does **not** re-document the client pattern — doing so would create
a second source of truth that drifts from KR, which is the exact anti-pattern
both pipelines exist to prevent. It records one thing: the deltas between the
client template and Orin's own scaffold, plus the invariants that survive the
abstraction. For the *why* behind each delta, it points at `decisions.md`; for
the client baseline itself, it points at KR.

- **Baseline (the client pattern):** KR Token Pipeline —
  `TEMPLATE-ARCHITECTURE.md`, `PROCESS.md`.
- **Reasoning log (Orin's dated decisions):** `decisions.md`
  (2026-07-05, 2026-07-06).
- **Orin runbook:** `SETUP.md`.

Lineage: **IDEM** (the original personal rebuild / template origin) →
**KR** (first full client clone via `scaffold-client`) → **Orin** (the practice
site, which abstracts the *shape* of the pipeline while flipping its direction).

---

## The one difference that explains most of the others: direction of truth

The client pipeline and Orin's pipeline run the token flow in **opposite
directions**. This is the root abstraction decision; several rows below are
downstream of it.

| | Client build (KR) | Orin (practice site) |
|---|---|---|
| Source of truth | **Figma** | **JSON** (`tokens/src/*.json`) |
| Flow | Figma → `tokens/*.json` → `dist/` | `tokens/src/*.json` → `dist/` → `vendor/tokens.css`; Figma is a **synced view** |
| Rule | "All token changes start in Figma, never in code." (`PROCESS.md`) | "Direction of truth: JSON → Figma, never the reverse." (`SETUP.md`) |

**Why it flips:** a client has a Figma-first design team whose variables are the
origin, so the pipeline reads *from* Figma. Orin is a five-page site designed in
the browser (`CLAUDE.md`: "Design in the browser — no Figma round-trip"), so the
JSON leads and Figma is a mirror for showing the system, not authoring it.

---

## The ledger

Legend: **Kept** = same in both · **Flipped** = reversed · **Dropped** = client
has it, Orin doesn't · **Added** = Orin has it, the minimal client template
doesn't · **Deferred** = out for Orin v1, cheap to add later.

| Dimension | Client build (KR) | Orin (practice site) | Verdict |
|---|---|---|---|
| **Source of truth** | Figma → JSON → dist | JSON → dist → vendor; Figma is a view | **Flipped** |
| **Repo topology** | Two repos: `{client}-token-pipeline` (publishes) + client app (consumes) | One repo: `tokens/` + `site/` together | **Dropped** (2nd repo) |
| **Token distribution** | Published npm package (`@client/tokens`), `exports` map for light/dark CSS + JS + JSON; production `import`s it | In-repo `vendor/tokens.css`, committed; `site/` reads it directly, no publish step | **Flipped** (transport) |
| **Per-client scaffold** | `scaffold-client.mjs` + `pipeline.config.mjs` — parameterised (`projectName`, `prefix`, `figmaFileName`, `figmaFileKey`), reusable across clients | None — Orin is a singleton; prefix fixed to `--orin-` | **Dropped** |
| **Theming** | Multi-mode: `tokens.{light,dark}.json` → `dist/{light,dark}` | Light only (`decisions.md` 2026-07-06); semantics-only so dark is authoring, not retrofit | **Deferred** |
| **Token layers** | primitives + semantic + **component** (`button/*`, `input/*`, `nav/*`) | primitives + semantic **only** (`CLAUDE.md`: "no component-token layer yet") | **Dropped** (component layer) |
| **Component library** | Yes — components + per-component metadata files (the "Build deliverable") | None — primitive kit for a 5-page site (`PHASE5-BUILD.md` component budget) | **Dropped** |
| **Visual regression** | Storybook + Chromatic CI, enforced as a PR gate (`.github/workflows/chromatic.yml`) | None (`decisions.md` 2026-07-05: dropped — "not for a five-page marketing site") | **Dropped** |
| **Source lint / guards** | `verify-build` (all 6 `dist/` outputs exist, non-empty) | `verify-build` + an **8-check `report`**: dist↔vendor sync, no doubled segments, dimensions carry units, no `$value`+children, no hardcoded hex, no hardcoded font-family, semantic-only consumption, fonts-link↔tokens match | **Added** (stricter static lint) |
| **Usage prose** | `guidelines.json` → baked into `dist` CSS comments; the "leave nothing to interpretation" layer the AI reads | None — site is small enough not to earn it | **Dropped** |
| **Changelog / snapshot** | `snapshot-tokens.mjs` → `changelog.json` + a Changelog Storybook story | None | **Dropped** |
| **Agent docs** | Generated from `templates/agent-rules.md` via `generate-docs.mjs` (can't drift, carry no hardcoded client values) | Hand-written `CLAUDE.md` | **Dropped** (generation) |
| **CI** | GitHub Actions enforces Chromatic on push | "CI does not run these. Protection is local." (`SETUP.md`) | **Flipped** |
| **Build engine** | Style Dictionary v4 / DTCG | Style Dictionary v4 / DTCG | **Kept** |
| **Deploy** | Client app deploys on its own; tokens shipped as a package | Cloudflare Pages, output dir `site`, no site build step | — (scope-specific) |

### The one row that isn't subtraction

Orin is **not** simply "KR minus components." Where KR leans on Chromatic —
which needs components to snapshot — Orin **swapped** visual regression for a
stricter static-lint `report` tuned to hand-authored CSS (no hardcoded hex, no
hardcoded font-family, semantic-only consumption, fonts-link parity). It traded
a runtime visual gate it couldn't earn for a source-hardening gate it could.
That's a deliberate design choice, logged in `decisions.md` (2026-07-05), not a
gap.

---

## Invariants — the transferable spine (same in both)

These do not change between a client build and Orin. They are the practice, not
the project; anything Orin ships that violates one of these has stopped being
the same pipeline.

1. **Style Dictionary v4 / DTCG** is the build engine; source tokens are DTCG
   JSON, never hand-authored CSS.
2. **The one loop:** edit source → build → consume *through the token*. A value
   the surface needs but the tokens don't have is a token proposal, never a
   literal.
3. **Semantic-only consumption.** The surface (components in KR, the site in
   Orin) consumes the semantic layer — never primitives, never raw hex.
4. **Never hand-edit `dist/`.** It is generated and overwritten every build.
5. **Fix at the correct source layer** so the fix survives the next
   build/sync — never patch a downstream artefact (the router, `dist/`, the
   vendor file).
6. **A `verify-build` gate:** the build is not shippable unless every expected
   `dist/` output exists and is non-empty.
7. **primitives → semantic split.** Two layers minimum; a component layer is
   added only when a component library earns it.
8. **WCAG AA minimum.** Real contrast, real focus states.

The abstraction, in one line: **Orin keeps the spine (1–8), flips the direction
of truth, and strips the client-scale apparatus (second repo, published package,
scaffold, component library, Storybook/Chromatic, changelog, generated docs)
down to what a five-page site actually earns.**

---

## What is genuinely projected (not yet proven)

Almost everything above is **proven** — KR runs it live. The single element that
is still aspirational, and it is KR's own deferral not Orin's, is the top of the
three-layer model: extracting the shared machinery into a published
`@scope/token-pipeline-core` package so pipeline improvements propagate by
version bump instead of copy-paste. `TEMPLATE-ARCHITECTURE.md` defers this until
2–3 clients have been replicated and the machinery has stabilised. Until then
core + template live together in each repo. Orin, being a singleton, never needs
this layer at all — noted here only so the ledger doesn't imply a maturity the
client pattern hasn't reached.

---

## When to revisit this ledger

- Orin grows a real component library → the component-token layer, and possibly
  Storybook, stop being "Dropped" and this ledger changes (and `decisions.md`
  gets an entry).
- Dark mode comes into Orin's scope → the Theming row moves from Deferred to
  Kept.
- A second client is scaffolded and the shared core is extracted into a package
  → update the "genuinely projected" section; the baseline it references
  (`TEMPLATE-ARCHITECTURE.md`) will have moved first.
- Any time Orin's `SETUP.md` and KR's `PROCESS.md` disagree on an invariant
  (1–8) → that is a drift bug in one of them, not a new row here.
