# Studio OS — Action Bridge

> This document defines how messages and decisions originating in
> `spaces/` are routed to real infrastructure when a GitHub file
> write is not enough.
>
> Every Space reads this. studio-os Space enforces it.

---

## The Three-Layer Stack

```
┌───────────────────────────────────────────────────────┐
│               LAYER 1 — CONTEXT (GitHub)              │
│                                                       │
│  spaces/*/outbox.md      ← messages, notes, flags     │
│  spaces/*/inbox.md       ← received messages          │
│  spaces/*/memory/        ← working / episodic /       │
│                             semantic                  │
│  repos/*.md              ← repo cards, standards      │
│  _os/                    ← studio OS config           │
│                                                       │
│  Zero infrastructure. Any AI reads this via URL.      │
│  All writes are append-only markdown commits.         │
└──────────────────────┬────────────────────────────────┘
                       │
         when a message requires a REAL ACTION
                       │
                       ▼
┌───────────────────────────────────────────────────────┐
│            LAYER 2 — ACTION (email-for-ai)            │
│                                                       │
│  repo: nothinginfinity/email-for-ai                   │
│  runs on: Mac Mini (local-first, always-on)           │
│  connects via: MCP server at http://localhost:8211    │
│                                                       │
│  Handles:                                             │
│    • Sending/receiving real email between agents      │
│    • Calendar events and scheduling                   │
│    • Cross-agent todo assignment                      │
│    • Tool gateway (72+ tools, hot-swap capable)       │
│    • RBAC — role-based tool access per agent          │
│    • SHA-256 hash-chained audit trail                 │
│    • Credential vault (Fernet-encrypted)              │
│    • Agent identities (persistent addresses)          │
│                                                       │
│  Agents registered here get a permanent address:      │
│    phone-studio  → phone-studio@ai.localhost          │
│    studio-os     → studio-os@ai.localhost             │
│    [any Space]   → [space-name]@ai.localhost          │
└──────────────────────┬────────────────────────────────┘
                       │
         when a message requires INTENT PARSING
         (natural language → structured action)
                       │
                       ▼
┌───────────────────────────────────────────────────────┐
│          LAYER 3 — PROTOCOL (Cairn Stack)             │
│                                                       │
│  cairn-intent   — NL → structured intent              │
│  cairn-gateway  — QA.Stone content delivery           │
│  acp-protocol   — TCP-like agent communication        │
│  qastone        — Progressive context loading +       │
│                   cryptographic provenance            │
│  email-for-ai-v2 — Cairn-integrated MCP server        │
│                                                       │
│  Use when:                                            │
│    • A Space message needs to trigger a workflow      │
│    • An action needs to be verified with provenance   │
│    • Context must be compressed before routing (V4Z)  │
│    • Intent is ambiguous and needs extraction first   │
└───────────────────────────────────────────────────────┘
```

---

## Routing Decision Tree

Every Space message falls into exactly one of these categories.
Use the first match.

```
Is this message a note, question, decision, or status update
that only needs to be read by another Space or by @nothinginfinity?
  → YES: Stay in Layer 1. Write to spaces/ only. Done.

Does this message need to send a real email, book a calendar
event, assign a todo to an agent, or call a tool?
  → YES: Route to Layer 2 (email-for-ai MCP).
         Write the action request to your outbox.md with
         Type: request and include the email-for-ai tool
         and arguments needed. studio-os Space executes it.

Does this message contain ambiguous natural language intent
that needs to be parsed into a structured action before
anything can happen?
  → YES: Route to Layer 3 (cairn-intent) first, then
         back to Layer 2 for execution.
         Flag your outbox message with:
         Route: cairn → email-for-ai

Does this message need cryptographic provenance — proof that
a specific agent said a specific thing at a specific time?
  → YES: Route to Layer 3 (qastone).
         Flag your outbox message with:
         Route: qastone
```

---

## Message Flags for Routing

Add one of these optional fields to the standard message format
in `spaces/README.md` when routing beyond Layer 1 is needed:

```markdown
**Route:** email-for-ai
**Route:** cairn → email-for-ai
**Route:** qastone
**Route:** acp
```

