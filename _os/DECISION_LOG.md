# Decision Log

> High-level architectural decisions with rationale.
> Each entry links to the GitHub Discussion where it was resolved.
> Append-only — never edit a past decision entry.

---

## Format

```
### [YYYY-MM-DD] [Decision title]
**Status:** Accepted | Superseded by [link]
**Context:** Why this decision was needed.
**Decision:** What was decided.
**Rationale:** Why this over alternatives.
**Affects:** [repo1], [repo2], ...
**Discussion:** [link to GitHub Discussion]
```

---

## Log

### 2026-04-13 — studio-os as shared context layer
**Status:** Accepted  
**Context:** 50+ repos being built in parallel across multiple Perplexity Spaces.
No shared context between spaces causing duplication, contradiction, and context pollution.  
**Decision:** Create `studio-os` as a private GitHub repo that all Perplexity Spaces
add as a source. One card per repo. Shared standards, glossary, and decisions in `_os/`.
GitHub Discussions for cross-repo questions.  
**Rationale:** Spaces share a documentation layer, not a real-time message bus.
This gives 80% of the coordination benefit with zero overengineering.  
**Affects:** All repos  
**Discussion:** N/A — founding decision  
