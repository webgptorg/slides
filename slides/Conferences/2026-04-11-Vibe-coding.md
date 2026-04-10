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
    section.compact { font-size: 1.1rem; }
    section.compact h1 { font-size: 1.9em; margin-bottom: 0.15em; }
    section.compact p, section.compact li { line-height: 1.22; margin: 0.12em 0; }
    section.compact pre { font-size: 0.54em; }
    header { position: absolute; top: 16px; right: 36px; padding: 0; margin: 0; }
    header img { height: 40px; width: auto; filter: brightness(0) invert(1); }
---

<!-- _class: cover -->
<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<div class="tag">Barcamp · 11. dubna 2026</div>

# Vibe-coding / Hype-coding

**Za 2 měsíce víc features než za 2 roky. Bez psaní kódu.**

Pavol Hejný · Promptbook

---

# Vibe coding, vibe coding, vibe coding.

Za poslední rok se z toho stalo buzzword. Všude.

<div class="grid2">
<div>

**Jedni jsou iritovaní**

- Záplava slop-code na GitHubu
- Junioři, kteří neumí debuggovat vlastní kód
- Pull requesty, kterým nikdo nerozumí
- „Ale vždyť to napsal Cursor"

</div>
<div>

**Druzí jsou fascinovaní**

- AI napíše celou feature za hodinu
- Prototyp za odpoledne
- „Proč bych psal boilerplate ručně?"
- 10× produktivita, tvrdí Twitter

</div>
</div>

<br>

**Kdo má pravdu? Oba. A v tom je problém.**

---

# Naše čísla

<div class="grid2">
<div>

<div class="big">Za 2 měsíce víc hodnotných features než za 2 roky.</div>

A nenapsali jsme téměř **řádek kódu**.

Není to magie. Je to process.

</div>
<div class="card-blue">

**Co se změnilo?**

| Před                | Teď                               |
| ------------------- | --------------------------------- |
| Píšeme kód ručně    | Agenti píšou, my řídíme           |
| Review = čtení kódu | Review = kontrola výstupu + testy |
| 1 feature / týden   | Několik features / den            |
| Bottleneck = psaní  | Bottleneck = rozhodování          |

</div>
</div>

---

# Hype-coding vs. Vibe-coding

Ne všechno, co se tváří jako AI coding, funguje.

<div class="grid2">
<div class="card-red">

## ❌ Hype-coding

- „Řeknu AI, ať to napíše, a pushnu"
- Žádné testy, žádné review
- Prompt → code → production
- Funguje na demu, padá v produkci
- **Výsledek:** technický dluh × 10

</div>
<div class="card-green">

## ✅ Vibe-coding

- AI píše, člověk řídí a kontroluje
- PRD → agent → testy → review → merge
- Jasná pravidla, jasné guardrails
- Funguje v produkci, škáluje se
- **Výsledek:** 10× produktivita

</div>
</div>

---

# Technika #1: PRD-first development

Nepíšete kód. **Píšete zadání.**

<div class="grid2">
<div>

Každá feature začíná jako **Product Requirements Document**:

- Co má feature dělat
- Jaké jsou edge cases
- Jaké jsou acceptance criteria
- Co se nesmí rozbít

Agent dostane PRD a pracuje **autonomně**.

</div>
<div class="card">

```markdown
## Feature: Export do PDF

### Cíl

Uživatel může exportovat prezentaci do PDF.

### Acceptance criteria

- PDF obsahuje všechny slidy
- Funguje na prezentacích s 50+ slidy
- Export trvá < 10s

### Omezení

- Nesmí rozbít stávající HTML export
```

</div>
</div>

---

# Technika #2: Git jako záchranná síť

**Každá změna od agenta jde přes PR.** Bez výjimky.

<div class="grid3">
<div class="card">

**Branch per feature**
Agent pracuje na vlastní větvi. Main je vždy čistý.

</div>
<div class="card">

**Atomic commits**
Malé, popsané commity. Dají se revertovat jednotlivě.

</div>
<div class="card">

**PR = review gate**
Žádný kód nejde do main bez lidského schválení.

</div>
</div>

<br>

<div class="quote">
Git není jen verzování. Je to vaše pojistka proti špatnému AI výstupu.
</div>

---

# Technika #3: Automatické testy

Testy nepíšete proto, že jste pečliví. **Píšete je proto, že agent potřebuje feedback loop.**

<div class="grid2">
<div>

- Agent napíše kód **a testy zároveň**
- CI pipeline běží na každém commitu
- Červený build = agent to musí opravit
- Zelený build = review může začít

**Bez testů je AI coding ruská ruleta.**

</div>
<div class="card-blue">

**Naše CI pipeline:**

1. Agent pushne kód
2. Lint + type-check
3. Unit testy
4. Integration testy
5. ✅ Zelená → PR ready for review
6. ❌ Červená → agent dostane error log a opravuje

</div>
</div>

---

# Technika #4: Pravidla pro agenty

Agent bez pravidel je junior bez mentora. **Dáte mu kontext, dostanete kvalitu.**

<div class="grid2">
<div>

