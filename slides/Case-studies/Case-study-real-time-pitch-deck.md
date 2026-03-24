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
      padding: 38px 58px 32px;
      font-size: 1.22rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }
    section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, #0055ff 0%, #4f8eff 100%);
    }
    h1 {
      font-size: 2.1em; font-weight: 800; color: #000;
      margin: 0 0 0.26em 0; line-height: 1.05;
      padding-bottom: 0.2em;
      border-bottom: 2px solid #f0f0f0;
    }
    h2 { font-size: 1.3em; font-weight: 700; color: #111; margin: 0 0 0.32em 0; }
    h3 {
      font-size: 0.82em; font-weight: 700; color: #0055ff;
      margin: 0 0 0.35em 0; text-transform: uppercase; letter-spacing: 0.08em;
    }
    p, li { font-size: 1em; line-height: 1.32; margin: 0.18em 0; color: #222; }
    strong { color: #000; }
    ul { padding-left: 1.1em; margin: 0.2em 0; }
    li::marker { color: #0055ff; }
    code {
      font-size: 0.84em;
      background: #eef2ff;
      border-radius: 4px;
      padding: 0.05em 0.32em;
      color: #0044cc;
      font-weight: 500;
    }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; margin-top: 0.4em; }
    .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; align-items: start; margin-top: 0.35em; }
    .card {
      background: #f7f8fa;
      border-radius: 12px;
      padding: 16px 18px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.07);
    }
    .card-blue {
      background: #eef2ff;
      border-radius: 12px;
      padding: 16px 18px;
      border-top: 3px solid #0055ff;
      box-shadow: 0 1px 6px rgba(0,85,255,0.08);
    }
    .card-red {
      background: #fff5f5;
      border-radius: 12px;
      padding: 16px 18px;
      border-top: 3px solid #e53e3e;
      box-shadow: 0 1px 6px rgba(229,62,62,0.07);
    }
    .card-green {
      background: #ecfdf5;
      border-radius: 12px;
      padding: 16px 18px;
      border-top: 3px solid #10b981;
      box-shadow: 0 1px 6px rgba(16,185,129,0.08);
    }
    .big {
      font-size: 1.4em; font-weight: 800; line-height: 1.2;
      margin: 0.55em 0 0.1em 0;
      color: #0055ff;
      background: #eef2ff;
      border-left: 4px solid #0055ff;
      border-radius: 8px;
      padding: 0.35em 0.75em;
    }
    .quote { border-left: 3px solid #0055ff; padding-left: 16px; margin: 0.5em 0; font-style: italic; color: #444; }
    .flow-step {
      background: #fff;
      border: 1px solid #e8edf2;
      border-left: 4px solid #0055ff;
      border-radius: 10px;
      padding: 14px 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    table { width: 100%; border-collapse: collapse; font-size: 0.76em; margin-top: 0.3em; border-radius: 10px; overflow: hidden; }
    th { background: #0055ff; color: #fff; padding: 8px 11px; text-align: left; font-weight: 600; letter-spacing: 0.02em; }
    td { padding: 7px 11px; border-bottom: 1px solid #f0f0f0; }
    tr:last-child td { border-bottom: none; }
    tr:nth-child(even) td { background: #fafbff; }
    pre {
      margin: 0.35em 0;
      font-size: 0.56em;
      background: #0f172a !important;
      border-radius: 10px;
      padding: 0.9em 1.1em !important;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    }
    pre code { background: transparent !important; color: #e2e8f0; padding: 0; font-weight: 400; }
    .code-light pre {
      background: #fff !important;
      box-shadow: 0 0 0 1.5px #e0e4ef, 0 2px 10px rgba(0,0,0,0.07);
      margin: 0;
    }
    .code-light pre code { color: #111; font-weight: 500; }
    section.cover {
      background: #000;
      color: #fff;
      justify-content: center;
    }
    section.cover::before {
      height: 5px;
      background: linear-gradient(90deg, #0055ff 0%, #38bdf8 100%);
    }
    section.cover h1 {
      color: #fff; font-size: 2.4em;
      border-bottom: none;
      padding-bottom: 0;
    }
    section.cover p { color: #94a3b8; font-size: 1em; }
    section.cover strong { color: #fff; }
    section.cover .tag {
      display: inline-block;
      background: #0055ff;
      color: #fff;
      font-size: 0.55em;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border-radius: 4px;
      padding: 0.25em 0.7em;
      margin-bottom: 0.5em;
    }
    .option-card {
      border: 1px solid rgba(255,255,255,0.12);
      border-top: 3px solid #0055ff;
      border-radius: 14px;
      padding: 28px 28px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(4px);
    }
    .option-card h3 { color: #4f8eff; font-size: 0.85em; margin-bottom: 0.6em; }
    .option-card p { color: #cbd5e1; font-size: 0.92em; margin: 0; line-height: 1.5; }
    .option-card strong { color: #fff; }
    .cta-bar {
      display: flex; align-items: center; justify-content: center; gap: 32px;
      margin-top: 1.4em;
      padding: 20px 36px;
      background: rgba(0,85,255,0.18);
      border: 1px solid rgba(0,85,255,0.45);
      border-radius: 14px;
    }
    .cta-bar .url { font-size: 2em; font-weight: 800; color: #fff; letter-spacing: -0.02em; line-height: 1; }
    .cta-bar .sub { font-size: 0.8em; color: #94a3b8; margin-top: 0.3em; }
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
    header { position: absolute; top: 16px; right: 36px; padding: 0; margin: 0; }
    header img { height: 40px; width: auto; filter: brightness(0) invert(1); }
---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<div class="tag">Case Study</div>

# Case Study: How to Have an Investor Pitch Deck in Real Time, in Real Time, Updated

**The technical walkthrough you asked for**

24 March 2026

---

# Step 0 - What we actually have

A [Git repository with slides](github.com/webgptorg/slides)

```
slides/
  Pitch-decks/
    Investor-pitch-deck.md     <- Marp markdown, managed by the agent and us
    Investor-pitch-deck.pptx   <- Auto-generated by Marp
    Investor-pitch-deck.pdf    <- Auto-generated by Marp
    Investor-pitch-deck.html   <- Auto-generated by Marp
```

<div class="grid2">
<div>

The pitch deck is plain Markdown. It lives in Git. It is **diffable**, **reviewable**, and **regenerable**.

Both us and the agent can update it. We can see the history of changes. We can revert if something breaks.

</div>
<div class="card-blue">

### No more

- No Google Slides drift
- No PowerPoint binary blobs
- No `v7_final_FINAL.pptx`

</div>
</div>

---

# Step 1 - The Agent

<div class="grid2">
<div>

We write a `.book` file — a persistent instruction set for a [Promptbook agent](github.com/webgptorg/promptbook).

This is **not a one-shot prompt**. It is a standing agent definition that runs on a schedule.

<div class="card-blue" style="margin-top:0.6em">

### Why a .book file?

- Behavior is defined **once**, runs **forever**
- Sources are explicit and auditable
- Agent output is bounded — no hallucination
- Human reviews diffs, not entire decks

</div>
</div>
<div class="code-light">

```book
Pitch deck agent

PERSONA You are a professional assistant
GOAL Keep pitch decks up-to-date
RULE Slides are under slides/Pitch-decks/*
RULE Use Marp and commit to main
KNOWLEDGE https://www.ptbk.io/
KNOWLEDGE https://www.ptbk.io/pro-mesta
KNOWLEDGE https://github.com/webgptorg/promptbook

USE BROWSER To find recent information
USE SEARCH ENGINE For recent context
USE PROJECT https://github.com/webgptorg/slides
USE TIMEOUT Regenerate once a day
```

</div>
</div>

---

# Step 2 - How the Agent Works

The agent is written in [Promptbook ecosystem](github.com/webgptorg/promptbook) which can handle AI grounding, RAG, and rules enforcement...

The agent does not hallucinate content. It reads concrete URLs.

| Directive                                    | What it does                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| `KNOWLEDGE https://www.ptbk.io/`             | Indexes the main product site - positioning, features, pricing          |
| `KNOWLEDGE https://www.ptbk.io/pro-mesta`    | Indexes the public-sector landing page                                  |
| `KNOWLEDGE https://github.com/...promptbook` | Reads the repo - README, package versions, changelog                    |
| `USE BROWSER`                                | Opens pages and renders JS if needed                                    |
| `USE SEARCH ENGINE`                          | Searches the web for recent mentions, ecosystem context                 |
| `USE PROJECT ...slides`                      | Has write access to the slides repo - reads old decks, commits new ones |

<div class="big">The agent output is bounded by what these sources actually say — no hallucination, no drift.</div>

---

# Step 3 - The agent runs

<div class="grid2">
<div>

### On each run the agent:

1. Fetches all `KNOWLEDGE` URLs
2. Reads the current repo state via `USE PROJECT`
3. Optionally searches the web via `USE SEARCH ENGINE`
4. Generates a complete Marp Markdown deck
5. Commits it in `main`
6. The conversion script exports HTML, PDF, PPTX

</div>
<div class="card-blue">

### What triggers a run

- Agent sets itself to run once a day via `USE TIMEOUT`
- Manual trigger before an investor meeting
- On-demand via the Book initial message:

_"Create me a pitch deck about Promptbook and keep it up to date!"_

</div>
</div>

<div class="big">Every run is a fresh, sourced, versioned deck — no manual drafting required.</div>

---

# Step 4 - Human stays in the loop

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
- Review the changes regularly _(diffs in Git)_
- Decide which version to send to the investor

</div>
</div>

<div class="big">Git is the audit trail. The agent is the author. You are the editor.</div>

---

# Why this is not "just prompting"

<div class="grid2">
<div class="card-red">

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

# 🚀 Set this up for your own company

<div class="grid2" style="margin-top:0.8em;align-items:stretch">
<div class="option-card">

### Option A — Managed

<p><strong>We deploy a Promptbook Agent Server for you.</strong><br><br>We configure the Book, connect your knowledge sources, and set up the daily schedule. You focus on reviewing the diffs before the meeting.</p>

</div>
<div class="option-card">

### Option B — Self-hosted

<p><strong>Run it yourself from GitHub.</strong><br><br><code style="background:rgba(255,255,255,0.1);color:#93c5fd;font-size:0.9em">github.com/webgptorg/promptbook</code><br><br>Write your Book, deploy to your own infrastructure, own your data.</p>

</div>
</div>

<div class="cta-bar">
<div style="background:white;padding:7px;border-radius:8px;flex-shrink:0"><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://ptbk.io" alt="QR Code" style="width:100px;height:100px;display:block"></div>
<div>
<div class="url">ptbk.io</div>
<div class="sub">Scan to open &nbsp;·&nbsp; Start for free &nbsp;·&nbsp; 24 March 2026</div>
</div>
</div>

<!-- 11:11 -->
