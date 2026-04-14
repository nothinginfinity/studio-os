# studio-os

> Shared context operating system for all ~50 repos and Perplexity Spaces in the nothinginfinity AI studio.

**GitHub:** https://github.com/nothinginfinity/studio-os  
**Status:** `active`  
**Stack:** Markdown / GitHub Discussions / GitHub REST API  
**Cluster:** meta / infrastructure  
**Last updated:** 2026-04-14  

---

## What it does
studio-os is the studio-wide knowledge layer — not an application. It maintains a single source of truth across all repos: repo cards, cross-repo standards, a shared glossary, a decision log, and a mirror of resolved GitHub Discussions. Every Perplexity Space in the studio reads from this repo to stay aligned.

## Inputs
- Repo cards submitted or flagged by other Spaces
- Cross-repo decisions surfaced via GitHub Discussions
- Standards and glossary updates from any Space
- New repo onboarding requests (name, purpose, stack)

## Outputs
- `/repos/*.md` — one card per repo, describing purpose, stack, I/O, and boundaries
- `README.md` — master index of all repos, clusters, and statuses
- `_os/STANDARDS.md` — cross-repo engineering and naming standards
- `_os/GLOSSARY.md` — shared vocabulary used across all Spaces
- `_os/DECISION_LOG.md` — log of resolved cross-repo decisions with rationale
- `discussions/_index.md` — mirror of resolved GitHub Discussions

## APIs / Dependencies used
- GitHub REST API (read/write to this repo and others)
- Perplexity Spaces (all studio Spaces source context from this repo)

## Related repos
- ALL repos — studio-os maps the entire studio; every repo gets a card here

## What this repo should NEVER do
- Never contain application code of any kind
- Never auto-deploy, trigger CI/CD, or modify any other repo's production branch
- Never make product or feature decisions — it records decisions made elsewhere
- Never become the primary home for a specific project's documentation

## Open questions
- Should repo cards include a `health` field (e.g. `green` / `yellow` / `red`) to surface stale or broken repos?
- Is there a standard cluster taxonomy, or is clustering emergent per project?

## Space instructions (if this repo has its own Perplexity Space)
- This Space maintains the OS map — it reads and writes repo cards, standards, and the decision log. It does NOT build features, write application code, or act as the primary assistant for any individual repo.
