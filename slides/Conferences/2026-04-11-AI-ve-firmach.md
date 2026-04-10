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

# AI ve firmách a organizacích

**Mezi hype a realitou. Co skutečně funguje?**

Pavol Hejný · Promptbook

---

# Dva extrémy, se kterými se potkávám

<div class="grid2">
<div class="card-red">

## „AI máme hotové"

_„Před 3 lety jsme udělali školení na ChatGPT."_

- Jednou za čas někdo použije chat
- Žádná integrace do procesů
- Žádná pravidla, žádná strategie
- „My už AI děláme" = jeden prompt měsíčně

</div>
<div class="card-red">

## „AI nahradí všechny"

_„Vyhodili jsme polovinu programátorů a účetní oddělení."_

- Slepá víra v AI bez kontroly
- Žádné guardrails, žádné review
- Výstupy nikdo nekontroluje
- Incidenty jsou jen otázkou času

</div>
</div>

<br>

**Realita je složitější. A paradoxně často není o samotných AI modelech.**

---

# Je to o všem okolo

AI model je motor. Ale auto potřebuje volant, brzdy a pravidla silničního provozu.

<div class="grid3">
<div class="card-blue">

**🔒 Ochrana dat**
Kam tečou vaše data? Kdo k nim má přístup? Co říká GDPR?

</div>
<div class="card-blue">

**✅ Spolehlivost**
Jak poznáte, že výstup je správný? Kdo kontroluje kvalitu?

</div>
<div class="card-blue">

**👥 Oprávnění**
Kdo smí co používat? Kdo vidí jaká data?

</div>
</div>

<br>

<div class="quote">
Nejdůležitější otázka není „jaký AI model použít?"<br>
ale „jak zajistit, že výstupy budou správné, bezpečné a pod kontrolou?"
</div>

---

# Ochrana dat: Kam tečou vaše informace?

<div class="grid2">
<div>

Když zaměstnanec vloží interní dokument do ChatGPT:

- Data jdou na servery OpenAI (USA)
- Mohou být použita pro trénink modelu
- Nemáte kontrolu, kdo k nim má přístup
- **GDPR compliance = otázka za milion**

Totéž platí pro Google Gemini, Microsoft Copilot a další cloudové služby.

</div>
<div class="card">

**Otázky, které si musíte položit:**

- Kde běží model? (cloud / on-prem)
- Co se děje s daty po zpracování?
- Máte smlouvu o zpracování dat?
- Jsou data šifrovaná at rest i in transit?
- Můžete data smazat na požádání?

_Pokud neznáte odpovědi, nemáte AI strategii. Máte risk._

</div>
</div>

---

# Spolehlivost a kontrola kvality

AI hallucinuje. To není bug, to je vlastnost.

<div class="grid2">
<div>

**Typické problémy:**

- AI vymyslí zákon, který neexistuje
- Shrne dokument, ale vynechá klíčový odstavec
- Odpoví sebevědomě, ale špatně
- Výstup se liší pokaždé, i na stejný vstup

**Bez kontroly kvality riskujete:**

- Právní problémy
- Poškození reputace
- Špatná rozhodnutí na základě špatných dat

</div>
<div class="card-green">

**Jak kontrolovat kvalitu:**

1. **Human-in-the-loop** – člověk vždy schvaluje kritické výstupy
2. **Pravidla a guardrails** – AI má explicitní omezení
3. **Testování** – automatické kontroly výstupů
4. **Audit trail** – kdo se na co ptal, co AI odpověděla
5. **Verzování** – co se změnilo a proč

<div class="quote">
Důvěřuj, ale prověřuj. Vždy.
</div>

</div>
</div>

---

# Management oprávnění

Ne každý ve firmě potřebuje přístup ke všemu.

<div class="grid2">
<div class="card-blue">

**Kdo smí co?**

| Role          | Přístup                       |
| ------------- | ----------------------------- |
| Vedení        | Strategické reporty, KPI      |
| HR            | Personální data, smlouvy      |
| Právní        | Smlouvy, compliance dokumenty |
| Marketing     | Veřejná data, kampaně         |
| Zákaznická p. | FAQ, historie komunikace      |

_AI nástroj musí respektovat stejná oprávnění jako vaše interní systémy._

</div>
<div>

**Co se stane bez řízení oprávnění?**

- Marketingový stážista se přes AI dostane k finančním datům
- AI asistent prozradí interní strategii
- Zákaznická podpora vidí personální záznamy

**Řešení:**

- Role-based access control (RBAC)
- Oddělené knowledge bases per tým
- Logování všech dotazů
- Pravidelný audit přístupů

</div>
</div>

---

# Jak si vybírat AI nástroje?

<div class="grid2">
<div>

**Kritéria výběru:**

| Kritérium       | Proč                                |
| --------------- | ----------------------------------- |
| Kde běží?       | Cloud vs. on-prem, jurisdikce       |
| Data retention? | Jak dlouho si nechává vaše data?    |
| Compliance?     | SOC2, ISO 27001, GDPR               |
| Vendor lock-in? | Můžete snadno přejít jinam?         |
| Integrace?      | Napojení na vaše stávající systémy  |
| Cena?           | Per-seat, per-token, per-organizace |

</div>
<div class="card">

**Červené vlajky:**

- ❌ „Data neukládáme" bez důkazu
- ❌ Žádná smlouva o zpracování dat
- ❌ Nemožnost on-prem deploymentu
- ❌ Proprietární formát bez exportu
- ❌ Žádný audit log

