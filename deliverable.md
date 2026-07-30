# Orin — The Deliverable

*What a client actually receives from a Build.*

This is the companion to `Offer.md`. `Offer.md` frames the Build commercially —
the engagement shapes, the price, the outcome language a technical buyer hears on
a call. This file answers the more literal question that sits underneath it: *when
a client commissions a Build, what physically lands in their hands?*

For the exact file-by-file manifest, this file defers to the **`Orin Token
Pipeline` repo itself** — a fresh clone *is* the manifest, and its generated
`CLAUDE.md` and `dist/report.html` describe what the machinery does. That is the
single source of truth for what a client repo contains; repeating the list here
would create a second copy that drifts from it — the precise anti-pattern the
whole practice exists to prevent. This file defines the deliverable at the level
of *what and why*, and points there for the *which files*.

## Not a folder — an outcome

A client does not buy "the Orin pipeline" as a product off a shelf. They buy a
**Build** (see `Offer.md`): a design system, built and connected into their own
codebase. The pipeline is the *mechanism* that keeps that system true — the way a
value gets from a brand decision to a shipped surface without drifting. It is not
the thing being sold; the working, connected system is.

## What lands in the client's hands

At the level of what and why (the which-files detail is the baseline repo
itself):

- **A token pipeline, running in their own repository.** The DTCG token source,
  the Style Dictionary build, the committed outputs (CSS / JS / JSON), a
  **generated token report** documenting every colour, type role, spacing and
  radius value alongside the health of the system, the changelog/snapshot
  history, the generated agent docs, and the guardrails and CI that stop a broken
  build reaching `main`.
- **Their site or app, wired to consume it.** The tokens flowing into the
  product, and the product's existing hardcoded colours, sizes and fonts migrated
  onto semantic tokens — so the codebase reads from one source of truth rather
  than scattered literals.
- **A component library, as it arrives — and Storybook with it.** Components
  built on the tokens, each with a metadata file describing variants, states and
  anti-patterns, documented in Storybook. Storybook is scoped to this line
  deliberately: it earns its place when there are components to document and
  visually regression-test. A pipeline that ships tokens alone gets the generated
  report instead — see below.
- **The routing and usage layer.** `design.md` (the lightweight router),
  per-token usage rules carried as `$description` on each token (synced from the
  variable's description in Figma), and `PROCESS.md` (the working loop for
  changing a token and rebuilding).

## `design.md` and the variables are parts, not the whole

It is worth being explicit, because it is a common misread: `design.md` is only
the router — a short file that points at the tokens, their usage rules, and the
generated report. The variables (tokens) are the substrate. Neither is the product. The
product is the *connected, living system* — a source of truth that exists in the
client's codebase, not a Figma file their developers have to translate by hand.

## Whose is what

The system has three layers (see `PIPELINE-LEDGER.md`, "What is genuinely
projected"). The distinction matters for what the client owns:

- **The shared core** — the build machinery, the scaffold, the templates — is
  Orin's own IP, reused across clients. It is not sold or handed over.
- **The client gets their instance** — their tokens, their outputs, their
  pipeline, their component library — running in their own repositories, which
  they own and ship from. The Retainer (see `Offer.md`) is what keeps that
  instance alive rather than decaying back into an artefact.

## What the deliverable is not

From `Offer.md`'s "what triggers a no": it is not brand guidelines, marketing
surfaces or social assets; not a strategy deck; not an unscoped "build me a
pipeline" without a Diagnostic first; and not a vendor relationship. Advice
without building is not the offer. The deliverable is always a built, connected
system.

## Related

- `Offer.md` — the commercial framing (engagements, price, outcomes).
- `Orin Token Pipeline` (sibling repo) — the baseline itself: a fresh clone is
  the manifest, and its generated `CLAUDE.md` carries the working loop.
- `PIPELINE-LEDGER.md` — the three layers, and which of them are real yet.
- `design.md` — the router the deliverable ships with.

---

*Resolved (2026-07-30) — Storybook returns when there is a component library.*
It is not part of a token-only Build. See `decisions.md` for the reasoning; the
short version is that the evidence said so: the live client's Storybook contained
five **token** stories and not one component story, and the generated report
already renders four of the five — colours, type scale, spacing, radius — from
the real build, with no server to run and no Chromatic subscription.

`guidelines.json` is not part of a Build either. Nothing consumes it in code;
per-token usage rules travel as `$description` on each token, synced from Figma,
which is the form the pipeline actually reads.
