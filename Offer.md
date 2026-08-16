# Orin — The Offer

*Version 1.1 — 12 August 2026*

Four engagement shapes, and two ways in. Each one is optional. Each one
de-risks the next. Diagnostic feeds Build feeds Retainer for a team that
already has a system; Foundation feeds Build feeds Retainer for a team
starting from nothing. Priced fixed, against outcomes, never in days.

---

## 1. The Diagnostic

**What it is:** A short, bounded engagement to find where the substrate
— the design system, tokens and pipeline underneath the product — is
broken and what it's costing the business.

**Duration:** 1–2 weeks.

**Price:** £3,000 fixed.

**What happens:** I get into the product, the codebase, the Figma files,
and whatever brand or digital guidelines exist. I talk to the developers
carrying the design load. I find the pressure points — duplicated
components, broken handoff, token chaos, silo design calls — and trace
what they're costing in velocity and defects.

**The opening move: point the pipeline at their own Figma file, live.**
This is the ten-minute conversation, not a chore, and it is the single
strongest thing I can do in a first meeting. The token pipeline matches
Figma collections and modes by *name*, so it can be run against a file it
has never seen without a code change. `npm run sync:figma -- --dry-run`
prints an audit before anything is written. Read it out loud to them.

Three things it surfaces, in roughly increasing order of discomfort:

- **A collection the convention doesn't know.** Their variables live
  somewhere no pipeline will look. Either it's genuinely out of scope, or
  their design system has a layer nothing downstream can reach.
- **A mode that maps to nothing.** A theme that exists in Figma and cannot
  exist in code. Ask what they believed was shipping.
- **A collection that isn't there at all.** The layer is missing, not
  misnamed.

Then the harder ones the build surfaces: variables in Figma that never
reach their code, hardcoded values in their code that bypass the system,
and whether their dark mode actually resolves — that last one is the check
that exists because a real dark theme silently carried its light values
for months, past every other gate.

This is *"I'd rather tell a client the hard truth about their system than
sell them polish they don't need"* executed in ten minutes rather than
asserted in a deck. It is also the manifesto's *"understanding the whole
system end-to-end"* — done before they've paid.

**Findings get read aloud before they get written up.** A generated audit
produces evidence, not conclusions. Run against my own design system, it
flagged nine colours as identical in light and dark — the signature of a
broken theme. Eight were real: white text sitting at 1.16:1 in dark mode,
unreadable. The ninth was a transparent border, which was always going to
be identical. Waving all nine through would have buried the eight behind a
green build. No tool draws that line. That's the part you're paying for.

**What the client gets:** A written diagnosis. Where the substrate is
broken, what it's costing, and what fixing it would involve — scoped and
priced. Valuable whether or not they proceed to the Build.

**Why it exists:**
- Gives a new client a low-risk way to start with Orin.
- Gives Orin a values-fit filter before committing to a long engagement.
- Means the Build is scoped from evidence, never from a sales call.

**The defence on a call:** "It's fixed, it's two weeks, and you get a
written diagnosis of where your design system is costing you — whether
or not you work with me afterwards."

**And when they say "so you ran a script":** "The script takes ten
minutes and I'd run it for free. The two weeks is me telling you which
of its findings matter."

**Pricing logic:** Under the ~£5k discretionary threshold most technical
leaders hold, so no procurement process required. Substantial enough to
signal this is real work, not a loss-leader.

---

## 2. The Foundation

*The other way in. For a product that doesn't exist yet.*

**What it is:** The design system's first layer, installed and connected,
before there's a product to fix. The greenfield equivalent of the
Diagnostic: paid, bounded, and the thing that scopes the Build.

**Duration:** 2 weeks.

**Price:** £4,000 fixed.

**What happens:** There's nothing to audit, so this one earns its scope by
building. I take the brand foundations, or whatever exists of them, and
author the token layer properly: DTCG source, primitives and semantics,
light and dark resolved and checked. It's wired into whatever the team is
shipping on, which for most new products means shadcn and Tailwind. Then
the build step, the generated file your components already read, and the
guardrails that stop it drifting. It ends with one real screen shipped
from the system, not a page of swatches.

**On shadcn, since most founders arrive holding it.** shadcn already gives
you semantic variables (`--background`, `--primary`, `--border`) with a
dark block over the top. That's genuinely useful and I build on it rather
than replacing it. What it hasn't got is a layer above: no authored
source, no build, nothing that regenerates the file, no guardrail. The
values are typed inline. So you have the names without the ownership,
which works fine until the first rebrand or the second developer, at which
point there's nothing upstream to change and forty files to edit by hand.

**What the client gets:** A token layer they own, connected to the code
they ship. One place to change a colour. A build that fails loudly when
someone bypasses the system. One screen already running on it, and a
scoped, priced Build if they want the rest.

**Why it exists:**
- A founder has no existing system, so the Diagnostic can't route. This
  gate can be walked through.
- Same three protections as the Diagnostic: never price unscoped work,
  filter for values fit before committing weeks, scope the Build from
  evidence rather than a sales call.
- Leaves something working behind even if they stop there.

**The defence on a call:** "You'll restyle at least once and add a second
developer before you raise. Doing this now is £4,000. Doing it after sixty
components exist costs several times that, plus a freeze while it lands."

**And when they say "I can install shadcn myself in an afternoon":**
"You can, and you should. That's not what you're paying for. You're paying
for the layer above it, the one that means changing your brand is one edit
rather than a fortnight, and that still holds when I'm not here."

**Pricing logic:** Above the Diagnostic because it leaves a working system
behind rather than a written diagnosis. Still under the ~£5k discretionary
threshold, so no procurement. Note the buyer is different here: a founder
can't run the velocity maths, because nobody's burning money on rework
yet. Their fear is time to launch and the cost of building it twice. Price
against that fear, not against a spreadsheet they can't fill in.

