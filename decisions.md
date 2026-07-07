# Orin — Decisions Log

A dated record of significant decisions and the reasoning behind them.
Written in past tense at the moment of the decision, not retroactively.
Future me should be able to read this and understand why present me chose
what I chose, even if the answer would be different now.

Format: date, decision, reasoning, revisit-if.

---

## 2026-07-01 — Founded Orin

**Decision:** Started building Orin as my own agency, from scratch, built
inside-out around who I am rather than outside-in around a service category.

**Reasoning:** A decade of fitting into other people's job titles and
consultancy slots has consistently filed off the parts of me that create
the most value. The generic version of me competes poorly; the specific
version has a combination the market doesn't often see. Building around the
person rather than the offering means the offering is allowed to evolve
as I do, without disrupting the foundation.

**Revisit if:** After two years of operation, if Orin has become
indistinguishable from a generic design consultancy, the founding premise
has been abandoned and needs to be reset.

---

## 2026-07-01 — Manifesto as foundation before any structural work

**Decision:** Wrote the manifesto before deciding on legal structure,
pricing, offer shape, or website. The manifesto is the load-bearing
document; everything else is downstream.

**Reasoning:** Structural decisions made before the manifesto is clear tend
to shape the manifesto rather than being shaped by it. Doing manifesto
first means every subsequent decision has a source of truth to check
against.

**Revisit if:** A structural decision cannot be resolved by reference to
the manifesto — this means either the manifesto is incomplete or the
decision doesn't matter enough to make.

---

## 2026-07-01 — Notion as workshop, GitHub as canonical

**Decision:** Notion holds the thinking, drafts, targets, and log.
GitHub holds the canonical versions of the manifesto, SOUL file, case
studies, and site. When they diverge, GitHub wins.

**Reasoning:** Trying to keep two systems in constant sync fails. Giving
each system a distinct role removes the ambiguity.

**Revisit if:** Notion starts holding things that need to be permanent
and version-controlled, or GitHub starts being edited as scratch space.

---

## 2026-07-02 — Locked one-liner (v1)

**Decision:** Orin's one-liner is: "For teams shipping product without a
full design department: Orin builds the design system your developers
ship from."

**Reasoning:** Names the buyer directly (teams shipping without a full
design department), names the deliverable in the buyer's language
(design system), and names the outcome (developers shipping from it).
Rides the market shift toward developer-led product delivery rather than
resisting it. Filters out teams with full design capacity, which
aren't Orin's clients anyway.

**Revisit if:** Real client conversations consistently reveal that the
buyer doesn't recognise themselves in "teams shipping product without a
full design department" — meaning the buyer framing is wrong, not the
words.

---

## 2026-07-02 — Locked 60-second positioning (v1)

**Decision:** The 60-second version of Orin's positioning is locked as
above (see Notion Positioning page for full text).

**Reasoning:** Opens with the substrate framing from the manifesto,
names the buyer problem in their language (developers carrying the
design load), describes the work in concrete terms (design system,
tokens, component library, Figma-to-code pipeline), and grounds it in
the Vivo Energy story with the sixty per cent defect reduction as
evidence. Ends personally rather than performatively — "that's the kind
of problem I like to solve" — which keeps the version honest to spoken
delivery.

**Revisit if:** Real conversations reveal that a specific paragraph is
consistently unclear, or that the Vivo story doesn't land for a
particular buyer segment.

---

## 2026-07-02 — Locked offer shapes and pricing (v1)

**Decision:** Orin's offer is three engagement shapes, priced fixed
against outcomes, never in days:

1. **The Diagnostic** — £3,000 fixed, 1–2 weeks. Written diagnosis of
   where the substrate is broken and what it's costing. Entry point for
   every new client.
2. **The Build** — £14,000 base, scoped £12k–18k from the Diagnostic,
   4–6 weeks. Design system, tokens, component library, and pipeline,
   built in the client's workflow.
3. **The Retainer** — £2,000/month, cancellable with 30 days' notice.
   Roughly 3–4 days of attention a month keeping the system alive and
   iterating as the product grows.

Hard rule: no Build without a Diagnostic first. First client pays full
rate. No discounting under pressure.

**Reasoning:** The three-shape structure lets a nervous buyer start
small while giving Orin a values-fit filter before long commitments.
Fixed pricing avoids day-rate commoditisation and the freelancer
comparison. The Diagnostic-before-Build rule is the structural answer
to the Momentum pattern — Orin never prices unscoped work again. The
Retainer is the consistency engine: three retainers alone clear the
monthly floor (~£5,500–6,000 revenue for £4k after tax), which is what
ends the bridging work permanently rather than temporarily. Pricing
sits inside the UK market corridor for senior design-systems work
(£450–650/day equivalent) while agencies quote £30k–60k for comparable
scope with junior staffing.

