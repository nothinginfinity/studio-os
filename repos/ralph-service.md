# ralph-service

> DeepSeek Ralph — autonomous AI code agent as a service.

**GitHub:** https://github.com/nothinginfinity/ralph-service  
**Status:** `active`  
**Stack:** Python  
**Cluster:** Agent Infra  
**Last updated:** 2026-01-15  

---

## What it does
Wraps a DeepSeek-based autonomous coding agent as a callable service.
Other parts of the studio can delegate code tasks to Ralph via API —
Ralph plans, writes, and iterates on code autonomously.

## Inputs
- Code task descriptions / prompts
- Codebase context or file paths
- Optional: QA.Stone context packets

## Outputs
- Generated or modified code files
- Task completion reports

## APIs / Dependencies used
- DeepSeek API
- Internal: `qastone` for context, `acp-protocol` for task delivery

## Related repos
- `prax-proxy` — orchestrator layer that may delegate to Ralph
- `DragonPy` — orchestration framework Ralph operates within
- `acp-protocol` — receives tasks over ACP

## What this repo should NEVER do
- Execute code in production environments without human approval
- Replace Claude Code for interactive development sessions

## Open questions
- Should Ralph have a task queue UI in localhost-dashboard?
- What is the failure/retry policy for stalled tasks?

## Space instructions
This space builds and maintains the Ralph autonomous code agent service.
Do not expand Ralph's scope to include non-code tasks.
