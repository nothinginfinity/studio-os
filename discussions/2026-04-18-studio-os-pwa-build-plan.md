# Studio OS PWA — Multi-Space Orchestration Build Plan

> **Date:** 2026-04-18  
> **Status:** Active — all Spaces building this should read this first  
> **Author:** studio-os (Perplexity Space)  
> **Category:** Cross-Repo Architecture / Build Roadmap  
> **Affects:** `nothinginfinity/studio-os`, `nothinginfinity/email-for-ai`, all Perplexity Spaces linked to this repo

---

## What We Are Building

Studio OS is evolving into a **mobile-first PWA command center** that bridges multiple Perplexity Spaces together, using the GitHub repo as a durable mailbox/audit layer and a live webhook/SSE layer for real-time feel. Think of it as **email/chat for AI spaces** — where you can see, prompt, orchestrate, and coordinate every Perplexity Space you use, from one place, on your phone.

The key insight driving this build: the repo already has the right primitives. `spaces/`, `registry.json`, `inbox.md`, `outbox.md`, and `BRIDGE.md` are already the right architecture. What is missing is the **product UX layer** on top of it.

---

## Context for All Spaces Reading This

If you are a Perplexity Space working on any part of this build, here is what you need to understand:

1. **Studio OS is the bridge executor.** Only `studio-os` Space is responsible for reading Route flags, executing Layer 2 or Layer 3 actions, and writing results back to inboxes. Individual Spaces flag their outbox and Studio OS handles the routing.

2. **GitHub is the source of truth.** All messages, decisions, prompts, and orchestration state live in this repo as append-only markdown. No Space should assume a message was delivered unless it appears in the target `inbox.md`.

3. **The registry is the single source of known Spaces.** `spaces/registry.json` is where all linked Spaces are registered. The add-space UX writes to this file. Do not hard-code space paths anywhere; always derive them from the registry.

4. **Messages must follow the envelope format.** See the Message Envelope Format section below. Structured fields on every message make the bridge watcher and the PWA UI work.

5. **Do not pollute context.** Each Space should stay in its own lane. Use this discussion document as shared context instead of re-explaining the architecture in every Space's system prompt.

---

## Architecture Summary (The Three-Layer Stack)

```
LAYER 1 — GitHub (durable mailbox / context layer)
  spaces/<slug>/inbox.md      ← received messages
  spaces/<slug>/outbox.md     ← sent messages + route flags
  spaces/registry.json        ← known Spaces and their metadata
  discussions/                ← shared decisions for all Spaces to read

LAYER 2 — Action bridge (email-for-ai or local runner)
  Executes real actions: tool calls, email, calendar, task routing
  studio-os Space is the only bridge executor
  Agents get permanent @ai.localhost addresses

LAYER 3 — Protocol (Cairn / QA.Stone / ACP)
  Intent extraction, cryptographic provenance, TCP-like reliability
  Use when NL intent is ambiguous or provenance is required
```

---

## Registry Schema (Normalized — All Spaces Must Follow This)

Every entry in `spaces/registry.json` should conform to this schema:

```json
{
  "name": "research-lab",
  "slug": "research-lab",
  "spaceUrl": "https://www.perplexity.ai/spaces/...",
  "inboxPath": "spaces/research-lab/inbox.md",
  "outboxPath": "spaces/research-lab/outbox.md",
  "routeMode": "layer-1",
  "bridgeEnabled": false,
  "status": "active",
  "lastSeen": "2026-04-18",
  "description": "One-line description of this space's purpose"
}
```

Valid `routeMode` values: `layer-1`, `email-for-ai`, `cairn → email-for-ai`, `qastone`, `acp`.

---

## Message Envelope Format (All Spaces Must Use This)

Every message appended to an `inbox.md` or `outbox.md` must follow this format:

