# cairn-intent

> The Post-REST API — natural language intent to direct action.
> SHRDLU revival for 2026.

**GitHub:** https://github.com/nothinginfinity/cairn-intent  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Cairn Suite  
**Last updated:** 2026-02-03  

---

## What it does
Replaces traditional structured REST APIs with natural language intent routing.
An agent or user states what they want in plain language; CairnIntent maps that
to the correct action without requiring a pre-defined API endpoint.

## Inputs
- Natural language intent statements from agents or users
- Available action registry

## Outputs
- Direct action execution
- Action confirmation and result

## APIs / Dependencies used
- LLM API for intent parsing
- `cairn-browser` — for web-based action execution
- `cairn-gateway` — for content delivery actions

## Related repos
- `cairn-browser` — executes web actions on behalf of CairnIntent
- `cairn-gateway` — content delivery via the same Cairn paradigm
- `slopcairn` — utility helpers for Cairn
- `DragonPy` — orchestration layer that may invoke CairnIntent

## What this repo should NEVER do
- Execute destructive actions without confirmation
- Replace ACP Protocol for agent-to-agent messaging

## Open questions
- What is the action registry format? How are new actions registered?
- Should CairnIntent have a fallback to structured REST when intent is ambiguous?

## Space instructions
This space owns the post-REST natural language intent layer.
Keep it as a routing/dispatch layer — not a business logic layer.
