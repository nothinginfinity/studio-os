# llm_sales_template

> AI-powered sales and booking agent template for any service business.

**GitHub:** https://github.com/nothinginfinity/llm_sales_template  
**Status:** `active`  
**Stack:** JavaScript  
**Cluster:** Sales / Client Apps  
**Last updated:** 2026-01-22  

---

## What it does
A reusable template for building AI-powered sales and booking agents for service
businesses. Handles lead qualification, product/service presentation, objection
handling, and booking confirmation via conversational AI.

## Inputs
- Business configuration (services, pricing, availability)
- Customer chat messages

## Outputs
- AI sales conversation
- Booking confirmations
- Lead records

## APIs / Dependencies used
- LLM API
- Calendar/booking API (TBD per deployment)

## Related repos
- `llm-app-template` — broader LLM app template this specializes
- `bedrosians_agentic_sales` — example deployment of this template
- `prax-mesh` — mesh network that distributes these sales rooms
- `lashfit` — may use this for booking flow

## What this repo should NEVER do
- Hard-code business-specific logic (keep it generic/configurable)
- Handle payment processing directly

## Open questions
- What is the minimum config needed to deploy for a new business?
- Should this template include a CRM module?

## Space instructions
This space maintains the sales agent template. Keep it generic and configurable
— business-specific logic belongs in deployment repos like bedrosians_agentic_sales.
