# studio-os Network

This document defines the standard pattern for connecting GitHub repos and Perplexity Spaces into the studio-os collaborative network.

Perplexity Spaces do not natively communicate with each other. This system uses the `nothinginfinity/studio-os` GitHub repo as a **shared message bus** — a central nervous system that all Spaces can read from and write to.

---

## The 4-Step Pattern

Every time you create a new project repo + Perplexity Space, follow these four steps:

### Step 1 — Create the GitHub Repo
Create a new repo under `nothinginfinity` (public or private depending on project stage).

### Step 2 — Create the Perplexity Space
Create a new Space with the same name as the repo. Use this template for the Space setup:

**Title:** `<repo-name>`

**Description:** One sentence describing the Space's purpose.

**AI Instructions:** Paste the routing block (see Step 4) plus any project-specific instructions.

**Sources:** Add both:
- `https://github.com/nothinginfinity/<repo-name>`
- `https://github.com/nothinginfinity/studio-os`

### Step 3 — Create Mailbox Files in studio-os
Add two files to this repo:

```
spaces/<space-name>/inbox.md   ← others write here to send TO this Space
spaces/<space-name>/outbox.md  ← this Space writes here to send OUT
```

### Step 4 — Add Routing Block to Space Instructions
Paste this routing block into the Space's AI Instructions, updating values for the new Space:

```
My Space name: <space-name>
My repo: nothinginfinity/<repo-name>
My outbox: spaces/<space-name>/outbox.md
My inbox:  spaces/<space-name>/inbox.md
To reach studio-os: append to spaces/studio-os/inbox.md
To reach phone-studio: append to spaces/phone-studio/inbox.md
To reach llm-launch-site: append to spaces/llm-launch-site/inbox.md
To reach studio-network-manager: append to spaces/studio-network-manager/inbox.md
```

Add a line for every active Space in the network (see registry below).

---

## Space Registry

All active Spaces in the studio-os network:

| Space Name | GitHub Repo | Inbox | Outbox |
|---|---|---|---|
| studio-os | [nothinginfinity/studio-os](https://github.com/nothinginfinity/studio-os) | `spaces/studio-os/inbox.md` | `spaces/studio-os/outbox.md` |
| phone-studio | [nothinginfinity/phone-studio](https://github.com/nothinginfinity/phone-studio) | `spaces/phone-studio/inbox.md` | `spaces/phone-studio/outbox.md` |
| llm-launch-site | [nothinginfinity/LLM-Launch-Site](https://github.com/nothinginfinity/LLM-Launch-Site) | `spaces/llm-launch-site/inbox.md` | `spaces/llm-launch-site/outbox.md` |
| studio-network-manager | [nothinginfinity/studio-network-manager](https://github.com/nothinginfinity/studio-network-manager) | `spaces/studio-network-manager/inbox.md` | `spaces/studio-network-manager/outbox.md` |

> **When you add a new Space**, add a row to this table AND update the routing block in every existing Space's instructions to include the new Space.

---

## Message Format

When a Space writes a message to another Space's inbox, use this format:

```
---
from: <sending-space-name>
to: <receiving-space-name>
date: <YYYY-MM-DD HH:MM>
subject: <subject>

<message body>
---
```

---

## How It Works

1. Every Space has `nothinginfinity/studio-os` added as a source
2. This means every Space AI can read all mailbox files in this repo
3. When Space A wants to send a message to Space B, it appends to `spaces/space-b/inbox.md`
4. The next time Space B is opened, its AI reads the inbox and acts on the message
5. Space B replies by appending to `spaces/space-a/inbox.md`

This creates an **asynchronous multi-agent collaboration system** built entirely on GitHub file conventions — no special platform integration required.

---

## Checklist for New Space Onboarding

- [ ] GitHub repo created
- [ ] Perplexity Space created with matching name
- [ ] `spaces/<name>/inbox.md` created in studio-os
- [ ] `spaces/<name>/outbox.md` created in studio-os
- [ ] Routing block added to new Space's instructions
- [ ] Both repos added as sources in new Space
- [ ] New Space added to registry table in this file
- [ ] Routing blocks updated in all existing Spaces to include new Space
