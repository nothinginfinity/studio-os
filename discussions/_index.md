# Resolved Decisions Index

> A running log of resolved GitHub Discussions, mirrored here for Space consumption.
> Spaces can read this file to understand what has already been decided cross-repo.
> Full discussion threads live in GitHub Discussions on this repo.

---

## Format

```
### [YYYY-MM-DD] [Title]
**Category:** Cross-Repo Architecture | Shared Patterns | Questions | In Progress
**Resolved:** Yes
**Summary:** One paragraph. What was decided and why.
**Affects:** [repo1], [repo2]
**Discussion link:** [URL]
```

---

## Index

### [2026-04-18] Studio OS PWA — Multi-Space Orchestration Build Plan
**Category:** Cross-Repo Architecture / Build Roadmap  
**Resolved:** In Progress  
**Summary:** Studio OS is becoming a mobile-first PWA that bridges multiple Perplexity Spaces using GitHub as a durable mailbox layer and a live SSE/webhook layer for real-time feel. The discussion defines the 6-priority build order, the normalized registry schema, the message envelope format, channel modes (one-way and two-way), the add-space UX flow, and the role each Space should play. All Spaces working on this build should read this document at session start before doing any work.  
**Affects:** `nothinginfinity/studio-os`, `nothinginfinity/email-for-ai`, all linked Perplexity Spaces  
**Discussion file:** [discussions/2026-04-18-studio-os-pwa-build-plan.md](discussions/2026-04-18-studio-os-pwa-build-plan.md)
