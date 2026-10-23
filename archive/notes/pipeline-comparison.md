# Three workflows, one question: who authors the truth?

*A side-by-side of Carmen Rincon's Claude design workflow, the KR client
baseline (Figma-first), and the Orin practice site (code-first). Drop into
`PIPELINE-LEDGER.md` or lift into a sales note. British English, as ever.*

The one axis that organises everything: **direction of truth.** Carmen and KR
sit on the same side (Figma authors, code consumes). Orin deliberately flips it
(JSON authors, Figma mirrors). Everything below is downstream of that.

| Dimension | Carmen's workflow | KR client baseline (Figma-first) | Orin site (code-first) |
|---|---|---|---|
| **Source of truth** | Figma | Figma | JSON (`tokens/src/*.json`) |
| **Flow** | Figma variables → MCP sync → code | Figma → `tokens/*.json` → `dist/` | `tokens/src/*.json` → `dist/` → `vendor/tokens.css`; Figma is a synced view |
| **Authoring rule** | Sync "once it's actually solid" | "All token changes start in Figma, never in code" (`PROCESS.md`) | "Direction of truth: JSON → Figma, never the reverse" (`SETUP.md`) |
| **Sync mechanism** | Figma MCP, agent-mediated, iterative | Style Dictionary build, deterministic | Style Dictionary build, then re-mirror into Figma |
| **What gets graded** | Visual quality — eval loops against reference images | Pipeline correctness — guardrails + CI + generated report as a gate | Pipeline correctness — `npm test` 8/8 lints; visual quality by human tests (squint, read-aloud) |
| **Iteration surface** | Claude Code in VS Code + Storybook + playground branch | Client app repo consuming published tokens | DevTools as sketchpad; static site, no build step |
| **Share loop** | Vercel link per direction | Client's own deploy | Cloudflare Pages |
| **Repo topology** | One repo | Two repos: pipeline publishes, app consumes | One repo: `tokens/` + `site/` together |
| **Parallel exploration** | Git worktrees — three visual directions at once | Not part of the baseline | Not used (convergent execution, locked decisions) |
| **Best fit** | A designer-of-one moving fast, drawing when it's cheaper than describing | A Figma-first design team whose variables are the origin | A browser-designed site that is itself the proof of the pipeline |

## How to read it

**Carmen ≈ KR, loosened.** Same direction (Figma leads), but Carmen's sync is
improvisational and her grading is visual (does it *look* like the work I called
good?). KR hardens the same direction into machinery: a deterministic build, a
failing gate instead of a trusted eye, a generated router that can't drift.

**Orin is KR, flipped.** JSON leads because the site is designed in the browser
with no Figma round-trip. Lineage: IDEM → KR → Orin Token Pipeline (extracted
baseline) and, in parallel, the Orin site that abstracts the *shape* while
reversing the *direction*.

## The line that matters for selling

The offer under sale is the **KR-style, Figma-first baseline** — not Orin's
flipped version. So a prospect who works like Carmen is a direct fit: the client
baseline is Figma-first by design. Orin's own site just runs it backwards for
reasons specific to a five-page browser-designed site.

The one genuinely portable idea from Carmen that none of the three formalise is
**git worktrees** for parallel visual directions — worth filing for greenfield
work, a poor fit for convergent, locked-decision builds like Orin's current
phase.
