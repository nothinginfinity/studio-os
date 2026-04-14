# stone-vault

> Production-grade secrets management with QA.Stones — context-bound secrets,
> shard encryption, LOD-gated access, and audit chain.

**GitHub:** https://github.com/nothinginfinity/stone-vault  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Foundation  
**Last updated:** 2026-01-15  

---

## What it does
Provides production secrets management built on top of QA.Stones. Secrets are sharded,
encrypted, and access-gated by Level of Detail (LOD) — agents receive credentials only
at their authorized access level, with a full audit chain.

## Inputs
- Secret values (API keys, credentials, tokens)
- Agent identity and LOD authorization level
- QA.Stone context packets for binding secrets to context

## Outputs
- LOD-gated secret delivery to authorized agents
- Shard-encrypted secret storage
- Audit log of all secret access events

## APIs / Dependencies used
- `qastone` — foundational context/crypto layer
- Python cryptography libraries

## Related repos
- `qastone` — the crypto layer it builds on
- `simple-stone` — lighter version for simpler use cases
- `acp-protocol` — agents may request secrets over ACP

## What this repo should NEVER do
- Expose secrets in logs or API responses in plaintext
- Serve as a general-purpose database
- Handle UI or user interactions directly

## Open questions
- What is the migration path when a secret is rotated mid-session?
- Should vault entries have TTL (time-to-live) support?

## Space instructions
This space focuses on secrets management and the LOD-gated access model.
Do not expand into general auth, user management, or application logic.