If no `Route:` field is present, the message stays in Layer 1 only.
studio-os Space scans all outbox files for unhandled `Route:` flags
and executes them.

---

## studio-os Space — Bridge Responsibilities

studio-os Space is the ONLY Space that executes Layer 2 or Layer 3
actions. Individual Spaces flag their outbox; studio-os routes it.

studio-os Space bridge duties (add to session start protocol):

```
1. Scan all spaces/*/outbox.md for Route: flags with Status: open
2. For each open routed message:
   a. email-for-ai route   → call MCP tool at localhost:8211
   b. cairn route          → call cairn-intent, then email-for-ai
   c. qastone route        → call qastone-resolver MCP tool
   d. acp route            → call acp-protocol handler
3. After execution, append a reply to the originating Space's
   inbox.md confirming the action and its result
4. Update the outbox entry status to resolved in your own
   outbox.md (append — never edit)
```

---

## Cross-Tool Participation

Any AI tool that can read a GitHub URL and write a commit
can participate in Layer 1 as a full Space.

Currently bridged tools:

| Tool | Participates at | How |
|---|---|---|
| Perplexity Space | Layer 1 natively | Reads GitHub source, writes via MCP |
| Claude (Project) | Layer 1 via URL | Read GitHub source in project knowledge |
| ChatGPT | Layer 1 via URL | Add raw GitHub file URLs to context |
| Cursor / Windsurf | Layer 1 natively | Reads repo files directly |
| Any MCP client | Layer 2 natively | Connect to email-for-ai at localhost:8211 |
| email-for-ai agents | Layer 2 natively | Permanent @ai.localhost addresses |

To add a new AI tool as a Space:
1. Create `spaces/[tool-name]/` following `spaces/_template/`
2. Add it to the Registered Spaces table in `spaces/README.md`
3. Point the tool at `github.com/nothinginfinity/studio-os` as a source
4. Paste the session start/end protocol into the tool's instructions

---

## Repo Index

All repos that make up this stack, for quick cross-reference:

| Repo | Layer | Role |
|---|---|---|
| `nothinginfinity/studio-os` | 1 — Context | This repo. Spaces, memory, repo cards, OS config |
| `nothinginfinity/email-for-ai` | 2 — Action | MCP server. Email, calendar, todos, tool gateway, RBAC, audit |
| `nothinginfinity/email-for-ai-v2` | 2+3 | email-for-ai with full Cairn stack integration |
| `nothinginfinity/email-for-ai-v4z` | 2 | email-for-ai with V4Z compression |
| `nothinginfinity/qastone` | 3 — Protocol | Progressive context loading, cryptographic provenance |
| `nothinginfinity/cairn-intent` | 3 | NL → structured intent extraction |
| `nothinginfinity/cairn-gateway` | 3 | QA.Stone content delivery gateway |
| `nothinginfinity/acp-protocol` | 3 | TCP-like agent communication protocol |
| `nothinginfinity/acp-websocket` | 3 | WebSocket transport for ACP |
| `nothinginfinity/agentic-chat-rooms` | 2 | Real-time chat rooms with email-for-ai integration |
| `nothinginfinity/lawyers_and_dragons` | app | Legal AI platform — consumer of the stack |
| `nothinginfinity/lawyers_and_dragons-v4z` | app | L&D with V4Z compression |

---

## Security Model

Layer 1 (GitHub) — Human-controlled.
  @nothinginfinity approves every commit. No Space can push
  without either GitHub MCP access or human approval.
  All writes are append-only and publicly auditable in git history.

Layer 2 (email-for-ai) — RBAC-controlled.
  Every agent has a role. Roles define which tools they can call.
  Every tool call is SHA-256 hash-chain audited.
  Credentials stored in Fernet-encrypted vault.
  Any agent can be revoked instantly with gateway_revoke_agent.

Layer 3 (Cairn) — Provenance-controlled.
  QA.Stone wraps content with cryptographic provenance records.
  Compatible with L&D ProvenanceRecord for legal-grade verification.
  ACP adds TCP-like reliability guarantees to agent messages.

The security escalates with the layer:
  GitHub audit log → email-for-ai RBAC + hash chain → Cairn provenance
