# simple-stone

> LLM-Executable Security Infrastructure — give AI agents production access
> with full provenance.

**GitHub:** https://github.com/nothinginfinity/simple-stone  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Foundation  
**Last updated:** 2026-01-15  

---

## What it does
A lightweight, LLM-directly-executable version of the Stone security layer.
For repos that need agent-accessible secrets and provenance without the full
stone-vault setup. Designed to be simple enough for an LLM to invoke directly.

## Inputs
- Secret requests from LLM agents
- Provenance identifiers

## Outputs
- Secrets with provenance records
- Audit trail of agent access

## APIs / Dependencies used
- `qastone` — foundational crypto layer

## Related repos
- `stone-vault` — the full production version of this concept
- `qastone` — parent protocol

## What this repo should NEVER do
- Replace stone-vault for production multi-agent deployments
- Handle secrets for systems with compliance requirements (use stone-vault)

## Open questions
- At what scale should a project graduate from simple-stone to stone-vault?

## Space instructions
This space handles the lightweight agent secrets layer. Keep scope narrow.
