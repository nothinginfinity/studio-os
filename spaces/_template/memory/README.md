# [space-name] Memory Layer

> Three-layer memory system for this Space.
> Adapted from agentic-stack (codejunkie99/agentic-stack).
> No Python required — all layers are plain markdown, written by Spaces.

---

## The Three Layers

| File | Written by | When | Retention | Answers |
|---|---|---|---|---|
| `working.md` | This Space | Session start | **Overwritten every session** | “What am I doing right now?” |
| `episodic.md` | This Space | Session end | Permanent append-only | “What happened in past sessions?” |
| `semantic.md` | studio-os Space | When patterns emerge | Permanent, curated | “What has this Space learned over time?” |

---

## Session Start Protocol

At the start of every session, this Space must:

1. Read `memory/episodic.md` — scan the last 3 entries for context
2. Read `memory/semantic.md` — load distilled lessons
3. **Overwrite** `memory/working.md` with current understanding:
   - What is actively being built
   - What is blocked or unresolved
   - What decisions are pending
   - What the next action is

Working memory is intentionally cleared each session. It forces a
fresh reconstruction from episodic + semantic, preventing stale assumptions.

---

## Session End Protocol

Before closing any session, this Space must append to `memory/episodic.md`:

```
---
**Session:** YYYY-MM-DD
**Focus:** One line — what this session was about
**Done:** What was completed or pushed
**Blocked:** What couldn’t be resolved
**Decisions:** Any locked-in choices made this session
**Next:** Recommended first action for next session
**Flags:** Anything studio-os Space should know about
---
```

If `Flags` is non-empty, also append a message to `spaces/studio-os/inbox.md`.

---

## Semantic Promotion (studio-os Space only)

The studio-os Space reads all `spaces/*/memory/episodic.md` files
periodically and promotes recurring patterns into each Space’s `semantic.md`.

A pattern qualifies for promotion when it appears in 3+ episodic entries:
- A repeated blocker
- A decision made the same way multiple times
- A skill or API that keeps coming up
- A mistake that keeps recurring

Semantic entries use this format:

```
---
**Lesson:** One line summary
**Evidence:** Session dates where this pattern appeared
**Implication:** What this Space should do differently / remember
**Promoted:** YYYY-MM-DD by studio-os
---
```