**Never say "custom design system" to a founder.** What this is, is a
token layer and about eight primitives. Say that. They'll hear
"40-component library" and either price it accordingly or walk.

---

## 3. The Build

**What it is:** The design system, built and connected. The working thing.

**Duration:** 4–6 weeks, scoped from the Diagnostic.

**Price:** £14,000 base. Scoped £12,000–£18,000 depending on Diagnostic
findings.

**What happens:** Design system built from the brand foundations up.
Tokens. Component library. Page patterns. The pipeline connecting Figma
to the codebase — Style Dictionary, GitHub, whatever the working thing
requires. Built iteratively, in their workflow, with their developers —
not delivered over a wall at the end.

**What the client gets:** One source of truth their developers ship
from. Fewer duplicated components. Fewer design calls made in silos.
Less defect debt. A system that exists in their codebase, not in a
Figma file they have to translate.

**The defence on a call:** "Your team of twelve developers costs you
roughly £70k a month. If duplicated components and design churn are
costing you even ten per cent of velocity, this pays for itself inside
two months."

**Pricing logic:** Five weeks of senior design-engineering work at UK
market rate (£450–650/day for design systems specialists) lands at
~£14k. But the price is fixed against the outcome, not the days — the
client gets certainty, Orin isn't punished for being efficient. Agencies
quote £30k–60k for the same scope and staff it junior. The exact figure
is always set by the Diagnostic — Orin never quotes blind.

**Hard rule:** No Build without a Diagnostic or a Foundation first. This
is the anti-Momentum clause. Orin does not price unscoped work. Which
door they come through depends on whether a system already exists; that
there is a door at all does not move.

---

## 4. The Retainer

**What it is:** Orin stays close. The system keeps living.

**Duration:** Ongoing, monthly. Cancellable with 30 days' notice.

**Price:** £2,000/month.

**What happens:** Roughly 3–4 days of attention a month. Iterating the
system as the product grows. Reviewing new components before they
fragment. Keeping the pipeline healthy. Being the design brain the
developers can call on when they're making a call they're not sure about.

**What the client gets:** The system doesn't decay back into an
artefact. New features ship consistent with the system. The design
load their developers carry stays light.

**The defence on a call:** "A fraction of what one junior designer costs
you, and the system stays alive instead of decaying into an artefact."

**Pricing logic:** Meaningfully below the cost of any hire, high enough
to justify real ongoing attention. Cancellable-anytime removes lock-in
fear. Good retainers don't get cancelled — they get expanded.

**Why it matters to Orin:** The retainer is the consistency engine.
Builds are lumpy; retainers are what make the practice sustainable.
Every Build proposal presents the Retainer as the default continuation,
not an upsell.

**The trigger to watch for on a Foundation client: they hire a designer.**
That is the moment the direction of truth has to be settled, and it cannot
be settled before it happens. A Foundation ships code-first, because a
founder with no designer has nobody to author in Figma. The day someone
arrives who expects to author there, the question is whether to flip them
onto the Figma-first pipeline, and that is a real piece of work with a real
decision inside it. Not something to pre-build during the Foundation, and
not something to improvise in a Slack message either.

What to say when a founder asks about Figma before that day comes: the
token source is DTCG, the format design tooling imports, so nothing is
locked away and their future designer starts from what exists. What we are
not doing today is building a Figma file nobody is opening yet.

---

## The model against the floor

Floor: ~£5,500–6,000/month revenue (£4k after tax, sole trader).

- Two retainers: £4,000/month. Near the floor.
- Three retainers: £6,000/month. Floor cleared, no builds required.
- Target state (4 retainers + builds in flight): £14k–20k/month.

The plan is not the target state. The plan is: first way in, first
Build, first Retainer. One client, one complete arc, done properly.
Whether that arc opens with a Diagnostic or a Foundation depends on
who emails first, and it doesn't change what has to be proved.
The model scales from there or it doesn't — but one arc proves the
machine.

---

## What triggers a no

- Build requests without a Diagnostic or a Foundation. (The
  anti-Momentum clause.)
- Foundation work sold on screen count. If the conversation is "how many
  pages do I get," the ownership layer isn't what they're buying and
  I'm competing with an afternoon of shadcn. Different job, someone
  else's.
- "Can you do it in 40 hours" budget-first scoping. Treats the system
  as a commodity. It isn't one.
- Brand guidelines, marketing surfaces, social media assets. Legitimate
  needs, not Orin's work.
- Strategy-deck-only engagements. Orin builds. Advice without building
  is not the offer.
- Clients who want a vendor. Orin is a partner or nothing.
- Discounting under pressure. The first client pays full rate. Every
  client pays full rate. Nobody needs to know how many clients Orin
  has or doesn't have.

---

## Pricing posture

Prices are claims about the value of outcomes, not reflections of
worth or availability. The buyer is technical — a head of engineering,
a CTO, a Technical Officer — because they can do the velocity maths
themselves. Price for the buyer who can see the value, not the
budget-holder who can't.

The Foundation is the one exception, and it's a change of argument
rather than a change of posture. A founder can't do the velocity maths,
so the value gets shown a different way: what the second build costs,
and what a rebrand costs once sixty components exist. Same fixed price,
same no-discount rule, different sum on the whiteboard.

The test for whether the token layer is worth installing at all is not
"is it an app rather than a site." It's how many people will change this
after I leave, multiplied by how often. A brochure site a marketing team
edits monthly drifts hard. An app built by two people and frozen for a
year doesn't.

Say the number without flinching. The flinch costs more than any
discount.

*Review prices after the first three complete engagements. Expect
them to go up, not down.*
