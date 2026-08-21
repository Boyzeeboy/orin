# Amanda session — questions

Friday 21 August 2026, 15:00. Walking the master design system.
Purpose: everything the proposal needs before it goes out on Sunday.

**★ = must get. Everything else is nice to have.**

---

## Before you start

- [ ] Ask if she minds you taking notes as you go.
- [ ] ★ Can you have the Figma seat today, with **edit** rights? Plugins
      need edit; a viewer has no Plugins menu.
- [ ] ★ Which file **defines** the variables? The plugin reads local
      variables only, so a consuming file gives a finding that looks
      damning and is just the wrong file.

## A. The variables panel, walked together

Numbers you see beat numbers you are told. Ask her to open it and share.

- [ ] ★ **Are the semantics aliased or typed raw?** An aliased variable
      shows the reference name; a typed one shows a raw value. Scroll the
      semantic collection. This one observation predicts whether their
      dark mode actually resolves.
- [ ] ★ How many collections, and what are they **called exactly**? Write
      the names down verbatim. This is the rename-versus-overrides
      decision and it needs her agreement.
- [ ] ★ How many modes per collection, and what are they called?
- [ ] ★ Does a dark mode exist at all? Converging one is different work
      from building one.
- [ ] Roughly how many variables in total? Primitives versus semantics.
- [ ] Do the variables carry **descriptions**? The pipeline syncs those as
      usage rules and the drift gate checks them. Empty descriptions mean
      half the gate has nothing to check.
- [ ] What colour notation are they in? Hex, or something wider.
- [ ] Any variables that are obviously duplicates or near-duplicates.

## B. Structure

- [ ] How much of the variable set maps onto MUI's own token names? She
      said roughly 95% consistent. Does that hold at variable level.
- [ ] Where do the Onkey-specific additions live, the ones MUI has no
      word for?
- [ ] Is there a component-level token layer, or does it stop at semantic?
- [ ] Are typography, spacing and radius tokenised, or colour only?

## C. The write path

For the freeze recommendation, and it is the one thing that has to
happen before any variables work starts.

- [ ] ★ Who can publish the master library today? How many people hold
      edit rights?
- [ ] ★ Is Figma branching switched on for the master?
- [ ] What is the module's real product name? "Material Manager" came off
      a bad line, and it collides with MUI's "Material" in writing.
- [ ] How many sub-modules were there? Roughly how many rounds of
      upstream pushes.
- [ ] When did the merge back happen, and has anyone reconciled what
      arrived?
- [ ] Does that file still exist, and does anyone still edit it?
- [ ] Are there other files with a write path into the master?

## D. The stack

- [ ] ★ **Do they have Figma Enterprise?** If yes the variables API is
      available, the plugin and sink drop out, and the sync can run on a
      build agent. Cheapest question of the day.
- [ ] Which MUI version, and is CSS-variables mode switched on?
- [ ] Is the paid MUI Figma kit Material 2 or Material 3? They ship M2
      deliberately, so an M3 kit means a mismatch is already baked in.
- [ ] Has anyone designed a second brand for white labelling? She may not
      know the commercial commitment; Stefan or Gerhard will on Monday.

## E. Components

- [ ] Stefan suspected two button masters. See if you can find them while
      she is sharing.
- [ ] Which components are MUI defaults, which are MUI themed, and which
      are genuinely domain-level?
- [ ] Gerhard's status-change component that moves when profile manager
      moves. Look at it.

## F. Her world

She asked you about this on the call, so expect it back. Be ready to
answer as well as ask.

- [ ] What does a design change look like today, start to finish?
- [ ] Is there any sign-off step at all, or a ticket for design work?
- [ ] Where do the BAs work, and what are they producing in Claude?
- [ ] What is the Figma MCP currently wired to, and who uses it?
- [ ] Aha! and TFS. Is TFS still what they call it, or Azure DevOps?

## G. Storybook

Remember Gerhard pushed back on this. Amanda wants it. Do not treat it as
agreed.

- [ ] What is the existing Storybook endpoint wired to, and is it live?
- [ ] What did she want it for originally?

---

## If time runs out, get these four

1. Aliased or typed raw.
2. Collection and mode names, exactly.
3. Does dark exist.
4. Figma Enterprise, yes or no.

## Hold back

You are not engaged yet. Naming *that* you have found something builds
confidence. Walking through what it means and what to do about it is the
thing you are selling, and Stefan is already waiting on an "assessment"
he has not commissioned.

Collect, note, say you will set it out properly.

## Give her one thing

She is your ally with no authority and she is making your argument in
rooms you are not in. One specific, quotable finding costs you nothing
and arms her.

## After

Proposal over the weekend, as promised to Stefan. Call Monday from 13:00.