**Zelené vlajky:**

- ✅ Transparentní data flow
- ✅ SOC2 / ISO certifikace
- ✅ On-prem možnost
- ✅ API s dokumentací
- ✅ Export dat kdykoliv

</div>
</div>

---

<!-- _class: compact -->

# Jak nahrazovat a automatizovat lidskou práci?

**Nenahrazujte lidi. Nahrazujte drudgery.**

<div class="grid2">
<div>

**Co automatizovat:**

- Třídění emailů a prvotní odpovědi
- Kontrola dokumentů proti interním pravidlům
- Generování reportů z dat
- FAQ a zákaznická podpora (level 1)
- Sumarizace dlouhých dokumentů

**Co NEautomatizovat:**

- Finální rozhodnutí s právním dopadem
- Komunikaci s klíčovými klienty
- Strategické plánování
- Krizový management

</div>
<div>

**Postup nasazení:**

1. **Zmapujte procesy** – kde lidé tráví čas rutinou?
2. **Vyberte pilotní projekt** – malý, měřitelný, nízké riziko
3. **Nastavte metriky** – jak poznáte, že to funguje?
4. **Spusťte pilot** – 1 tým, 1 proces, 1 měsíc
5. **Vyhodnoťte** – čas, kvalita, spokojenost
6. **Škálujte** – co funguje, rozšiřte dál

<div class="quote">
Nejlepší AI projekt není ten nejsložitější.<br>
Je to ten, který ušetří nejvíc času s nejmenším rizikem.
</div>

</div>
</div>

---

# Vlastní knowledge base a kontext

Generické AI neví nic o vaší firmě. **To je problém i příležitost.**

<div class="grid2">
<div>

**Co dát AI k dispozici:**

- Interní dokumentace a postupy
- FAQ a často řešené problémy
- Šablony a vzory dokumentů
- Pravidla a compliance požadavky
- Historické case study

**Jak to udělat správně:**

- Verzované dokumenty (ne zastaralé)
- Strukturovaná knowledge base
- Pravidelná aktualizace
- Oddělení veřejných a interních dat

</div>
<div class="card-blue">

**Příklad: Praha 13**

Městská část Praha 13 používá Promptbook s vlastní knowledge base:

- Interní dokumentace a předpisy
- Informace pro občany
- Pravidla pro zpracování žádostí

**Výsledek:**
Senior expert, který není programátor, si sám vytvořil virtuálního asistenta ze své dokumentace.

<div class="quote">
„Neprogramátoři mohou vytvářet a nasazovat virtuální asistenty ze své vlastní dokumentace."<br>
– Jakub Svoboda, Praha 13
</div>

</div>
</div>

---

# Rulesety: Pravidla, která AI dodržuje

<div class="grid2">
<div>

AI bez pravidel je zaměstnanec bez onboardingu.

```
Právní expert firmy XY

PERSONA Profesionální, detail-oriented.
         Pouze české právo.

KNOWLEDGE firemni-prirucka.pdf
KNOWLEDGE gdpr-smernice.docx

RULE Nikdy neraď mimo českou jurisdikci.
RULE Cokoliv vyžadující soud eskaluj
     na {Vedoucí právního}.
```

Pravidla jsou **explicitní, verzovaná a auditovatelná**.

</div>
<div>

**Proč jsou pravidla klíčová:**

- AI ví, co smí a co nesmí
- Konzistentní výstupy napříč dotazy
- Auditovatelnost – můžete dokázat, proč AI odpověděla tak, jak odpověděla
- Škálovatelnost – jeden expert nastaví pravidla, stovky lidí je používají

**Typy pravidel:**

- 🚫 **Zákazy** – co AI nesmí dělat
- ✅ **Požadavky** – co musí vždy udělat
- 🔄 **Eskalace** – kdy předat člověku
- 📋 **Formát** – jak má výstup vypadat

</div>
</div>

---

# Shrnutí: 7 kroků k AI ve firmě

<div class="grid2">
<div>

1. **Zmapujte procesy** – kde je rutina, kde je hodnota?
2. **Vyřešte data** – kde běží, kdo má přístup, GDPR
3. **Nastavte oprávnění** – ne každý potřebuje všechno
4. **Vytvořte knowledge base** – dejte AI kontext vaší firmy

</div>
<div>

5. **Definujte pravidla** – co AI smí, co nesmí, kdy eskaluje
6. **Spusťte pilot** – malý projekt, měřitelné výsledky
7. **Kontrolujte kvalitu** – human-in-the-loop, audit, testy

</div>
</div>

<br>

<div class="big">
AI není kouzlo. Je to nástroj. A nástroj potřebuje proces.
</div>

---

# Pro koho je to určené?

<div class="grid3">
<div class="card">

**Majitelé firem**
Jak nasadit AI, aniž byste riskovali data a reputaci.

</div>
<div class="card">

**Starostové a ředitelé**
Jak zavést AI v úřadu nebo škole bezpečně a efektivně.

</div>
<div class="card">

**Stakeholdeři a vedení**
Jak se rozhodovat o AI investicích na základě faktů, ne hype.

</div>
</div>

<br>

<div class="quote">
Nemusíte být techničtí. Musíte vědět, na co se ptát.
</div>

---

<!-- _class: cover -->

<!-- _header: '<img src="https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png" alt="Promptbook">' -->

<!-- Import ./_common/last-slide.md --><!-- /Import ./_common/last-slide.md -->
