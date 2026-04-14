# acp-protocol

> Agent Communication Protocol — TCP-like reliable communication for LLM agents
> using MCP as transport.

**GitHub:** https://github.com/nothinginfinity/acp-protocol  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Agent Infra  
**Last updated:** 2026-02-03  

---

## What it does
Defines a structured, reliable communication protocol for LLM-to-LLM agent messaging.
Analogous to TCP in that it provides ordering, acknowledgment, and retry semantics
over MCP transport. The standard for all agent-to-agent communication in this studio.

## Inputs
- Agent message payloads
- Sender/receiver agent identity
- Transport layer (MCP or WebSocket)

## Outputs
- Delivered, acknowledged agent messages
- Protocol event logs

## APIs / Dependencies used
- MCP protocol
- `acp-websocket` — WebSocket transport variant
- `acp-mcp-bridge` — MCP-specific bridge

## Related repos
- `acp-websocket` — WebSocket transport for this protocol
- `acp-mcp-bridge` — bridge to MCP-Twin inbox
- `acp-protocol-v4z` — compressed version
- `email-for-ai` — higher-level messaging built on similar concepts

## What this repo should NEVER do
- Handle application business logic in agent messages
- Replace ACP with raw HTTP polling in any new repo

## Open questions
- Should ACP have a discovery/registry so agents can find each other by name?
- What is the canonical message schema version?

## Space instructions
This space owns the ACP protocol spec and implementation. Keep it as a clean
infrastructure layer — do not let business logic leak in.
