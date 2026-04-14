# llm-native-inbox

> High-performance, token-efficient inbox system for LLM agents.

**GitHub:** https://github.com/nothinginfinity/llm-native-inbox  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Inbox / Compression  
**Last updated:** 2026-02-03  

---

## What it does
The base inbox layer for LLM agents — structured, token-efficient storage and retrieval
of agent messages. Foundation that all versioned inbox variants (v4, v4z, v7) build on.

## Inputs
- Agent messages, task results, notifications

## Outputs
- Structured inbox reads for LLM agents
- Token-efficient payloads

## APIs / Dependencies used
- Internal: extended by `llm-native-inbox-v4`, `v4z`, `v7`
- Related to `email-for-ai` (complementary async messaging)

## Related repos
- `llm-native-inbox-v4` — V4 FSL compression variant
- `llm-native-inbox-v4z` — V4Z vault deduplication variant
- `llm-native-inbox-v7` — V7 code-optimized variant
- `golden_library` — archives conversations into compressed stones
- `acp-mcp-bridge` — delivers ACP messages into this inbox

## What this repo should NEVER do
- Handle UI or email client features
- Be used for human-to-human messaging

## Open questions
- Which inbox version (v4, v4z, v7) should be the default for new repos?
- Should there be a single unified inbox that auto-selects compression?

## Space instructions
This space owns the base inbox layer. Refer to versioned variants for compression specifics.
