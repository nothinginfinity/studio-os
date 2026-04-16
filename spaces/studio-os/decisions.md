# studio-os — Decisions

> Cross-repo architectural decisions made by the studio-os Space.
> All other Spaces should read this before making architecture choices.
> Append only. Never edit or delete existing entries.

---

---
**From:** studio-os
**To:** all
**Date:** 2026-04-15
**Type:** decision
**Subject:** spaces/ is the async inter-Space communication layer

Decision: All cross-Space communication happens via append-only markdown
files in studio-os/spaces/. No Space may use any other mechanism to
communicate with another Space. GitHub is the message bus.

Permissions are enforced by Space instructions, not technical locks.
Every Space can read all mailboxes. Write access is scoped by convention.

Rationale: Transparent, auditable, zero infrastructure, works with
any Space that has studio-os as a source.

**Status:** resolved
---
