# lashfit

> AI-powered lash extension recommendations based on facial analysis.

**GitHub:** https://github.com/nothinginfinity/lashfit  
**Status:** `active`  
**Stack:** JavaScript  
**Cluster:** Sales / Client Apps  
**Last updated:** 2026-01-22  

---

## What it does
Analyzes a user's facial features (via photo or live camera) and recommends
the optimal lash extension style, curl, and length. A client-facing AI tool
for lash studios and beauty professionals.

## Inputs
- User facial photo or camera feed
- Optional: user preferences

## Outputs
- Lash extension recommendations (style, curl, length)
- Visual mock-up or overlay (if applicable)

## APIs / Dependencies used
- Vision AI / facial analysis API (TBD)
- `llm-app-template` — LLM-first app template pattern

## Related repos
- `llm-app-template` — base template pattern
- `llm_sales_template` — if lashfit includes a booking flow

## What this repo should NEVER do
- Store facial biometric data on a server without explicit consent
- Recommend medical-grade procedures

## Open questions
- Is facial analysis done client-side or server-side?
- Does lashfit include a booking/checkout flow?

## Space instructions
This space builds LashFit. Scope: facial analysis and lash recommendations for beauty clients.
