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
    ul, ol { padding-left: 1.1em; margin: 0.2em 0; }
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
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
---

<!-- _class: cover -->

<div class="tag">Workshop · AI Supervize Mini</div>

# Jak řídit AI vývoj v praxi

**První blok, druhý blok a konkrétní workflow celého dne**

Pavol Hejný

---

# Co je cílem dne

Ne pitch. **Praktický způsob, jak dostat AI do každodenního vývoje tak, aby zrychlovala a zároveň nezvyšovala chaos.**

<div class="grid3">
<div class="card-blue">

**Workflow**

Od nápadu přes PRD, issue a branch až po merge.

</div>
<div class="card-blue">

**Kvalita**

Testy, review, typy, signály rizika a kontrolní body.

</div>
<div class="card-blue">

**Rozhodování**

Kdy změnit nástroj, model, zadání nebo velikost tasku.

</div>
</div>

<br>

**Formát:** malá skupina, hands-on práce, konkrétní situace účastníků.

---

# Jak vypadá celý workshop

| Čas | Blok | Co se děje |
| --- | --- | --- |
| 9:30-10:00 | Zahájení | Kontext, očekávání, společný rámec dne |
| 10:00-12:30 | První blok | Zadávání práce AI, rozpad úkolů, PRD, issue, kontrolované změny |
| 12:30-13:30 | Pauza | Oběd a reset |
| 13:30-16:00 | Druhý blok | Testování, review, kvalita výstupu, rizika, nástroje a modely |
| 16:00-17:00 | Diskuse | Vaše workflow, dotazy, další kroky po workshopu |

<div class="quote">
Program drží jasný rytmus: krátké rámování, dva hlavní bloky a dost prostoru pro konkrétní problémy z praxe.
</div>

---

# První blok: Jak zadávat práci AI

<div class="grid2">
<div>

První část není o tom, **co AI umí**, ale **jak jí dát práci tak, aby byla dohledatelná a kontrolovatelná**.

**Řešíme hlavně:**

- rozpad nápadu na malé změny
- převod požadavku do PRD nebo issue
- jak napsat dobré zadání pro agenta
- jak držet změnu malou, čitelnou a reverzibilní
- kdy je lepší úkol rozdělit místo "dopsat víc promptu"

</div>
<div class="card-blue">

**Výstup prvního bloku**

1. Umíte vzít feature a rozpadnout ji na zvládnutelné tasky.
2. Každý task má cíl, omezení a acceptance criteria.
3. AI nepracuje "na hulváta v mainu", ale v řízeném git workflow.

</div>
</div>

---

# Workflow prvního bloku

<div class="grid3">
<div class="card">

### 1. Záměr

Co má změna přinést produktu a co se nesmí rozbít.

</div>
<div class="card">

### 2. PRD / issue

Jasné zadání, scope, edge cases, hotovo poznáme podle kriterií.

</div>
<div class="card">

### 3. Branch

Jedna věc, jedna větev, malý diff, žádný mix několika témat.

</div>
</div>

<br>

<div class="grid3">
<div class="card">

### 4. Agent

AI píše kód, testy a průběžně reportuje, co změnila.

</div>
<div class="card">

### 5. PR

Změna je dohledatelná, reviewovatelná a připravená na kontrolu.

</div>
<div class="card">

### 6. Merge

Až po splnění signálů kvality, ne po "vypadá to dobře".

</div>
</div>

---

# Jak vypadá dobré zadání pro AI

<div class="grid2">
<div>

```markdown
## Feature
Export prezentace do PDF

## Cíl
Uživatel může stáhnout PDF bez rozbití HTML exportu.

## Acceptance criteria
- funguje pro 50+ slidů
- export trvá pod 10 s
- stávající HTML export zůstane beze změny

## Omezení
- TypeScript only
- přidej testy
- změny drž v jednom PR
```

</div>
<div>

**Co dělá zadání použitelným:**

- jasný produktový cíl
- explicitní omezení
- kontrolovatelný výsledek
- zmíněné rizikové body
- scope, který jde udělat v jednom menším kroku

<div class="quote">
Čím lépe popíšete hotový stav, tím méně budete později debugovat špatně pochopený záměr.
</div>

