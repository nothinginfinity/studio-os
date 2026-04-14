# email-for-ai

> Communication infrastructure for LLM agents — email, calendar, and todo
> capabilities.

**GitHub:** https://github.com/nothinginfinity/email-for-ai  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Agent Infra  
**Last updated:** 2026-03-16  

---

## What it does
Gives LLM agents the ability to send and receive email, manage calendar events,
and handle todos. Provides the communication primitives that agents need to operate
asynchronously and coordinate with humans and other agents over time.

## Inputs
- Agent-generated email/calendar/todo requests
- Incoming email or calendar events (via IMAP/Gmail/etc.)

## Outputs
- Sent emails, calendar entries, todo items on behalf of agents
- Structured inbox for agent consumption

## APIs / Dependencies used
- SMTP/IMAP or Gmail API
- Calendar API (Google Calendar or CalDAV)
- Internal: relates to `qastone` (context provenance for messages)

## Related repos
- `qastone` — email for AI is conceptually derived from QA.Stone's "email" metaphor
- `llm-native-inbox` — inbox layer for receiving/reading agent messages
- `acp-protocol` — agent-to-agent comms (complementary, different transport)
- `agentic-chat-rooms` — real-time counterpart

## What this repo should NEVER do
- Handle human-to-human email (not an email client)
- Auto-send emails without agent-generated content approval

## Open questions
- Should email-for-ai support inbound webhooks so agents wake up on new email?
- Is there a shared inbox schema with llm-native-inbox?

## Space instructions
This space handles async agent communication via email/calendar/todo.
Do not scope into real-time chat (that is agentic-chat-rooms) or UI.
