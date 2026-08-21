# Pragma — the strategic read

*Written 21 August 2026, after two sessions. Internal. This is the thinking
behind the proposal, not a client document. Some of it should never be said
out loud, and those parts are marked.*

---

## 1. What they are not thinking about

### The two UIs in one production session

Amanda mentioned it almost in passing. The new SPA UI ships into the same
production environment as the old one, so a user sees old work-order feedback
and new Material Manager inside a single login. Harald pushed some tokens into
the old UI by hand to get "a little bit of visual consistency". The
productionizing team cannot fund two environments.

Nobody discussed what that does to a user.

This is asset management software. The people using it are maintenance
planners and artisans doing safety-relevant work on physical plant, many of
them for years on the old interface. An application that changes its
appearance and its interaction model halfway through a session is a training
problem and an error-rate problem. Pragma has no user research running that
would detect it, because they skip personas, interviews and journey maps by
their own account.

**This is also the strongest argument for the substrate that nobody has made.**
Shared tokens across old and new are the only mechanism that makes a
two-UI transition survivable. Harald already reached for it instinctively,
under pressure, by hand. Nobody named it as a strategy.

### Nobody owns the design system as a product

Amanda owns it as a person doing the work. There is no roadmap, no version, no
changelog, and no register of who consumes it. Three consumers already exist:
the Material Manager file, Darren's APM through his MCP, and the old UI
through Harald's hand-applied tokens. Not one of them has a contract with the
thing they depend on.

That is an unmanaged internal platform, and every symptom they described
follows from it.

### Their institutional memory keeps walking out

The solution architect who drove the SPA proof of concept has gone to AI. The
contract designer was decoupled in March. Amanda is a year in and is the only
designer, in a role that did not exist before her. Harald owns all UI
development.

The system currently lives in a Figma file and in two people's heads. If
either of them leaves, the modernisation stops, and nothing that survives them
is written down anywhere a successor could read it.

**This is the argument for the systems work that a business person actually
feels.** Not velocity. Continuity.

### Their AI ceiling is set by their substrate

The business asked for AI-infused workflows. The consultancy sells capability.
The internal team builds agents. Darren wired up an MCP and got output that is
"pretty damn close", with "some of his tokens aren't quite right".

That last clause is the leading indicator. Every one of those investments
reads from the same system, so the quality of what they generate is capped by
the quality of what it reads. Nobody has drawn that line, so the AI programme
and the design system are being funded and discussed as separate things.

### They costed the environment and not the workaround

"The productionizing team can't give us two separate environments. The cost is
just too high." So the cost moved rather than disappearing: onto Harald's
stop-gap token work, onto the users, and onto whoever eventually reconciles two
interaction models. Nobody has put a number against the workaround to compare.

### The waste is a product management gap wearing design clothing

Amanda showed a sprint where everything below a red line was drawn and never
used. Her diagnosis was right and her framing was too modest: they skip the
persona link, the user interviews and the journey map, so requirements arrive
unvalidated and design is asked to render them at speed.

Their answer to that is more FTE. More FTE draws unused screens faster.

### **Say this one carefully, or not at all**

The business asked for AI workflows "so we can decrease the amount of manpower
and FTE we need". Amanda repeated the framing herself: "you don't need a
designer for every BA."

She is building the thing that justifies not hiring designers, while being the
only designer, while drowning. If it works, one available conclusion is that
Pragma needs fewer designers rather than that Amanda is finally free to do
strategy. Nobody has said that out loud and it is not mine to say to them.

It matters to me for one reason: the same logic eventually points at a
retainer. Frame this work as capability rather than headcount reduction, every
time, and never repeat the FTE line back to them approvingly.

---

## 2. What 2027 looks like

Their horizon is Material Manager and a deadline that has already gone. These
are the questions that want deciding in 2026 because the answers change what
gets built now.

**Where does the system live when Figma is gone?** They intend to leave. If the
master lives in Figma and Figma goes, the system needs a home that outlives it,
which means a repository. Everything built between now and then either survives
that move or has to be rebuilt.

**Which version is APM on?** Darren needs the system, cannot wait, and has no
FTE assigned. There will be a third product after his. A design system serving
several products on different cadences needs versions and a consumers register.
Today there is no way to answer the question at all.

**How long is the migration, really?** Material Manager is module one, it took
roughly a year, and it missed its date. Nobody in either session gave a number
for the rest. If the honest answer is several years, then the design system is
infrastructure rather than a project, and it should be funded and staffed that
way.

**What happens to the BA role?** If BAs prototype in Claude, the job changes.
That is organisational design, and it is a larger question than the tooling
that triggers it.

**What not to build.** Amanda's instinct here is sharp and worth making into a
principle: "if we go build something now in-house bespoke, in a year it's going
to be part of Claude's vanilla out of the box features." So build what is
specific to Pragma, which is their patterns, their rules and their tokens.
Buy or wait for everything generic.

---

## 3. The dots to connect for them

Each of these is two or three people describing one problem from different
seats. Nobody inside can see it whole, because of where they sit.