</div>
</div>

---

# Druhý blok: Kvalita, review a rizika

<div class="grid2">
<div class="card-green">

**Co je cílem**

Zabránit tomu, aby AI sice zrychlila psaní kódu, ale zpomalila tým v review, regresích a údržbě.

</div>
<div>

**Řešíme hlavně:**

- co musí projít testy a co nechat na člověku
- jak reviewovat AI kód jinak než lidský kód
- jak poznat risk dřív než po mergi
- které nástroje a modely dávají smysl pro různé typy práce
- kdy agentovi věřit méně a zadání zpřesnit

</div>
</div>

---

<!-- _class: compact -->

# Signály kvality, které hlídáme

<div class="grid2">
<div>

**Automatické signály**

- lint a type-check
- unit testy
- integrační nebo e2e testy tam, kde dávají smysl
- velikost diffu a počet dotčených souborů
- error logy a návrat k opravě

</div>
<div class="card-blue">

**Lidské signály**

- dává změna smysl z business pohledu?
- nejsou testy jen "na zelenou"?
- nepřidal agent zbytečnou abstrakci?
- je návrh udržitelný i za 3 měsíce?
- je změna pořád tak malá, aby se dala bezpečně schválit?

</div>
</div>

<br>

<div class="big">
Zelený build není cíl. Je to teprve vstupenka do review.
</div>

---

# Code review AI výstupu

<div class="grid2">
<div class="card-red">

## Špatný review pattern

- čteme vše řádek po řádku bez priority
- řešíme formátování místo rizik
- necháme se uklidnit tím, že "to napsal nástroj"
- schválíme velký PR, protože nechceme brzdit

</div>
<div class="card-green">

## Lepší review pattern

- začínáme cílem změny a dopadem
- kontrolujeme testy, edge cases a scope
- vracíme velké změny zpět na menší části
- používáme PR jako gate, ne jako formalitu

</div>
</div>

<br>

**Review AI kódu není o stylistice. Je o správnosti, riziku a udržitelnosti.**

---

# Nástroje a modely: jak se rozhodovat

| Situace | Důležitější než značka nástroje je | Typická otázka |
| --- | --- | --- |
| Menší feature | kvalita zadání a malý scope | Je task dost malý na jeden průchod? |
| Refactor | dobrý kontext a testy předem | Poznám, co se rozbilo? |
| Debugging | kvalitní error logy a reprodukce | Má agent z čeho vycházet? |
| Review | dobrý diff a jasný cíl PR | Co vlastně schvalujeme? |
| Citlivá data | pravidla a oprávnění | Co do nástroje vůbec smí téct? |

<div class="quote">
Workshop neučí "jeden správný editor". Učí, podle čeho poznat, že pro danou práci měníte nástroj nebo model z dobrého důvodu.
</div>

---

# Co si účastníci mají přinést

<div class="grid2">
<div>

- notebook a nabíječku
- editor nebo IDE, ve kterém běžně pracují
- přístup ke Gitu a k AI nástrojům, které chtějí řešit
- jeden konkrétní problém z vlastní praxe
- repozitář, ukázkové issue nebo anonymizovanou situaci

</div>
<div class="card">

**Nemusíte sdílet citlivý kód.**

Stačí reálný kontext:

- kde se dnes workflow zasekává
- jak vznikají zbytečně velké změny
- kde review bolí
- kde si nejste jistí volbou nástroje nebo modelu

</div>
</div>

---

# Co si mají odnést po dni

<div class="grid3">
<div class="card-blue">

**Praktický workflow**

Jak vést změnu od nápadu po merge bez chaosu.

</div>
<div class="card-blue">

**Kontrolní body**

Co musí být splněno, než AI výstup pustíte dál.

</div>
<div class="card-blue">

**Lepší rozhodování**

Kdy měnit zadání, nástroj, model nebo velikost tasku.

</div>
</div>

<br>

<div class="big">
Smysl workshopu je jednoduchý: aby AI nezrychlovala jen psaní kódu, ale celý vývojový proces.
</div>

---

<!-- _class: cover -->

# AI Supervize Mini

**Jednodenní hands-on workshop o workflow, kvalitě a řízení AI vývoje**

Praha · 9:30-17:00
