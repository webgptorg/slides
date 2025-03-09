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

# Build AI that really works
## How Promptbook helps the transition from typewriters to personal computers 
### [Pavol Hejný](https://www.linkedin.com/in/hejny/) & [Jiří Jahn](https://www.linkedin.com/in/jirkajahn/)
### 2025-02-18, Deloitte
<!-- <- TODO: Make the date dynamic -->

---

<!-- Slide: What We Do (Clear, concise, 2 sentences) -->
# The Book


<!-- You do want to have your C3PO -->
- **We make the Book, next-generation language for AI**
- You no longer need ML Department to create your own personal AI apps

```markdown
# ✨ Email to customer

- PERSONA George, experienced AI consultant
- KNOWLEDGE https://deloitte.com/
- KNOWLEDGE https://ptbk.io/

## Write the email

> Write an email to {customerName} about opportunities in
> AI consulting and new trends in the industry.
> Include a link to the Deloitte website and also mention
> the Promtbook platform.

-> {email}
```
---

<!-- Slide: Contact -->


# Chatbot


<iframe src="https://promptbook.studio/miniapps/7bbeed0d-cab4-44c9-a702-68e204ed1132"></iframe>

---

<!-- Slide: Contact -->


# ✨ Let's Connect

**Jiří Jahn**
jiri@ptbk.io
[+420 777 090 067](tel:+420777090067)

**Pavol Hejný**
pavol@ptbk.io
[+420 777 759 767](tel:+420777759767)