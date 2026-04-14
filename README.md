# studio-os
> The operating system for nothinginfinity's AI studio.
> One source of truth for all repos, clusters, and cross-space context.

---

## How to use this repo

- **Every Perplexity Space** for a project should add `nothinginfinity/studio-os` as a source.
- Each space reads its own card in `/repos/` for deep, project-specific context.
- Each space reads `_os/SPACE_INSTRUCTIONS.md` for how to behave cross-project.
- Post unresolved **cross-repo questions** to GitHub Discussions here — not inside individual repos.
- Resolved decisions get mirrored into `/discussions/_index.md`.

---

## Cluster Map

| Cluster | What it is |
|---|---|
| **Foundation** | QA.Stone — the cryptographic context/secrets layer everything else is built on |
| **Agent Infra** | ACP protocol, MCP bridges, proxy/orchestration, email-for-AI, Ralph |
| **Inbox / Compression** | LLM-native inboxes, V4/V4Z/V7 compression schemes, golden/terminal libraries |
| **Cairn Suite** | CairnIntent (post-REST API), browser staging, gateway, slopcairn tooling |
| **Chat / UI** | Prax chat, command center, ZTPchat, agentic rooms, ZTGI UI, Prax Mesh |
| **Phone Studio** | Mobile-first PWA content studio, InfinityPaste, git-bridge-agent, copy-not-paste |
| **Sales / Client Apps** | LashFit, LLM sales templates, Bedrosians, Lawyers & Dragons, TigerTurf, home equity |
| **Tools / Utilities** | localhost-dashboard, txt-autotitle, TruBizWallet |

---

## Repo Index

