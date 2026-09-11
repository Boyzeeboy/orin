# Pattern-layer research evaluation

*Prepared 11 September 2026. This is an evaluation, not an adoption decision.*

## Purpose

This note compares `notes/pattern-layer-infographic.html` with the evidence in
the Orin Systems Research Brief baseline of 8 September 2026 and the follow-up
run of 11 September 2026.

The question is not whether the external sources describe Orin's proposed
mechanism exactly. They do not. The useful question is whether they support the
problem the pattern layer addresses, whether they validate its architecture,
and which parts remain hypotheses that Orin would need to test.

## Summary judgement

The pattern-layer infographic remains relevant and is more credible after the
research briefs.

The evidence consistently supports its central direction: agents produce more
consistent results when component knowledge is structured, discoverable,
versioned and connected to independent validation. The infographic anticipated
that direction in its separation of:

- a machine-readable component contract;
- prose guidance carrying judgement;
- an independent repository check; and
- a skill that packages context without pretending to enforce it.

The research validates that architecture more strongly than it validates the
specific propose-and-graduate mechanism. In particular, no source establishes
that two uses are sufficient to turn a proposal into a canonical pattern.

The right status therefore remains **parked mechanism**. It is a credible Build
or Retainer capability for a qualifying client, not something to add to Orin's
baseline or sell as a standalone product today.

## Comparison with the research

| Pattern-layer concept | External comparison | Evaluation |
|---|---|---|
| **The contract** | Coinbase uses Code Connect to establish component identity; Atlassian generates agent-facing material from structured schemas; Adobe uses a shared token and component-schema engine. | **Strongly supported.** Exact component identity, properties, states and mappings should be data rather than inferred prose. |
| **The guidance** | Coinbase combines mappings with routing skills and live documentation. Figma's guide now contains client-specific skill bundles. | **Strongly supported.** Mappings establish what a component is; guidance carries when and how to use it. |
| **The independent check** | Adobe describes deterministic validation and diff operations. Storybook exposes executable component, interaction and accessibility tests. | **Supported, but incomplete in the infographic.** Parity checks prove internal alignment; executable tests prove whether the result behaves correctly. |
| **The skill is packaging, not enforcement** | Coinbase and Figma distribute skills alongside MCP or component mappings, while the stronger implementations retain tests and evaluations outside the skill. | **Strongly supported.** A skill makes the system easier to reach but cannot determine whether output is safe to ship. |
| **Follow, break or propose** | Coinbase, Atlassian and Storybook all report or demonstrate better component reuse when agents receive structured system context. The inverse problem is agents inventing or selecting incorrectly when context is absent. | **The problem is supported.** The structured proposal workflow is still an Orin hypothesis. |
| **Two uses, then graduation** | None of the reviewed evidence supplies a comparable threshold. | **Not evidence-backed.** Recurrence should trigger review, not automatic canonisation. |
| **Figma as the contract source** | Figma exposes useful component and variable structure, but practitioner inspection found gaps in semantic intent, responsive rules, units and some interpretation. Adobe instead centres a source-neutral schema engine. | **Client-dependent.** Generate from the authoritative source or sources; do not assume Figma alone contains the full contract. |
| **One shared skill for every agent** | Figma's `mcp-server-guide` now supplies a separate generated figquery bundle for Cursor while retaining other bundles for other clients. | **Watch.** Keep one canonical source, but allow generated client-specific delivery where a real behavioural or API difference requires it. |

## What the infographic gets right

### 1. It separates evidence from judgement

The line "prose gets understood, not checked" remains a useful distinction. The
11 September research reinforces it from both directions:

- `roast-my-design-system` separates deterministic scanning from AI narration;
- Figma exposes substantial structure through MCP, but not every piece of intent
  needed to interpret that structure safely.

Orin's stronger position is not that judgement can be removed. It is that the
evidence should be generated and reproducible, while the human interpretation
remains explicit.

### 2. It treats mappings and guidance as different jobs

Coinbase's implementation makes this particularly clear. Code Connect helps an
agent identify the production component that corresponds to a design component.
Skills and documentation then help it choose and use that component correctly.

This closely matches the infographic's contract-and-guidance split. The wording
should make the boundary even clearer:

- **Contract:** identity, properties, states, defaults, token bindings, code
  mappings, versions and provenance.
- **Guidance:** selection, composition, deprecations, open and closed zones,
  exceptions and escalation rules.

### 3. It refuses to confuse context with enforcement

The section titled "The skill is the packaging, not the mechanism" tracks well
with the research. Skills, MCP servers and generated documentation help agents
find the system. Independent gates and executable tests decide whether the
result is acceptable.

This is commercially valuable because it lets Orin talk about **governed agent
speed**, rather than promising that better prompting alone will solve design
drift.

### 4. It puts the value layer first

The closing argument is still sound: a pattern layer built on untrustworthy
tokens produces confident, consistent and wrong output more quickly. The latest
research sharpens the commercial version of that point:

