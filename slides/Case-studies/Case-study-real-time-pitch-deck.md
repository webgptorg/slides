---
marp: true
theme: default
paginate: true
size: 16:9
html: true
style: |
    section {
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      background: #fff;
      color: #111;
      padding: 46px 64px;
      font-size: 1.22rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    h1 { font-size: 2.15em; font-weight: 800; color: #000; margin: 0 0 0.22em 0; line-height: 1.04; }
    h2 { font-size: 1.3em; font-weight: 700; color: #111; margin: 0 0 0.32em 0; }
    h3 { font-size: 0.9em; font-weight: 700; color: #555; margin: 0 0 0.2em 0; text-transform: uppercase; letter-spacing: 0.05em; }
    p, li { font-size: 1em; line-height: 1.28; margin: 0.16em 0; color: #222; }
    strong { color: #000; }
    ul { padding-left: 1.05em; margin: 0.18em 0; }
    code { font-size: 0.88em; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; margin-top: 0.3em; }
    .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; align-items: start; margin-top: 0.3em; }
    .card { background: #f5f5f5; border-radius: 10px; padding: 14px 16px; }
    .card-blue { background: #eef2ff; border-radius: 10px; padding: 14px 16px; }
    .card-green { background: #ecfdf5; border-radius: 10px; padding: 14px 16px; }
    .big { font-size: 1.55em; font-weight: 800; line-height: 1.1; margin: 0.16em 0; }
    .quote { border-left: 3px solid #0055ff; padding-left: 16px; margin: 0.5em 0; font-style: italic; color: #333; }
    .flow-step { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.76em; margin-top: 0.25em; }
    th { background: #f0f0f0; padding: 6px 9px; text-align: left; font-weight: 700; }
    td { padding: 6px 9px; border-bottom: 1px solid #eee; }
    pre { margin: 0.3em 0; font-size: 0.58em; }
    section.cover { background: #000; color: #fff; justify-content: center; }
    section.cover h1 { color: #fff; font-size: 2.5em; }
    section.cover p { color: #cbd5e1; font-size: 1em; }
    section.cover strong { color: #fff; }
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
---

<!-- _class: cover -->

# Case Study: How to Have an Investor Pitch Deck in Real Time, in Real Time, Updated

**The technical walkthrough you asked for**

23 March 2026

---

# Context

We posted this:

<div class="quote">
We just had a call with an investor. Todo: send us the pitch deck.<br/>
But keeping a pitch deck current is extra work &#8212; who has time for that?<br/>
We solved it differently. We have a Promptbook agent that monitors our GitHub and website in the background and automatically regenerates the pitch deck from fresh data. No Ctrl+C / Ctrl+V, no catching up on changes.
</div>

Many of you asked: **"How does this technically work?"**

This is the step-by-step answer.

---

# What we actually have

A Git repository: `github.com/webgptorg/slides`

```
slides/
  Investor-pitch-deck/
    Investor-pitch-deck-2026-03-22.md    <- Marp markdown, auto-generated
  Case-studies/
    ...
scripts/
  convert-presentations.mjs              <- exports to HTML, PDF, PPTX
Pitch-deck-2026-03-22.md                 <- root copy, committed by the agent
```

The pitch deck is plain Markdown. It lives in Git. It is diffable, reviewable, and regenerable.

No Google Slides. No PowerPoint binary. No "v7_final_FINAL.pptx".

---

<!-- _class: compact -->

# Step 1 — The Book (agent definition)

We write a `.book` file — a persistent instruction set for a Promptbook agent:

```book
Pitch deck agent

PERSONA You are a professional, analytical, technically knowledgeable assistant
RULE Make investor Pitch deck for Promptbook
RULE Make it in Marp format and commit it in root as `Pitch-deck-YYYY-MM-DD.md`
RULE Re-generate it with up to date info each day
KNOWLEDGE https://www.ptbk.io/
KNOWLEDGE https://www.ptbk.io/pro-mesta
KNOWLEDGE https://github.com/webgptorg/promptbook

USE BROWSER
USE SEARCH ENGINE
USE PROJECT https://github.com/webgptorg/slides
USE TIMEOUT
```

This is not a one-shot prompt. It is a standing configuration that runs daily.

---

<!-- _class: compact -->

# Step 2 — Knowledge sources

The agent does not hallucinate content. It reads concrete URLs.

| Directive | What it does |
|---|---|
| `KNOWLEDGE https://www.ptbk.io/` | Indexes the main product site — positioning, features, pricing |
| `KNOWLEDGE https://www.ptbk.io/pro-mesta` | Indexes the public-sector landing page |
| `KNOWLEDGE https://github.com/...promptbook` | Reads the repo — README, package versions, changelog |
| `USE BROWSER` | Opens pages and renders JS if needed |
| `USE SEARCH ENGINE` | Searches the web for recent mentions, ecosystem context |
| `USE PROJECT ...slides` | Has write access to the slides repo — reads old decks, commits new ones |

The agent output is bounded by what these sources actually say.

---

# Step 3 — The agent runs

<div class="grid2">
<div>

### On each run the agent:

1. Fetches all `KNOWLEDGE` URLs
2. Reads the current repo state via `USE PROJECT`
3. Optionally searches the web via `USE SEARCH ENGINE`
4. Generates a complete Marp Markdown deck
5. Commits it as `Pitch-deck-YYYY-MM-DD.md`
6. The conversion script exports HTML, PDF, PPTX

</div>
<div class="card">

### What triggers a run

- Scheduled daily (cron / Agent Server)
- Manual trigger before an investor meeting
- On-demand via the Book initial message:

_"Create me a pitch deck about Promptbook and keep it up to date!"_

</div>
</div>

---

<!-- _class: compact -->

# Step 4 — Output is code, not a file

The generated deck is Marp Markdown — it compiles to presentations:

```bash
npm run convert:presentations
# -> dist/html/Investor-pitch-deck-2026-03-22.html
# -> dist/pdf/Investor-pitch-deck-2026-03-22.pdf
# -> dist/pptx/Investor-pitch-deck-2026-03-22.pptx
```

Because the deck is in Git:

- Every version is a commit — you can `git diff` between Tuesday's and Thursday's deck
- You see exactly what changed: a metric, a slide title, a product feature
- You can revert, branch, cherry-pick — the deck is just code

No more "I think someone updated slide 7 last week but I'm not sure."

---

# Step 5 — Human stays in the loop

The agent drafts. The human reviews.

<div class="grid2">
<div class="flow-step">

### Agent responsibility

- Collect facts from approved sources
- Generate a new dated deck
- Commit to Git

</div>
<div class="flow-step">

### Human responsibility

- Define and approve `KNOWLEDGE` sources
- Review the generated diff
- Decide which version to send to the investor

</div>
</div>

The agent cannot add sources it was not given. If a `KNOWLEDGE` URL returns garbage, the deck degrades visibly — and you fix the source, not the slides.

---

# The full pipeline

```
 KNOWLEDGE        Promptbook         slides repo
 URLs +      -->  Agent         -->  Git commit
 USE PROJECT      (runs daily)       Marp .md file
                                         |
                                npm run convert
                                         |
                                     dist/
                                      html/
                                      pdf/
                                      pptx/
```

Investor asks for the deck → you send the latest PDF from `dist/`. Done.

---

# Why this is not "just prompting"

<div class="grid2">
<div>

### One-shot prompting

- you write a prompt, get a deck once
- next week it is outdated
- you prompt again, diff manually
- no version history, no audit trail

</div>
<div class="card-blue">

### Book-based agent

- the Book defines behavior permanently
- the agent re-runs on schedule
- output is versioned in Git automatically
- sources are explicit and auditable
- you review diffs, not entire decks

</div>
</div>

<div class="big">The difference is operational: one-shot is a tool, a Book is a process.</div>

---

<!-- _class: cover -->

# Set this up for your own company

**Option A — We deploy a Promptbook Agent Server for you**

We configure the Book, connect your sources, set up the schedule.
You review diffs and send decks.

**Option B — Self-host from GitHub**

`github.com/webgptorg/promptbook` — fork, write your Book, run the agent.

**ptbk.io**

_Questions? Write us — we will walk you through the setup._

<!-- 11:11 -->
