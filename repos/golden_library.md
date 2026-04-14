# golden_library

> Schema-once compression for AI conversation archives — turn massive Claude Code
> logs into portable QA.Stones with 50-90% compression.

**GitHub:** https://github.com/nothinginfinity/golden_library  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Inbox / Compression  
**Last updated:** 2026-01-20  

---

## What it does
Compresses AI conversation archives using schema-once encoding. Designed specifically
for Claude Code and LLM session logs — achieves 50-90% compression by encoding
the schema once and referencing it for all subsequent records.

## Inputs
- Raw Claude Code conversation logs
- LLM session transcripts

## Outputs
- Compressed QA.Stone-compatible archives
- Schema-indexed payloads for efficient retrieval

## APIs / Dependencies used
- `qastone` — output format is QA.Stone compatible

## Related repos
- `qastone` — target format for compressed archives
- `terminal_library` — related compression/library tooling
- `llm-native-inbox` — may store golden library outputs

## What this repo should NEVER do
- Serve as a real-time message system
- Handle non-archive (live session) compression

## Open questions
- Should golden_library output be directly importable into studio-os as repo cards?

## Space instructions
This space handles conversation archive compression. Keep scope on offline/batch compression.