> Agents multiply whatever structure already exists. A coherent system improves
> reuse and generation quality; an incoherent system accelerates duplication and
> drift.

## What should change before the infographic is used externally

### 1. Make graduation a review trigger

Current idea:

> A proposal becomes a pattern after two genuine uses.

Recommended framing:

> After two genuine uses, a proposal becomes eligible for system-owner review.

Two uses demonstrate recurrence. They do not prove that the proposal is
accessible, portable, sufficiently general or better than extending an existing
pattern. The threshold should be configurable, and graduation should require:

- a named owner;
- review of the recorded alternatives;
- relevant component-state and accessibility checks;
- confirmation that the need is genuinely shared; and
- a deliberate decision to add, merge, extend or reject the proposal.

The counter is still useful. It should surface candidates and stalled proposals,
not make the final decision.

### 2. Add an agent evaluation alongside the parity gate

The infographic's deterministic check answers whether Figma, the contract and
code agree. It does not answer whether an agent can use the aligned system
successfully.

Add a separate evaluation surface measuring:

- canonical component reuse;
- unnecessary component invention;
- semantic-token adherence;
- accessibility and interaction failures;
- false-positive findings;
- human corrections or review loops;
- tool calls and token consumption; and
- completion time.

A parity gate proves the system is internally aligned. An evaluation demonstrates
whether that system changes agent behaviour and produces a buyer-relevant
outcome.

### 3. Make provenance explicit

The contract should carry or link to:

- source identities and revisions;
- the Code Connect or equivalent mapping version;
- the transform version;
- the client foundation or package version;
- the last successful comparison; and
- missing, stale and intentionally excluded mappings.

This follows Adobe's source-manifest and diff model and turns the contract into a
traceable release artefact rather than an unexplained snapshot.

### 4. Test the gate for legitimate stock

The 11 September `roast-my-design-system` update corrected a meaningful false
positive by recognising vendored shadcn catalogues as available stock rather
than dead component debt. The general lesson applies directly to a pattern
contract: a deterministic rule can be repeatable and still encode the wrong
classification.

Orin should test both:

- a deliberately inconsistent component fixture; and
- a large but legitimate vendored or generated catalogue.

This prevents a health report from turning disciplined scale into an apparent
failure.

### 5. Correct the trigger shown in the footer

The infographic currently says the layer enters scope when a build grows a real
component library. The governance note superseded that wording on 1 September.
The mechanism requires all four conditions:

1. Real component sets in Figma, including variant properties, not merely a
   variables collection named `Components`.
2. A component library in code with a props API worth contracting.
3. Code Connect or an equivalent code-side manifest, so the sides can be
   compared.
4. Enough churn that adjudication is genuinely the bottleneck.

The fourth condition protects the commercial offer from adding machinery where
an attentive owner and a small library would be cheaper.

## Commercial implications for Orin

### Diagnostic

Use the pattern layer as an **agent-readiness lens**, not a new engagement.

The Diagnostic can determine whether agents can:

- discover the canonical component;
- distinguish stock from debt;
- use semantic tokens;
- retrieve current usage and accessibility guidance;
- recognise when the system has no answer; and
- surface an exception without silently making it canonical.

Useful sales language:

> The Diagnostic shows whether your agents can reuse the system, or whether they
> are silently inventing around it.

### Build

For a client meeting the four-part trigger, an optional **agent-ready pattern
context** module could include:

- Code Connect or equivalent component mappings;
- a generated component contract;
- generated agent guidance;
- deterministic contract-parity checks;
- executable Storybook interaction and accessibility tests where Storybook
  already exists; and
- fixed agent evaluation fixtures.

This should remain implementation-dependent and inside the Build. It is not a
fixed product or a fifth engagement shape.

### Retainer

The same layer creates legitimate recurring governance work:

- mapping coverage and stale mappings;
- deprecated components still presented to agents;
- documentation and skill drift;
- proposals awaiting review or stalled below the threshold;
- parity and accessibility failures;
- agent evaluation regressions; and
- component reuse, correction effort and release-health trends.

These measures give the Retainer an operational outcome beyond "keeping the
documentation current".

## Recommended action register

### Use now: refine the explanatory model

**Evidence:** The research supports the contract, guidance, packaging and
independent-check architecture.

**Action:** Update the infographic's trigger, clarify contract versus guidance,
and change automatic graduation into eligibility for human review.

**Completion criterion:** The infographic distinguishes externally supported
architecture from the unvalidated graduation hypothesis and matches the trigger
in `notes/pattern-layer-governance.md`.

**Decision unlocked:** The infographic can be used as an internal commercial and
delivery explainer without overstating what Orin has proved.

### Validate: use the pattern layer as a hypothesis for ORIN-39

**Evidence:** Coinbase, Atlassian and Storybook report improvements in component
reuse, speed, token consumption or agent accuracy, but the strongest published
samples are vendor-authored and some are small.