| Repo | Cluster | Status | Purpose |
|---|---|---|---|
| [qastone](repos/qastone.md) | Foundation | active | Email for AI — progressive context loading for LLMs with cryptographic provenance |
| [stone-vault](repos/stone-vault.md) | Foundation | active | Production-grade secrets management with QA.Stones |
| [simple-stone](repos/simple-stone.md) | Foundation | active | LLM-executable security infrastructure |
| [qastone-mcp-twin](repos/qastone-mcp-twin.md) | Foundation | active | Zero-downtime MCP server for QA.Stone demo |
| [qastone_vend_v1](repos/qastone_vend_v1.md) | Foundation | active | QA.Stone vending machine v1 |
| [qastone-vending-machine](repos/qastone-vending-machine.md) | Foundation | active | QA.Stone vending machine (main) |
| [acp-protocol](repos/acp-protocol.md) | Agent Infra | active | TCP-like communication for LLM agents over MCP |
| [acp-websocket](repos/acp-websocket.md) | Agent Infra | active | WebSocket transport for ACP Protocol |
| [acp-mcp-bridge](repos/acp-mcp-bridge.md) | Agent Infra | active | Bridge connecting ACP Protocol with MCP-Twin inbox |
| [acp-protocol-v4z](repos/acp-protocol-v4z.md) | Agent Infra | active | ACP Protocol with V4Z compression layer |
| [mcp-twin](repos/mcp-twin.md) | Agent Infra | active | Zero-downtime hot-reload for MCP servers |
| [ralph-service](repos/ralph-service.md) | Agent Infra | active | DeepSeek Ralph — autonomous AI code agent as a service |
| [prax-proxy](repos/prax-proxy.md) | Agent Infra | active | PHI Agent Proxy — Twincode operational modes for Claude Code |
| [email-for-ai](repos/email-for-ai.md) | Agent Infra | active | Email, calendar, and todo capabilities for LLM agents |
| [DragonPy](repos/DragonPy.md) | Agent Infra | active | Open framework for orchestrator interfaces and MDLCLs |
| [XvP](repos/XvP.md) | Agent Infra | active | Xenogenesis via Prax — cotonomous orchestration aligned interface |
| [llm-native-inbox](repos/llm-native-inbox.md) | Inbox / Compression | active | High-performance token-efficient inbox for LLM agents |
| [llm-native-inbox-v4](repos/llm-native-inbox-v4.md) | Inbox / Compression | active | Inbox with V4 FSL semantic compression (8-70x token reduction) |
| [llm-native-inbox-v4z](repos/llm-native-inbox-v4z.md) | Inbox / Compression | active | Inbox with V4Z archive compression (cross-file vault deduplication) |
| [llm-native-inbox-v7](repos/llm-native-inbox-v7.md) | Inbox / Compression | active | Inbox with V7 code-optimized compression (3-4x on code content) |
| [golden_library](repos/golden_library.md) | Inbox / Compression | active | Schema-once compression for AI conversation archives |
| [terminal_library](repos/terminal_library.md) | Inbox / Compression | active | Terminal library |
| [cairn-intent](repos/cairn-intent.md) | Cairn Suite | active | Post-REST API — natural language intent to direct action |
| [cairn-browser](repos/cairn-browser.md) | Cairn Suite | active | Ephemeral browser staging for CairnIntent |
| [cairn-gateway](repos/cairn-gateway.md) | Cairn Suite | active | Secure content delivery via QA.Stone |
| [slopcairn](repos/slopcairn.md) | Cairn Suite | active | Cairn tooling / slopcairn |
| [prax-chat](repos/prax-chat.md) | Chat / UI | active | Multi-LLM chat interface with search modes and agent olympics |
| [prax-command-center](repos/prax-command-center.md) | Chat / UI | active | Desktop control system with LLM orchestration and terminal management |
| [ZTPchat](repos/ZTPchat.md) | Chat / UI | active | ZTP Chat |
| [agentic-chat-rooms](repos/agentic-chat-rooms.md) | Chat / UI | active | Real-time AI-powered chat rooms microservice |
| [ztgi-ui](repos/ztgi-ui.md) | Chat / UI | active | Shared agentic UI library for ZTGI applications |
| [ztgi-ui-v4z](repos/ztgi-ui-v4z.md) | Chat / UI | active | ZTGI UI frontend with V4Z browser compression |
| [prax-gpt-specs](repos/prax-gpt-specs.md) | Chat / UI | active | Prax GPT specs |
| [prax-mesh](repos/prax-mesh.md) | Chat / UI | active | Federated agentic commerce network with commission splits |
| [parallel-internet](repos/parallel-internet.md) | Chat / UI | active | 3D globe dashboard for global data with AI-powered chat |
| [phone-studio](repos/phone-studio.md) | Phone Studio | active | Phone-first AI content studio — voice → content → posting pipeline |
| [openclaw-phone-studio](repos/openclaw-phone-studio.md) | Phone Studio | active | OpenClaw phone studio variant |
| [infinitypaste](repos/infinitypaste.md) | Phone Studio | active | Clipboard queue PWA for iPhone — copy many, paste once |
| [infinitypaste-v2](repos/infinitypaste-v2.md) | Phone Studio | active | InfinityPaste v2 with Phase 5 features |
| [git-bridge-agent](repos/git-bridge-agent.md) | Phone Studio | active | Drop-in commit/push button for any PWA — no server, runs from iPhone Safari |
| [copy-not-paste](repos/copy-not-paste.md) | Phone Studio | active | Clipboard provenance tracker for macOS |
| [lashfit](repos/lashfit.md) | Sales / Client Apps | active | AI-powered lash extension recommendations via facial analysis |
| [llm_sales_template](repos/llm_sales_template.md) | Sales / Client Apps | active | AI-powered sales and booking agent template for any service business |
| [llm-app-template](repos/llm-app-template.md) | Sales / Client Apps | active | Template architecture for LLM-first apps with persistent memory |
| [bedrosians_agentic_sales](repos/bedrosians_agentic_sales.md) | Sales / Client Apps | active | Bedrosians agentic sales agent |
| [lawyers_and_dragons](repos/lawyers_and_dragons.md) | Sales / Client Apps | active | Lawyers & Dragons legal AI platform |
| [lawyers_and_dragons-v4z](repos/lawyers_and_dragons-v4z.md) | Sales / Client Apps | active | Lawyers & Dragons with V4Z compression |
| [tigerturf-dataset](repos/tigerturf-dataset.md) | Sales / Client Apps | active | TigerTurf dataset — satellite capture automation and sales KB |
| [home-equity-calculator](repos/home-equity-calculator.md) | Sales / Client Apps | active | HEI vs HELOC vs Home Equity Loan interactive dashboard |
| [localhost-dashboard](repos/localhost-dashboard.md) | Tools / Utilities | active | Visual dashboard for local dev services with MCP integration |
| [txt-autotitle](repos/txt-autotitle.md) | Tools / Utilities | active | Auto-title generator for text files |
| [TruBizWallet](repos/TruBizWallet.md) | Tools / Utilities | active | TruBizWallet |

---

## Contributing

This repo is maintained by Jared Edwards (@nothinginfinity).
Do not commit directly to main without updating the relevant `/repos/` card.
All cross-repo questions go to GitHub Discussions — not individual repo issues.
