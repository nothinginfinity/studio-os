# studio-os Memory Layer

> Three-layer memory system for the studio-os Space.
> Adapted from agentic-stack (codejunkie99/agentic-stack).

---

## The Three Layers

| File | Written by | When | Retention | Answers |
|---|---|---|---|---|
| `working.md` | studio-os Space | Session start | **Overwritten every session** | “What is the OS layer doing right now?” |
| `episodic.md` | studio-os Space | Session end | Permanent append-only | “What OS maintenance happened?” |
| `semantic.md` | studio-os Space | Self-reflection | Permanent, curated | “What patterns exist across the whole studio?” |

---

## Session Start Protocol

1. Read `spaces/studio-os/memory/episodic.md` — last 3 entries
2. Read `spaces/studio-os/memory/semantic.md`
3. Read ALL `spaces/*/inbox.md` files for open messages
4. Read ALL `spaces/*/memory/episodic.md` last entries for studio health
5. **Overwrite** `spaces/studio-os/memory/working.md` with:
   - Open messages across all inboxes
   - Any Space that flagged something in their last episodic entry
   - Pending semantic promotions
   - Current studio-os maintenance tasks

---

## Session End Protocol

Append to `spaces/studio-os/memory/episodic.md`:

```
---
**Session:** YYYY-MM-DD
**Focus:** What OS maintenance was done
**Done:** Cards updated, decisions logged, semantic promotions made
**Inboxes checked:** Which Space inboxes had messages, status of each
**Patterns noticed:** Any cross-Space patterns worth promoting
**Next:** What the studio-os Space should do next session
**Flags:** Anything @nothinginfinity should review
---
```

## Semantic Promotion Responsibility

studio-os Space is the ONLY Space that writes to any `semantic.md` file.
Promotion threshold: a pattern appearing in 3+ episodic entries across
any Space’s log. Use the format defined in `spaces/_template/memory/README.md`.