```markdown
---
**From:** studio-os
**To:** phone-studio
**Type:** request | status | decision | bridge-action | alert
**Status:** open | delivered | resolved
**Route:** layer-1 | email-for-ai | cairn → email-for-ai | qastone
**Thread:** (optional thread ID for grouping related messages)
**Created:** 2026-04-18T08:25:00-07:00
---

Message body goes here. Plain markdown. Can include structured data, code blocks, or freeform instructions.
```

If no `Route:` field is present, the message stays in Layer 1 only. Studio OS scans for Route flags with `Status: open` and handles execution.

---

## The Add-Space Flow (V1 UX)

When a user wants to link a new Perplexity Space into Studio OS:

1. User pastes the Perplexity Space URL into the Add Space form in the PWA.
2. User enters a display name and local slug (e.g., `research-lab`).
3. User selects a routing mode: Layer 1 only, or bridge-enabled.
4. The PWA creates:
   - `spaces/<slug>/inbox.md` — empty, with a header comment.
   - `spaces/<slug>/outbox.md` — empty, with a header comment.
   - Updates `spaces/registry.json` with the new entry.
5. The new Space appears in the Space Registry panel in the PWA.
6. The Space can now send/receive messages through the mailbox model.

---

## Channel Modes (One-Way and Two-Way)

### One-Way Channel (V1 — build now)
Any Space can append a message to another Space's `inbox.md` via a GitHub commit. Studio OS shows these as delivered alerts or prompts. No reply required.

**Use for:** alerts, monitoring events, high-level instructions, context drops, build updates.

### Two-Way Channel (V2 — build after V1 is stable)
The originating Space sends a message AND exposes a reply path. The receiving Space (or the bridge service) appends a reply back to the originating `inbox.md`. Studio OS shows the thread in a chat-like view.

**Use for:** cross-space prompting that needs a response, approval/denial of tool use, coordinated builds, live chat between AI spaces.

### Live Transport Layer (V3 — add-on)
SSE or WebSocket fanout that mirrors GitHub-backed events into the PWA for a real-time chat feel without abandoning the durable repo layer.

---

## Build Order and Reasoning

This is the prioritized build order. All Spaces should align to this sequence. Do not skip ahead.

### Priority 1 — Add Space UX
**What:** A form in the PWA that lets the user paste a Perplexity Space URL, enter a name/slug, and binds it to auto-created `inbox.md` / `outbox.md` files and a registry entry.  
**Why first:** This is the missing product layer over infrastructure that already exists. The registry and the `spaces/` directory are already there. This is just giving it a UI. Without it, the system is not extensible by the user without raw GitHub commits.  
**Deliverable:** Add Space form → GitHub commit → registry updated → Space appears in PWA.

### Priority 2 — Registry Schema Normalization
**What:** Define and enforce the registry JSON schema above across all existing Space entries.  
**Why second:** Everything — the PWA, the bridge watcher, and any future tooling — derives Space metadata from the registry. If the schema is inconsistent, every downstream feature is brittle.  
**Deliverable:** Updated `spaces/registry.json` with normalized entries and a schema comment at the top.

### Priority 3 — Message Envelope Format
**What:** Adopt the envelope format above for all `inbox.md` and `outbox.md` entries.  
**Why third:** Structured messages are what lets the bridge watcher and the PWA parse, display, and act on messages without ambiguity. The current free-form markdown works for humans but not for a UI or a daemon.  
**Deliverable:** Format spec committed to `spaces/README.md`, plus at least one example message in `spaces/studio-os/outbox.md` that follows the new format.

### Priority 4 — Bridge Watcher
**What:** A service (could start as a GitHub Action or a local Node/Python script) that scans all `spaces/*/outbox.md` files for messages with `Status: open` and a `Route:` flag, executes the action, and appends the result back to the originating `inbox.md`.  
**Why fourth:** This is what turns the system from a passive mailbox into an active orchestration layer. Studio OS is already described as the bridge executor in `BRIDGE.md`; this is making that description real.  
**Deliverable:** A minimal bridge watcher that handles `Route: email-for-ai` as the first case.

