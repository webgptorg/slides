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
<!-- _header: '<img src=\"https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png\" alt=\"Promptbook\">' -->

# Promptbook

**Your best employee. Cloned. Running 24/7. Knows everything about your company.**

Pavol Hejný (CTO) · Jiří Jahn (CEO) 27. March 2026

---

# Nobody sits at a chatbot waiting for responses.

Real work doesn't happen in a chat window.

It happens in the background - emails answered, documents checked, code shipped, decisions made - **while you're doing something else.**

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
Promptbook runs them as **persistent, autonomous agents** - no babysitting.

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

_This agent answers questions, checks documents, routes edge cases -
every day, without you. The model is interchangeable. Your Book is yours._

---

# "But Google and Microsoft have more data than you."

**Correct. That is exactly why you cannot use them.**

<div class="grid2">
<div>

Google's Gmail assistant will never be deployable on a government server.

Microsoft Copilot cannot be configured with rules like "never tell citizens their permit is approved without legal review."
