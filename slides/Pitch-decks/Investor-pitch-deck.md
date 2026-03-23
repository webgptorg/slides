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
      font-size: 1.34rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    h1 { font-size: 2.35em; font-weight: 800; color: #000; margin: 0 0 0.22em 0; line-height: 1.05; }
    h2 { font-size: 1.5em; font-weight: 700; color: #111; margin: 0 0 0.42em 0; }
    h3 { font-size: 0.95em; font-weight: 700; color: #555; margin: 0 0 0.25em 0; text-transform: uppercase; letter-spacing: 0.06em; }
    p, li { font-size: 1em; line-height: 1.38; margin: 0.22em 0; color: #222; }
    strong { color: #000; }
    ul { padding-left: 1.1em; margin: 0.25em 0; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start; margin-top: 0.45em; }
    .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; align-items: start; margin-top: 0.45em; }
    .card { background: #f5f5f5; border-radius: 8px; padding: 16px 18px; }
    .card-blue { background: #eef2ff; border-radius: 8px; padding: 16px 18px; }
    .big { font-size: 2em; font-weight: 800; line-height: 1.2; margin: 0.2em 0; }
    .stat { font-size: 2.1em; font-weight: 900; color: #0055ff; line-height: 1; }
    .stat-label { font-size: 0.82em; color: #666; margin-top: 4px; }
    .dim { color: #888; font-size: 0.82em; }
    .warn { color: #c00; font-size: 0.82em; }
    table { width: 100%; border-collapse: collapse; font-size: 0.8em; margin-top: 0.35em; }
    th { background: #f0f0f0; padding: 6px 10px; text-align: left; font-weight: 700; }
    td { padding: 6px 10px; border-bottom: 1px solid #eee; }
    pre { margin: 0.45em 0; font-size: 0.72em; }
    section.cover { background: #000; color: #fff; justify-content: center; }
    section.cover h1 { color: #fff; font-size: 3em; }
    section.cover p { color: #aaa; font-size: 1.05em; }
    section.cover strong { color: #fff; }
    .quote { border-left: 3px solid #0055ff; padding-left: 20px; margin: 0.8em 0; font-style: italic; color: #333; }
    section.compact { font-size: 1.22rem; }
    section.compact h1 { font-size: 2.1em; margin-bottom: 0.18em; }
    section.compact p, section.compact li { line-height: 1.28; margin: 0.16em 0; }
    section.compact table { font-size: 0.74em; }
    section.compact .grid2 { gap: 22px; }
    section.compact .card, section.compact .card-blue { padding: 14px 16px; }
    section.compact .quote { margin: 0.45em 0; }
    section.team-slide { padding: 38px 54px 26px; }
    section.team-slide h1 { text-align: center; margin-bottom: 0.18em; }
    .team-lead {
      max-width: 900px;
      margin: 0 auto 0.8em;
      text-align: center;
      font-size: 0.78em;
      line-height: 1.45;
      color: #7c8aa0;
    }
    .team-layout {
      display: grid;
      grid-template-columns: 0.8fr 1fr 1fr 0.8fr;
      gap: 18px;
      align-items: end;
      margin-top: 0.2em;
      width: 100%;
      flex: 1;
    }
    .team-figure {
      align-self: end;
      display: flex;
      justify-content: center;
    }
    .team-portrait {
      width: 100%;
      max-width: 210px;
      height: 320px;
      object-fit: contain;
      object-position: center bottom;
      display: block;
    }
    .team-bio {
      align-self: center;
      padding-bottom: 0.4em;
    }
    .team-role {
      font-size: 1em;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 0.42em;
    }
    .team-desc {
      font-size: 0.72em;
      line-height: 1.48;
      color: #6b7280;
    }
    .team-contact {
      margin-top: 0.65em;
      font-size: 0.7em;
      line-height: 1.5;
      color: #667085;
    }
    .team-contact div { margin: 0.12em 0; }
    section.compact.team-slide { font-size: 1.16rem; }
    section.compact.team-slide .team-layout { gap: 14px; }
    section.compact.team-slide .team-portrait { max-width: 190px; height: 290px; }
    header { position: absolute; top: 20px; right: 36px; padding: 0; margin: 0; }
    header img { height: 44px; width: auto; filter: brightness(0) invert(1); }
---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

# Promptbook

**Your best employee. Cloned. Running 24/7. Knows everything about your company.**

Pavol Hejný (CTO) · Jiří Jahn (CEO) 22. March 2026

---

# Nobody sits at a chatbot waiting for responses.

Real work doesn't happen in a chat window.

It happens in the background — emails answered, documents checked, code shipped, decisions made — **while you're doing something else.**

ChatGPT, Copilot, Gemini: you type, you wait, you get a generic answer from a tool that knows nothing about your company, your rules, or your way of doing things.

**That's not a workflow. That's a party trick.**

---

# The problem isn't AI capability. It's permanent, private knowledge.

<div class="grid2">
<div>

Google knows everything about the public internet.

**They know nothing about the inside of your company.**

Your legal policies. Your pricing exceptions. Your 20 years of institutional knowledge. Your way of handling difficult clients.

None of that is on the internet. None of it ever will be.

</div>
<div class="card-blue">

**The real gap:**

| What exists               | What's missing                   |
| ------------------------- | -------------------------------- |
| Incredibly capable models | Your company's rules             |
| Generic AI assistants     | Your specific knowledge          |
| Chat interfaces           | Agents that act autonomously     |
| Cloud AI                  | On-prem, auditable, controllable |

</div>
</div>

---

# Promptbook: write your company's brain once. It works forever.

You describe your company's knowledge, rules, and personas in plain language.
Promptbook runs them as **persistent, autonomous agents** — no babysitting.

```book
Legal expert at Paul Smith & Associés

PERSONA Professional, detail-oriented. Czech law only.

KNOWLEDGE https://company.com/employee-handbook.pdf
KNOWLEDGE https://company.com/gdpr-policy.docx

RULE Never advise outside Czech jurisdiction.
RULE Flag anything requiring court involvement to {Head of Legal}.

TEAM
Consult {Compliance Officer} on GDPR cases.
Consult {Corporate Law Expert} on M&A.
```

_This agent answers questions, checks documents, routes edge cases —
every day, without you. The model is interchangeable. Your Book is yours._

---

# "But Google and Microsoft have more data than you."

**Correct. That is exactly why you cannot use them.**

<div class="grid2">
<div>

Google's Gmail assistant will never be deployable on a government server.

Microsoft Copilot cannot be configured with rules like "never tell citizens their permit is approved without legal review."

No enterprise legal team will sign off on sending confidential contracts to OpenAI's servers.

**The bigger they get, the more enterprises fear giving them crown jewels.**

</div>
<div class="card">

**Our moat is not more data. It's the data they can never have.**

- ✅ On-prem deployment
- ✅ Explicit, auditable rules
- ✅ Your knowledge stays yours
- ✅ Version-controlled, reproducible agents
- ✅ No vendor lock-in on models

_We are the only solution a government legal team or compliance department can actually sign off on._

</div>
</div>

---

# This is not a chatbot. It's your best employee — cloned.

Your senior expert has 20 years of judgment. She's available 8 hours a day, 5 days a week.

**With Promptbook, her knowledge runs 24/7 — after she goes home, after she retires.**

<div class="grid3">
<div class="card">

**📬 Email agent**
Reads, classifies, drafts responses per your rules. Routes edge cases to humans.

</div>
<div class="card">

**⚖️ Compliance agent**
Checks documents against your policies. Flags violations. Never forgets a regulation.

</div>
<div class="card">

**🛠 Coding agent**
Watches your backlog. Writes code. Opens PRs. We ship 10× faster — without writing a line ourselves.

</div>
</div>

<br>

**The drudgery is automated. The creativity is yours.**
You design. You decide. You rule. The agents execute.

---

# We eat our own cooking.

We run Promptbook on Promptbook. This is not a metaphor.

- Our **coding agents** handle features from the backlog — we ship without writing code
- Our **documentation agent** watches every GitHub commit and updates our docs automatically
- **This pitch deck** was built once. An agent has been updating it as we ship. The slide you are reading may have been written by an agent.

<div class="quote">
We are not automating ourselves to produce more of the same.<br>
We are offloading the drudgery so we can focus on what matters.
</div>

_We are a 2-person team shipping at the pace of a 10-person team._
_That is the product demo._

---

<!-- _class: compact -->

# Traction

<div class="grid2">
<div>

<div class="stat">~$60K</div>
<div class="stat-label">ARR · early-stage, growing</div>

**Paying B2B clients in production:**

- Praha 13 municipality _(reference available)_
- Praha 7 municipality
- Slezská univerzita
- Národní pedagogický institut
- Chutoo

**Public sector is replicable.**
There are 6,258 municipalities in the Czech Republic alone.

</div>
<div>

<div class="stat">840</div>
<div class="stat-label">weekly downloads, @promptbook/core</div>

- 888 versions shipped
- Integrations: OpenAI, Claude, Gemini, DeepSeek, Ollama, Azure
- Open-source: 141 GitHub stars, active community
- Docker image, CLI, VSCode plugin

<div class="quote" style="font-size:0.85em;">
"Senior experts who are not programmers can build, deploy and use virtual assistants created from their own documentation."
<br>— Jakub Svoboda, Quality Manager, Praha 13
</div>

</div>
</div>

---

<!-- _class: compact -->

# Market

**Every organization with proprietary knowledge and compliance requirements is the market.**

<div class="grid2">
<div>

**Beachhead: Central European public sector**

- 6,258 Czech municipalities
- Proven with Praha 13, Praha 7
- Replicable template: citizen FAQ agents, document compliance, email routing
- Local procurement = lower competition from US giants

**Expansion: Enterprise B2B**

- Legal, compliance, HR — any team with documented processes
- On-prem requirement is a _qualifier_, not a blocker

</div>
<div>

| Layer                   | Who           | Size |
| ----------------------- | ------------- | ---- |
| AI agent platforms      | Developers    | $X B |
| Knowledge mgmt software | Enterprises   | $X B |
| Gov. digital services   | Public sector | $X B |

<br>

**Our angle:** We don't need the whole market.
We need to own the "on-prem, auditable, privately-hosted AI agent" segment.
The giants can't go there.

<br>

**Tailwind — EU policy is funding our wedge:**

- **€1.3B** in Digital Europe 2025–2027 for AI in public administration
- **€20B/year** EU AI investment target by 2030
- Public sector, healthcare, and defence are named priority sectors
- We already sell into one of them

</div>
</div>

---

<!-- _class: compact -->

# Business model

<div class="grid2">
<div>

| Tier           | Price        | Target                            |
| -------------- | ------------ | --------------------------------- |
| **Free**       | $0           | Developers, pilots                |
| **Pro**        | $499/yr      | SMB, up to 10 agents              |
| **Enterprise** | Custom       | Unlimited, on-prem, SLA           |
| **Municipal**  | Volume-based | Cities, scaled by document volume |

Revenue is **per-organization**, not per-seat.

**Current revenue mix:**

- SaaS subscriptions (target model)
- Paid consulting: _"AI dev pipeline automation"_
- It validated the product and seeded the early client base
- It is a bridge, not the destination

</div>
<div class="card">

**Why this compounds:**

One senior expert writes a Book → hundreds of colleagues use the agent.

Land with one department head. Expand across the institution.

The Creator fights to get us approved.
The Consumer just uses the result.

_Praha 13 started with one agent. They now run three._

</div>
</div>

---

<!-- _class: compact team-slide -->

# Team

<div class="team-lead">
We are a dedicated group of professionals committed to leveraging AI to transform businesses, with backgrounds in technology, research, and entrepreneurship.
</div>

<div class="team-layout">
<div class="team-figure">
<img class="team-portrait" src="../../images/jiri-jahn-transparent.png" alt="Jiří Jahn">
</div>

<div class="team-bio">
<div class="team-role">CEO | Jiří Jahn</div>
<div class="team-desc">
Ph.D. in Mathematics, former researcher at IT4I National Supercomputing Centre.<br>
Shipped production AI to Praha 13 municipality with zero sales team.
</div>
<div class="team-contact">
<div>jiri@ptbk.io</div>
<div>+420 777 090 067</div>
</div>
</div>

<div class="team-bio">
<div class="team-role">Pavol Hejný | CTO</div>
<div class="team-desc">
Top open-source contributor in CZE. Developer with 15+ years of experience.<br>
Built the Promptbook engine and the agent stack that runs the company.
</div>
<div class="team-contact">
<div>pavol@ptbk.io</div>
<div>+420 777 759 767</div>
</div>
</div>

<div class="team-figure">
<img class="team-portrait" src="../../images/pavol-hejny-transparent.png" alt="Pavol Hejný">
</div>
</div>

---

<!-- _class: compact -->

# Ask

**Raising: [AMOUNT] · [SAFE / Priced round]**

<div class="grid2">
<div>

**Use of funds — 18 months**

|                             |      |
| --------------------------- | ---- |
| First enterprise sales hire | ~40% |
| SOC2 / ISO certification    | ~20% |
| Core engineering            | ~30% |
| Municipal GTM (CZ/SK/EU)    | ~10% |

</div>
<div>

**Milestones**

- $[X]K MRR within 18 months
- 20+ municipal / enterprise clients
- SOC2 certified
- M365 + Notion integrations

</div>
</div>

**AI agents will run organizational knowledge work.**
**We are building the layer between raw models and real work.**

The giants own the models. We own the layer they cannot enter.

---

<!-- _class: cover -->

# Let's connect.

**Jiří Jahn — CEO**
jiri@ptbk.io · +420 777 090 067 · linkedin.com/in/jirkajahn/

**Pavol Hejný — CTO**
pavol@ptbk.io · +420 777 759 767 · linkedin.com/in/hejny/

**ptbk.io · github.com/webgptorg/promptbook**

<div style="display:flex;justify-content:center;margin:0.7em 0;"><div style="background:white;padding:10px;border-radius:10px;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://ptbk.io" alt="QR Code — ptbk.io" style="width:160px;height:160px;display:block;"></div></div>

_Reference available: Jakub Svoboda, Quality Manager, Praha 13 municipality_