**Action:** Extend ORIN-39's controlled comparison to measure baseline versus
generated router plus guardrails on both a dirty fixture and a legitimate
catalogue. Include follow, silent invention and proposal rates where they can be
observed consistently.

**Completion criterion:** Repeatable results show whether Orin's context and
checks improve component reuse, semantic-token adherence, completion effort and
correction loops without creating unacceptable false positives.

**Decision unlocked:** Integrate, iterate or drop the agent-readiness claim and
decide whether the pattern-layer mechanism merits client implementation.

### Watch: keep ORIN-40 parked

**Evidence:** The external architecture is credible, but Orin does not yet have a
qualifying client or its own component-bearing baseline.

**Promotion trigger:** A real client meets the four conditions and needs agents
to create or maintain component-based product work.

**Decision unlocked:** Whether to prototype the component contract, mappings,
generated guidance, evaluation fixtures and recurring governance inside that
client's Build or Retainer.

## Evidence limitations

- The Coinbase Code Connect measurements were based on three controlled runs and
  should not be treated as a universal performance benchmark.
- The 9 September Coinbase architecture material is first-party documentation and
  does not add an independent quantitative sample to the earlier case study.
- Atlassian and Storybook report useful outcomes, but they are also publishers of
  the systems being evaluated.
- Figma's workflow lab is a worked pattern, not customer evidence.
- `roast-my-design-system` is a useful operational comparator, but its thresholds
  and benchmark set are author-controlled and the project is moving quickly.
- The two-use graduation rule comes from the earlier practitioner mechanism
  reviewed in `notes/pattern-layer-governance.md`; the research briefs did not
  independently validate it.

## Attribution and references

### Measured case studies and technical write-ups

1. Jenny Xie, Figma, **“How Coinbase Used Code Connect to Guide Agents and
   Shrink Token Costs”**, 2 September 2026. Small controlled sample; the primary
   quantitative comparator for mapping coverage, component reuse, completion
   time, token use and cost.  
   <https://www.figma.com/blog/how-coinbase-used-code-connect-to-shrink-token-costs/>

2. Atlassian Design System team, **“Teaching AI to Speak Our Design
   Language”**, 2 June 2026. Structured schemas generating MCP, skills and
   documentation, with reported accuracy, error, speed, token and tool-call
   outcomes.  
   <https://www.atlassian.com/blog/ai-at-work/teaching-ai-to-speak-our-design-language>

3. Kyle Gach, Storybook, **“Storybook MCP for React”**, 23 March 2026, updated
   24 March 2026. Component discovery joined to executable interaction and
   accessibility testing; includes the Reshaped benchmark.  
   <https://storybook.js.org/blog/storybook-mcp-for-react/>

### Architecture and workflow references

4. Adobe Spectrum Design Data, **“Spectrum Multi-Platform SDK Strategy”**,
   reconciled 20 August 2026. Canonical schema engine, pinned foundations,
   manifests, validation and semantic diffs.  
   <https://github.com/adobe/spectrum-design-data/blob/main/SPECTRUM_MULTIPLATFORM_SDK_STRATEGY.md>

5. Riccardo Erra, Figma, **“Workflow Lab: Moving Between Design and Code with
   Agents”**, 26 August 2026. A worked workflow rather than customer evidence;
   useful for token drift, component reuse and design-to-code handoff.  
   <https://www.figma.com/blog/workflow-lab-moving-between-design-and-code-with-agents/>

6. Coinbase Design System, **“AI Overview”**. First-party description of its
   web/native routing skill, documentation skill, MCP server and agent-facing
   documentation indexes.  
   <https://cds.coinbase.com/getting-started/ai-overview>

7. Figma, **“Figma MCP Server Guide”**. Repository containing the current MCP
   guidance and generated skill bundles, including the separate figquery bundle
   used for Cursor.  
   <https://github.com/figma/mcp-server-guide/>

### Practitioner and operational comparators

8. Greg Kozakiewicz, **`roast-my-design-system`**. Deterministic design-system
   scanning, generated agent rules and AI narration. The 5.12 release series is
   relevant for its correction of catalogue-related false positives.  
   <https://github.com/gregkozakiewicz/roast-my-design-system>

9. Christine Vallaure de la Paz, **“Design System Contracts: The Component
   Between Figma and Code”**. Practitioner treatment of structured component
   contracts, design/code drift and the limits of treating either side as the
   sole truth.  
   <https://christinevallaure.substack.com/p/design-system-contracts-the-component>

### Orin sources

- `notes/pattern-layer-infographic.html`: the mechanism evaluated here.
- `notes/pattern-layer-governance.md`: status, trigger, implementation order and
  source attribution for the original propose-and-graduate concept.
- The Orin systems research brief, a scheduled automation kept outside this
  repository: the 8 September baseline, the 11 September follow-up and the
  action register.
- ORIN-39: **Validate Orin's agent-readiness evidence**.
- ORIN-40: **Prototype an agent-ready component context module**; parked behind
  ORIN-39 and the qualifying-client trigger.

