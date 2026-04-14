# mcp-twin

> Zero-downtime hot-reload for MCP servers — update Claude Code MCP servers
> without restarting.

**GitHub:** https://github.com/nothinginfinity/mcp-twin  
**Status:** `active`  
**Stack:** TypeScript  
**Cluster:** Agent Infra  
**Last updated:** 2026-01-08  

---

## What it does
Implements a Twin A/B hot-swap pattern for MCP servers so Claude Code never loses
an active MCP connection during an update. One twin serves while the other reloads,
then they swap — zero downtime.

## Inputs
- MCP server definitions
- Hot-reload trigger (file change or API call)

## Outputs
- Continuously available MCP server endpoint
- Swap event logs

## APIs / Dependencies used
- MCP protocol (Model Context Protocol)
- TypeScript / Node.js process management

## Related repos
- `qastone-mcp-twin` — QA.Stone-specific MCP twin demo
- `acp-mcp-bridge` — uses this pattern for ACP transport
- `prax-proxy` — uses Twincode operational mode (related concept)

## What this repo should NEVER do
- Handle application business logic
- Replace process managers like PM2 for non-MCP services

## Open questions
- Should mcp-twin support more than 2 twins (A/B/C) for canary releases?

## Space instructions
This space is focused purely on the MCP hot-reload pattern. Do not scope it into
application logic or general DevOps.
