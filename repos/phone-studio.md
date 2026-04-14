# phone-studio

> Phone-first AI content studio — voice recordings to transcripts, content ideas,
> captions, post variants, approval queues, and approved Instagram/TikTok posting.

**GitHub:** https://github.com/nothinginfinity/phone-studio  
**Status:** `active`  
**Stack:** JavaScript (PWA)  
**Cluster:** Phone Studio  
**Last updated:** (fill in)  

---

## What it does
A personal-use mobile web app / PWA that runs on iPhone. Takes voice recordings,
transcribes them, generates content ideas and post variants, queues them for approval,
and posts to Instagram/TikTok after explicit user approval. Includes lead capture
and a lightweight CRM.

## Inputs
- Voice recordings from iPhone microphone
- User approval/rejection of generated content
- Lead capture form submissions

## Outputs
- Transcripts
- Content ideas, captions, and post variants
- Approved posts to Instagram / TikTok via official APIs
- CRM lead records

## APIs / Dependencies used
- Whisper or similar STT API for transcription
- Instagram Graph API (official)
- TikTok Content Posting API (official)
- LLM API for content generation
- `git-bridge-agent` — for in-browser pushes from iPhone

## Related repos
- `openclaw-phone-studio` — variant / fork of this project
- `git-bridge-agent` — browser-based git push from iPhone
- `infinitypaste` — clipboard tool used in Phone Studio workflow
- `llm_sales_template` — CRM pattern reference

## What this repo should NEVER do
- Auto-post without explicit user approval step
- Use unofficial/scraping-based Instagram or TikTok methods
- Require a desktop or native app install

## Open questions
- V1 vs V2 feature split — what is locked for V1?
- Should CRM be a separate repo or stay embedded?
- What is the approval UI pattern for post queue?

## Space instructions
This is the Phone Studio build space. It owns the full voice → post pipeline.
Do not let it drift into general social media management or multi-user features.
