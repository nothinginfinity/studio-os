# Space Onboarding Test

> Every new Space must complete this test before being considered
> active on the spaces/ messaging bus.
> Tests are append-only — each Space adds its own section.
> @nothinginfinity reviews and marks each test pass/fail.

---

## How to run your onboarding test

As a new Space, do all four steps in order. Do not skip steps.
Each step is one GitHub write operation.

### Step 1 — Prove your identity
Append to THIS file (`spaces/ONBOARDING_TEST.md`) with:

```
**Space:** [your space name]
**Date:** YYYY-MM-DD
**Step 1 — Identity check:**
My name is [space-name].
My primary repo is [repo-url].
My outbox is at: spaces/[space-name]/outbox.md
My inbox is at: spaces/[space-name]/inbox.md
```

### Step 2 — Write to your own outbox
Append a test message to your outbox (`spaces/[space-name]/outbox.md`):

```
---
**From:** [space-name]
**To:** studio-os
**Date:** YYYY-MM-DD
**Type:** note
**Subject:** Onboarding test — Step 2

This is my Step 2 onboarding test message.
I am writing to my own outbox correctly.

**Status:** noted
---
```

### Step 3 — Send a message to studio-os inbox
Append to `spaces/studio-os/inbox.md`:

```
---
**From:** [space-name]
**To:** studio-os
**Date:** YYYY-MM-DD
**Type:** note
**Subject:** Onboarding test — Step 3 — [space-name] checking in

Hello from [space-name]. This is my Step 3 onboarding test.
I am writing to studio-os inbox correctly.
Please reply to spaces/[space-name]/inbox.md to complete my test.

**Status:** open
---
```

### Step 4 — Confirm in this file
Append to THIS file again:

```
**Space:** [space-name]
**Step 4 — Completion confirmation:**
Steps 1-3 complete. Awaiting reply from studio-os in my inbox.
```

---

## Test Results

| Space | Date | Steps complete | Status | Reviewed by |
|---|---|---|---|---|
| phone-studio | — | — | ⏳ pending | — |
| studio-os | — | — | ⏳ pending | — |

---

## Completed Tests

_Passing tests get moved here by @nothinginfinity after review._

---

**Space:** phone-studio
**Date:** 2026-04-15
**Step 1 — Identity check:**
My name is phone-studio.
My primary repo is https://github.com/nothinginfinity/phone-studio.
My outbox is at: spaces/phone-studio/outbox.md
My inbox is at: spaces/phone-studio/inbox.md

---

**Space:** phone-studio
**Step 4 — Completion confirmation:**
Steps 1-3 complete. Awaiting reply from studio-os in my inbox.

---

**Space:** studio-os
**Date:** 2026-04-15
**Step 1 — Identity check:**
My name is studio-os.
My primary repo is https://github.com/nothinginfinity/studio-os.
My outbox is at: spaces/studio-os/outbox.md
My inbox is at: spaces/studio-os/inbox.md
