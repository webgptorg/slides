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
    section.cover li { color: #e2e8f0; line-height: 1.5; margin: 0.35em 0; }
    section.cover li::marker { color: #60a5fa; }
    section.cover ul { padding-left: 1.5em; margin-top: 0.6em; }
    .cover-split { display: flex; align-items: center; gap: 40px; margin-top: 0.9em; }
    .cover-split-main { flex: 1; }
    .cover-split-aside { flex: 0 0 auto; display: flex; align-items: center; }
    .cover-split-aside img { width: 152px; height: 152px; border-radius: 10px; border: 2px solid #1e3a8a; display: block; }
    .cover-desc { color: #60a5fa !important; font-size: 0.9em; margin: 0.45em 0 0.8em 0; line-height: 1.45; font-style: italic; }
    .cover-author { color: #475569; font-size: 0.82em; padding-top: 0.65em; border-top: 1px solid #1e293b; margin-top: 0.9em; }
    .cover-author strong { color: #94a3b8; }
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
    header { position: absolute; top: 16px; right: 36px; padding: 0; margin: 0; }
    header img { height: 40px; width: auto; filter: brightness(0) invert(1); }
---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<div class="tag">Barcamp Kolín · 23.5.2026</div>

# NEpoužívejte AI

<!--

https://www.barcampkolin.cz/2026/prednaska/71

NEpoužívejte AI - to radíme mnoha našim klientům. Sami ji však používáme pořád a všude. Vibe nebo Hype?
Požíváme AI na co se dá od jeho prvopočátku. Prošlapali jsme snad všechny slepé cesty, které si dovedeme představit a neradi vidíme, když jiní dělají stejné chyby.

Tahle přednáška bude trochu naruby, nebudeme ukazovat, jak to "podle nás" dělat dobře. Ukážeme si, kde nezkušené firmy (malé i velké) dělají z AI otravný buzzword, který nepomáhá a pak vám napovím, kde může skutečně pomáhat, ale málokdo ji tam zapřáhne.

-->

<div class="cover-split">
<div class="cover-split-main">

<p class="cover-desc">Pohled z praxe – kde AI firmám pomáhá a kde (zatím) škodí</p>

<div class="cover-author"><strong>Pavol Hejný</strong> · Promptbook</div>

</div>
<div class="cover-split-aside">

![QR kód](image.png)

</div>
</div>

---

# AI, Agenti, Vibe-coding? Hype-coding! AI Slop,... 🤯

Za poslední rok se z toho stalo buzzword. Všude.

<div class="grid2">
<div class="card-red">

**Jedni jsou iritovaní**

- Záplava slop-code na GitHubu
- Junioři, kteří neumí debuggovat vlastní kód
- Pull requesty, kterým nikdo nerozumí
- „Ale vždyť to napsal Cursor"

</div>
<div class="card-green">

**Druzí jsou fascinovaní**

- AI napíše celou feature za hodinu
- Prototyp za odpoledne
- „Proč bych psal boilerplate ručně?"
- 10× produktivita, tvrdí Twitter

</div>
</div>

<div class="big">Kdo má pravdu? Oba. A v tom je problém.</div>

---

<!-- _class: cover -->

# AI je nástroj, ne zázračný lék

---

<!-- _class: cover -->

# AI změní svět jak ho známe

---

<!-- _class: cover -->

# Asistenti na webu _(na úplně všechno)_

---

<!-- _class: cover -->

# Asistenti na telefonu

---

<!-- _class: cover -->

# 「 Nám AI nefunfuje... 」

- ...když vyšel ChatGPT, tak jsme ho zkusili a nefungoval nám, tak jsme ho přestali používat.

---

<!-- _class: cover -->

# 「 My AI nepoužíváme... 」

- ...ono je to stejně jen hype
- ...tokeny jsou hrozně drahé
- ...musíme řešit náš business, ne AI

---

<!-- _class: cover -->

# Vibecoding

---

<!-- _class: cover -->

# 「 My máme nějakou databázi? Co to je? 」

---

<!-- _class: cover -->

# 「 Co to je git? 」

---

<!-- _class: cover -->

# 「 My máme nějaké testy? 」

---

<!-- _class: cover -->

# 「 Super! Konečně můžeme dodat `10 568`. feature klientům. 」

---

<!-- _class: cover -->

# YOLO?!

---

<!-- _class: cover -->

# Just do it! Just fix it! Just ship it!

---

<!-- _class: cover -->

# 「 Ty ještě nepálíš $10k měsíčně na AI? Tak to jsi asi úplný noob! 」

- Já jedu 20 agentů parallně, to je 20× produktivita!
- Tak na to hodíme víc agenů a ono se to samo udělá!

---

<!-- _class: cover -->

# Nepoužíváme AI jako páku 

---

<!-- _class: cover -->

# AI Psychóza

---

<!-- _class: cover -->

# Řešíme modely a agenty nikoliv business, problém a kontext

---

<!-- _class: cover -->

# AI Slop aneb méně je více

---

<!-- _class: cover -->

# 「 Prompt injection? To nedává smysl řešit, protože to stejně na 100% nepokryju. 」

---

<!-- _class: cover -->

# Přecenujeme co bude za týden a hrubě podceníme co bude za 5 let

---

<!-- _class: cover -->

# Díky za pozornost!

<div class="cover-split">
<div class="cover-split-main">

<p class="cover-desc">Otázky? Najdete mě na LinkedIn nebo na promptbook.io</p>

<div class="cover-author"><strong>Pavol Hejný</strong> · Promptbook · webgptorg/promptbook</div>

</div>
<div class="cover-split-aside">

![QR kód](image.png)

</div>
</div>
