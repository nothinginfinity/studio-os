# infinitypaste

> Copy many. Paste once. — A clipboard queue PWA for iPhone.

**GitHub:** https://github.com/nothinginfinity/infinitypaste  
**Status:** `active`  
**Stack:** JavaScript (PWA)  
**Cluster:** Phone Studio  
**Last updated:** 2026-04-13  

---

## What it does
An iPhone PWA that maintains a queue of clipboard items. The user copies multiple
things in sequence, then pastes them one-by-one in order. Solves the "copy one thing,
lose the last thing" problem on mobile.

## Inputs
- Clipboard items (text, URLs)
- User paste/dismiss actions

## Outputs
- Clipboard queue UI
- Sequential paste delivery to active app

## APIs / Dependencies used
- Web Clipboard API
- PWA service worker for offline use

## Related repos
- `infinitypaste-v2` — Phase 5 feature-extended version
- `git-bridge-agent` — browser-based git push (used in Phone Studio workflow)
- `copy-not-paste` — clipboard provenance tracker (macOS, related concept)

## What this repo should NEVER do
- Store clipboard content on any server
- Require account creation or login

## Open questions
- What are the Phase 5 features in v2 that are not in v1?
- Should v1 and v2 be merged?

## Space instructions
This space builds InfinityPaste. Keep it a simple, private, phone-first PWA.
