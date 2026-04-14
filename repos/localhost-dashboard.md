# localhost-dashboard

> Visual dashboard to manage local development services — start/stop with one click,
> MCP integration for Claude Code.

**GitHub:** https://github.com/nothinginfinity/localhost-dashboard  
**Status:** `active`  
**Stack:** JavaScript  
**Cluster:** Tools / Utilities  
**Last updated:** 2026-03-17  

---

## What it does
A browser-based dashboard for managing all local development services (servers, agents,
databases) from one interface. One-click start/stop, status monitoring, and MCP
integration so Claude Code can interact with local services.

## Inputs
- Service configuration (ports, commands, labels)
- Start/stop commands from UI or MCP

## Outputs
- Service status dashboard
- Running/stopped state management
- MCP tool interface for Claude Code

## APIs / Dependencies used
- Node.js process management
- MCP server integration
- `mcp-twin` — for zero-downtime MCP updates

## Related repos
- `mcp-twin` — hot-reload pattern for the MCP integration
- `ralph-service` — candidate for a dashboard task queue panel

## What this repo should NEVER do
- Manage production services (local dev only)
- Expose the dashboard to the public internet

## Open questions
- Should localhost-dashboard auto-discover running services or require manual config?
- Should it include a log viewer per service?

## Space instructions
This space builds the localhost developer dashboard. Scope: local service management only.
