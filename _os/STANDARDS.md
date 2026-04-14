# Studio Standards

> Shared conventions across all nothinginfinity repos.
> Every Perplexity Space must respect these. Do not override without a Decision Record.

---

## Naming Conventions

- Repos: `kebab-case` (preferred) or `snake_case` (legacy only)
- Files: `kebab-case.md` or `snake_case.py` matching repo language conventions
- Environment variables: `SCREAMING_SNAKE_CASE`
- API routes: `/kebab-case/:param`
- Database tables: `snake_case`
- Classes: `PascalCase`
- Functions / methods: `camelCase` (JS/TS) or `snake_case` (Python)

---

## Stack Defaults

| Layer | Default choice |
|---|---|
| Backend (Python) | FastAPI + Pydantic |
| Backend (JS) | Node.js + Express or Hono |
| Frontend | Vanilla JS / HTML / CSS (phone-first, PWA-ready) |
| Database | SQLite (local/dev), Postgres (prod) |
| Auth | Token-based; QA.Stone for agent auth |
| Secrets | stone-vault or simple-stone |
| Compression | V4Z (default for AI context payloads) |
| MCP integration | mcp-twin pattern for zero-downtime |
| Agent comms | ACP Protocol over WebSocket or MCP bridge |

---

## API Design Rules

- Every public endpoint returns `{ success: bool, data: ..., error: ... }`
- Use `cairn-intent` for natural language → action when no structured API exists
- Never expose raw LLM API keys in client code
- All agent-to-agent communication must use ACP Protocol (not raw HTTP polling)
- Prefer streaming responses over polling for real-time UI

---

## Phone-First Rules (Phone Studio cluster)

- All UIs must work on iPhone Safari without native app install
- Touch targets minimum 44x44px
- No hover-only interactions
- Offline-capable preferred (PWA service worker)
- Approval-before-post pattern for all content publishing
- Never auto-post to social platforms without explicit user confirm step

---

## Version Suffixes

| Suffix | Meaning |
|---|---|
| `-v4` | V4 FSL semantic compression |
| `-v4z` | V4Z cross-file vault deduplication |
| `-v7` | V7 code-optimized compression |
| `-mcp-twin` | Zero-downtime MCP hot-swap variant |

---

## Branching Strategy

- `main` — always deployable
- `dev` — active development
- `feature/[name]` — feature branches
- Never commit secrets, API keys, or `.env` files

---

## What Requires a Decision Record

Post to GitHub Discussions > Decision Records before implementing:
- Changing a shared schema used by 2+ repos
- Introducing a new compression scheme or protocol version
- Changing default auth method
- Deprecating a repo or cluster
- Adding a new external API dependency that costs money
