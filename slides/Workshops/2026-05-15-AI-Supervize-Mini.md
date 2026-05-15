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
    .stat { font-size: 1.9em; font-weight: 900; color: #0055ff; line-height: 1; }
    .stat-label { font-size: 0.76em; color: #667085; margin-top: 0.3em; line-height: 1.35; }
    .small { font-size: 0.8em; color: #667085; }
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
      color: #fff; font-size: 2.5em;
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
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
    header { position: absolute; top: 16px; right: 36px; padding: 0; margin: 0; }
    header img { height: 40px; width: auto; filter: brightness(0) invert(1); }
---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<div class="tag">Workshop · Praha · 15. května 2026</div>

# AI Supervize Mini

**Nechte AI pracovat za vás. Vy udáváte směr, AI řídí a naviguje.**

Hands-on den pro vývojáře a produkťáky, kteří chtějí stavět AI workflow systematicky v TypeScript / JavaScript produktu.

Pavol Hejný · Promptbook

---

# Jeden den, malá skupina, konkrétní workflow

<div class="grid2">
<div>

<div class="big">Nejde o další demo nástrojů. Jde o způsob práce, který přežije i po hype vlně.</div>

AI Supervize Mini je intenzivní workshop postavený na reálném vývoji:

- od nápadu a PRD
- přes issue, branch a práci agentů
- až po testy, review a kontrolovaný merge

</div>
<div class="card-blue">

**Formát**

| Co | Jak |
| --- | --- |
| Délka | 1 den, 9:30-17:00 |
| Skupina | max 10 účastníků |
| Zaměření | TypeScript / JavaScript produktový vývoj |
| Styl | hands-on, konkrétní workflow, dotazy nad vlastní praxí |
| Cena | 8 500 Kč za účastníka |

</div>
</div>

---

# Pro koho to je

<div class="grid2">
<div class="card-green">

## Ano

- pro vývojáře, tech leady a produkťáky
- pro týmy, které už AI používají a chtějí ji dostat pod kontrolu
- pro firmy, které chtějí menší změny, dohledatelné PR a méně regresí
- pro lidi, kteří chtějí řešit **workflow**, ne jen prompty

</div>
<div class="card-red">

## Ne tak úplně

- pokud čekáte „AI udělá všechno sama"
- pokud nechcete řešit testy, review a odpovědnost
- pokud hledáte čistě marketingový přehled AI trendů
- pokud je vám jedno, kam tečou data a kdo co mergeuje

</div>
</div>

<br>

**Cíl:** dostat se od nahodilého používání AI k procesu, který je rychlý, čitelný a bezpečný.

---

# Co během dne projdeme

<div class="grid3">
<div class="card-blue">

**Workflow pro AI vývoj**

Jak rozdělit práci od nápadu přes PRD, issue a branch až po kontrolovaný merge.

</div>
<div class="card-blue">

**Volba nástrojů a modelů**

Kdy použít Copilot, Codex, Claude Code, Cursor nebo jiný nástroj a kdy model změnit.

</div>
<div class="card-blue">

**Git, PR a review**

Jak držet změny malé, dohledatelné a kontrolovatelné i když velkou část píše AI.

</div>
<div class="card-blue">

**Testování a signály kvality**

Unit testy, e2e, typy v TypeScriptu a praktické kontrolní body proti regresím.

</div>
<div class="card-blue">

**Rizika a bezpečnost**

Jak brzy chytat chyby a jak nastavit hranice pro data, oprávnění a workflow.

</div>
<div class="card-blue">

**Code quality v době AI**

Jak poznat, že AI skutečně zrychluje produkt místo růstu technického dluhu.

</div>
</div>

---

# Workflow, které si odnesete

AI samo o sobě nestačí. Potřebujete řízený průchod změny systémem.

| Fáze | Otázka | Výstup |
| --- | --- | --- |
| 1. Záměr | Co přesně má vzniknout a proč? | krátké zadání / PRD |
| 2. Rozpad práce | Co má být samostatné, malé a review-friendly? | issue, scope, branch |
| 3. Exekuce s AI | Který nástroj a model je vhodný pro tento krok? | agent nebo coding tool |
| 4. Kontrola kvality | Co to může rozbít a jak to poznáme? | testy, typy, smoke checks |
| 5. Review | Je změna pochopitelná, bezpečná a dohledatelná? | malý PR s kontextem |
| 6. Merge | Co musí být splněno před nasazením? | kontrolovaný merge |

<div class="quote">
Největší posun nepřichází z lepšího promptu, ale z lepšího systému kolem modelu.
</div>

---

<!-- _class: compact -->

# Nástroje a modely: kdy co dává smysl

<div class="grid2">
<div>

**Na workshopu neřešíme „vítěze".**

Řešíme, jak nástroj zapadá do konkrétního kroku:

- rychlé generování a refaktoring
- práce nad repozitářem a review
- větší autonomní úkoly
- porovnání modelů podle ceny, rychlosti a kvality

</div>
<div class="card">

| Situace | Typicky dává smysl |
| --- | --- |
| drobná změna v editoru | Copilot / Cursor |
| větší úkol se zadáním | Codex / Claude Code |
| kontrola změn a PR | AI review + vlastní guardrails |
| nejistý výstup | změna modelu nebo rozpad na menší kroky |

</div>
</div>

<br>

**Pravidlo dne:** model je vyměnitelný, workflow musí být stabilní.

---

# Kvalita, rizika a guardrails

<div class="grid3">
<div class="card-red">

**Bez kontroly**

- velké nečitelné PR
- halucinované změny
- slepé spoléhání na AI

</div>
<div class="card-blue">

**Během workshopu**

- kontrolní body
- jasná odpovědnost
- malé kroky a review

</div>
<div class="card-green">

**Cílový stav**

- rychlejší delivery
- méně regresí
- lepší důvěra v proces

</div>
</div>

<br>

<div class="grid2">
<div>

**Budeme řešit hlavně:**

- kam tečou data
- kdo smí používat jaký nástroj
- jak rozpoznat podezřelý výstup
- kdy AI zastavit a vrátit práci člověku

</div>
<div class="card-blue">

**Signály kvality**

- typy v TypeScriptu
- unit a e2e testy
- čitelné commity a PR
- reprodukovatelný postup, ne jednorázový hack

</div>
</div>

---

# Harmonogram dne

Program držíme praktický a soustředěný: krátké rámování, dva hlavní bloky, obědová pauza a prostor na konkrétní situace účastníků.

| Čas | Blok | Obsah |
| --- | --- | --- |
| 9:30-10:00 | Obecné zahájení | očekávání, rámec dne, společné tempo |
| 10:00-12:30 | První blok | zadávání práce AI, rozpad úkolů, PRD, issue, kontrolované změny |
| 12:30-13:30 | Přestávka na oběd | pauza a reset |
| 13:30-16:00 | Druhý blok | testování, review, kvalita výstupu, rizika, nástroje a modely |
| 16:00-17:00 | Diskuse a další kroky | konkrétní situace účastníků, otevřené otázky, doporučené workflow |

---

# Co si přinést a připravit

<div class="grid2">
<div>

Největší hodnotu získáte, když přinesete reálný kontext.

- notebook a nabíječku
- funkční přístup k internetu
- editor nebo IDE, ve kterém běžně vyvíjíte
- přístup ke Gitu a AI nástrojům, které chcete řešit

</div>
<div class="card-blue">

**Ideální vstup**

- jeden konkrétní produktový, technický nebo procesní problém
- repozitář, ukázka workflow nebo anonymizovaný příklad
- místo, kde se dnes AI workflow zadrhává
- otázky k review, rizikům, modelům nebo organizaci práce

<div class="small">
Citlivý kód sdílet nemusíte. Workshop je použitelný i nad anonymizovanými ukázkami a veřejnými repozitáři.
</div>

</div>
</div>

---

# Praktické informace

<div class="grid3">
<div class="card">
<div class="stat">15. 5. 2026</div>
<div class="stat-label">celodenní workshop</div>
</div>
<div class="card">
<div class="stat">Praha</div>
<div class="stat-label">pravděpodobně Scott.Weber Workspace, The Flow Building, Václavské náměstí 47</div>
</div>
<div class="card">
<div class="stat">8 500 Kč</div>
<div class="stat-label">za účastníka, malá skupina a prostor na dotazy</div>
</div>
</div>

<br>

<div class="card-blue">

**Organizačně**

- doporučený příchod pár minut před 9:30
- přesnou místnost a případné upřesnění recepce posíláme e-mailem
- workshop je vhodný pro jednotlivce i firmy, které chtějí poslat svůj tým

</div>

---

# Workshop vede Pavol Hejný

<div class="grid2">
<div>

Pavol je developer s více než **15 lety praxe** a aktivní open-source contributor.

AI Supervizi staví na každodenní práci s:

- reálným vývojem
- code review
- toolingem a workflow
- kvalitou změn v produkčním prostředí

</div>
<div class="card-blue">

**Pointa workshopu**

Neukázat AI jako efektní demo.

Ukázat, jak o AI vývoji přemýšlet **systémově**:

- jak zadávat práci
- jak držet rizika pod kontrolou
- jak testovat a verzovat
- jak poznat, že AI pomáhá produktu místo růstu dluhu

</div>
</div>

---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<div class="tag">Registrace a dotazy</div>

# AI Supervize Mini

**Celý den hands-on. Malá skupina. Konkrétní workflow pro AI vývoj.**

ptbk.io/ai-supervize-mini  
pavol@ptbk.io
