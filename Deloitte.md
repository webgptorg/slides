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

# Human-first AI Transformation

## When AI helps Humans Deliver Superior Results at a Fraction of the Cost

<!-- <- TODO: Needs review, it seems to be too much info,
Maybe "Human-first AI" is enough for the title and
"Build companies where Humans Lead and AI Accelerates" is the subtitle with "Deliver Superior Results at a Fraction of the Cost" moved to the next slide
-->

### [Pavol Hejný](https://www.linkedin.com/in/hejny/) & [Jiří Jahn](https://www.linkedin.com/in/jirkajahn/)

### 2025-03-12, Deloitte

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

-   **LLMs are the new computing paradigm, and we're building its first enterprise-ready programming language**
-   While companies struggle with AI Transformation, we can make the transition as smooth as possible leveraging our language:

```markdown
# ✨ Email to customer

-   PERSONA George, experienced AI consultant
-   KNOWLEDGE https://deloitte.com/
-   KNOWLEDGE https://ptbk.io/

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

-   **Take First-Mover Advantage:** Deliver sustainable AI solutions ahead of competitors through architectural foresight
-   **Mitigate Risk:** Built-in compliance, auditability, and security
-   **Scale Globally:** AI solutions without expanding your ML department
-   **Multiply Capacity:** One consultant delivers work of many
-   **Leverage Organic Compounding:** Template blueprints across industries, multiplying AI impact from within

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

# **Deloitte 2.0: The Self-Building Enterprise**

_A journey through AI transformation with Promptbook_

<!-- This opening slide introduces the narrative framework -->

---

# **The Challenge**

Meet Deloitte 2.0 - a forward-thinking professional services firm struggling with:

-   Partners spending 40% of time on repetitive client reports
-   Knowledge siloed in departments, recreating solutions already built elsewhere
-   AI experiments that never scale beyond pilots
-   Compliance risks increasing with each AI implementation

<!-- This slide establishes the relatable pain points -->

<!--
<- TODO: Kajetán:
- Security
- Controlled environment for testing
-->

---

# **Phase 1: Blueprint Creation**

-   Finance partners draft a `book` blueprint for automated audit report generation
-   Without coding, they define exactly what domain expertise needs capturing
-   Blueprint tested with select clients, refined based on feedback
-   Zero infrastructure, zero ML expertise required

```markdown
# ✨ Audit Report Generator

-   PERSONA Experienced audit professional
-   KNOWLEDGE {client_regulatory_requirements.pdf}
-   KNOWLEDGE {deloitte_audit_methodology.pdf}

## Generate Executive Summary

> Create a concise executive summary for {client_name}'s
> audit based on {financial_data} and {compliance_findings}.
> -> {executive_summary}
```

<!-- The code example makes it concrete without being too technical -->

---

# **Phase 2: Scaling Across Functions**

-   Tax division adapts the audit blueprint for tax advisory reports
-   Consulting modifies it for industry research briefings
-   HR customizes it for talent assessment

**The compounding effect**: Each adaptation is 80% faster than building from scratch

<!-- This slide illustrates the cross-function application -->

---

# **Phase 3: Enterprise Integration**

-   Specialized AI engineers turn successful blueprints into production systems
-   Blueprints become institutional knowledge, not individual expertise
-   Compliance and security baked in at the blueprint level
-   Firm becomes self-improving as teams use `book` to continuously automate their own workflows

## <!-- This slide shows how the solution scales across the enterprise -->

# **The Self-Building Enterprise: Results**

A firm that evolves from within - exactly how Henry Ford or Tomáš Baťa would approach AI transformation:

-   **Business experts** create blueprints without coding
-   **Knowledge compounds** across departments without silos
-   **Compliance is standardized** at the blueprint level
-   **AI transformation accelerates** with each new implementation
-   **Results multiplier:** 5x more AI solutions with the same resources

## <!-- This final slide shows the transformative impact -->

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

-   [Top](https://committers.top/czech_republic) [open-source contributor](https://github.com/hejny) in CZE
-   Developer with 15+ years of experience

</div>
<div class="jiri-jahn">
<img src="https://github.com/webgptorg/promptbook/blob/main/design/people/jiri-jahn-transparent.png?raw=true" alt="Jiří Jahn, Founder of Promptbook">

**Jiří Jahn | CEO**

-   Ph.D. in Mathematics, former researcher at [IT4I National Supercomputing Centre](https://www.it4i.cz/en)
-   Significant technical expertise mixed with strong soft skills

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

3. **Models are commodity, we make the personalized applications**
    - Models are like Intel processors in Apple
    - You can replace Intel with Arm, but you cannot replace Apple

---

# Frequently Asked Questions

**Is Promptbook secured against data leakage?**

-   End-to-end encryption for all data in transit and at rest
-   On-premises deployment option for sensitive environments
-   Granular access controls and audit logging of all system interactions
-   No data storage by default - process and forget architecture

**How does Promptbook add controllability and reliability?**

-   Transparent AI decision paths through sophisticated logging
-   Built-in versioning of all blueprints for governance
-   Controlled testing environment with simulation capabilities
-   Clear separation between business logic and AI execution

---

# Frequently Asked Questions

**Why use Promptbook instead of established no-code tools?**

-   True flexibility beyond drag-and-drop constraints
-   Seamless transition path from prototype to production
-   No technical debt - solutions remain maintainable as they scale
-   Designed for enterprise complexity, not just simple automations

**How quickly can we implement and see results?**

-   First blueprint creation: 1-2 days
-   Initial production implementation: 2-4 weeks
-   Full enterprise integration: Phased approach over 3-6 months
-   ROI typically visible within first month of deployment

---

# Frequently Asked Questions

**How does Promptbook integrate with our existing systems?**

-   Platform-agnostic, API-first architecture connects to any modern system
-   Pre-built connectors for enterprise platforms
-   Custom connectors can be developed for legacy systems
-   Gradual integration approach - no "rip and replace"

<!--

Additional themes we might consider adding:

1. Team expertise required: Address who in the organization needs what skills to use Promptbook effectively
2. Pricing model: Enterprise customers always want to understand the cost structure
3. Support and training: What ongoing assistance is available
4. Compliance certifications: Specific standards Promptbook meets (ISO, SOC2, etc.)
5. Customization limits: What can and cannot be modified for specific enterprise needs

Other suggestions?

-->

---

<!-- Slide 8: Contact -->

# ✨ Let's Connect

**Jiří Jahn**
jiri@ptbk.io
[+420 777 090 067](tel:+420777090067)

**Pavol Hejný**
pavol@ptbk.io
[+420 777 759 767](tel:+420777759767)
