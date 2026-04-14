# XvP

> Xenogenesis via Prax — the cotonomous orchestration aligned interface.

**GitHub:** https://github.com/nothinginfinity/XvP  
**Status:** `active`  
**Stack:** (TBD — fill in)  
**Cluster:** Agent Infra  
**Last updated:** 2026-01-08  

---

## What it does
The highest-level orchestration abstraction in the studio. "Cotonomous" means
self-governing — XvP is the interface for an orchestration system that can
self-direct within defined alignment constraints.

## Inputs
- High-level operator intent
- Studio-wide agent state

## Outputs
- Coordinated multi-agent actions
- Aligned orchestration decisions

## APIs / Dependencies used
- `DragonPy` — underlying orchestration framework
- `prax-proxy` — Prax layer
- `acp-protocol` — agent communication

## Related repos
- `DragonPy` — foundation framework
- `prax-proxy` — the Prax operational layer

## What this repo should NEVER do
- Take autonomous actions outside defined alignment constraints
- Replace lower-level repos (ACP, DragonPy) for their specialized functions

## Open questions
- What are the current alignment constraints defined for XvP?
- How does XvP differ from prax-proxy in practice?

## Space instructions
This space builds the cotonomous orchestration interface.
Alignment constraints are non-negotiable — do not relax them for convenience.
