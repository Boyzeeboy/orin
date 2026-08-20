# Onkey proposal — draft

> **DRAFT NOTES. Delete this block before sending.**
>
> Written 20 August 2026, before the session with Amanda. Check these first:
>
> - **Names and spellings.** Taken off a poor line. Stefan, Harald, Amanda,
>   Darren. Get the surnames and the correct spelling of every one.
> - **Currency.** Priced in £ from `Offer.md`. Onkey reads South African, so
>   decide whether these go out as GBP, ZAR at a stated rate, or GBP with a
>   note. Do not send until this is settled.
> - **"Onkey" or "On Key".** The repo uses Onkey throughout. Check.
> - **Section 8 assumes the Amanda session has not happened yet.** After it,
>   either strike the questions it answers or send the proposal with the
>   follow-up note promised at the end.
> - **Aha! and TFS** are their tools as I heard them. Confirm TFS is the
>   current name and not Azure DevOps.
> - The engagement letter in `notes/contracts/` comes after this, if they
>   say yes.

---

**From:** Warren Rossiter, Orin
**To:** Stefan [surname], Onkey
**Date:** [date]
**Re:** The design system substrate, and a first piece of work

Stefan,

You asked me to write up what I heard and what I think I can help with, so
your team can correct it and turn it into a scope of work. Here it is. Take
issue with any of it. The parts I am least sure about are in section 8.

## 1. What I heard

Compressed, so you can tell me where I have it wrong.

You are modernising a mature asset management product. MUI is the component
baseline and it is not moving: you hold premium licences and the paid Figma
kit, and you ship Material 2 deliberately because Material 3 is too modern
for your users. Figma is your declared source of truth, in one master design
system file. Development builds against that file, QA tests against it, and
your BAs work in it directly.

The master has no version. No branching, no sign-off, no ticket, no owner
with a veto. Changes arrive from several directions, including the separate
Material Manager file that pushed components and variables back up into the
master while that module was being built. That file has since been merged
back in, so what it pushed is now sitting in the master looking exactly like
a decision somebody made deliberately for the whole system.

What that produces, in the words used on the call:

- Harald commits a component for end of sprint. The Figma moves underneath
  it. By the time QA opens the file it looks different, and nobody can say
  whether the difference was meant.
- Two masters exist for things that should have one. You suspected two
  buttons, and I would expect you to be right.
- A status change component moves when profile manager moves, through a
  shared master neither team is watching.
- Time goes into fault-finding and investigations. Where did this bleed in
  from.

Capacity is the pain you actually feel. Your phrase for the fix was cleaning
the kitchen and keeping it clean, and the second half of that is the harder
one.

## 2. What I think the problem is

Most of what I saw comes back to one thing: **you have no versioned
artefact.**

Figma is your source of truth and it is also a live document anyone can
edit. Those two jobs fight each other. A source of truth has to hold still
long enough for somebody downstream to build against it, test against it,
and afterwards prove what it said at the time. Yours cannot, so every
consumer absorbs that cost privately and separately, which is why it reaches
you as scattered fault-finding instead of as one visible problem.

The token layer is how you get a version worth trusting. A tag on a release
means something only if what it names was checked before it left.

## 3. Two things Harald raised

He was right about both, and neither changes the plan much.

**"Our variables barely change."** True, and a fair objection to a machine
whose job sounds like guarding colour values. The gate earns its place doing
two other things. It stops a value entering the system that cannot work: a
semantic colour typed as a literal cannot flip between light and dark, or
between white labels, and nothing in Figma will tell you so. And it makes a
release solid enough for a person to sign off. Your variables may well be
stable. Your artefacts plainly are not, and the artefacts are the expensive
half.

**"MUI owns the theming, and going off-piste costs us at every upgrade."**
Agreed, and I will hold myself to it in writing. Everything I generate stays
inside MUI's supported theming surface: palette, typography, shape, spacing,
and `styleOverrides` on documented slots. Nothing reaches into MUI's
internal selectors from outside. Where a component needs something the theme
cannot express, that is a finding about the component and it goes back up
the chain. It does not quietly become a deep selector.

Two consequences, both in Harald's favour:

- MUI's names are fixed and I fill them in. Onkey invents vocabulary in one
  place only, an app layer sitting above, and the boundary is mechanical:
  MUI's names may not be renamed, app names may.
- The generated theme is TypeScript, typed against MUI's own `Theme`. A
  misspelled palette path becomes a compile error instead of a component
  silently falling back to an MUI default.

