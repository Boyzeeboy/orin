# Orin

Orin is a systems practice in Bath: UI design and React implementation for
founders and small product teams. Approved designs built in React, existing
interfaces improved, and repeated components made reusable, at a fixed price.

It exists because the work usually happens at the wrong altitude:
either too high (strategy decks) or too shallow (Figma files).
The real value lives in the middle: building working systems that
businesses can grow with, iterating them as the business changes,
and treating design, development, and deployment as one continuous
craft rather than three separate handoffs.

Orin is the vehicle for that work.

## What lives in this repo

**The thinking**

- `MANIFESTO.md` — the founding document. Everything Orin does points back to this.
- `OPERATING_MODEL.md` — how Orin behaves when money, pressure,
  opportunity, fear, and client power enter the room.
- `Offer.md` — one page: what Orin sells, how it's priced, and five rules.
- `archive/` — the superseded four-shape offer and positioning 2.0.
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
- `archive/` — the briefs the site was built from (`HANDOVER.md`,
  `PHASE5-BUILD.md`, `BUILD-SEQUENCE.md`), finished notes, superseded
  commercial documents, and decisions from before October 2026.

**The client-facing work**

- `deliverable.md` — what a client actually receives.
- `PIPELINE-LEDGER.md` — the client token pipeline this one was abstracted
  from.
- `/case-studies` — long-form drafts. Vivo Energy is written; the shipped
  version lives at `/site/work/vivo-energy`.
- `/notes` — scratchpad for anything code-adjacent that doesn't yet have a home.

## Working principles

The manifesto is the source of truth. The operating model is the conduct
check. When a decision feels uncertain, the question is "does this fit
the manifesto, and can Orin do it cleanly?" If yes, proceed. If no, drop
it, even if it pays.

GitHub is the canonical source. Notion is the workshop.
When they diverge, GitHub wins.

Ship the honest first version. Improve it after real conversations
teach you things a draft never could.

## Founder

Warren Rossiter. Bath, UK.
Senior designer, ~10 years, with a specialism in design systems,
token architecture, and the designer-engineer boundary.

Notable prior work includes a 60 per cent saving in development time at
Vivo Energy through design system architecture (contracted via Rethink),
the IDEM design system and token pipeline (personal rebuild),
and Kirsten Rossiter Ministries, the full-vertical build that
clarified what Orin's ideal engagement actually looks like.

## Status

Live. The site shipped as v1 on 16 August 2026 at
[orinsystems.co](https://orinsystems.co), running on its own token pipeline.
The offer went to one page on 23 October 2026, and the site's copy was
aligned to it the same day. The Vivo Energy and IDEM case studies are
published; the KRM essay is still to write, so it has no card on the Work
page.

Current work is finding the first paid job against the one-page offer. A
visual redesign of the site is deferred until after it.
