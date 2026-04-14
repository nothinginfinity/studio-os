# qastone

> Email for AI — progressive context loading for LLMs with cryptographic provenance.

**GitHub:** https://github.com/nothinginfinity/qastone  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Foundation  
**Last updated:** 2026-01-15  

---

## What it does
QA.Stone is the foundational context unit for the entire studio. It packages LLM context
with cryptographic provenance, compression, and access control so agents can pass
verifiable, portable context packets to each other — like email, but for AI.

## Inputs
- Raw LLM conversation logs, session data, structured context payloads
- Access control parameters (LOD levels, agent identity)

## Outputs
- QA.Stone cryptographic context packets (portable, verifiable)
- Progressive context loads for LLM consumption
- Provenance chain for audit

## APIs / Dependencies used
- Python cryptography libraries
- Internal: consumed by `stone-vault`, `simple-stone`, `qastone-mcp-twin`, `acp-protocol`

## Related repos
- `stone-vault` — production secrets layer built on QA.Stone
- `simple-stone` — lightweight LLM-executable version
- `qastone-mcp-twin` — MCP server demo for QA.Stone
- `qastone-vending-machine` — distribution layer
- `golden_library` — compresses conversation archives into QA.Stones

## What this repo should NEVER do
- Handle UI or user-facing interfaces
- Become a general-purpose database
- Store secrets in plaintext at any layer

## Open questions
- What is the canonical Stone schema version? Does it need a version field?
- Should QA.Stone have a public spec doc separate from this repo?

## Space instructions
This space specializes in the QA.Stone protocol and cryptographic context layer.
Do not let it get pulled into UI, sales apps, or unrelated agent infra concerns.