| They experience | It is actually |
|---|---|
| Amanda's housekeeping, Harald's token pain, 486 unfetched changes | One absent versioned release |
| Amanda has no time for strategy | Three Figma seats, so she is the human API for every spec |
| Darren's tokens "aren't quite right" | The AI ceiling is the substrate's quality |
| A sprint of screens drawn and never used | No agreed screen inventory before drawing |
| "We want to leave Figma" | You cannot leave a tool holding the only copy of the truth |
| Harald hand-patching tokens into the old UI | The two-UI transition needs shared tokens as strategy |

**The seat one is the sharpest and the cheapest.** Developers cannot open Dev
Mode, so they message Amanda on Teams. A licensing decision is consuming the
time of the only designer, and nobody has put the two numbers next to each
other.

---

## 4. The steps to a working answer

Sequenced. The point of writing it out is that they want to start at phase 5.

**Phase 0, immediately, costs almost nothing.** Freeze new variable creation in
the master for the duration of the convergence. Buy Figma seats for the
developers. Name one owner of the master and agree who may publish.

**Phase 1, two weeks. See it.** The Diagnostic. Three inventories read against
the code, and per project file a count of instances, detached components and
locally created masters that never went upstream. That third bucket is a list
of everything the master failed to provide.

**Phase 2, four to six weeks. Extract and gate.** Tokens out of Figma into DTCG
in a repository. The MUI theme generated rather than typed. Guardrails. A
release with a version number on it.

**Phase 3. Make the release the artefact.** The version goes on the Aha!
feature and the TFS work item. Design signs off a version, development builds
against a version, QA tests a version. This is the answer to Harald's question
that nobody gave him.

**Phase 4. Design ops, minimum viable.** A journey and screen inventory agreed
before anything is drawn, which is the fix for the waste. A sign-off gate. A
queue for design system changes. Nothing more, because they are mid-crisis and
ceremony will be refused.

**Phase 5, 2027. The rules layer.** Patterns encoded so that an agent
instantiates rather than invents. This is the thing Stefan actually wants.

**The point to make out loud: phases 1 to 3 are prerequisites for phase 5.**
Rules that constrain generation have to constrain it towards something, and
that something has to be versioned and true. Attempting phase 5 on the current
substrate produces confident, consistent, wrong output at speed.

---

## 5. What they need and do not have

Beyond the obvious governance answer:

- **A versioned artefact.** Named by three people independently.
- **An owner with a veto.** Amanda does the work and cannot refuse a change.
- **A written system.** Theirs lives in a Figma file and in two heads, and
  neither survives a departure or a tool migration.
- **Figma seats for developers.** Small, immediate, high return.
- **A screen inventory step before drawing.** Fixes the waste directly.
- **Production design capacity.** Genuinely needed, and a different job from
  the systems work. They have conflated the two, which is why the request
  arrives pointed at me.
- **Product management of the design system.** Roadmap, consumers, changelog.
- **Any user validation at all**, before changing the interface of a
  safety-relevant product for long-tenured users.

**The one underneath all of them.** They are treating the design system as a
project with a deadline. It was "the mandate for the year", to be delivered in
parallel with a module migration, by a team doing solution architecture for the
first time. That framing is the root error, and every symptom follows from it.
A design system is infrastructure with an operating model, and infrastructure
does not have a finish date.

Saying that plainly to Stefan is probably the single most valuable sentence I
can offer him.

---

## 6. How I optimise my own role

**Be the connector.** My actual advantage is that I am the only person who has
heard Amanda's, Harald's and Stefan's problems in the same week and can see
they are one problem. Nobody inside can do that. That is worth more than the
pipeline and it is what a retainer is really buying.

**Refuse the capacity role and solve it anyway.** Find them the freelancer
Stefan asked for. It buys real goodwill, it fixes their felt pain, and it keeps
me out of the sprint queue.

**Win Harald early. He is the veto.** He has not been persuaded yet. Three
things in his language: the MUI restraint as a written commitment, TypeScript
catching bad palette paths at compile time, and above all that the codebase
change is incremental with no big-bang refactor and no sprint surrendered.

**Arm Amanda.** She argues my case in rooms I am not in. Give her findings and
numbers she can quote, not conclusions she has to defend on my behalf.

**Give Stefan the business frame, not tokens.** Continuity when people leave.
The user risk in a two-UI rollout. The AI ceiling. He can act on those.

**Deliver something before the first invoice.** They are mid-crisis. The seat
finding, or the naming cause of Harald's token problem that Amanda identified
herself, costs me nothing and buys credibility ahead of the money.

**Write everything down, and count that as the deliverable.** Their memory
keeps leaving. Documents that outlive people are a large part of what is wrong
and a large part of what I am selling.

**Be honest about the limit of what I fix.** The underlying condition is a
modernisation that was under-resourced and over-scheduled, with a first-time
architecture team, two UIs in one production environment, and no user
validation. My work makes that survivable. It does not make it fine. Saying so
is the difference between a partner and a vendor, and it is the thing they will
remember when someone else is selling them certainty.

**Watch for the key-person scenario.** Two people have already left this
programme. If Amanda goes, the system loses its only owner and my engagement
changes shape overnight. Worth knowing now what I would do, rather than
discovering it in the week it happens.
