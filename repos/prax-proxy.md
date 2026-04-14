# prax-proxy

> PHI Agent Proxy — Twincode operational modes for Claude Code.

**GitHub:** https://github.com/nothinginfinity/prax-proxy  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Agent Infra  
**Last updated:** 2026-02-06  

---

## What it does
Acts as a proxy/orchestrator for Claude Code, implementing Twincode operational modes
where two modes can run in parallel (A/B) for testing, hot-swap, or multi-mode operation.
The "Prax" layer that sits between the developer and underlying agents.

## Inputs
- Claude Code requests / tool calls
- Operational mode configuration
- Twincode A/B parameters

## Outputs
- Proxied agent responses
- Mode-switch events
- Operational logs

## APIs / Dependencies used
- Anthropic Claude API / Claude Code
- `mcp-twin` — related hot-swap pattern

## Related repos
- `mcp-twin` — the TypeScript hot-swap pattern this builds on
- `prax-chat` — chat UI that may use this proxy
- `prax-command-center` — command center that orchestrates via this proxy
- `DragonPy` — broader orchestration framework

## What this repo should NEVER do
- Handle user authentication or billing
- Become a general HTTP proxy for non-agent traffic

## Open questions
- Should Twincode support more than 2 modes simultaneously?
- How does mode state persist across sessions?

## Space instructions
This space owns the Prax proxy and Twincode operational mode pattern.
Stay focused on orchestration and mode management.
