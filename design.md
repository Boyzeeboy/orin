# Orin — Design principles

*How pages get laid out. The bridge between the tokens (the vocabulary) and
the page (the composition). This is a principles doc, not a specification:
it records the intent that isn't already written down, and defers to the
canonical files for everything that is.*

*Where the real values live: `tokens/src/*.json` (the scale), `site/styles.css`
(the composition), `PHASE5-BUILD.md` (approved copy + section structure),
`voice.md` (how prose gets written), `HANDOVER.md` (attribution, separators,
the "deliberately absent" list). If this doc ever disagrees with those, they
win — fix this doc. The shipped site outranks all of them.*

---

## The one principle everything else serves

**The type scale is the visual.** Hierarchy comes from contrast in size,
weight, and space — never from decoration. When a section feels flat, the fix
is a bigger jump on the type scale or more space around it, not a new element.
Orin sells restraint as a discipline; the site has to look like it means it.

A useful test: if the design only works once you've added a card, an icon, a
divider, or a background flourish, the layout underneath isn't doing its job
yet. Strip it back and make the type and spacing carry the weight first.

**The one standing exception, so it isn't mistaken for drift:** the hero's
12-column overlay (`.grid-overlay`, desktop only, `aria-hidden`). It is
decoration by the letter of the rule above. It stays because it shows the grid
the whole site is built on, and a practice selling the substrate showing the
substrate is doing work that type alone can't. It was removed and reinstated on
2026-08-16; read that entry before touching it. No second exception without the
same argument.

## The layout system (as built)

Pages are a vertical stack of full-bleed **bands** (`.section`), each holding a
centred measure. One band variant exists: `.section--inverse`, the dark closing
band. It flips ground and ink, and both the rail and the eyebrow have to flip
with it or they fail contrast. Inverse bands stay **link-free** by decision
(2026-07-09): heading and button only, which is why no
`colour/text/link-on-inverse` token exists. Don't put an inline link in one.

Two width layers exist inside a band:

- `.wrap` — prose column, clamped to `--measure` (68ch). Reading width.
- `.container` + `.section-grid` — the wide 75rem outer measure and the 12-col
  grid inside it. Wide scaffolding, narrow text: prose still clamps to 68ch via
  the `p` rule even inside the grid.

The `.rail` (column 1) carries the section index alone: the `01`, `02`, `—`
running down the left edge. The eyebrow is **not** in the rail: it sits at the
top of the content column, inside `.col-heading` or `.col-main`. (This doc said
"eyebrow/index" until 2026-08-16, which would have put it in column 1 and
broken the pattern on every page.)

Content sits in one of two arrangements, both starting at column 2:

- `.col-heading` (2–7) + `.col-body` (7–end) — the split used when a section
  has a heading on the left and prose on the right.
- `.col-main` (2–end) — one full-width column, for sections whose content is
  a single run: the hero, and the cards block.

Below 64rem the grid collapses to one column and everything stacks in DOM
order. Compose within this — don't invent new layout
primitives unless a page genuinely demands one (and if it does, that's a
conversation, not a silent addition — component budget in `PHASE5-BUILD.md`).

## Vertical rhythm

Spacing is the main design lever after type. The `space` scale
(`tokens/src/layout.json`) has **deliberate gaps** — no 5, 7, 9, 10. That's a
feature: it forces a rhythm instead of pixel-nudging. Reaching repeatedly for a
value between two steps is a signal the *scale* needs a step (a token proposal),
not a reason to hardcode one.

Rough intent for the scale in use:

- Band breathing room (`.section` padding-block): `space-16` default; the hero
  (`.section--hero`) uses `space-24` to set itself apart.
- Between stacked elements inside a band: `space-4` to `space-6`.
- Tight pairings (label to thing it labels): `space-2`.

These are starting points, not laws — tune them in the browser. But tune by
*choosing a step*, not by typing a raw value.

## Design at both ends of the range

Build **narrow first** (~360px), then widen. The copy has to survive at phone
width — if the hero works there, it works everywhere. Designing at desktop and
squishing down always breaks worse than the reverse. Check the two collapse
points the grid already defines (the 64rem breakpoint is the one that matters
most) and make sure the DOM order still reads top-to-bottom when it stacks.

## Colour discipline

Hierarchy must survive in near-greyscale. Squint at the page (or drop it to
mono): if you can still tell what's most important, the structure is sound. Teal
is an accent that earns each appearance: links, the one button, the rail, the
card index, and every focus ring. It is never decoration. If a section needs colour to feel finished, the layout needs
more work, not more colour.

## The design-in-browser loop

DevTools is the sketchpad; the token pipeline is how a value lands. Never let a
value tinkered in the inspector ship as a literal.

1. Iterate live in DevTools — nudge padding, try a bigger type step, feel the
   rhythm. Nothing here is saved; that's the point.
2. To preview a *scale* change, override the token on `:root`
   (e.g. set `--orin-space-12`) and watch every band respond at once.
3. Read the value you settled on. Decide which kind of change it is:
   - **Reassignment** — a different existing step. Change which token the rule
     in `styles.css` points at. No JSON, no rebuild.
   - **Token proposal** — a value the scale doesn't have. Edit
     `tokens/src/*.json` → `npm run build` → `npm run sync` → use the token.
4. `cd tokens && npm test` green (8/8, verify clean) before pushing.

## Handing work to Claude

The cleanest loop: design in the browser, screenshot **both widths** (narrow +
desktop), and hand over the screenshot plus "make this real through the tokens."
Warren drives design direction; Claude translates to committed, token-clean CSS
and flags anything that breaks a guardrail. A screenshot beats a paragraph of
description every time.

## Using outside references

Reference libraries (Mobbin, etc.) are for *specific mechanics* — "how is a
three-tier pricing block usually laid out" — not for art direction. Most of what
they contain is generic SaaS marketing, which is exactly the look Orin defines
itself against. Pull a reference to unstick a particular problem, screenshot it
for Claude, then set it down. Never let it set the overall style.

## Two quick tests before shipping a page

- **Squint test.** Blur your eyes. Is the hierarchy still legible? (Colour and
  detail drop out; structure shouldn't.)
- **Read-aloud test.** `voice.md` wants sentences readable aloud; the layout
  should support that reading rhythm: measure at 68ch, generous line spacing,
  nothing crammed.

---

*What this doc is not: a re-spec of page copy or section order (that's
`PHASE5-BUILD.md`), of voice or exclusions (`HANDOVER.md`), or of any concrete
value (`tokens/src/*.json`). Keep it thin. If it grows into a second source of
truth, it has failed.*