## 4. What I would do first

The stock take you asked for. In my practice that is the Diagnostic, and
every engagement starts with one.

**Two weeks. £3,000, fixed.**

What happens:

- I point my token pipeline at your master file and audit how much of your
  design system actually reaches your code. It runs on my machine, reads
  your variables locally, and uploads nothing anywhere.
- Three inventories: your variables, your components, and what Material
  Manager left behind in the master. Each read against your code as well as
  your Figma, because drift only becomes visible when you compare two
  things.
- Time with Harald and Amanda, and whoever else is carrying the load.

What you get is a written diagnosis: where the substrate is broken, what it
is costing you, and what fixing it involves, scoped and priced. It is yours
to act on whether or not you take a next step with me.

I walk the findings through with you live before I write any of it up. An
audit produces evidence, and deciding which of that evidence matters is the
part you are paying for. Run against my own system, the same check flagged
nine colours as broken. Eight were real, including white text sitting at
1.16:1 in dark mode. The ninth was a transparent border that was always
going to look identical in both. Waving all nine through would have buried
the eight behind a green build, and no tool draws that line.

## 5. What likely follows

I can describe the shape of these. I would not price the middle one properly
until the Diagnostic is done, because I do not quote work I have not scoped.

**The variables.** Converge your Figma set onto MUI's token names,
restructure the primitives and semantics so the modes genuinely resolve,
generate your theme from that, and install the checks that stop it drifting
again. This piece has an end state you can count down to. **4 to 6 weeks,
£12,000 to £18,000, exact figure set by the Diagnostic.**

One item inside it I want to flag now, because it sounds smaller than it is.
Harald mentioned white labelling. Supporting brands beyond a light and dark
pair is real engineering through the length of the pipeline, so I would
price it as its own line and show you the number rather than absorb it
quietly and be slow later.

On the return, since you will be asked: at Vivo Energy, contracted via
Rethink, putting a basic component library and colour system in front of the
developers took roughly 60% out of their development time within two or
three sprints. Your situation is more complex than theirs was and I am not
promising that number. It is why I think this work pays for itself, offered
as a reason rather than a projection.

**The master file.** Branching, a versioned release, a Storybook build per
version, and that version linked from the Aha! feature and the TFS work
item. That is what development builds against, what QA tests against, and
the answer to "did this change or did I imagine it". This piece has no end
state. It changes how you work, and it decays the moment nobody is holding
it, which is what a **retainer at £2,000 a month** is for, cancellable on 30
days' notice.

**One thing has to happen before the variables work starts, and it costs you
nothing.** Freeze new variable creation in the master for the length of the
convergence. Additions queue up and land at the end. It slows no delivery,
because a module can still ship against everything that already exists.
Without it, a diff will show you that a value moved and will not show you
whether I moved it or somebody shipping a module did, and that evidence
trail is what the whole engagement is built on.

## 6. What this is commercially

Amanda asked whether this is a product or a service and summarised my answer
back accurately, so for the rest of your team:

It is a service. What lands in your repositories is yours, and it is an
ordinary repo needing ordinary maintenance. Take it in-house whenever you
want and nothing breaks, nothing expires, and nothing phones home. Harald
takes it over and I hand it over properly. I keep the underlying machinery,
which I use across engagements, and you hold a permanent licence to use your
instance of it. Skills transfer is part of the work rather than a favour at
the end.

## 7. What I need from you

Amanda expects no blockers here, so this is short.

- A Figma seat with **edit** rights on the file that defines the variables.
  Edit rather than view, because plugins need it.
- Read access to the UI repository.
- Around three hours with Harald and Amanda across the two weeks.
- A named contact who can answer a question inside two working days.

## 8. What I could be wrong about

Open, and cheap to settle:

1. **Do you have Figma Enterprise?** If so, the variables API is available,
   the plugin I demoed drops out entirely, and the sync can run on a build
   agent instead of my laptop.
2. **Which MUI version, and is CSS variables mode switched on?**
3. **Is the paid MUI Figma kit Material 2 or Material 3?** You ship M2
   deliberately, so an M3 kit means a mismatch is already baked in.
4. **How many collections and modes does the master hold**, and does a dark
   mode exist in it at all?
5. **What is the Storybook endpoint currently wired to**, and is it live?

I am seeing Amanda on [date] to walk through the master design system.
Several of these answer themselves in that session, and I will send a short
note afterwards with anything that changes the shape above.

Warren
