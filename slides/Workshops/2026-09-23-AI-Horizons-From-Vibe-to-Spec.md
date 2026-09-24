---
marp: true
title: From Vibe to Spec — AI Horizons 2026
author: Pavol Hejný
description: From Vibe to Spec: Systematic AI Development
size: 16:9
paginate: false
---
<style>
:root { --ink:#131722; --navy:#0b0e16; --blue:#3478f6; --gold:#ffb526; --muted:#727987; --line:#dfe3e9; }
section { width:1280px; height:720px; padding:64px 82px; font-family:Arial,Helvetica,sans-serif; font-size:26px; color:var(--ink); background:#fff; letter-spacing:-.025em; }
h1,h2,p { margin:0; }
h1 { font-size:52px; font-weight:700; line-height:1.12; letter-spacing:-.04em; }
h2 { font-size:34px; font-weight:650; line-height:1.15; letter-spacing:-.035em; }
strong { color:var(--blue); }
section.dark { color:#f5f7fb; background:var(--navy); }
section.dark h1, section.dark h2 { color:#f5f7fb; }
section.center { display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
section.cover { padding:0; color:white; background:#080c14; position:relative; }
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0; }
.cover .bg { opacity:.48; }
.shade { position:absolute; inset:0; background:linear-gradient(90deg,rgba(5,8,14,.83),rgba(5,8,14,.12)); z-index:1; }
.copy { position:absolute; left:8%; top:25%; width:54%; z-index:2; }
.cover-title { font-size:62px; color:#fff; }
.cover-strap { margin-top:24px; color:#d6dae3; font-size:28px; }
.cover-name { margin-top:58px; font-size:20px; line-height:1.5; }
.qr { position:absolute; right:8%; bottom:12%; width:148px; height:148px; background:white; padding:8px; z-index:2; }
.event { position:absolute; left:8%; bottom:9%; color:#c8d1e2; font-size:15px; letter-spacing:.11em; z-index:2; }
section.photo { position:relative; padding:0; color:#fff; background:#080c14; }

.photo .shade { background:linear-gradient(90deg,rgba(4,8,14,.74),rgba(4,8,14,.04)); }
.caption { position:absolute; left:8%; bottom:13%; width:55%; text-shadow:0 2px 16px #000; z-index:2; }
.button-stage { width:76%; padding:72px 45px; border:1px solid #252a38; border-radius:10px; background:#111520; text-align:center; }
.button-label { font-size:40px; font-weight:700; color:#f5f7fb; }
.photo-title { font-size:56px; color:#fff; }
.photo .accent { color:var(--gold); }
.kicker { margin-bottom:16px; color:#8a93a3; font-size:17px; letter-spacing:.13em; text-transform:uppercase; }
.tower-slide { display:flex; align-items:center; justify-content:center; padding:28px 80px; }
.tower-slide img { height:660px; width:auto; object-fit:contain; }
.tower-slide .side { width:215px; font-size:19px; line-height:1.45; text-align:center; }
.tower-slide .side b { color:var(--blue); }
.full { height:100%; display:flex; flex-direction:column; justify-content:center; }
.big { font-size:64px; line-height:1.06; font-weight:700; letter-spacing:-.05em; }
.big .gold { color:var(--gold); }
.note { margin-top:26px; color:#aab2c2; font-size:21px; }
.timeline { position:relative; display:flex; align-items:flex-end; justify-content:space-around; height:430px; margin:28px 20px 0; border-bottom:1px solid #cfd4dc; }
.tline { position:absolute; left:10%; right:10%; top:61%; border-top:2px dashed #ef445b; transform:rotate(-7deg); }
.tower { width:20%; display:flex; flex-direction:column; align-items:center; gap:14px; color:#677080; font-size:14px; }
.tower img { height:255px; max-width:160px; object-fit:contain; }
.caption-small { font-size:15px; color:#8490a3; letter-spacing:.08em; }
.solo-tower { position:absolute; right:16%; bottom:5%; height:440px; }
.two-line { max-width:880px; }
.axis { margin-top:46px; display:grid; gap:34px; width:88%; }
.axis .bar { border-radius:8px; padding:20px 28px; font-size:18px; font-weight:700; letter-spacing:.06em; text-align:center; }
.bar.blue { background:#286cf4; color:#fff; }
.bar.ink { background:#171c28; color:#fff; border:1px solid #454d5c; }
.browser { width:85%; margin:38px auto 0; border:1px solid #d9dee7; background:#f4f6f8; border-radius:12px; padding:32px; box-shadow:0 10px 28px #1a223010; }
.browser .dots { height:24px; border-bottom:1px solid #dce0e6; color:#94a0b2; font-size:15px; }
.three { display:grid; grid-template-columns:repeat(3,1fr); gap:26px; margin-top:30px; }
.item { min-height:170px; border:1px solid #dbe1e9; background:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:16px; }
.item b { font-size:17px; letter-spacing:.1em; }
.icon { height:62px; display:flex; align-items:end; gap:9px; }
.icon i { display:block; width:14px; background:#f1aa22; border-radius:2px 2px 0 0; }
.icon i:nth-child(1){height:22px}.icon i:nth-child(2){height:43px}.icon i:nth-child(3){height:32px}
.equals { display:flex; justify-content:center; align-items:center; gap:44px; font-size:58px; font-weight:700; white-space:nowrap; width:100%; }
.equals .gold { color:var(--gold); }.equals .blue { color:var(--blue); }
.abstracts { display:flex; align-items:center; justify-content:space-between; margin-top:40px; font-weight:700; }
.abstracts .box { border:1px solid #cdd7e3; border-radius:8px; padding:24px; text-align:center; font-size:20px; }
.arrow { color:var(--blue); font-size:48px; }
.rows { display:grid; gap:22px; margin-top:52px; }
.row { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:28px; }
.cell { border:1px solid #ccd5e2; border-radius:7px; padding:18px; text-align:center; font-size:20px; font-weight:700; background:#f8faff; }
.row:nth-child(3) .cell { border-color:#ffc45c; background:#fff8e7; }
.row .label { font-size:15px; color:#768195; }
.people { display:grid; grid-template-columns:260px 1fr; align-items:center; gap:70px; margin-top:45px; }
.clock { width:230px; height:230px; border:2px solid var(--gold); border-radius:50%; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#202431; background:#fff8e8; }
.clock b { font-size:60px; }.clock span { font-size:20px; color:#6b7280; }
.ais { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; }
.ais i { background:#eaf1ff; border:1px solid #ccdaff; color:#3676ed; border-radius:5px; font-style:normal; text-align:center; padding:16px 5px; font-size:14px; font-weight:700; }
.dual { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:90px; text-align:center; margin-top:45px; }
.dual h2 { font-size:32px; letter-spacing:.03em; }
.down,.up { margin:20px auto 0; font-size:120px; line-height:1; font-weight:700; }
.down { color:#397bfa; }.up { color:var(--gold); }
.document { width:220px; height:245px; padding:30px; margin:20px auto; border:2px solid #ffb526; background:#fff9ed; color:#a27312; text-align:center; }
.document hr { border:0; border-top:1px solid #e5cd98; margin:25px 0; }
.spec { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; margin-top:40px; }
.spec .bad { transform:rotate(-5deg); color:#cbd3df; font-size:40px; line-height:1.2; text-align:center; }
.spec .good { border:2px solid var(--gold); color:#a57308; background:#fffaf0; padding:32px; text-align:center; }
.factory { position:relative; padding:0; color:white; }

.factory .shade { background:#0508117d; }
.factory-title { position:absolute; left:10%; top:40%; width:70%; font-size:48px; text-align:center; text-shadow:0 3px 12px #000; z-index:2; color:#fff; }
.loop { margin:58px auto 0; width:720px; height:365px; position:relative; }
.loop .node { position:absolute; padding:20px 34px; border-radius:8px; color:#fff; font-size:19px; font-weight:700; }
.loop .specn { top:0; left:300px; background:var(--gold); color:#47340a; }
.loop .buildn { top:135px; right:0; background:#286cf4; }
.loop .testn { bottom:0; left:300px; background:#25b585; }
.loop .measuren { top:135px; left:0; background:#8797b2; }
.loop .path { position:absolute; border:3px solid transparent; border-top-color:#8294bc; border-right-color:#8294bc; border-radius:0 120px 0 0; }
.loop .p1 { top:40px; left:390px; width:260px; height:105px; }
.loop .p2 { top:165px; right:60px; width:250px; height:160px; border:0; border-bottom:3px solid #25b585; border-right:3px solid #25b585; border-radius:0 0 120px 0; }
.loop .p3 { left:70px; top:165px; width:250px; height:160px; border:0; border-bottom:3px solid #e4aa36; border-left:3px solid #e4aa36; border-radius:0 0 0 120px; }
.loop .p4 { left:70px; top:40px; width:260px; height:105px; border:0; border-top:3px solid #8294bc; border-left:3px solid #8294bc; border-radius:120px 0 0 0; }
.footer { position:absolute; bottom:24px; right:38px; color:#929bad; font-size:12px; letter-spacing:.12em; }
</style>

<!-- _class: cover -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-cover-bg.jpg">
<div class="shade"></div>
<div class="copy">
<h1 class="cover-title">From Vibe to Spec</h1>
<p class="cover-strap">Kód zlevňuje. Specifikace zdražuje.</p>
<p class="cover-name">Pavol Hejný<br>pavolhejny.com</p>
</div>
<img class="qr" src="../../images/2026-09-23-from-vibe-to-spec-qr-pavolhejny.png">
<div class="event">AI HORIZONS · 24. 9. 2026</div>

---

<!-- _class: center -->
<p class="kicker">From Vibe to Spec</p>
<div class="tower-slide">
<div class="side">A repo built<br>by vibes,<br>quick fixes<br>and one more<br>prompt</div>
<img src="../../images/2026-09-23-from-vibe-to-spec-repo-towers.png">
<div class="side">A repo designed<br>around a<br>clear spec</div>
</div>

---

<!-- _class: dark center -->
<div class="button-stage">
<div class="button-label">10 minut <span style="color:#3478f6">➜</span></div>
</div>

---

<!-- _class: photo -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-photo-48-hours.jpg">
<div class="shade"></div>
<div class="caption"><h1 class="photo-title">48 hodin<br>a máme produkt.</h1></div>

---

<!-- _class: photo -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-photo-six-months.jpg">
<div class="shade"></div>
<div class="caption"><h2 style="color:#fff">Posunout jedno tlačítko?</h2><p class="big"><span style="color:#ffb526">6 měsíců!</span></p></div>

---

<!-- _class: photo -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-photo-legacy-code.jpg">
<div class="shade"></div>
<div class="caption"><h1 class="photo-title">Claude Code<br>míří na legacy.</h1></div>

---

<!-- _class: center -->
<p class="kicker">Architektura: zpožděný feedback</p>
<h1 class="two-line">Čím déle projekt žije,<br>tím víc stojí každá další změna.</h1>

---

<!-- _class: -->
<h2>Architektura: zpožděný feedback</h2>
<div class="timeline">
<div class="tline"></div>
<div class="tower"><img src="../../images/2026-09-23-from-vibe-to-spec-tower-day-1.jpg"><span>DEN 1</span></div>
<div class="tower"><img src="../../images/2026-09-23-from-vibe-to-spec-tower-changes.jpg"><span>ZMĚNY</span></div>
<div class="tower"><img src="../../images/2026-09-23-from-vibe-to-spec-tower-feedback.jpg"><span>FEEDBACK</span></div>
</div>

---

<!-- _class: -->
<div class="full">
<h1>Pozdější fixy<br>jsou drahé.</h1>
<img class="solo-tower" src="../../images/2026-09-23-from-vibe-to-spec-tower-solo.jpg">
</div>

---

<!-- _class: dark center -->
<h1 style="color:#fff">AI tenhle problém<br>neodstranila.</h1>

---

<!-- _class: -->
<h2>Paradox dvou časových os</h2>
<div class="axis">
<div class="bar blue">MODELY SÍLÍ <span style="float:right">➜</span></div>
<div class="bar ink"><span style="float:left">◀</span> NEJLEPŠÍ MODEL POTŘEBUJEME NA ZAČÁTKU</div>
</div>

---

<!-- _class: -->
<h2>Co je na staré appce skutečně hodnotné?</h2>
<div class="browser">
<div class="dots">● &nbsp;● &nbsp;●</div>
<div class="three">
<div class="item"><div class="icon"><i></i><i></i><i></i></div><b>BUSINESS</b></div>
<div class="item"><div style="font-size:45px;color:#3478f6">▦</div><b>DATA</b></div>
<div class="item"><div style="font-size:42px;color:#4ab791">●─●</div><b>CHOVÁNÍ</b></div>
</div>
</div>

---

<!-- _class: dark center -->
<div class="equals"><span class="gold">[ HODNOTA ]</span><span>≠</span><span class="blue">{{ KÓD }}</span></div>

---

<!-- _class: center -->
<h1>Někdy je levnější repo zahodit<br>než ho dál opravovat.</h1>

---

<!-- _class: photo -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-photo-wheat-from-chaff.jpg">
<div class="shade"></div>
<div class="caption" style="left:12%;top:35%;bottom:auto;width:78%;text-align:center"><h2>Jedna z nejcennějších schopností AI<br>je oddělit zrno od plev.</h2><p style="margin-top:52px;color:#ffc431;font-size:25px">A co kdybychom to dělali rovnou od začátku?</p></div>

---

<!-- _class: -->
<h2>Tohle není první abstrakční posun.</h2>
<div class="abstracts">
<div class="box"><img src="../../images/2026-09-23-from-vibe-to-spec-abstraction-machine-code.jpg" style="height:245px;max-width:142px;object-fit:cover"><p>MACHINE CODE</p></div><span class="arrow">›</span>
<div class="box"><img src="../../images/2026-09-23-from-vibe-to-spec-abstraction-assembler.jpg" style="height:245px;max-width:142px;object-fit:cover"><p>ASSEMBLER</p></div><span class="arrow">›</span>
<div class="box"><img src="../../images/2026-09-23-from-vibe-to-spec-abstraction-c.jpg" style="height:245px;max-width:142px;object-fit:cover"><p>C / C++</p></div><span class="arrow">›</span>
<div class="box"><img src="../../images/2026-09-23-from-vibe-to-spec-abstraction-typescript-python.jpg" style="height:245px;max-width:142px;object-fit:cover"><p>TYPESCRIPT / PYTHON</p></div><span class="arrow">›</span>
<div class="box"><img src="../../images/2026-09-23-from-vibe-to-spec-abstraction-spec.jpg" style="height:245px;max-width:142px;object-fit:cover"><p>SPEC</p></div>
</div>

---

<!-- _class: -->
<h2>Kód už dávno generujeme.</h2>
<div class="rows">
<div class="row"><div class="cell">C</div><div class="label">compiler　➜</div><div class="cell">ASSEMBLY</div></div>
<div class="row"><div class="cell">TypeScript</div><div class="label">transpiler　➜</div><div class="cell">JavaScript</div></div>
<div class="row"><div class="cell">SPEC</div><div class="label">agent　➜</div><div class="cell">CODE</div></div>
</div>

---

<!-- _class: -->
<h2>Lidský čas je drahý. AI čas je levný.</h2>
<div class="people">
<div class="clock"><b>1h</b><span>seniora</span></div>
<div class="ais"><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i><i>AI</i></div>
</div>

---

<!-- _class: dark -->
<div class="dual">
<div><h2>KÓD</h2><div class="down">↓</div><div style="color:#8aa8ec">ZLEVŇUJE</div></div>
<div><h2>SPECIFIKACE</h2><div class="up">↑</div><div style="color:#ffc445">ZDRAŽUJE</div></div>
</div>

---

<!-- _class: -->
<h2>Spec se nesmí stát novým AI slopem.</h2>
<div class="spec">
<div class="bad">×<br>notes<br>ideas<br>more notes</div>
<div class="good"><div style="font-size:22px;font-weight:700">✓ &nbsp; SPEC</div><div style="margin:25px auto;width:150px;border-top:1px solid #dfc57f"></div><p style="font-size:18px;line-height:1.35">Minimum, které stačí<br>k znovuvyrobení stejné aplikace.</p></div>
</div>

---

<!-- _class: factory -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-photo-factory.jpg">
<div class="shade"></div>
<h1 class="factory-title">A co kdyby se celý projekt<br>psal sám?</h1>

---

<!-- _class: dark center -->
<h2>Dark Factories</h2>
<div class="loop">
<div class="path p1"></div><div class="path p2"></div><div class="path p3"></div><div class="path p4"></div>
<div class="node specn">SPEC</div><div class="node buildn">BUILD</div><div class="node testn">TEST</div><div class="node measuren">MEASURE</div>
</div>

---

<!-- _class: cover -->
<img class="bg" src="../../images/2026-09-23-from-vibe-to-spec-cover-bg.jpg">
<div class="shade"></div>
<div class="copy"><h1 class="cover-title">Díky.</h1><p class="cover-strap">Kód zlevňuje. Specifikace zdražuje.</p><p class="cover-name">Pavol Hejný<br>pavolhejny.com</p></div>
<img class="qr" src="../../images/2026-09-23-from-vibe-to-spec-qr-pavolhejny.png"><div class="event">AI HORIZONS · 24. 9. 2026</div>
