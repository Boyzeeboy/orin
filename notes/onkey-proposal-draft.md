# Pragma / On Key proposal — draft

> **DRAFT NOTES. Delete this block before sending.**
>
> Rewritten 21 August 2026, after the session with Amanda. Check these first:
>
> - ~~Currency~~ **Settled: GBP, bank transfer, no Stripe.** Payment
>   mechanics stay out of this document and go in the engagement letter.
>   Ask Stefan on Monday for their approval threshold and standard payment
>   terms.
> - ~~Company name~~ **Settled: Pragma on the letterhead.**
> - ~~Figma plan and branching~~ **Settled: Professional, so branching is
>   unavailable to them.** Sections 4 and 6 are written on that basis.
> - **Names and spellings.** Amanda, Gerhard, Darren, Stefan are as heard.
>   Several others came off a poor line and are deliberately not used here.
> - **Aha! and TFS.** Confirm TFS is current and not Azure DevOps.
> - The engagement letter in `notes/contracts/` comes after this.

---

**From:** Warren Rossiter, Orin
**To:** Stefan [surname], Pragma
**Date:** [date]
**Re:** The design system substrate, and a first piece of work

Stefan,

You asked me to write up what I heard and what I think I can help with, so
your team can correct it and turn it into a scope of work. Here it is, after
a second session with Amanda on Friday. Take issue with any of it.

## 1. What I heard

Compressed, so you can tell me where I have it wrong.

MUI is your component baseline and it is not moving. You hold the paid tier
and the Figma kit, you ship Material 2 deliberately, and Amanda's rule is a
good one: rely on mui.com first and fall back to Material Design where MUI
falls short. Custom components exist where the framework genuinely has no
answer, and the multi-toast case for bulk operations is a fair example.

The master design system and the Material Manager build started in parallel,
against a June deadline, with a team doing solution architecture for the
first time. That is a hard set of conditions and the work I saw on Friday is
better than those conditions deserved.

What it cost is visible now. A previous designer had to draw components while
the components themselves were still changing, so binding variables to them
was impractical and a lot of what shipped is decoupled from the system.
Roughly **486 library changes** stacked up unfetched between the master and
the Material Manager file. Screens carry AI output that was never linked to a
master. A sprint's worth of screens were drawn and never used.

None of that reads to me as a team doing the wrong things. It reads as a
system with no version, being built by people who were never given the room
to version it.

## 2. What I think the problem is, and why it matters more now

Most of it comes back to one thing: **nothing holds still.**

Figma is your source of truth and it is also a live document several people
edit. Those two jobs fight. A source of truth has to hold still long enough
for somebody to build against it, test against it, and afterwards prove what
it said at the time. Yours cannot, so every consumer absorbs that cost
privately, and it reaches you as scattered fault-finding rather than as one
visible problem.

**The part that changes my advice is where you are heading.** Amanda was clear
that the intention is to move off Figma and let the BAs prototype in Claude,
with the Figma file as a hybrid for now. I think that is the right direction.
It also raises the stakes on the substrate, for a reason worth being plain
about.

Your design decisions currently live inside a Figma file. Values, naming,
rules, all of it. Every month that continues without an extracted, versioned
token layer is another month of dependency on a tool you have decided to
leave. **A token layer in your own repository, in the open DTCG format, is
what makes leaving Figma survivable.** It is portable, it is diffable, and it
does not care which design surface authored it.

So the work below is worth doing whether you stay on Figma or not. That is
the main reason I would start here rather than anywhere else.

## 3. Three things your team raised

**"Our variables barely change."** Gerhard is right, and it is a fair
objection to a machine whose job sounds like guarding colour values. The gate
earns its place doing two other things. It stops a value entering the system
that cannot work, since a semantic colour typed as a literal cannot flip
between light and dark or between white labels, and nothing in Figma will
tell you so. And it makes a release solid enough for a person to sign off.
Your variables may well be stable. Your artefacts plainly are not, and the
artefacts are the expensive half.

**"MUI owns the theming, and going off-piste costs us at every upgrade."**
Agreed, and I will hold myself to it in writing. Everything I generate stays
inside MUI's supported theming surface: palette, typography, shape, spacing,
and `styleOverrides` on documented slots. Nothing reaches into MUI's internal
selectors from outside. Where a component needs something the theme cannot
express, that is a finding about the component and it goes back up the chain.

Two consequences, both in Gerhard's favour. MUI's names stay fixed and I fill
them in, with Pragma inventing vocabulary in one place only, an app layer
above. And the generated theme is TypeScript, typed against MUI's own
`Theme`, so a misspelled palette path becomes a compile error instead of a
component silently falling back to an MUI default.

**"Darren already connected Claude to our tokens."** He did, and it works
reasonably well. What it cannot do is prove that a value in your code came
from your system, or stop a release when it didn't. An agent produces a
plausible answer; a pipeline produces the same answer every time and fails
loudly when it can't. Those sit next to each other rather than competing, and
the more your team generates, the more the check is worth having.

## 4. What I would do first

Amanda told me her most urgent piece of work is housekeeping on the masters:
going back through the screens that were drawn, finding what has been
detached, and asking why, and what need the master failed to meet.

**That is the same activity I would start with.** The difference is that mine
ends in a written document rather than a tidier file, and it covers the code
as well as the Figma.

**Two weeks. £3,000, fixed.**

- I point my token pipeline at your master file and audit how much of your
  design system actually reaches your code. It runs on my machine, reads your
  variables locally, and uploads nothing. Your plan does not include the
  variables API, so this uses a local plugin and stays a deliberate,
  human-triggered step. That suits a first engagement.
- Three inventories: your variables, your components, and what the Material
  Manager work left behind. Each read against your code as well as your
  Figma, because drift only becomes visible when you compare two things.
