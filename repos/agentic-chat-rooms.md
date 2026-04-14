# agentic-chat-rooms

> Real-time AI-powered chat rooms microservice with Email-for-AI integration.

**GitHub:** https://github.com/nothinginfinity/agentic-chat-rooms  
**Status:** `active`  
**Stack:** TypeScript  
**Cluster:** Chat / UI  
**Last updated:** 2026-01-23  

---

## What it does
Provides real-time, multi-participant chat rooms where AI agents and humans can
co-exist in the same conversation. Integrates Email-for-AI so agents can receive
async messages alongside live room participation.

## Inputs
- Real-time chat messages from humans and agents
- Email-for-AI async messages
- Room configuration

## Outputs
- Live chat room UI
- Agent participation in rooms
- Message history

## APIs / Dependencies used
- WebSockets (real-time)
- `email-for-ai` — async message integration
- `ztgi-ui` — shared UI components

## Related repos
- `email-for-ai` — async counterpart for agent messaging
- `prax-chat` — single-user multi-LLM chat (different use case)
- `prax-mesh` — federated commerce rooms built on this pattern
- `ztgi-ui` — UI library

## What this repo should NEVER do
- Handle persistent user accounts or authentication
- Post content to external platforms

## Open questions
- Is prax-mesh built on top of agentic-chat-rooms or parallel to it?
- What is the max participants per room?

## Space instructions
This space builds real-time agentic chat rooms. Scope: room management, real-time
messaging, and agent participation.
