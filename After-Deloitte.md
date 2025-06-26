---
marp: true
theme: default
paginate: true
size: 16:9
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

    .commitment-slide-wwh {
      position: fixed;
      top: 20px;
      left: 50px;
      border-bottom: 1px solid #292929;
    }


    .split-slide-layout {
      /*/
      outline: 1px dotted #F50C0C;
      /**/

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .split-slide-left {
      display: flex;
      justify-content: center;
      align-items: center
    }



    .split-slide-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
    }

    .split-slide-layout img {

      /*/
      outline: 1px dotted #F50C0C;
      background-color: rgba(233 35 35 / 0.8);
      /**/


      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    }
---

<!-- _class: split -->
<!-- backgroundColor: white -->

![bg left:33% fit](https://raw.githubusercontent.com/webgptorg/promptbook/refs/heads/main/design/logo-blue-transparent-1024.png)

# Create portable AI agents in plain English

<!-- <- TODO: Kajetán: More business, less technical-->

### [Pavol Hejný](https://www.linkedin.com/in/hejny/) & [Jiří Jahn](https://www.linkedin.com/in/jirkajahn/)

### 2025

---

| Name            | Talk                             |
| --------------- | -------------------------------- |
| Albert Einstein | Relativity of AI Agents          |
| Pavol Hejný     | AI agents with commitments       |
| George Orwell   | 2084 - Vision of the AI tyranny  |
| Ada Lovelace    | The First AI Programmer          |
| Jiří Jahn       | Randomness and Stochastics in AI |
| Harry Potter    | Generate spells with AI          |

---

### Email:

> Dear Mr. Hejný,
>
> We are writing to inform you that your call for papers, "AI Agents with Commitments," has been selected for presentation at our Supercool Conference in London on September 8, 2025.
>
> Travel and accommodation expenses will be covered.
>
> We look forward to your presentation!
> Yours sincerely,
> John Smith
> Supercool Conference Org Team

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Prompt</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Write email to {Name} as an organizer of the Supercool Conference in London on September 8, 2025, to inform them that their call for papers {Talk} has been selected for presentation. Travel and accommodation expenses will be covered.
        &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

### Email:

> Dear Mrs. Lovelace,
>
> We are pleased to inform you that your call for papers, "The First AI Programmer," has been selected for presentation at our Supercool Conference in London on September 8, 2025.
>
> Travel and accommodation expenses will be covered.
>
> We look forward to your poetical insights into the world of AI programming!
> Yours sincerely,
> John Smith
> Supercool Conference Org Team

---

### Email:

> Dear Mr. Orwell,
>
> We are pleased to inform you that your call for papers, "2084 - Vision of the AI Tyranny," has been selected for presentation at our Supercool Conference in London on September 8, 2025.
>
> Travel and accommodation expenses will be covered.
>
> Be prepared for a thought-provoking discussion on the future of AI and its implications on society.
>
> We look forward to your presentation!
> Yours sincerely,
> John Smith
> Supercool Conference Org Team

---

### Email:

> Dear Mr. Potter,
>
> We are pleased to inform you that your call for papers, "Generate Spells with AI," has been selected for presentation at our Supercool Conference in London on September 8, 2025.
>
> Be prepared for a magical experience as we cover your travel and accommodation expenses.
> We look forward to your enchanting presentation!
>
> Yours sincerely,
> John Smith
> Supercool Conference Org Team

---

<style scoped>
  h3 {
    color: #ff0000;
  }
</style>

### Email:

> I will write an email to Jiří Jahn.
> Should I use a professional tone or a friendly tone?

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Rules</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Write email to {Name} as an organizer of the Supercool Conference in London on September 8, 2025, to inform them that their call for papers {Talk} has been selected for presentation. Travel and accommodation expenses will be covered.\n
          *\n
          RULE Write just the email, no other text
        &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Expectations</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Write email to {Name} as an organizer of the Supercool Conference in London on September 8, 2025, to inform them that their call for papers {Talk} has been selected for presentation. Travel and accommodation expenses will be covered.\n
          *\n
          RULE Write just the email, no other text\n
          EXPECT The email should be 10 words long and not exceed 2 pages 
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
</div>

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Style</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Write email to {Name} as an organizer of the Supercool Conference in London on September 8, 2025, to inform them that their call for papers {Talk} has been selected for presentation. Travel and accommodation expenses will be covered.\n
          *\n
          RULE Write just the email, no other text\n
          EXPECT The email should be 10 words long and not exceed 2 pages\n
          STYLE Use a professional tone
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
</div>

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Knowledge</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Write email to {Name} as an organizer of the Supercool Conference in London on September 8, 2025, to inform them that their call for papers {Talk} has been selected for presentation. Travel and accommodation expenses will be covered.\n
          *\n
          RULE Write just the email, no other text\n
          EXPECT The email should be 10 words long and not exceed 2 pages\n
          STYLE Use a professional tone\n
          KNOWLEDGE supercool.com/2025
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
</div>

---

Book | Email

<div class="split-slide-layout">
  <div class="split-slide-left">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          Email agent
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
  <div class="split-slide-right">
      <!-- TODO -->
  </div>
</div>

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          E-shop customer tags
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
  <div class="split-slide-right">
      <!-- TODO -->
  </div>
</div>

---

<div class="split-slide-layout">
  <div class="split-slide-left">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          From Unstructured notes to Articles, Posts and Press release
        &width=960&height=1080&variant=SINGLE&nonce=1 
    "
    />
  </div>
  <div class="split-slide-right">
      <!-- TODO -->
  </div>
</div>

---

# Book vs Code

-   No need for developers
-   Independent of the model

---

# Book vs no-code

-   Much higher portability
-   Reliability and consistency across different environments

---

# Book vs Big systems

-   Open-source
-   Community-driven

---

<!--

-   No need for developers
-   Create portable AI agents
-   guardrail for AI

---

-->

<!--

# What can book do?

## What who how

---

<span class="commitment-slide-wwh">Who</span>

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Persona<h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          designer
          persona aaa
        &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

<span class="commitment-slide-wwh">What</span>

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Expectations</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          designer
          *
          persona aaa
        &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

<span class="commitment-slide-wwh">How</span>

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Knowledge<!-- and context-- ></h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          designer
          persona aaa
        &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

<span class="commitment-slide-wwh">What, How</span>

<div class="split-slide-layout">
  <div class="split-slide-left">
    <h1>Action</h1>
  </div>
  <div class="split-slide-right">
    <img
        src="https://promptbook.studio/embed/book-preview.png?book=
          designer
          persona aaa
          &width=960&height=1080&variant=SINGLE&nonce=1
    "
    />
  </div>
</div>

---

-->

<!-- Slide 3: Team (Only if it's a strength) -->
<!-- backgroundColor: white -->
<!-- color: black -->

# Thanks for your attention!

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

<!-- Slide 8: Contact -->

# ✨ Let's Connect

**Jiří Jahn**
jiri@ptbk.io
[+420 777 090 067](tel:+420777090067)

**Pavol Hejný**
pavol@ptbk.io
[+420 777 759 767](tel:+420777759767)