- Time with Gerhard and Amanda, and whoever else is carrying the load.

Nothing is measured against my taste. Findings are held against MUI's own
token documentation, which is the standard Amanda has already chosen to
follow, against WCAG AA, and against what your team currently believes to be
true. The gaps between those three and what is actually in the file are the
diagnosis. Everything is measured so it can be measured again, so you can see
later whether any of it moved.

You get a written diagnosis: where the substrate is broken, what it is
costing, and what fixing it involves, scoped and priced. Yours to act on
whether or not you take a next step with me.

I walk the findings through with you live before writing them up. An audit
produces evidence, and deciding which of it matters is the part you are
paying for. Run against my own system, the same check flagged nine colours as
broken. Eight were real, including white text at 1.16:1 in dark mode. The
ninth was a transparent border that was always going to look identical.
Waving all nine through would have buried the eight behind a green build.

## 5. Two things I would tell you now, for free

**Your Figma seat count is costing Amanda her week.** With three paid seats,
your developers cannot open Dev Mode, so the way they get specifications is
to message Amanda on Teams. That routes the entire handover of a complex
product through one person, and it is a licensing decision rather than a
design problem. Costing a few more seats against the hours it currently
consumes is the cheapest thing on this list.

**Part of Gerhard's token problem has a small, specific cause.** Amanda
identified it herself: the support-and-branding grouping she used to organise
the file, and the custom accent naming she added for flexibility. Those two
sit between his code and MUI's vocabulary. Worth looking at before assuming
the problem is large.

## 6. What likely follows

Shapes rather than quotes. I do not price work I have not scoped.

**The variables.** Converge your Figma set onto MUI's token names, restructure
the primitives and semantics so the modes genuinely resolve, generate your
theme from that, and install the checks that stop it drifting. This has an
end state you can count down to. **4 to 6 weeks, £12,000 to £18,000, exact
figure set by the Diagnostic.**

One item inside it I want to flag now, because it sounds smaller than it is.
Gerhard mentioned white labelling. Supporting brands beyond a light and dark
pair is real engineering through the length of the pipeline, so I would price
it as its own line and show you the number.

**The artefact that stops moving.** Gerhard and Mauritz both asked for this on
the call, from opposite ends and without either getting an answer. Gerhard
wanted something to build a component against and something QA could test
against. Mauritz wanted to know what he and Darren are signing off, when the
thing they are looking at changes while they look at it.
Branching is an Organization-plan feature and you are on Professional, so the mechanism is a
versioned token release plus a controlled publishing discipline between the
master and the project files, rather than a branch-and-merge flow. The release
gets a version number, and that number is what an Aha! feature and a TFS work
item point at.

This part does not finish. It changes how you work and it decays the moment
nobody is holding it, which is what a **retainer at £2,000 a month** is for,
cancellable on 30 days' notice.

**On the numbers themselves.** All figures here are pounds sterling, invoiced
from the UK by bank transfer. If your finance team needs a rand figure to
approve against, I am happy to fix the equivalent at the rate on the date we
sign, so the number stops moving once it is agreed.

**On the return, since you will be asked:** at Vivo Energy, contracted via
Rethink, putting a basic component library and colour system in front of the
developers took roughly 60% out of their development time within two or three
sprints. Your situation is more complex than theirs was and I am not promising
that number. It is why I think this work pays for itself, offered as a reason
rather than a projection.

## 7. The layer above, which is where I think you are actually going

Amanda described your ask as getting the BAs prototyping in Claude with rules
that go beyond gating variables and tokens. Her example was the right one: a
BA can choose a data grid or a kanban board, and if the journey should not
block the user, they should not be handed a modal.

That is the same problem as the token gate, one level up. A token gate
constrains **values**. What you are describing constrains **patterns**, which
is the harder and more valuable half, and nobody in your current setup is
building it. Your consultancy sells capability, your internal team builds
agents, and Darren has written a skill. The constraint layer is the gap.

It is also the part that cannot be bought. It is your layout patterns, your
elevation rules and Amanda's composition decisions written down in a form an
agent has to obey, with a mechanism for proposing a new pattern rather than
inventing one silently.

I would not put this in the first engagement. It depends on the token layer
existing underneath it, and on your team having room to breathe after June.
I am naming it because it is the reason I think this is worth doing properly
rather than quickly.

## 8. On design capacity

You asked whether I know freelance designers you could slot in. I will come
back to you with names I would genuinely vouch for.

One thing worth agreeing before anyone starts: whoever arrives will be working
inside the same master file. Extra hands in a file with no version and no
owner is a good part of how most systems end up where yours is. That is a
short conversation rather than a project.

To be plain about my own boundary: building screens sprint by sprint is a
different job from the one above, and I think you get better value from me on
the system than in the queue. Reviewing components, checking new patterns
against the system, and being the person Gerhard and Amanda can call is
included in the retainer.

## 9. What I need from you

- A Figma seat with **edit** rights on the file that defines the variables.
  Edit rather than view, because the plugin needs it.
- Read access to the UI repository.
- Around three hours with Gerhard and Amanda across the two weeks.
- A named contact who can answer a question inside two working days.

## 10. What I could still be wrong about

- Which MUI version, and whether CSS-variables mode is switched on.
- Whether the Figma kit you purchased is Material 2 or Material 3. You ship
  M2 deliberately, so an M3 kit means a mismatch is already baked in.
- Whether white labelling is a commitment or an aspiration, and how many
  brands it means. Amanda did not think this was hers to answer.
- Your Figma plan, which Amanda was going to confirm. If it turns out to be
  Enterprise, the plugin drops out and the sync can run unattended, which
  makes section 4 simpler and cheaper.

Warren
