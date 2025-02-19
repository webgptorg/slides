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
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: 40px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
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
### Pavol Hejný & Jiří Jahn (@ptbk.io)
### 2025-02-18

---

<!-- Slide 1: What We Do (Clear, concise, 2 sentences) -->
# Promptbook


**What do we do?**
<!-- You do want to have your C3PO -->
- We develop a new language for AI.
- You no longer need ML Department to create your own personal AI apps
- You just write simple markdown the gets executed:
````
# ✨ Example

Example to test whether the providers are working correctly.

## 💬 Prompt

```text
Hello
```

`-> {greetingResponse}`
````

---
# The Benefits for you

- Faster, cost-effective solution ✅
- Scalable and maintainable (due to separation of concerns) ✅
- Easy debugging (due to sophisticated logging and error monitoring capabilities) ✅
- All team members develop against unambiguous specification ✅
- Enables non-technical consultants to create LLM-powered applications ✅
---

<!-- Slide 2: Specific Example -->
<!-- backgroundColor: black -->
<!-- color: white -->

# Routine Task Automation
- 📄 Automation of document generation, reports, and data entry
- ⚡ Streamlining approval workflows and notifications

---

# Knowledge & Insights
- 🧠 Creating dynamic knowledge bases for internal teams and clients
- 📊 Automating industry insights collection and distribution
- 🤖 Implementing AI-based decision support tools for clients
- 📈 Automating data analysis for trend identification and forecasting

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
---

<!-- Slide 3: Team (Only if it's a strength) -->
<!-- backgroundColor: white -->
<!-- color: black -->

# Our Team

<div class="image-grid">
<img src="./images/Pavol_fotka.jpg" alt="Pavol Hejný, Founder">
<img src="./images/Jirka_fotka.jpg" alt="Jiří Jahn, Co-Founder">
</div>

- **Pavol Hejný, CTO & Co-founder**
  - Top open source contributor in CZE
  - Programmer

- **Jiří Jahn, CEO & Co-founder**
  - Ph.D. in Mathematics, former researcher at IT4I National Supercomputing Centre
  - Significant technical expertise mixed with strong soft skills

---

<!-- Slide 5: Unique Insights -->
# Our Unique Insights

1. **We are not NO CODE platform**
   - For **devs** these platforms lack control
   - For **non/devs** they are still programming with a crutch

2. **Anticipating Problems**
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
+420 777 090 067

**Pavol Hejný**
pavol@ptbk.io
+420 777 759 767