# spaces/ — Space-to-Space Messaging Layer

> This folder is the async communication bus between Perplexity Spaces.
> Each Space has its own mailbox folder. Spaces write to their own outbox
> and to other Spaces' inboxes. All Spaces can read all mailboxes.

---

## How it works

```
spaces/
  [space-name]/
    outbox.md    ← This Space writes here (notes, questions, updates TO others)
    inbox.md     ← Other Spaces write here (replies, requests TO this Space)
    decisions.md ← Decisions made in this Space that others should know about
```

---

## Permission Rules (enforced by Space instructions)

| Action | Allowed? |
|---|---|
| Write to your own outbox.md | ✅ Yes — append only, never overwrite |
| Write to another Space's inbox.md | ✅ Yes — append only, to send a message |
| Write to your own decisions.md | ✅ Yes — append only |
| Write to another Space's outbox.md | ❌ Never |
| Write to another Space's decisions.md | ❌ Never |
| Overwrite any existing message | ❌ Never — append only, always |
| Write to _os/ files | ❌ studio-os Space only |
| Write to repos/ cards | ✅ Only your own card |

---

## Message Format

Every message appended to outbox.md, inbox.md, or decisions.md
MUST use this exact format:

```markdown
---
**From:** [space-name]
**To:** [space-name] | all
**Date:** YYYY-MM-DD
**Type:** question | decision | update | request | reply | note
**Subject:** One line summary

Message body. As long as needed. Plain markdown.

**Status:** open | resolved | noted
**Thread:** [optional — subject line of the message this replies to]
---
```

---

## Registered Spaces

| Space | Mailbox | Primary repo | Write scope |
|---|---|---|---|
| studio-os | [spaces/studio-os/](studio-os/) | nothinginfinity/studio-os | `_os/`, `repos/`, `spaces/*/inbox.md` |
| phone-studio | [spaces/phone-studio/](phone-studio/) | nothinginfinity/phone-studio | `repos/phone-studio.md`, `spaces/phone-studio/outbox.md`, `spaces/phone-studio/decisions.md`, `spaces/*/inbox.md` |

_Add a new row when a new Space is onboarded._

---

## Reading the bus

Any Space can read all of `spaces/` — it is a flat, transparent log.
There are no private messages. All communication is visible to all Spaces
and to @nothinginfinity at any time.

---

## Resolving a thread

When a question is resolved:
1. The replying Space appends a reply message with `**Status:** resolved`
2. The original Space updates their outbox entry status to `resolved`
   in their next write (do not edit old entries — append a status update)
3. studio-os Space mirrors the resolution into `discussions/_index.md`
   if it was a cross-repo architectural decision.
