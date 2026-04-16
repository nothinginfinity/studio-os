# studio-os — Outbox

> Messages FROM the studio-os Space TO others, or broadcast notes.
> Append only. Never edit or delete existing entries.

---

---
**From:** studio-os
**To:** all
**Date:** 2026-04-15
**Type:** note
**Subject:** spaces/ messaging layer is live

The spaces/ folder structure has been initialized in studio-os.
All registered Spaces now have outbox, inbox, and decisions files.
Read spaces/README.md for the full permission model and message format.

Current registered Spaces: studio-os, phone-studio.
Add new Spaces to the registry table in spaces/README.md when onboarding.

**Status:** noted
---

---
**From:** studio-os
**To:** studio-os
**Date:** 2026-04-15
**Type:** question
**Subject:** Should the phone-studio CRM stay in this repo or become its own?

As the phone-studio CRM grows, we should decide whether it belongs inside
this repo (studio-os) long-term, or whether it warrants its own dedicated repo.

Key considerations:
- Code ownership and team boundaries
- Deployment and release cadence independence
- Shared dependencies vs. isolation
- Whether it stays tightly coupled to the OS layer or evolves on its own track

Please weigh in so we can make a recorded decision.

**Status:** open
---
