---
marp: true
theme: default
paginate: true
size: 16:9
html: true
style: |
  section {
    /* Basic text and spacing */
    color: #333;
    padding: 40px 100px;
    font-size: 1.6rem;
    
    /* Layout control */
    display: flex;
    flex-direction: column;
    
    /* Background with dots - notebook style */
    background-color: white;
    background-image: radial-gradient(rgba(74, 144, 226, 0.5) 1.5px, transparent 1.5px);
    background-size: 16px 16px;
  }

  section.split {
    --bg-position: 50%;  /* Centers the background image horizontally in its area */
  }

  /* Title page specific styles */
  .split {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 50%;
  }

  .split h1 {
    font-size: 3.5em;
    background: linear-gradient(45deg, #4a90e2, #357abd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.3em;
    text-align: center;
  }

  .split h2,
  .split h3 {
    text-align: center;
  }

  /* Typography */
  h1 {
    font-size: 2.2em;
    color: #000;
    margin-bottom: 0.5em;
  }
  
  h2 {
    font-size: 1.6em;
    color: #333;
    margin-bottom: 0.4em;
  }
  
  p, li {
    font-size: 1em;
    line-height: 1.4;
    margin: 0.3em 0;
  }

  /* Layout components */
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    align-items: start;
  }
  
  ul, ol {
    padding-left: 1.2em;
    margin: 0.5em 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
  }
  
  td, th {
    padding: 8px;
    border: 1px solid #ddd;
  }
  
  /* Image handling */
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 4px;
  }
  

  /* Making sure content stays above the background layers */
  section > * {
    position: relative;
    z-index: 1;
  }
---

<!-- _class: split -->
<!-- backgroundColor: white -->

![bg left:33% fit](https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png)

# Human-first AI Transformation made Easy
## We help build companies where Humans Lead and AI Accelerates: Delivering Superior Results at a Fraction of the Cost 
<!-- <- TODO: Needs review, it seems to be too much info,
Maybe "Human-first AI" is enough for the title and
"Build companies where Humans Lead and AI Accelerates" is the subtitle with "Deliver Superior Results at a Fraction of the Cost" moved to the next slide
-->

### [Pavol Hejný](https://www.linkedin.com/in/hejny/) & [Jiří Jahn](https://www.linkedin.com/in/jirkajahn/)
### 2025-03-06, Deloitte
<!-- <- TODO: Make the date dynamic adds substantial overhead in MARP, sorry -->

---

<!-- Slide 1: What We Do (Clear, concise, 2 sentences)
This messaging tries to create FOMO by:

1. Positioning LLMs as the inevitable new computing paradigm (not just a trend)
2. Establishing our technology as the first true enterprise solution in this new world
3. Creating a clear contrast between those who adopt (winners) and those who don't (competitors who "struggle")
4. Adding time-sensitivity with the "days, not months" comparison
Implying Deloitte has a limited window to secure competitive advantage
The language directly addresses Deloitte as a potential beneficiary, making the opportunity feel exclusive and timely.

-->
# The Book

<!-- You do want to have your C3PO -->
- **LLMs are the new computing paradigm, and we're building its first enterprise-ready programming language**
- While companies struggle with AI Transformation, we can make the transition as smooth as possible leveraging our language:

```markdown
# ✨ Email to customer

- PERSONA George, experienced AI consultant
- KNOWLEDGE https://deloitte.com/
- KNOWLEDGE https://ptbk.io/

## Write the email

> Write an email to {customerName} about opportunities in
> AI consulting and new trends in the industry.
> Include a link to the Deloitte website and also mention
> the Promptbook platform.

-> {email}
```

---
# Seize The Competitive Edge

With the help of Promptbook, you can:

- **Take First-Mover Advantage:** Deliver sustainable AI solutions ahead of competitors through architectural foresight
- **Mitigate Risk:** Built-in compliance, auditability, and security
- **Scale Globally:** AI solutions without expanding your ML department 
- **Multiply Capacity:** One consultant delivers work of many
- **Leverage Organic Compounding:** Template blueprints across industries, multiplying AI impact from within

<!--
TODO: Be prepared to explain that we are not competition but cooperator and oportunity
-->

