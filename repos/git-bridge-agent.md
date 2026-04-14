# git-bridge-agent

> A drop-in commit/push button for any PWA or web app. No server needed —
> runs entirely from the browser using GitHub API + localStorage PAT.
> Works from iPhone Safari.

**GitHub:** https://github.com/nothinginfinity/git-bridge-agent  
**Status:** `active`  
**Stack:** JavaScript  
**Cluster:** Phone Studio  
**Last updated:** 2026-04-11  

---

## What it does
A JavaScript drop-in that adds a commit/push button to any PWA. Uses the GitHub
REST API directly from the browser so no server or local git install is needed.
Designed to work from iPhone Safari — enabling code pushes from the phone.

## Inputs
- GitHub PAT (stored in localStorage by the user)
- File content to commit
- Commit message

## Outputs
- GitHub commit + push via REST API
- Push confirmation UI

## APIs / Dependencies used
- GitHub REST API (create/update file endpoints)
- localStorage for PAT storage

## Related repos
- `phone-studio` — primary consumer of this pattern
- `infinitypaste` — may use this for saving state
- `openclaw-phone-studio` — also uses this

## What this repo should NEVER do
- Store PATs on any server
- Handle anything beyond commit/push (no PR creation, no branch management UI)

## Open questions
- Should git-bridge-agent support multi-file commits or stay single-file?
- Should it be distributed as an npm package or stay copy-paste?

## Space instructions
This space builds git-bridge-agent as a minimal, reusable drop-in.
Keep it focused on the single commit/push action only.
