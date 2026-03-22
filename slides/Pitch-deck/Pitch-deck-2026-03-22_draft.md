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
      padding: 60px 80px;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 { font-size: 2.6em; font-weight: 800; color: #000; margin: 0 0 0.3em 0; line-height: 1.1; }
    h2 { font-size: 1.6em; font-weight: 700; color: #111; margin: 0 0 0.5em 0; }
    h3 { font-size: 1em; font-weight: 700; color: #555; margin: 0 0 0.3em 0; text-transform: uppercase; letter-spacing: 0.06em; }
    p, li { font-size: 1em; line-height: 1.55; margin: 0.3em 0; color: #222; }
    strong { color: #000; }
    ul { padding-left: 1.2em; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; margin-top: 0.6em; }
    .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: start; margin-top: 0.6em; }
    .card { background: #f5f5f5; border-radius: 8px; padding: 20px 24px; }
    .card-blue { background: #eef2ff; border-radius: 8px; padding: 20px 24px; }
    .big { font-size: 2em; font-weight: 800; line-height: 1.2; margin: 0.2em 0; }
    .stat { font-size: 2.4em; font-weight: 900; color: #0055ff; line-height: 1; }
    .stat-label { font-size: 0.82em; color: #666; margin-top: 4px; }
    .dim { color: #888; font-size: 0.82em; }
    .warn { color: #c00; font-size: 0.82em; }
    table { width: 100%; border-collapse: collapse; font-size: 0.88em; margin-top: 0.5em; }
    th { background: #f0f0f0; padding: 8px 14px; text-align: left; font-weight: 700; }
    td { padding: 8px 14px; border-bottom: 1px solid #eee; }
    section.cover { background: #000; color: #fff; }
    section.cover h1 { color: #fff; font-size: 3em; }
    section.cover p { color: #aaa; font-size: 1.05em; }
    section.cover strong { color: #fff; }
    .quote { border-left: 3px solid #0055ff; padding-left: 20px; margin: 0.8em 0; font-style: italic; color: #333; }
---

<!-- _class: cover -->

# Promptbook

**Your best employee. Cloned. Running 24/7. Knows everything about your company.**

Pavol Hejný (CTO) · Jiří Jahn (CEO)
22. March 2026

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

# Traction

<div class="grid2">
<div>

<div class="stat">~$60K</div>
<div class="stat-label">ARR · early-stage, growing</div>

<br>

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

<br>

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
Nobody is focusing there. The giants can't go there.

<br>

**Tailwind — EU policy is pushing money directly at us:**
The EU's Digital Europe Programme 2025–2027 allocates **€1.3B** explicitly for AI adoption in public administration. The EU Coordinated AI Plan targets **€20B/year** in combined AI investment by 2030. Public sector digitalisation, healthcare, and defence are the three explicitly named strategic priority sectors. We are already selling into one of them.

</div>
</div>

---

# Business model

<div class="grid2">
<div>

| Tier           | Price        | Target                            |
| -------------- | ------------ | --------------------------------- |
| **Free**       | $0           | Developers, pilots                |
| **Pro**        | $499/yr      | SMB, up to 10 agents              |
| **Enterprise** | Custom       | Unlimited, on-prem, SLA           |
| **Municipal**  | Volume-based | Cities, scaled by document volume |

<br>

Revenue is **per-organization**, not per-seat.

<br>

**Current revenue mix:**

- SaaS subscriptions (target model)
- Paid consulting: _"AI dev pipeline automation"_ — we sell our own methodology for shipping software 10× faster using agents. This is how we validated the product and built the early client base. It is a bridge, not the destination.

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

# Team

<div class="grid2">
<div class="card">

**Pavol Hejný — CTO**

Built the entire Promptbook engine solo. 888 versions shipped.
Open-source maintainer since day one.
Deep TypeScript / LLM runtime / distributed systems expertise.

_He built the product that runs our company.
We don't write code — our agents do._

</div>
<div class="card">

**Jiří Jahn — CEO**

Ph.D., HPC researcher — built systems processing millions of operations under strict performance constraints.
Applied that to AI agent orchestration.

Shipped production AI to Praha 13 municipality with zero sales team.
Jack of all trades in a world that requires exactly that at pre-seed.

</div>
</div>

<br>
<span class="dim">We are the people who needed this tool and it didn't exist. So we built it. Then we sold it to the government. That's the founding story.</span>

---

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

<br>

**The question is not whether AI agents will run most organizational knowledge work.**
**The question is who owns the layer between the raw models and the actual work.**

The giants own the models. We own the layer they cannot enter.

---

<!-- _class: cover -->

# Let's connect.

**Jiří Jahn — CEO**
jiri@ptbk.io · +420 777 090 067 · linkedin.com/in/jirkajahn/

**Pavol Hejný — CTO**
pavol@ptbk.io · +420 777 759 767 · linkedin.com/in/hejny/

**ptbk.io · github.com/webgptorg/promptbook**

<br>

_Reference available: Jakub Svoboda, Quality Manager, Praha 13 municipality_
