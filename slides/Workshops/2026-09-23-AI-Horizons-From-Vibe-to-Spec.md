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
    .flow {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 1.28em;
      font-weight: 700;
      line-height: 1.55;
      letter-spacing: -0.02em;
      margin-top: 0.45em;
    }
    .muted { color: #64748b; }
    .label {
      display: inline-block;
      font-size: 0.63em;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #0055ff;
      margin-bottom: 0.45em;
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
    section.cover h2 { color: #e2e8f0; }
    section.cover p { color: #94a3b8; font-size: 1em; }
    section.cover strong { color: #fff; }
    section.cover code { background: #172554; color: #93c5fd; }
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
    section.cover .label { color: #60a5fa; }
    section.cover .flow { color: #e2e8f0; }
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

<div class="tag">AI Horizons · 23.9.2026</div>

# From [HV]ibe to Spec

<div class="cover-split">
<div class="cover-split-main">

<p class="cover-desc">Aneb proč má dobré zadání cenu zlata, zatímco cena samotného kódu míří k nule.</p>

<div class="cover-author"><strong>Pavol Hejný</strong> · Promptbook</div>

</div>
<div class="cover-split-aside">

Network name: AIHorizons  
Password: Prague2026

</div>
</div>

---

<div style="display:flex; justify-content:center; align-items:center; height:100%;">
  <img src="../../images/2026-09-23-from-vibe-to-spec-repo-towers.svg" alt="From Vibe to Spec illustration" style="width: 88%; max-height: 82vh; object-fit: contain;">
</div>

<!-- INTRO: PROBLÉM -->

---

<!-- _class: cover -->

# Čím déle projekt žije, tím víc stojí každá další změna.

---

<!-- _class: cover -->

<div class="label">Hackathon / Vibe coding</div>

# `24 hodin` → fungující appka

A ten moment je **opravdu wow**.

---

<!-- _class: cover -->

<div class="label">O pár let později</div>

# `1 tlačítko` → půl roku

A několik lidí, několik meetingů a několik milionů.

---

<!-- _class: cover -->

# Mezi těmito dvěma slidy je hlavně **historie**.

---

# Architektura má zpožděný feedback

<div class="grid2">
<div class="card-green">

### Na začátku

**Skoro všechno funguje.**

Projekt je malý, vazeb je málo a špatná rozhodnutí ještě nejsou vidět.

</div>
<div class="card-red">

### Později

**Každá změna něco rozbije.**

Rozhodnutí z prvních dnů mezitím prorostla celým systémem.

</div>
</div>

---

<!-- _class: cover -->

# Pozdější fixy jsou drahé.

Špatný základ je levný jenom **jednou**.

---

<!-- _class: cover -->

# AI tenhle problém neodstranila.

## AI ho umí **brutálně zrychlit**.

---

# A přidala druhou časovou osu

<div class="grid2">
<div class="card-red">

### Projekt

Čím je starší, tím je změna obvykle **dražší**.

<div class="flow">čas → ↑ složitost</div>

</div>
<div class="card-green">

### Modely

Čím jdeme dál, tím máme k dispozici **silnější nástroje**.

<div class="flow">čas → ↑ schopnosti</div>

</div>
</div>

<div class="big">Tyhle dvě osy jdou proti sobě.</div>

---

<!-- _class: cover -->

# Projekt stárne. Modely mládnou.

Dnešní model by možná stejný základ postavil lépe než model, který jsme měli před půl rokem.

---

<!-- _class: cover -->

# Někdy je levnější repo zahodit než ho dál opravovat.

**Pokud dokážeme zachovat to, co je na něm hodnotné.**

<!-- INTRO: ZRNO A PLEVY -->

---

# Co je na staré appce skutečně hodnotné?

<div class="grid2">
<div class="card-blue">

### Hodnota

- business pravidla
- chování produktu
- data
- doménové know-how
- rozhodnutí, která se osvědčila

</div>
<div class="card">

### Není nutně hodnota

- konkrétní struktura souborů
- historické workaroundy
- náhodná komplexita
- boilerplate
- kód jen proto, že už existuje

</div>
</div>

---

<!-- _class: cover -->

# Hodnota ≠ kód

Legacy systém je často **hodnota promíchaná s balastem**.

---

<!-- _class: cover -->

# Jedna z nejcennějších schopností inteligence je **sumarizace**.

Oddělit **zrno od plev**.

---

<!-- _class: cover -->

# Co kdybychom zrno od plev oddělovali už **od začátku**?

<!-- INTRO: SPEC JAKO SOURCE OF TRUTH -->

---

# Co je source of truth?

<div class="grid2">
<div class="card-red">

### Dnes často

# Repo

„Takhle to nějak funguje. Podívej se do kódu.“

</div>
<div class="card-green">

### From Vibe to Spec

# Specifikace

„Takhle se to má chovat. Implementaci můžeme vyměnit.“

</div>
</div>

---

<!-- _class: cover -->

# Specifikace = produktová paměť

## Kód = jedna konkrétní implementace

---

# Tohle není první abstrakční posun

<div class="flow">
machine code → assembler → C → frameworky → deklarativní systémy → …
</div>

<div class="big">Další vrstva může být: <strong>spec → generovaná implementace</strong></div>

---

<!-- _class: cover -->

# Kód už dávno „generujeme“.

Cílem není vlastnit každý řádek assembleru.  
Cílem je vlastnit **správnou abstrakci nad ním**.

<!-- INTRO: LIDÉ + AI -->

---

# Dva světy AI vývoje

<div class="grid2">
<div class="card-blue">

### Zkušený vývojář

Umí posoudit architekturu a kvalitu.

Ale často stále bere **kód jako hlavní artefakt** a reviewuje ho řádek po řádku.

</div>
<div class="card-green">

### Vibe coder

Umí neuvěřitelně rychle vyrobit funkční výsledek.

Ale nemusí umět poznat, **co se pokazilo pod povrchem**.

</div>
</div>

<div class="big">Potřebujeme spojit rychlost jednoho se zkušeností druhého.</div>

---

<!-- _class: cover -->

<div class="label">Nejhorší ekonomika AI</div>

# AI pracuje pár minut.

## Senior pak dvě hodiny reviewuje její výstup.

---

<!-- _class: cover -->

<div class="label">Lepší ekonomika AI</div>

# Senior pracuje krátce na zadání a pravidlech.

## AI pak může pracovat dlouho na implementaci.

---

<!-- _class: cover -->

# Přesuňme review **o vrstvu výš**.

Nejdřív reviewujeme **záměr, pravidla a acceptance**.  
Ne `20 000` řádků vygenerovaného diffu.

---

<!-- _class: cover -->

# Ale spec se nesmí stát novým AI slopem.

AI může pomoct draftovat.  
**Člověk musí rozhodovat, co je důležité.**

---

<!-- _class: cover -->

# Kód zlevňuje. Specifikace zdražuje.

Tohle je celý **From Vibe to Spec**.

<!-- LIVE CODING -->

---

<!-- _class: cover -->

<div class="tag">Live coding</div>

# Dost slidů. Jdeme stavět.

---

<!-- _class: cover -->

<div class="label">0 · Distill</div>

# Co je na tomhle projektu skutečně hodnotné?

Business. Chování. Data. Omezení. Rozhodnutí.

---

<!-- _class: cover -->

<div class="label">1 · Spec</div>

# Sepíšeme **co a proč**.

`spec.md`

---

<!-- _class: cover -->

<div class="label">2 · Acceptance</div>

# Jak objektivně poznáme, že je hotovo?

`acceptance.md`

---

<!-- _class: cover -->

<div class="label">3 · Guardrails</div>

# Co AI nesmí změnit ani „vylepšit“?

Pravidla · invariants · architektura · hranice systému

---

<!-- _class: cover -->

<div class="label">4 · Plan</div>

# Plán je **odvozený artefakt**.

`plan.md` můžeme zahodit a vytvořit znovu.

---

<!-- _class: cover -->

<div class="label">5 · Build</div>

# Necháme agenta dělat to, v čem je levný.

Implementovat. Zkoušet. Opravovat. Opakovat.

---

<!-- _class: cover -->

<div class="label">6 · Verify</div>

# Neptáme se „líbí se mi ten diff?“

Ptáme se: **splňuje implementace spec a acceptance?**

---

<!-- _class: cover -->

<div class="label">7 · Regenerate</div>

# Když je implementace špatná, nemusíme ji zachraňovat.

Spec zůstává.  
Kód můžeme udělat znovu.

---

<!-- _class: cover -->

<div class="label">8 · Iterate</div>

# Každá změna začíná ve specifikaci.

<div class="flow">SPEC → PLAN → BUILD → VERIFY → SPEC</div>

<!-- WRAP-UP -->

---

# Hierarchie toho, co chráníme

<div class="grid2">
<div class="card-green">

### Hýčkáme

1. **Záměr / spec**
2. **Acceptance / pravidla**

Lidsky čitelné. Kurátorované. Stabilní.

</div>
<div class="card-blue">

### Regenerujeme

3. **Plan**
4. **Implementation**

Odvozené. Levnější. Nahraditelné.

</div>
</div>

---

<!-- _class: cover -->

# Lidský seniorní čas je drahý.

## AI čas bude čím dál levnější.

---

<!-- _class: cover -->

# Neoptimalizujme počet napsaných řádků.

## Optimalizujme množství **lidské pozornosti**, kterou systém potřebuje.

---

<!-- _class: cover -->

# Kód zlevňuje.

# Specifikace zdražuje.

---

<!-- _class: cover -->

# Díky za pozornost!

<div class="cover-split">
<div class="cover-split-main">

<div class="cover-author"><strong>Pavol Hejný</strong> · Promptbook</div>

</div>
<div class="cover-split-aside">

![QR kód](https://uhxrtukoehjtukzd.public.blob.vercel-storage.com/ptbk-agents/user/files/qr-MSYN7P1NdAbQfuk6dC0OCwwwUQiVTk.png)

</div>
</div>
