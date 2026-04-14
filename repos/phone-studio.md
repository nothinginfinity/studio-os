# phone-studio

> Phone-first AI content studio — turns screenshots, photos, and voice memos into
> transcripts, content variants, and a local approval queue, with V2 posting to Instagram/TikTok.

**GitHub:** https://github.com/nothinginfinity/phone-studio  
**Status:** `active`  
**Stack:** Vanilla JS / HTML / CSS — PWA (static, GitHub Pages), Tesseract.js (OCR), IndexedDB, Service Worker, `manifest.json`  
**Cluster:** Phone Studio  
**Last updated:** 2026-04-14  

---

## What it does
A personal-use mobile PWA hosted from `docs/` on GitHub Pages. V1 is fully client-side:
it OCRs screenshots via Tesseract.js, sends text to a local or cloud LLM (BYOK),
generates content variants and leads, and stores everything in IndexedDB with an
explicit approval queue. No backend in V1. V2 adds backend sync, social posting,
and CRM features.

## Inputs
- Screenshots / photos uploaded from iPhone Safari (OCR via Tesseract.js)
- Voice memos imported from iCloud Drive (transcript paste or matched file pair)
- In-app voice recording linked to screenshot records
- User approval / rejection / edit of generated drafts in the Review Queue
- BYOK LLM API keys stored locally (Groq, OpenAI, Claude, Mistral, DeepSeek, Gemini, Perplexity, and 9+ others)
- Creator Profile settings (name, brand, social handles)
- Lead capture extracted from OCR text (emails, phone numbers)

## Outputs
- OCR-extracted text from screenshots
- LLM-generated content variants: Instagram captions, TikTok scripts, LinkedIn posts, Blog drafts, Email copy, Twitter/X threads
- Approval queue drafts (status: `pending_review` / `approved` / `rejected`)
- Approved-drafts export bundle (TXT or JSON) for manual posting or downstream automation
- Lead records (email, phone) extracted from screenshots
- CRM contact records (unified by email/phone, with interaction history) — stored in IndexedDB
- Semantic compression index for each photo (concepts, keywords, content-type classification)
- In V2 (not yet built): direct posts to Instagram Graph API and TikTok Content Posting API

## APIs / Dependencies used

### Confirmed in codebase (V1 active)
- **Tesseract.js** — in-browser OCR (no external API call)
- **IndexedDB** (`PhoneStudio` database) — local persistence for screenshots, variants, leads, contacts, posts, recordings
- **Service Worker** — app-shell caching for offline use
- **`manifest.json`** — PWA install metadata for Safari / Add to Home Screen
- **LLM providers (BYOK, user supplies key):** Groq, Groq 8B Fast, DeepSeek, Mistral, Cerebras, Fireworks, Together AI, OpenAI, Anthropic (Claude), Cohere, xAI, Gemini, Perplexity — all via `/v1/chat/completions` compatible endpoints
- **LocallyAI (Llama 3.2 3B)** — V1 default local LLM at `http://localhost:8000`; used for on-device inference without a cloud key
- **GitHub REST API** — in-browser git push from iPhone via `docs/github-client.js` and `docs/github-ui.js` (integrated git-bridge pattern)
- **`git-bridge-agent`** pattern — implemented inline in `docs/github-client.js` / `docs/github-ui.js`

### Planned for V2 (not yet wired)
- Instagram Graph API (official) — for approved post publishing
- TikTok Content Posting API (official) — for approved post publishing
- Backend API (FastAPI or Node/Hono) — for cross-device sync, scheduling, CRM persistence

## Related repos
- `openclaw-phone-studio` — variant / fork of this project; parallel experiment track
- `git-bridge-agent` — browser-based git push from iPhone; pattern is already inlined in `docs/github-client.js`
- `infinitypaste` — clipboard queue PWA for iPhone; used in the Phone Studio capture workflow
- `infinitypaste-v2` — Phase 5 version of InfinityPaste; potential integration point for copy queue
- `llm_sales_template` — CRM pattern reference; shapes the contact/lead schema used here
- `llm-app-template` — LLM-first app architecture reference

## What this repo should NEVER do
- Auto-post to Instagram or TikTok without an explicit user approval step
- Use unofficial, scraping-based, or reverse-engineered Instagram / TikTok methods
- Require a native app install or a desktop environment to run the core workflow
- Store or transmit raw LLM API keys to any server (keys live in-browser only)
- Expand into multi-user, team, or enterprise features — this is a personal studio
- Absorb general social media management scope (scheduling for multiple accounts, analytics dashboards, etc.)
- Use auto-posting automation that violates platform Terms of Service

## Open questions
- **V2 backend host:** Where does the V2 backend live — a new `phone-studio-api` repo, or does it extend an existing template? → Post to GitHub Discussions before creating.
- **CRM separate repo:** Should the CRM grow into its own repo in V2, or stay embedded in phone-studio? → Needs a Decision Record if it develops a shared schema used by other repos.
- **Approval UI pattern:** The Review Queue tab is built; the open question is whether approval should stay in-browser or get a native iOS Shortcut trigger for quicker mobile access.
- **Voice transcription:** Voice memos are currently imported via iCloud Drive with manual transcript paste. Native in-app STT (Whisper API or on-device) is not yet implemented — this is a V2 decision.
- **Instagram / TikTok posting scope in V2:** Media upload (video) vs. caption-only posts — which lands first?

## Space instructions
This is the Phone Studio build space. It owns the full screenshot/voice → content → approval → (V2) post pipeline for personal use on iPhone. Do not let it drift into general social media management, multi-user features, or team publishing tools.
