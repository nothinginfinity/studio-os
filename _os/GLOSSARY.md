# Studio Glossary

> Shared vocabulary across all repos and Perplexity Spaces.
> When a term appears in any repo card or discussion, it refers to this definition.

---

## Core Terms

**QA.Stone**
The foundational cryptographic context unit. Encapsulates LLM context with provenance,
compression, and access control. Think of it as "email for AI" — a portable, verifiable
packet of context that agents can pass around. Defined in `qastone`.

**Stone Vault**
Production secrets management built on QA.Stones. Shard encryption, LOD-gated access,
audit chain. The secure backend for any repo that needs production credentials. Defined in `stone-vault`.

**Simple Stone**
Lightweight, LLM-executable version of the Stone security layer. For repos that need
agent-accessible secrets without the full vault setup. Defined in `simple-stone`.

**MCP Twin**
Zero-downtime hot-reload pattern for MCP servers. Twin A/B hot-swap so Claude Code
never loses an MCP server mid-session. Defined in `mcp-twin` and `qastone-mcp-twin`.

**ACP Protocol**
Agent Communication Protocol. TCP-like, reliable communication between LLM agents.
Uses MCP as transport. The standard for all agent-to-agent messaging in this studio.
Defined in `acp-protocol`.

**Prax**
The orchestration and proxy layer. Prax Proxy, Prax Chat, Prax Command Center, Prax Mesh.
Represents the "operator" or orchestrator persona across the studio.

**ZTGI**
Zero-Trust General Interface. The shared UI library and pattern for agentic applications.
Defined in `ztgi-ui`.

**Cairn**
The post-REST API layer. CairnIntent maps natural language to direct actions without
traditional structured APIs. Cairn Browser provides ephemeral staging. Cairn Gateway
handles content delivery. All defined in the Cairn Suite cluster.

**DragonPy**
Open framework for Orchestrator Interfaces and Multi-Directionally Linked Command Lines (OI-MDLCLs).
The underlying orchestration framework for multi-agent pipelines.

**XvP**
"Xenogenesis via Prax." The cotonomous (self-governing) orchestration aligned interface.
Highest-level orchestration abstraction in the studio.

**Ralph**
DeepSeek-based autonomous AI code agent. Used for automated code tasks as a service.
Defined in `ralph-service`.

**V4 / V4Z / V7**
Compression scheme versions for LLM context payloads:
- V4: FSL semantic compression (8-70x token reduction)
- V4Z: Cross-file vault deduplication
- V7: Code-optimized compression (3-4x on code content)
Defined in the Inbox / Compression cluster.

**Phone Studio**
The cluster of mobile-first PWA apps built to run from an iPhone.
Core product: voice → transcript → content → post pipeline.

**InfinityPaste**
Clipboard queue PWA for iPhone. Captures multiple clipboard items and pastes them
in sequence. Defined in `infinitypaste` and `infinitypaste-v2`.

**Git Bridge Agent**
Browser-only GitHub commit/push button for PWAs. No server required.
Allows pushing code from iPhone Safari. Defined in `git-bridge-agent`.

**Slopcairn**
Cairn tooling utilities. The "slop" layer — quick, dirty, useful Cairn helpers.

**LOD**
Level of Detail. Used in Stone Vault for access-gated context delivery —
agents receive more detail as their authorization level increases.

**Twincode**
Operational mode pattern in Prax Proxy. Allows two operational modes to run
in parallel (A/B) for testing or zero-downtime switching.

**MDLCL**
Multi-Directionally Linked Command Line. The DragonPy pattern for orchestrator interfaces
that can send and receive commands in multiple directions simultaneously.
