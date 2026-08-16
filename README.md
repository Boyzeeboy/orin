# Orin

Orin is a systems practice. For teams shipping product without a full
design department: Orin builds the design system your developers ship from.

It exists because the work usually happens at the wrong altitude —
either too high (strategy decks) or too shallow (Figma files).
The real value lives in the middle: building working systems that
businesses can grow with, iterating them as the business changes,
and treating design, development, and deployment as one continuous
craft rather than three separate handoffs.

Orin is the vehicle for that work.

## What lives in this repo

**The thinking**

- `MANIFESTO.md` — the founding document. Everything Orin does points back to this.
- `positioning.md` — the locked one-liner and the longer versions.
- `Offer.md` — the four engagement shapes, prices, and refusals.
- `voice.md` — how prose gets written. Governs every word on the site.
- `SOUL.md` — personal context file. Pasted into Claude conversations to skip the calibration phase.
- `decisions.md` — dated log of significant decisions and the reasoning behind them. Oldest first.

**The build**

- `/tokens` — the token pipeline: DTCG JSON, Style Dictionary, and the
  guardrail scripts. The source of truth for every value on the site.
- `/site` — the Orin website. Live at [orinsystems.co](https://orinsystems.co),
  v1 since August 2026. Consumes the semantic token layer only.
- `SETUP.md` — the runbook: the one loop, the guardrails, the deploy.
- `design.md` — layout principles; how tokens become page composition.
- `HANDOVER.md`, `PHASE5-BUILD.md`, `BUILD-SEQUENCE.md` — the briefs the site
  was built from, kept current rather than archived.

**The client-facing work**

- `deliverable.md` — what a client actually receives.
- `PIPELINE-LEDGER.md`, `PIPELINE-REVIEW.md` — the client token pipeline this
  one was abstracted from.
- `/case-studies` — long-form drafts. Vivo Energy is written; the shipped
  version lives at `/site/work/vivo-energy`.
- `/notes` — scratchpad for anything code-adjacent that doesn't yet have a home.

## Working principles

The manifesto is the source of truth. When a decision feels uncertain,
the question is "does this fit the manifesto?" If yes, proceed.
If no, drop it — even if it pays.

GitHub is the canonical source. Notion is the workshop.
When they diverge, GitHub wins.

Ship the honest first version. Improve it after real conversations
teach you things a draft never could.

## Founder

Warren G Rossiter. Bath, UK.
Senior designer, ~10 years, with a specialism in design systems,
token architecture, and the designer-engineer boundary.

Notable prior work includes a 60 per cent saving in development time at
Vivo Energy through design system architecture (contracted via Rethink),
the IDEM design system and token pipeline (personal rebuild),
and Kirsten Rossiter Ministries — the full-vertical build that
clarified what Orin's ideal engagement actually looks like.

## Status

Live. The site shipped as v1 on 16 August 2026 at
[orinsystems.co](https://orinsystems.co), running on its own token pipeline.
Manifesto, positioning and the four-shape offer are locked. The Vivo Energy
case study is published; the IDEM and KRM essays are still to write.

Current work is the commercial layer, not the site.