### Priority 5 — Live Activity Stream
**What:** An SSE or WebSocket feed in the PWA that streams GitHub-backed events (new inbox messages, resolved routes, status changes) so the UI feels like a chat feed, not a document browser.  
**Why fifth:** The durable model is already working by Priority 4. Adding live transport is now a pure UX upgrade — it does not change the data model, just how fast the UI reflects it.  
**Deliverable:** A lightweight event server (could be a GitHub webhook receiver forwarding to SSE clients) and a live activity panel in the PWA.

### Priority 6 — Two-Way Reply Bridge
**What:** Full "email/chat for AI" semantics — a Space sends a message, the recipient can reply, the reply routes back to the originating inbox, the PWA shows the thread.  
**Why last:** This is the highest-complexity step and depends on all the prior layers being stable. It requires a reply-tool contract, thread IDs, and a delivery guarantee layer. Build it on top of the solid foundation, not before it.  
**Deliverable:** Thread-aware message model, reply routing in the bridge watcher, and a thread view in the PWA.

---

## What Each Perplexity Space Should Do

| Space | Role | Primary file to read | Primary file to write |
|---|---|---|---|
| `studio-os` | Bridge executor, PWA build lead, orchestrator | `spaces/*/outbox.md` (scan), this document | `spaces/*/inbox.md` (replies), `spaces/registry.json` |
| `phone-studio` | Mobile companion, UX/feature input | `spaces/phone-studio/inbox.md` | `spaces/phone-studio/outbox.md` |
| Any new linked space | Domain-specific build tasks or context | `spaces/<slug>/inbox.md` | `spaces/<slug>/outbox.md` |

Every Space should read this document at the start of a session when working on the Studio OS build. It is the shared architecture brief that replaces re-explaining context.

---

## What NOT to Do

- Do not build a live transport layer before the registry and envelope format are stable (Priorities 1–3 must land first).
- Do not store canonical messages anywhere except the GitHub repo. No AI Space should treat in-memory state as persistent.
- Do not hardcode Space paths. Always derive from `spaces/registry.json`.
- Do not create a new bridge executor. Only `studio-os` is the bridge executor.
- Do not skip the envelope format. Free-form markdown messages are fine for humans but block programmatic routing.

---

## Design Direction

The PWA prototype (built 2026-04-18 by studio-os Space) demonstrates the correct visual direction:

- Mobile-first, bottom tab nav on small screens, sidebar on desktop.
- Nexus dark/light theme with warm neutral surfaces and teal primary accent.
- Space registry as a card grid with live status indicators.
- Add Space form as an inline card with a paste-a-URL-and-go flow.
- Composer for cross-space messages with From/To/Type/Route selectors.
- Timeline panel for orchestration events (delivered → watching → prototype states).
- Bridge architecture visualized as stacked layers with flow descriptions between them.

All future PWA work should build on this direction without abandoning the mobile-first, data-dense, dark-mode-first approach.

---

## Open Questions

1. Should the bridge watcher run as a GitHub Action (runs on push) or as a persistent local daemon on the Mac Mini?
2. Should the PWA use the GitHub API directly (via a PAT stored client-side) or route all writes through a thin server?
3. What is the right SSE transport for Priority 5 — a self-hosted webhook receiver, a GitHub App, or a third-party service like Hookdeck?
4. When a new Space is added via the PWA, should it automatically get a system prompt template dropped into its `spaces/<slug>/` folder?

These questions are deliberately left open for cross-space discussion. Any Space can append an answer to this document or to `spaces/studio-os/inbox.md`.

---

*This document is the shared architecture brief for the Studio OS multi-space orchestration build. All Perplexity Spaces involved in this project should read it at session start. Last updated: 2026-04-18 by studio-os Space.*
