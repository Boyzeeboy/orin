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
  the Style Dictionary build, the committed outputs (CSS / JS / JSON), the
  changelog/snapshot history, the generated agent docs, and the guardrails and CI
  that stop a broken build reaching `main`.
- **A generated token report**, rebuilt on every build, documenting every colour,
  type role, spacing and radius value alongside the health of the system. It is
  not a file that ships once and rots — it is regenerated from the real build, so
  it cannot describe a system that no longer exists. Its checks are a **gate**:
  a build with a red check fails, rather than shipping with a warning nobody
  read.
- **Their site or app, wired to consume it.** The tokens flowing into the
  product, and the product's existing hardcoded colours, sizes and fonts migrated
  onto semantic tokens — so the codebase reads from one source of truth rather
  than scattered literals.
- **A component library, as it arrives — and Storybook and `design.md` with it.**
  Components built on the tokens, each with a metadata file describing variants,
  states and anti-patterns, documented in Storybook, with `design.md` as the
  router pointing at that metadata. All three are scoped to this line
  deliberately: they earn their place when there are components to document,
  visually regression-test and route to. A pipeline that ships tokens alone gets
  the generated report and the generated agent docs instead.
- **The routing and usage layer.** The generated `CLAUDE.md` / `AGENTS.md` (the
  router — rendered from one template with the client's own Figma file and token
  prefix, so it cannot drift), per-token usage rules carried as `$description` on
  each token (synced from the variable's description in Figma), and `PROCESS.md`
  (the working loop, and what to do when a check goes red).

## The router and the variables are parts, not the whole

It is worth being explicit, because it is a common misread: the router — the
generated `CLAUDE.md` / `AGENTS.md` — is only a router. A short file that points
at the tokens, their usage rules and the report, and tells whoever is working
(person or agent) what to read before touching anything. The variables (tokens)
are the foundation. Neither is the product. The product is the *connected, living
system* — a source of truth that exists in the client's codebase, not a Figma
file their developers have to translate by hand.

That the router is **generated** rather than written is the point. It carries the
client's real Figma file and token prefix because it is rendered from one
template plus their config, so it cannot quietly describe a system they no longer
have. A hand-written router is a doc that rots; this one is an output.

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

*(This repo's own `design.md` is Orin's site layout principles — nothing to do
with the deliverable. An earlier version of this list linked to it as though it
were the client's router, which it never was.)*

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

*Also corrected (2026-07-30).* This file promised `design.md` three times — as
the routing layer, as its own section, and in Related — but the baseline has no
`design.md` and no template for one, so a scaffolded client would never have
received it. The claim was inherited from the live client repo, where `design.md`
routes to component metadata and Storybook. It now sits with the component
library for the same reason Storybook does: it routes to things that only exist
once components do. In a token-only Build the router is the **generated**
`CLAUDE.md` / `AGENTS.md`, which is better than the doc it replaces because it
cannot drift from the system it describes.
