# DragonPy

> Open framework for Orchestrator Interfaces and Multi-Directionally Linked
> Command Lines (OI-MDLCLs).

**GitHub:** https://github.com/nothinginfinity/DragonPy  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Agent Infra  
**Last updated:** 2026-01-15  

---

## What it does
Provides the underlying orchestration framework for multi-agent pipelines. MDLCLs
allow a command line interface to send and receive commands in multiple directions
simultaneously — enabling complex agent orchestration from a terminal-like interface.

## Inputs
- Orchestrator commands (multi-directional)
- Agent pipeline definitions

## Outputs
- Coordinated multi-agent execution
- Command routing and response aggregation

## APIs / Dependencies used
- Internal: used by `XvP`, `prax-proxy`, `ralph-service`

## Related repos
- `XvP` — highest-level orchestration built on DragonPy
- `prax-proxy` — uses DragonPy patterns
- `ralph-service` — operates within DragonPy orchestration

## What this repo should NEVER do
- Handle UI rendering
- Replace ACP Protocol for agent-to-agent messaging

## Open questions
- Is DragonPy still the active orchestration base or has XvP superseded it?
- Should this be documented as a public framework?

## Space instructions
This space maintains the DragonPy orchestration framework.
Keep it as a clean, reusable infrastructure layer.
