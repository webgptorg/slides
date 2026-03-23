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
      padding: 52px 72px;
      font-size: 1.32rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    h1 { font-size: 2.28em; font-weight: 800; color: #000; margin: 0 0 0.24em 0; line-height: 1.05; }
    h2 { font-size: 1.45em; font-weight: 700; color: #111; margin: 0 0 0.4em 0; }
    h3 { font-size: 0.94em; font-weight: 700; color: #555; margin: 0 0 0.25em 0; text-transform: uppercase; letter-spacing: 0.05em; }
    p, li { font-size: 1em; line-height: 1.36; margin: 0.22em 0; color: #222; }
    strong { color: #000; }
    ul { padding-left: 1.1em; margin: 0.25em 0; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; align-items: start; margin-top: 0.45em; }
    .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; align-items: start; margin-top: 0.45em; }
    .card { background: #f5f5f5; border-radius: 10px; padding: 16px 18px; }
    .card-blue { background: #eef2ff; border-radius: 10px; padding: 16px 18px; }
    .card-green { background: #ecfdf5; border-radius: 10px; padding: 16px 18px; }
    .big { font-size: 1.9em; font-weight: 800; line-height: 1.15; margin: 0.18em 0; }
    .stat { font-size: 2em; font-weight: 900; color: #0055ff; line-height: 1; }
    .stat-label { font-size: 0.82em; color: #666; margin-top: 4px; }
    .dim { color: #888; font-size: 0.82em; }
    .quote { border-left: 3px solid #0055ff; padding-left: 20px; margin: 0.8em 0; font-style: italic; color: #333; }
    .flow-step { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.8em; margin-top: 0.35em; }
    th { background: #f0f0f0; padding: 6px 10px; text-align: left; font-weight: 700; }
    td { padding: 6px 10px; border-bottom: 1px solid #eee; }
    pre { margin: 0.45em 0; font-size: 0.7em; }
    section.cover { background: #000; color: #fff; justify-content: center; }
    section.cover h1 { color: #fff; font-size: 2.9em; }
    section.cover p { color: #cbd5e1; font-size: 1.05em; }
    section.cover strong { color: #fff; }
    section.compact { font-size: 1.18rem; }
    section.compact h1 { font-size: 2.05em; margin-bottom: 0.18em; }
    section.compact p, section.compact li { line-height: 1.26; margin: 0.16em 0; }
---

<!-- _class: cover -->

# Case Study: How to Have an Investor Pitch Deck in Real Time, in Real Time, Updated

**How Promptbook keeps the deck fresh without manual deck maintenance**

A practical, step-by-step explanation for founders, operators, and teams who asked: _"How does this actually work?"_

23 March 2026

---

# The trigger

We had a call with an investor.

**Follow-up:** “Please send us the pitch deck.”

That request sounds simple, but usually it creates invisible work:

- someone has to remember what changed
- someone has to open the deck
- someone has to copy updates from docs, GitHub, web, pricing, roadmap
- someone has to export and send the latest version

<div class="quote">
The real problem was not writing one deck once. The real problem was keeping it continuously true.
</div>

---

# The old workflow does not scale

<div class="grid2">
<div>

### Manual pitch deck maintenance

- change happens in the company
- deck becomes outdated immediately
- update is postponed
- investor asks for materials
- team scrambles to patch slides
- stale numbers and old messaging slip through

</div>
<div class="card-blue">

### Why this is structurally broken

The deck is treated as a document to manage.

**But the deck should be treated as an output.**

If your source materials are current, an agent can regenerate the presentation.

If your source materials are scattered and unmanaged, every update becomes manual editorial work.

</div>
</div>

---

# The shift: do not manage the deck, manage the system

Instead of assigning a person to “keep the pitch deck updated,” we assign that responsibility to an agent.

<div class="grid3">
<div class="card">

**Humans own**

- strategy
- positioning
- what matters
- what should never be claimed

</div>
<div class="card-blue">

**The agent owns**

- monitoring sources
- pulling fresh facts
- rewriting the deck
- storing a new version

</div>
<div class="card-green">

**Result**

A deck is always ready when someone asks for it.

No catch-up session.
No copy/paste sprint.

</div>
</div>

---

# What the agent watches

The pitch deck agent does not invent facts.
It watches the places where facts already change.

<div class="grid2">
<div>

### Typical live sources

- GitHub repositories
- product and pricing pages
- docs and release notes
- CRM or traction summaries
- internal notes approved for investor use
- previous deck versions in Git

</div>
<div class="card">

### In our case

From the Book:

- https://www.ptbk.io/
- https://www.ptbk.io/pro-mesta
- https://github.com/webgptorg/promptbook
- https://github.com/webgptorg/slides

The agent uses the browser, search, project context, and time awareness to regenerate an up-to-date deck daily.

</div>
</div>

---

<!-- _class: compact -->

# The operating instruction is itself a Book

The mechanism is simple: the agent is not hand-operated every time.
It is guided by a persistent instruction set.

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

**This is the key idea:** the repeatable work is formalized once, then executed repeatedly.

---

# Step 1 — Define the source of truth

Before automation, decide what the deck is allowed to say.

<div class="grid2">
<div class="flow-step">

### Inputs

- official website
- official repository
- pricing pages
- approved customer references
- approved team bios
- approved business model and ask

</div>
<div class="flow-step">

### Boundaries

- no invented metrics
- no unverified logos or clients
- no outdated fundraising claims
- no claims outside approved sources
- no “best effort” guessing

</div>
</div>

If the sources are weak, the deck will be weak.
If the sources are reliable, the deck becomes reliably regenerable.

---

# Step 2 — Let the agent monitor change

Once the sources are defined, the agent can watch for relevant updates in the background.

<div class="grid3">
<div class="card">

**GitHub changes**

New releases, commits, packages, integrations, docs, examples.

</div>
<div class="card">

**Website changes**

Pricing, positioning, customer stories, product pages.

</div>
<div class="card">

**Time changes**

Daily refresh, dated filenames, current narrative, current traction framing.

</div>
</div>

The team does not need to remember to update slides.
The system remembers.

---

# Step 3 — Regenerate the deck as code

The presentation is plain Markdown in Marp format.
That matters.

<div class="grid2">
<div>

### Why Markdown + Git is powerful

- easy to diff
- easy to review
- easy to regenerate
- easy to export to PDF, HTML, PPTX
- easy to version by date

</div>
<div class="card-blue">

### Output pattern

- the agent creates a new dated deck
- the deck is committed to the repository
- converters export presentation formats
- the latest file is ready to send

The deck is not an isolated binary file.
It is a reproducible artifact.

</div>
</div>

---

# Step 4 — Keep humans in the approval loop where it matters

Automation does not mean “publish anything.”
It means routine work is automatic and review is focused.

| Layer      | Agent role                    | Human role                |
| ---------- | ----------------------------- | ------------------------- |
| Facts      | Collect from approved sources | Approve sources           |
| Drafting   | Rewrite slides                | Review tone and narrative |
| Versioning | Save dated versions           | Decide which one to send  |
| Exceptions | Flag unclear claims           | Resolve ambiguity         |

**Best setup:** automate the refresh, keep final business accountability human.

---

# Step 5 — Use the deck only as one output of a larger system

This is bigger than investor materials.
The same pattern can maintain many “always-current” assets.

<div class="grid3">
<div class="card">

**Pitch decks**

Always investor-ready.

</div>
<div class="card">

**Proposals**

Updated from product, pricing, and references.

</div>
<div class="card">

**Internal docs**

Kept aligned with what ships.

</div>
</div>

<div class="quote">
The strategic move is not “generate one document with AI.”
The strategic move is “delegate recurring document maintenance to an accountable agent.”
</div>

---

<!-- _class: compact -->

# What this changes operationally

<div class="grid2">
<div>

### Before

- the deck is a neglected side task
- updates depend on memory
- every investor request creates stress
- consistency decays over time

</div>
<div>

### After

- the deck is continuously regenerated
- updates follow system rules
- investor requests are easy to satisfy
- the team works on product, not slide hygiene

</div>
</div>

<div class="big">From “Who will update the deck?” to “Why would a human update it manually at all?”</div>

---

# Why this fits Promptbook

Promptbook is designed for exactly this kind of work:

- define behavior in explicit natural-language rules
- connect agents to real knowledge sources
- run routine knowledge work in the background
- keep the setup auditable, editable, and portable

This is why the pitch deck example is useful.

**It is not only a deck story. It is a clear demonstration of operational AI.**

---

<!-- _class: cover -->

# Want this for your company?

**Option 1 — Let us set up a Promptbook Agent Server for you**

We can help design the Book, connect the sources, define approval rules, and put recurring updates on autopilot.

**Option 2 — Build your own Promptbook Agent Server**

Start from GitHub and adapt the workflow to your own decks, docs, proposals, and internal knowledge operations.

**ptbk.io · github.com/webgptorg/promptbook**

_Write if you want the technical walkthrough._

<!-- 11:11 -->