<!--
TODO: Kajetán: Be prepared to answer:

1) What we have?
2) Why we want it?
3) Why is Promptbook wanted by others?
4) Why is Promptbook wanted by Deloitte?

-->

---

<!-- Slide 2: Specific Example -->
<!-- backgroundColor: black -->
<!-- color: white -->

# Routine Task Automation
- 📄 Automation of document generation, reports, and data entry
- ⚡ Streamlining approval workflows and notifications

---

<!--Import ./slides/knowledge-and-insights.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

# Knowledge & Insights
- 🧠 Creating dynamic knowledge bases for internal teams and clients
- 📊 Automating industry insights collection and distribution
- 🤖 Implementing AI-based decision support tools for clients
- 📈 Automating data analysis for trend identification and forecasting

<!--/Import ./slides/knowledge-and-insights.md-->

<!--
<- TODO: Kajetán:
- Security
- Controlled environment for testing
-->

---

# Client Solutions
- 🚀 Rapid MVP creation to validate business ideas
- ⚙️ Designing AI-powered solutions tailored to specific client requirements
- 💬 Building chatbots, virtual assistants, and other customer interaction tools
- 🎯 Personalizing customer journeys in marketing and support

---

# Internal Operations
- 📋 Automating internal project management and resource allocation workflows
- 📝 Streamlining RFP creation and responses

---

# Risk & Compliance
- ✅ Automated compliance monitoring and reporting
- 📜 Real-time regulatory update analysis and implementation
- 🔍 AI-driven risk analysis for client portfolios
- 📊 Automated due diligence processes
- 🎯 AI-assisted audit planning and execution
- 💰 Automated tax calculation and optimization
- 🌍 ESG compliance monitoring and reporting
- 🕵️‍♀️ Built-in encryption out of the box
---

<!-- Slide 3: Team (Only if it's a strength) -->
<!-- backgroundColor: white -->
<!-- color: black -->

# Our Team

<style>
  /* Note: Following style is relevant only for this slide */

  .founders {
    /*/
    outline: 1px dotted #F50C0C;
    /**/

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    align-items: top;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
  }

  .founders > div {
    /*/
    outline: 1px dotted #08FA15;
    /**/

    text-align: center;
  }

  .founders img {
    /*/
    outline: 1px dotted #085DFA;
    /**/

    height: 330px;
    width: auto;
    object-fit: contain;
  }

  .pavol-hejny img {
    transform: translateX(5%);
  }

  .jiri-jahn img {
    /* No corrections */
  }
</style>

<div class="founders">
<div class="pavol-hejny">
<img src="https://github.com/webgptorg/promptbook/blob/main/design/people/pavol-hejny-transparent.png?raw=true" alt="Pavol Hejný, Founder of Promptbook">

**Pavol Hejný | CTO**
- [Top](https://committers.top/czech_republic) [open-source contributor](https://github.com/hejny) in CZE
- Developer with 15+ years of experience

</div>
<div class="jiri-jahn">
<img src="https://github.com/webgptorg/promptbook/blob/main/design/people/jiri-jahn-hejny-transparent.png?raw=true" alt="Jiří Jahn, Founder of Promptbook">

**Jiří Jahn | CEO**
- Ph.D. in Mathematics, former researcher at [IT4I National Supercomputing Centre](https://www.it4i.cz/en)
- Significant technical expertise mixed with strong soft skills

</div>
</div>




---

<!-- Slide 5: Unique Insights -->
# Our Unique Insights

1. **We are not NO CODE platform**
   - For **devs** these platforms lack control
   - For **non/devs** they are still programming with a crutch

2. **Anticipating futute trends**
   - Mixing prompts with code will lead to technical debt
   - We are separating things that should be separated

3. **Models are commodity, we make the best assistants**
   - Models are like Intel processors in Apple
   - You can replace Intel with Arm, but you cannot replace Apple

---

<!-- Slide 8: Contact -->


# ✨ Let's Connect

**Jiří Jahn**
jiri@ptbk.io
[+420 777 090 067](tel:+420777090067)

**Pavol Hejný**
pavol@ptbk.io
[+420 777 759 767](tel:+420777759767)