```markdown
# .instructions.md

## Coding standards

- TypeScript only, strict mode
- No any types
- All public functions must have JSDoc
- Max file length: 300 lines

## Architecture

- Prefer composition over inheritance
- Use dependency injection
- No circular imports
```

</div>
<div>

```markdown
## Testing

- Every feature needs unit tests
- Test edge cases explicitly
- Mock external dependencies

## Git

- Conventional commits
- One feature per branch
- Squash before merge

## Forbidden

- No console.log in production
- No hardcoded secrets
- No direct DOM manipulation
```

</div>
</div>

---

<!-- _class: compact -->

# Technika #5: Code review agentího kódu

Review AI kódu je **jiné** než review lidského kódu.

<div class="grid2">
<div>

**Na co se díváte:**

- Dává to smysl z business pohledu?
- Jsou testy smysluplné, nebo jen „pro zelenou"?
- Nezavedl agent zbytečnou abstrakci?
- Jsou edge cases pokryté?
- Neporušil pravidla z `.instructions.md`?

</div>
<div>

**Na co se nedíváte:**

- Formátování (to řeší linter)
- Naming conventions (to řeší pravidla)
- Import order (to řeší tooling)

<div class="quote">
Neřešíte jak to vypadá. Řešíte jestli to funguje a jestli to dává smysl.
</div>

</div>
</div>

---

# Technika #6: Prioritizace požadavků

Nedávejte agentovi všechno najednou. **Dávejte mu jednu věc po druhé.**

<div class="grid2">
<div class="card">

**Backlog management**

- Každý task má jasnou prioritu
- Agent pracuje vždy na jednom tasku
- Hotový task → review → další task
- Paralelizace = více agentů, ne větší tasky

</div>
<div class="card-blue">

**Velikost tasku**

| Typ        | Velikost   | Příklad                |
| ---------- | ---------- | ---------------------- |
| Ideální    | 1–4 hodiny | Nový endpoint + testy  |
| Přijatelný | 4–8 hodin  | Refactor modulu        |
| Riskantní  | 8+ hodin   | Přepis celé komponenty |

_Čím menší task, tím lepší výstup._

</div>
</div>

---

# Workflow: Jak to vypadá v praxi

<div class="grid3">
<div class="card">

### 1. Zadání

Napíšete PRD s acceptance criteria.

</div>
<div class="card">

### 2. Agent pracuje

Vytvoří branch, píše kód, píše testy, commituje.

</div>
<div class="card">

### 3. CI/CD

Automaticky běží testy, lint, type-check.

</div>
</div>

<br>

<div class="grid3">
<div class="card">

### 4. Review

Vy kontrolujete výstup. Business logika, edge cases.

</div>
<div class="card">

### 5. Merge

Schváleno → merge do main. Deploy.

</div>
<div class="card">

### 6. Iterace

Feedback → nový task → opakujte.

</div>
</div>

---

# Co nefunguje

Buďme upřímní. AI coding není perfektní.

<div class="grid2">
<div class="card-red">

**Kde agenti selhávají:**

- Velké refactory přes mnoho souborů
- Architektonická rozhodnutí
- Debugging edge cases bez dobrého error logu
- Práce s legacy kódem bez dokumentace
- Cokoliv, co vyžaduje hluboký doménový kontext

</div>
<div class="card-green">

**Kde agenti excelují:**

- Nové features s čistým zadáním
- Boilerplate a CRUD operace
- Testy a test coverage
- Migrace s jasným vzorem
- Dokumentace
- Malé, dobře definované tasky

</div>
</div>

---

# Shrnutí: 6 pravidel pro AI coding v produkci

<div class="grid3">
<div class="card-blue">

**1. PRD first**
Nepíšete kód, píšete zadání.

</div>
<div class="card-blue">

**2. Git vždy**
Branch, PR, review. Bez výjimky.

</div>
<div class="card-blue">

**3. Testy povinně**
Bez testů = bez merge.

</div>
</div>

<br>

<div class="grid3">
<div class="card-blue">

**4. Pravidla pro agenty**
Kontext a guardrails v `.instructions.md`.

</div>
<div class="card-blue">

**5. Review = business logika**
Ne formátování, ale smysl.

</div>
<div class="card-blue">

**6. Malé tasky**
1–4 hodiny. Jeden agent, jeden task.

</div>
</div>

---

# Pro koho je to určené?

<div class="grid2">
<div>

- **Vývojáři** – naučte se řídit agenty místo psaní boilerplate
- **Majitelé firem** – shipujte 10× rychleji se stejným týmem
- **Tech-leadi** – nastavte proces, který škáluje
- **Product owneři** – PRD je teď vaše nejdůležitější práce

</div>
<div class="card">

<div class="quote">
Budoucnost programování není psaní kódu.<br><br>
Je to řízení agentů, kteří kód píšou za vás.<br><br>
Ale jen pokud máte process, který to udrží pod kontrolou.
</div>

</div>
</div>

---

<!-- _class: cover -->

<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<!-- Import ./_common/last-slide.md --><!-- /Import ./_common/last-slide.md -->
