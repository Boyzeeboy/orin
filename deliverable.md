# Orin — The Deliverable

*What a client actually receives from a Build.*

This is the companion to `Offer.md`. `Offer.md` frames the Build commercially —
the engagement shapes, the price, the outcome language a technical buyer hears on
a call. This file answers the more literal question that sits underneath it: *when
a client commissions a Build, what physically lands in their hands?*

For the exact file-by-file manifest, this file defers to
`TEMPLATE-ARCHITECTURE.md` in the token-pipeline repo. That is the single source
of truth for what files a client repo contains; repeating the list here would
create a second copy that drifts from it — the precise anti-pattern the whole
practice exists to prevent. This file defines the deliverable at the level of
*what and why*, and points there for the *which files*.

## Not a folder — an outcome

A client does not buy "the Orin pipeline" as a product off a shelf. They buy a
**Build** (see `Offer.md`): a design system, built and connected into their own
codebase. The pipeline is the *mechanism* that keeps that system true — the way a
value gets from a brand decision to a shipped surface without drifting. It is not
the thing being sold; the working, connected system is.

## What lands in the client's hands

At the level of what and why (the which-files detail lives in
`TEMPLATE-ARCHITECTURE.md`):

- **A token pipeline, running in their own repository.** The DTCG token source,
  the Style Dictionary build, the committed outputs (CSS / JS / JSON), Storybook
  documenting the tokens, the changelog/snapshot history, the generated agent
  docs, and the guardrails and CI that stop a broken build reaching `main`.
- **Their site or app, wired to consume it.** The tokens flowing into the
  product, and the product's existing hardcoded colours, sizes and fonts migrated
  onto semantic tokens — so the codebase reads from one source of truth rather
  than scattered literals.
- **A component library, as it arrives.** Components built on the tokens, each
  with a metadata file describing variants, states and anti-patterns, documented
  alongside the token stories in Storybook.
- **The routing and usage layer.** `design.md` (the lightweight router),
  `guidelines.json` (per-token usage rules), and `PROCESS.md` (the working loop
  for changing a token and rebuilding).

## `design.md` and the variables are parts, not the whole

It is worth being explicit, because it is a common misread: `design.md` is only
the router — a short file that points at the tokens, the guidelines and
Storybook. The variables (tokens) are the substrate. Neither is the product. The
product is the *connected, living system* — a source of truth that exists in the
client's codebase, not a Figma file their developers have to translate by hand.

## Whose is what

The system has three layers (see `TEMPLATE-ARCHITECTURE.md`). The distinction
matters for what the client owns:

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
- `TEMPLATE-ARCHITECTURE.md` (token-pipeline repo) — the three layers and the
  file-by-file manifest.
- `design.md` — the router the deliverable ships with.
- `PROCESS.md` (token-pipeline repo) — the working loop the client operates.
