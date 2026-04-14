# prax-chat

> Multi-LLM chat interface with search modes, collaboration, and agent olympics.

**GitHub:** https://github.com/nothinginfinity/prax-chat  
**Status:** `active`  
**Stack:** JavaScript  
**Cluster:** Chat / UI  
**Last updated:** 2026-01-15  

---

## What it does
A feature-rich chat interface that supports multiple LLM backends simultaneously,
different search/reasoning modes, multi-user collaboration, and "agent olympics"
— where multiple agents compete to answer a query and the best response wins.

## Inputs
- User chat messages
- LLM backend configurations
- Search mode selection

## Outputs
- Multi-LLM chat UI
- Agent competition results
- Collaborative session state

## APIs / Dependencies used
- Multiple LLM APIs (Claude, GPT, DeepSeek, etc.)
- `prax-proxy` — may route requests through Prax
- `ztgi-ui` — shared UI component library

## Related repos
- `prax-proxy` — the orchestration proxy layer
- `prax-command-center` — broader command center that includes chat
- `ztgi-ui` — shared UI library
- `ZTPchat` — related chat product
- `agentic-chat-rooms` — real-time rooms variant

## What this repo should NEVER do
- Handle billing or user account management
- Auto-submit prompts without user trigger

## Open questions
- What distinguishes prax-chat from ZTPchat in terms of target use case?
- Should agent olympics results be stored and analyzed?

## Space instructions
This space builds the Prax multi-LLM chat interface. Scope: chat UI and LLM routing.
