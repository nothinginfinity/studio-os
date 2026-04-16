# phone-studio Memory Layer

> Three-layer memory system for the phone-studio Space.
> Adapted from agentic-stack (codejunkie99/agentic-stack).
> No Python required — all layers are plain markdown, written by Spaces.

---

## The Three Layers

| File | Written by | When | Retention | Answers |
|---|---|---|---|---|
| `working.md` | phone-studio Space | Session start | **Overwritten every session** | “What am I doing right now?” |
| `episodic.md` | phone-studio Space | Session end | Permanent append-only | “What happened in past sessions?” |
| `semantic.md` | studio-os Space | When patterns emerge | Permanent, curated | “What has phone-studio learned over time?” |

---

## Session Start Protocol

At the start of every session, phone-studio Space must:

1. Read `spaces/phone-studio/memory/episodic.md` — scan last 3 entries
2. Read `spaces/phone-studio/memory/semantic.md` — load distilled lessons
3. **Overwrite** `spaces/phone-studio/memory/working.md` with:
   - What is actively being built in phone-studio
   - What is blocked or unresolved
   - What decisions are pending
   - What the next action is

---

## Session End Protocol

Before closing, append to `spaces/phone-studio/memory/episodic.md`:

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

If `Flags` is non-empty, append a message to `spaces/studio-os/inbox.md`.
