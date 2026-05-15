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
      font-size: 1.2rem;
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
      font-size: 2.05em;
      font-weight: 800;
      color: #000;
      margin: 0 0 0.24em 0;
      line-height: 1.05;
      padding-bottom: 0.18em;
      border-bottom: 2px solid #f0f0f0;
    }
    h2 {
      font-size: 1.28em;
      font-weight: 700;
      color: #111;
      margin: 0 0 0.3em 0;
    }
    h3 {
      font-size: 0.82em;
      font-weight: 700;
      color: #0055ff;
      margin: 0 0 0.34em 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    p, li {
      font-size: 1em;
      line-height: 1.3;
      margin: 0.16em 0;
      color: #222;
    }
    strong { color: #000; }
    ul {
      padding-left: 1.08em;
      margin: 0.2em 0;
    }
    li::marker { color: #0055ff; }
    .grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      align-items: start;
      margin-top: 0.35em;
    }
    .grid3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      align-items: start;
      margin-top: 0.35em;
    }
    .card,
    .card-blue,
    .card-green,
    .card-red,
    .card-dark {
      border-radius: 12px;
      padding: 16px 18px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.07);
    }
    .card {
      background: #f7f8fa;
    }
    .card-blue {
      background: #eef2ff;
      border-top: 3px solid #0055ff;
      box-shadow: 0 1px 6px rgba(0,85,255,0.08);
    }
    .card-green {
      background: #ecfdf5;
      border-top: 3px solid #10b981;
      box-shadow: 0 1px 6px rgba(16,185,129,0.08);
    }
    .card-red {
      background: #fff5f5;
      border-top: 3px solid #e53e3e;
      box-shadow: 0 1px 6px rgba(229,62,62,0.08);
    }
    .card-dark {
      background: #0f172a;
      color: #e2e8f0;
      border-top: 3px solid #38bdf8;
      box-shadow: 0 1px 6px rgba(15,23,42,0.24);
    }
    .card-dark p, .card-dark li, .card-dark strong, .card-dark h3 {
      color: #e2e8f0;
    }
    .card-dark h3 { color: #7dd3fc; }
    .big {
      font-size: 1.36em;
      font-weight: 800;
      line-height: 1.16;
      margin: 0.45em 0 0.08em 0;
      color: #0055ff;
      background: #eef2ff;
      border-left: 4px solid #0055ff;
      border-radius: 8px;
      padding: 0.34em 0.72em;
    }
    .quote {
      border-left: 3px solid #0055ff;
      padding-left: 16px;
      margin: 0.45em 0;
      font-style: italic;
      color: #444;
    }
    .pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 0.45em;
    }
    .pill {
      display: inline-block;
      padding: 0.36em 0.72em;
      border-radius: 999px;
      background: #eef2ff;
      color: #0044cc;
      font-size: 0.84em;
      font-weight: 700;
    }
    .timeline {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 0.5em;
    }
    .step {
      background: #fff;
      border: 1px solid #e8edf2;
      border-left: 4px solid #0055ff;
      border-radius: 10px;
      padding: 14px 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .step strong {
      display: block;
      margin-bottom: 0.25em;
    }
    .two-line {
      font-size: 1.26em;
      font-weight: 750;
      line-height: 1.18;
      margin-top: 0.4em;
      color: #0f172a;
    }
    section.cover,
    section.section-cover,
    section.closing {
      background: #000;
      color: #fff;
    }
    section.cover::before,
    section.section-cover::before,
    section.closing::before {
      height: 5px;
      background: linear-gradient(90deg, #0055ff 0%, #38bdf8 100%);
    }
    section.cover,
    section.section-cover {
      justify-content: center;
    }
    section.cover h1,
    section.section-cover h1,
    section.closing h1 {
      color: #fff;
      font-size: 2.35em;
      border-bottom: none;
      padding-bottom: 0;
    }
    section.cover p,
    section.section-cover p,
    section.closing p {
      color: #cbd5e1;
    }
    section.cover strong,
    section.section-cover strong,
    section.closing strong {
      color: #fff;
    }
    .tag {
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
    .section-kicker {
      font-size: 0.78em;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #7dd3fc;
      font-weight: 700;
      margin-bottom: 0.7em;
    }
    .agenda-strip {
      margin-top: 1em;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    .agenda-strip > div {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-top: 3px solid #0055ff;
      border-radius: 14px;
      padding: 14px 16px;
    }
    .agenda-strip strong {
      display: block;
      margin-bottom: 0.22em;
    }
    section.compact {
      font-size: 1.08rem;
    }
    section.compact h1 {
      font-size: 1.88em;
      margin-bottom: 0.14em;
    }
    section.compact p,
    section.compact li {
      line-height: 1.22;
      margin: 0.12em 0;
    }
---

<!-- _class: cover -->

<div class="tag">AI Supervize Mini · Praha · 15. 5. 2026</div>

# AI workflow, které se dá řídit

**Celodenní workshop pro vývojáře a produkťáky**

Od zadání a rozpadu práce až po testy, review, rizika a zavedení do týmu.

<div class="pill-row">
  <span class="pill">První blok: workflow a zadávání práce AI</span>
  <span class="pill">Druhý blok: kvalita, review, nástroje a rizika</span>
</div>

---

# Rytmus dne

<div class="timeline">
  <div class="step">
    <strong>9:30–10:00</strong>
    Společný rámec dne, očekávání a výchozí situace účastníků.
  </div>
  <div class="step">
    <strong>10:00–12:30</strong>
    První blok: jak zadávat práci AI a držet změny pod kontrolou.
  </div>
  <div class="step">
    <strong>13:30–16:00</strong>
    Druhý blok: jak výstup kontrolovat, testovat a bezpečně rozhodovat.
  </div>
  <div class="step">
    <strong>16:00–17:00</strong>
    Diskuse nad vašimi situacemi, workflow blueprint a další kroky.
  </div>
</div>

<div class="quote">
Celý den je postavený jako pracovní dílna: málo teorie, hodně rozhodování, rozpadů úkolů a komentovaných situací.
</div>

---

# Jak budeme během dne pracovat

<div class="grid2">
<div class="card-blue">

### Formát

- krátké rámování
- jeden konkrétní princip
- společný rozbor
- převod do vlastní praxe

</div>
<div class="card-green">

### Cíl

- ne „co všechno AI umí"
- ale **jak ji řídit**
- jak poznat, že pomáhá
- a jak rychle zastavit špatný směr

</div>
</div>

<div class="big">Neřešíme showreel. Řešíme workflow, které obstojí i po desáté iteraci.</div>

---

<!-- _class: section-cover -->

<div class="section-kicker">První blok · 10:00–12:30</div>

# Jak zadávat práci AI a držet změny pod kontrolou

Od nápadu přes rozpad feature, kontext a issue až po malé změny, branch a feedback loop.

---

# Co se v prvním bloku učíme

<div class="grid3">
<div class="card">

### 1. Zadání

Jak převést vágní nápad na práci, kterou AI opravdu unese.

</div>
<div class="card">

### 2. Řízení

Kde být hands-on a kde naopak nechat AI pracovat samostatně.

</div>
<div class="card">

### 3. Tempo

Jak držet změny malé, čitelné a levné na opravu.

</div>
</div>

---

# Člověk není pisatel všeho. Je architekt směru.

<div class="grid2">
<div>

<div class="two-line">AI zrychluje psaní.<br>Člověk drží smysl, hranice a prioritu.</div>

<div class="pill-row">
  <span class="pill">směr</span>
  <span class="pill">rozhodnutí</span>
  <span class="pill">kontext</span>
  <span class="pill">schválení</span>
</div>

</div>
<div class="card-blue">

### Když se role pletou

- člověk promptuje bez systému
- AI skládá architekturu po kouskách
- review přichází příliš pozdě
- diff je velký, ale nikdo neví proč

</div>
</div>

---

# Od nápadu k merge

<div class="timeline">
  <div class="step">
    <strong>Nápad</strong>
    Co přesně se má změnit a proč to má hodnotu.
  </div>
  <div class="step">
    <strong>Rozpad</strong>
    Malé kroky, které se dají samostatně dodat a zkontrolovat.
  </div>
  <div class="step">
    <strong>Provedení</strong>
    AI pracuje v jasném kontextu a s limity.
  </div>
  <div class="step">
    <strong>Kontrola</strong>
    Testy, review, případně stop a návrat o krok zpět.
  </div>
</div>

<div class="quote">
Špatný výsledek často nezačíná špatným modelem. Začíná nejasným zadáním.
</div>

---

# Kde se AI workflow nejčastěji kazí

<div class="grid2">
<div class="card-red">

### Příliš vágní zadání

„Udělej onboarding lepší."

</div>
<div class="card-red">

### Příliš velký záběr

„Přepiš autentizaci, UI i analytics."

</div>
</div>

<div class="grid2">
<div class="card-red">

### Příliš málo kontextu

AI neví, co je kritické, co je zakázané a co se nesmí rozbít.

</div>
<div class="card-red">

### Příliš pozdní review

Problém objevíte až ve chvíli, kdy je diff drahý na pochopení.

</div>
</div>

---

# Zadání, které AI unese

<div class="grid2">
<div>

<div class="big">Dobré zadání není dlouhé. Je rozhodnuté.</div>

Musí být jasné:

- co se mění
- proč to děláme
- jak poznáme hotovo
- kde jsou hranice

</div>
<div class="card-green">

### Minimum, bez kterého nezačínat

- cíl změny
- acceptance criteria
- omezení a rizika
- odkazy na relevantní části produktu

</div>
</div>

---

# Každý task potřebuje tvar

<div class="grid3">
<div class="card">

### Kontext

Kde problém vzniká a koho se dotýká.

</div>
<div class="card-blue">

### Výsledek

Jaká změna má být po dokončení vidět.

</div>
<div class="card-green">

### Důkaz

Jak ověříme, že je výsledek správně.

</div>
</div>

<div class="quote">
Pokud neumíte vysvětlit task za minutu člověku, neumí ho dobře zpracovat ani AI.
</div>

---

# Kontext, který šetří iterace

<div class="grid2">
<div class="card-blue">

### Co AI typicky potřebuje

- relevantní soubory a moduly
- současné chování
- produktové omezení
- definici „co rozhodně ne"

</div>
<div class="card">

### Co do kontextu nepatří

- všechen obsah repozitáře
- neaktuální rozhodnutí
- duplicity
- detail, který nemá vliv na směr

</div>
</div>

---

# Rozpad práce na malé změny

<div class="grid2">
<div>

<div class="two-line">Malý task znamená malý diff.<br>Malý diff znamená levnější chybu.</div>

</div>
<div class="card-green">

### Praktické pravidlo

- jedna změna = jedna jasná odpověď
- nejdřív kostra, potom detail
- nejdřív bezpečné kroky, potom riskantní
- nejdřív vratitelné, potom nevratné

</div>
</div>

---

# Branch a commit strategie

<div class="grid3">
<div class="card">

### Branch per úkol

Jedna změna, jeden záměr, jedna stopa v historii.

</div>
<div class="card-blue">

### Commity po smyslu

Ne po minutách. Po logických krocích.

</div>
<div class="card-green">

### Main jako bezpečná větev

Bez experimentů, bez rozpracovaných polotovarů.

</div>
</div>

---

# Kdy nechat AI pracovat samostatně

<div class="grid2">
<div class="card-green">

### Ano

- jasně ohraničený task
- známé prostředí
- silný feedback loop
- nízké produktové riziko

</div>
<div class="card-red">

### Ne

- nejasné rozhodnutí
- vysoký dopad na architekturu
- neprobádaná část systému
- změna, kterou neumíme dobře vyhodnotit

</div>
</div>

---

# Kdy má člověk vstoupit do řízení

<div class="grid3">
<div class="card-blue">

### Předem

Když je potřeba určit hranice, prioritu a trade-off.

</div>
<div class="card-blue">

### V průběhu

Když AI tápe, rozšiřuje scope nebo zavádí zbytečnou složitost.

</div>
<div class="card-blue">

### Na konci

Když je potřeba potvrdit, že změna dává smysl i mimo kód.

</div>
</div>

---

# Feedback loop je skutečný motor kvality

<div class="grid2">
<div>

<div class="big">AI potřebuje rychlý signál, ne pozdní překvapení.</div>

</div>
<div class="card">

### Jak má vypadat zdravý loop

- malý krok
- okamžitá kontrola
- oprava nebo potvrzení
- teprve potom další krok

</div>
</div>

---

# Jak zastavit špatný směr včas

<div class="grid2">
<div class="card-red">

### Signály stop

- scope roste bez dohody
- objevují se nové abstrakce
- diff je těžký na přečtení
- ztrácíme jistotu, co je vlastně hotovo

</div>
<div class="card-green">

### Co udělat

- vrátit se k cíli
- zmenšit task
- doplnit kontext
- rozdělit rozhodnutí a provedení

</div>
</div>

---

# Produkt a vývoj musí být v jedné smyčce

<div class="grid2">
<div class="card-blue">

### Produkt přináší

hodnotu změny, prioritu, dopad na uživatele a hranice rozhodnutí

</div>
<div class="card-green">

### Vývoj přináší

proveditelnost, technická rizika, pořadí kroků a signály kvality

</div>
</div>

<div class="quote">
V AI workflow se rozhoduje častěji. Proto je důležité zkrátit vzdálenost mezi produktem a implementací.
</div>

---

# Cvičení: rozpad feature

<div class="grid2">
<div>

<div class="two-line">Vezmeme jednu reálnou feature a rozložíme ji na malé kroky, které může AI dodat bezpečně.</div>

</div>
<div class="card-dark">

### Co při cvičení sledujeme

- kde je první bezpečný krok
- co je už příliš velké
- kde chybí rozhodnutí
- jak by vypadal první task

</div>
</div>

---

# Cvičení: z vágního zadání na řiditelný task

<div class="grid2">
<div class="card-red">

### Start

„Ať je to chytřejší, rychlejší a víc AI."

</div>
<div class="card-green">

### Cíl

jasný problém, jasný výsledek, jasné omezení, jasný první krok

</div>
</div>

<div class="big">Největší zrychlení často nevzniká lepším promptem. Vzniká lepší formulací práce.</div>

---

# První blok v jedné větě

<div class="grid3">
<div class="card">

### Směr

Člověk drží cíl, hranice a prioritu.

</div>
<div class="card-blue">

### Tvar

Task musí být malý, rozhodnutý a kontrolovatelný.

</div>
<div class="card-green">

### Tempo

Postupujeme po malých změnách s rychlou zpětnou vazbou.

</div>
</div>

---

<!-- _class: section-cover -->

<div class="section-kicker">Druhý blok · 13:30–16:00</div>

# Jak kontrolovat kvalitu, vybírat nástroje a pracovat s riziky

Od testů a review přes volbu modelů až po data, oprávnění, incidenty a týmové workflow.

---

# Co se v druhém bloku učíme

<div class="grid3">
<div class="card">

### 1. Kvalita

Jak získat signály, že je změna opravdu bezpečná.

</div>
<div class="card">

### 2. Nástroje

Kdy sáhnout po jiném nástroji nebo modelu.

</div>
<div class="card">

### 3. Rizika

Jak nevyrobit rychlost za cenu chaosu a dluhu.

</div>
</div>

---

# Kvalita není pocit. Je to sada signálů.

<div class="grid2">
<div>

<div class="big">„Vypadá to dobře" nestačí.</div>

Potřebujeme více zdrojů jistoty najednou.

</div>
<div class="card-blue">

### Typické signály

- typy a statické kontroly
- unit a integrační testy
- e2e scénáře
- review diffu a chování

</div>
</div>

---

# Typy a statické kontroly

<div class="grid2">
<div class="card-green">

### Proč jsou silné

Vrací rychlou zpětnou vazbu, jsou levné a chytají velkou třídu chyb dřív, než začne review.

</div>
<div class="card">

### Proč nestačí

Nehlídají business logiku, UX rozhodnutí ani skutečné chování systému v toku uživatele.

</div>
</div>

---

# Unit testy jako guardrail

<div class="grid3">
<div class="card">

### Chování

Ověřují konkrétní očekávání na malé ploše.

</div>
<div class="card-blue">

### Edge cases

Nutí nás myslet na rohy, které AI ráda přeskočí.

</div>
<div class="card-green">

### Regrese

Chrání to, co už jednou fungovalo.

</div>
</div>

---

# Integrační a e2e testy

<div class="grid2">
<div class="card-blue">

### Co odhalí

- rozbitý tok mezi vrstvami
- špatné předpoklady o datech
- problém v reálném scénáři
- křehká místa, která unit test nevidí

</div>
<div class="card-green">

### Jak s nimi pracovat

- držet klíčové scénáře krátké
- nezkoušet pokrýt všechno
- mít několik kritických cest
- používat je jako pojistku před merge

</div>
</div>

---

# Review AI změn je jiný druh review

<div class="grid2">
<div>

<div class="two-line">Neptáme se jen „je to hezky napsané?"<br>Ptáme se „je to správné a nutné?"</div>

</div>
<div class="card">

### Těžiště review

- smysl změny
- pokrytí rizik
- zbytečná komplexita
- dopad na existující systém

</div>
</div>

---

# Co hledat v diffu

<div class="grid3">
<div class="card-red">

### Překvapení

Změny mimo domluvený scope.

</div>
<div class="card-red">

### Ornamenty

Abstrakce, které nepřinášejí hodnotu.

</div>
<div class="card-green">

### Důkaz

Signál, že změna obstojí i mimo demo.

</div>
</div>

---

# Volba nástroje podle typu práce

<div class="grid2">
<div class="card-blue">

### Rychlé explorace

Menší úkoly, orientace v kódu, první návrhy, lokální úpravy.

</div>
<div class="card-green">

### Delší řízená práce

Větší úkoly s kontextem, více kroků, opakované iterace a potřeba držet workflow.

</div>
</div>

<div class="quote">
Nástroj nevybíráme podle brandu. Vybíráme ho podle druhu rozhodnutí, délky úkolu a ceny chyby.
</div>

---

# Volba modelu podle rizika

<div class="grid3">
<div class="card">

### Levnější a rychlé

Když zkoumáme, třídíme a iterujeme.

</div>
<div class="card-blue">

### Silnější model

Když je potřeba hlubší uvažování nebo citlivé rozhodnutí.

</div>
<div class="card-green">

### Přepnutí

Když vidíme, že současný model naráží na strop.

</div>
</div>

---

# Kdy změnit nástroj nebo model

<div class="grid2">
<div class="card-red">

### Signály ke změně

- opakované stejné chyby
- povrchní reasoning
- ztráta kontextu
- neschopnost držet zadání

</div>
<div class="card-green">

### Signály, že stačí změnit zadání

- scope je moc široký
- chybí omezení
- není jasný důkaz hotova
- mícháme rozhodnutí a implementaci

</div>
</div>

---

# Data a oprávnění nejsou právní detail

<div class="grid2">
<div class="card-red">

### Riziko

Citlivý obsah teče do nástroje, který nemá správně nastavené hranice, retention ani přístupy.

</div>
<div class="card-blue">

### Princip

AI workflow musí respektovat stejné hranice jako zbytek systému: kdo smí co vidět, měnit a exportovat.

</div>
</div>

---

# Rizika v době AI vývoje

<div class="grid3">
<div class="card-red">

### Technická

regrese, neudržitelná abstrakce, skrytá závislost

</div>
<div class="card-red">

### Produktová

špatná priorita, falešné „hotovo", přehlédnutý dopad na uživatele

</div>
<div class="card-red">

### Procesní

velké diffy, nečitelná historie, žádný audit rozhodnutí

</div>
</div>

---

# Incidenty, rollback a návrat do bezpečí

<div class="grid2">
<div>

<div class="big">Když se něco pokazí, nechceme hrdinství. Chceme vratitelnost.</div>

</div>
<div class="card-green">

### Proto držíme

- malé změny
- samostatné branche
- jasné commity
- rychlý rollback

</div>
</div>

---

# Co měřit, aby AI pomáhala produktu

<div class="grid2">
<div class="card-blue">

### Rychlost

čas od zadání k review, velikost diffu, počet iterací na dodání

</div>
<div class="card-green">

### Kvalita

regrese, rework po review, incidenty, důvěra týmu ve výstup

</div>
</div>

<div class="quote">
Pokud roste jen rychlost, ale ne čitelnost a jistota, nekupujete produktivitu. Kupujete budoucí dluh.
</div>

---

# Jak to zavádět do týmu

<div class="timeline">
  <div class="step">
    <strong>Pilot</strong>
    Jeden tým, jeden typ úkolu, jeden jasný cíl.
  </div>
  <div class="step">
    <strong>Pravidla</strong>
    Společný jazyk pro tasky, review a stop signály.
  </div>
  <div class="step">
    <strong>Signály</strong>
    Co měříme, co považujeme za bezpečné a kdy eskalujeme.
  </div>
  <div class="step">
    <strong>Škálování</strong>
    Rozšiřujeme až to, co už umíme řídit.
  </div>
</div>

---

# Cvičení: review a rozhodnutí

<div class="grid2">
<div class="card-dark">

### Společně projdeme situaci

Je změna připravená na merge, nebo potřebuje další krok?

</div>
<div class="card">

### Sledujeme

- dostatečný důkaz kvality
- skryté riziko v diffu
- správnost zvoleného nástroje
- vhodný další krok

</div>
</div>

---

# Vlastní workflow blueprint

<div class="grid3">
<div class="card">

### Co zadávám AI

Jaké typy úkolů jí dávají smysl už zítra.

</div>
<div class="card-blue">

### Co chráním

Kde potřebuji silnější kontrolu, review a guardrails.

</div>
<div class="card-green">

### Co měním

Jak bude odteď vypadat jeden zdravý pracovní cyklus.

</div>
</div>

---

# Druhý blok v jedné větě

<div class="grid3">
<div class="card">

### Kvalita

Potřebuje více signálů než jen „funguje to u mě".

</div>
<div class="card-blue">

### Nástroje

Volíme podle druhu práce, ne podle popularity.

</div>
<div class="card-green">

### Rizika

Neodstraňujeme je slibem. Řídíme je workflow.

</div>
</div>

---

<!-- _class: closing -->

# Diskuse, dotazy a přenos do praxe

Přineste vlastní situaci:

- kde se vám AI workflow dnes láme
- kde je největší tření mezi rychlostí a kvalitou
- který jeden krok chcete po dnešku změnit jako první

<div class="pill-row">
  <span class="pill">vlastní repozitář</span>
  <span class="pill">vlastní issue</span>
  <span class="pill">vlastní workflow</span>
</div>