**Revisit if:** Three complete engagements are done (expect prices to
go up, not down); or real conversations consistently stall at a
specific price point, which would mean the defence logic needs work
before the number does; or the Diagnostic repeatedly fails to convert
to Builds, which would mean the diagnosis output isn't demonstrating
enough value.

---

## 2026-07-02 — Domain: orinsystems.co

**Decision:** Purchased orinsystems.co as Orin's primary domain.
orindesign.co retained as a redirect.

**Reasoning:** The positioning arc deliberately moved Orin away from
"design" as its category and toward systems. The domain is the one
piece of positioning that appears before any copy is read — in email
signatures, invoices, and outreach. "Orin systems" files Orin in the
right category with the technical buyer on sight. The old domain
redirects so nothing half-remembered is lost.

**Revisit if:** Never, realistically. Domains only get renamed under
duress.

---

## 2026-07-02 — Manifesto as top-level page

**Decision:** The Manifesto is a top-level page with its own URL, not a
section on Home. Sitemap locked at five pages: Home, Manifesto, How it
works, Work, Contact.

**Reasoning:** The manifesto needs its own URL so it can be linked
directly in outreach — it does values-fit filtering before a call ever
happens. It also serves as the About page, so no separate About exists.

**Revisit if:** Analytics or real conversations show nobody reads it as
a standalone page — then compress a "why Orin exists" section onto Home
and demote the full text.

---

## 2026-07-05 — Token pipeline stood up day-one from the New Client Playbook

**Decision:** Built the Orin site substrate token-first before any page CSS
exists: a Style Dictionary v4 / DTCG pipeline in `tokens/`, a semantic-only
token seed, `sync` + `verify-build` + an 8-check `report` wired and passing 8/8,
and a `site/` scaffold that consumes only the semantic vendor layer. First
commit = scaffold + vendor tokens + a passing report, exactly as the playbook
prescribes.

**Reasoning:** Every retrofit on KR came from one inversion — CSS existed before
tokens, making tokens an extraction job. Orin's `site/` was empty, so starting
token-first costs nothing and removes the entire class of backlog. The pipeline
is also the product demonstration: a CTO evaluating Orin can open the repo and
see a no-hardcoded-values build, which is the Vivo argument made visible.

**Two deliberate deviations from the playbook:**
1. *One repo, not two.* The playbook assumes a client with a separate product
   (`{client}-token-pipeline` + `{client}-site`). Orin is the practice itself, so
   `tokens/` and `site/` live in this one repo. Revisit only if Orin's site and a
   reusable client-template pipeline need to diverge.
2. *No Storybook/Chromatic for the site.* Visual-regression tooling is right for a
   client's component library (the Build deliverable), not for a five-page
   marketing site. Kept the cheap, high-value guards (verify-build + report),
   dropped the component-library apparatus the problem doesn't earn.

**Seed choices (placeholders, not locks):** fonts Inter Tight / Source Serif 4 /
Inter; warm-neutral + slate-blue palette (deliberately not KR's teal); dark mode
out for v1 but semantics-only so it stays cheap to add. Each is a JSON edit away.

**Revisit if:** brand fonts or palette are chosen and differ from the seed (edit
`tokens/src/primitives.json`, rebuild); or dark mode comes into scope (author
`tokens.dark.json`); or a real component library appears and earns Storybook.

---

## 2026-07-06 — Adopted the IDEM teal/neutral palette (light only)

**Decision:** Replaced the placeholder seed palette with the IDEM Revised
primitives — the full 12-step `neutral` (cool blue-grey) and `teal` ramps,
light-mode values only. Semantic layer unchanged in shape; it now resolves
onto teal for links and neutral for text/surfaces. Orin stays single-theme
(no dark) by choice.

**Reasoning:** IDEM is Warren's own design system, so teal is a deliberate
brand choice, not the accidental "teal-leftover" the playbook warns about.
Reusing the IDEM ramps verbatim (same step names) gives 1:1 parity with the
Figma variables, which makes a future JSON→Figma mirror a clean sync. Because
the site consumes only semantic tokens, this was a primitives-only edit — the
rebrand touched no page. One evidence-based change: `text/muted` moved from
neutral/500 to neutral/700, because 500 on the paper background measured
3.04:1 (fails WCAG AA for normal text) and 700 measures 5.97:1. AA is the
manifesto's baseline, so the guardrail-adjacent choice follows the contrast
maths, not taste.

**Revisit if:** dark mode comes into scope (author the dark column from the
same IDEM ramps into tokens.dark.json); or fonts are chosen (still the
placeholder Inter Tight / Source Serif 4 / Inter seed as of this date).

---

## [Template for future entries]

## YYYY-MM-DD — [Short decision title]

**Decision:** [What was decided.]

**Reasoning:** [Why. Include the context, the alternatives considered,
and the specific factor that tipped the choice.]

**Revisit if:** [The condition under which this decision should be
re-examined. If none, say so explicitly.]
