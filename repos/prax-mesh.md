# prax-mesh

> Federated Agentic Commerce Network — connects niche LLM sales chat rooms,
> operator forums, and a cross-vertical mesh broker with commission splits.

**GitHub:** https://github.com/nothinginfinity/prax-mesh  
**Status:** `active`  
**Stack:** (TBD — fill in)  
**Cluster:** Chat / UI  
**Last updated:** 2026-04-14  

---

## What it does
A federated network that connects multiple niche AI-powered sales chat rooms
across verticals. Operators join the mesh, their rooms are brokered to relevant
buyers, and commission splits are handled automatically.

## Inputs
- Operator room configurations
- Buyer/lead traffic from mesh broker
- Commission split rules

## Outputs
- Federated chat room network
- Commission routing
- Cross-vertical lead matching

## APIs / Dependencies used
- `agentic-chat-rooms` — the room infrastructure
- `llm_sales_template` — sales agent pattern used in rooms
- Payment/commission API (TBD)

## Related repos
- `agentic-chat-rooms` — room infrastructure this builds on
- `llm_sales_template` — sales agent template used per room
- `bedrosians_agentic_sales` — example operator using this pattern

## What this repo should NEVER do
- Handle direct payment processing without a compliant payment layer
- Lock operators into exclusive vertical categories

## Open questions
- What is the commission split formula?
- How does a new operator onboard to the mesh?
- Is this built on agentic-chat-rooms or a separate room implementation?

## Space instructions
This space builds the federated commerce mesh. Scope: broker logic, commission splits,
operator onboarding, and cross-vertical routing.
