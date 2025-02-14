---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  /* Base styles with background layers */
  section {
    color: #333;
    padding: 40px;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    /* Multiple backgrounds layered from top to bottom */
    background-image: 
      /* Layer 1: Dot pattern */
      radial-gradient(#4a90e2 1px, transparent 1px),
      /* Layer 2: Hexagonal pattern */
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M99.7 14.5L74.9 28.7L50.2 14.5L74.9 0.2z" fill="%234a90e2" opacity="0.9"/><path d="M74.9 57.3L50.2 43L50.2 14.5L74.9 28.7z" fill="%234a90e2" opacity="0.5"/><path d="M99.7 14.5L99.7 43L74.9 57.3L74.9 28.7z" fill="%234a90e2" opacity="0.1"/></g></svg>');
    /* Set size for each background layer */
    background-size: 20px 20px, 150px 150px;
  }
  
  /* Layer 1: Base white background */
  section {
    color: #333;
    padding: 40px;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
  }

  /* Layer 2: Dot grid pattern using radial gradient
     We'll use a light blue (#4a90e2) at very low opacity */
  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(#4a90e2 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    pointer-events: none;
  }

  /* Layer 3: Hexagonal pattern
     We'll create this using the SVG from the original, but with blue tones */
  section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M99.7 14.5L74.9 28.7L50.2 14.5L74.9 0.2z" fill="%234a90e2" opacity="0.9"/><path d="M74.9 57.3L50.2 43L50.2 14.5L74.9 28.7z" fill="%234a90e2" opacity="0.5"/><path d="M99.7 14.5L99.7 43L74.9 57.3L74.9 28.7z" fill="%234a90e2" opacity="0.1"/></g></svg>');
    background-size: 150px 150px;
    opacity: 0.07;
    pointer-events: none;
  }

  .title-content {
    text-align: center;
    margin: auto;
  }

  .title-content h1 {
    font-size: 3.5em;
    background: linear-gradient(45deg, #4a90e2, #357abd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.3em;
  }

  /* Making sure content stays above the background layers */
  section > * {
    position: relative;
    z-index: 1;
  }

  /* Rest of the original styles remain unchanged */
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

  ul li {
    margin: 0.8em 0;
    position: relative;
    padding-left: 1.5em;
  }

  ul li::before {
    content: "•";
    color: #4a90e2;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
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
  
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 4px;
  }
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 250px);
    gap: 60px;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
  }
---

![logo w:120px](path_to_promptbook_logo.png)

<div class="title-content">

# Main Presentation Title
## Subtitle Goes Here
### Author Name
### Date

</div>

<div class="image-container">

![main-image](path_to_main_image.png)

</div>

---

<!-- Slide 1: What We Do (Clear, concise, 2 sentences) -->
# Promptbook

**Why do we exist?**
<!-- You do want to have your C3PO -->
- Write apps in English (or Czech) not in Python, Typescript or Java
- You do not need ML Department to create your own personal AI app, agent, assistant that knows you (think Batman's Alfred)

---

<!-- Slide 2: Specific Example -->
# Real World Example

<!-- Specific, detailed example showing your solution in action -->

- **Who:** A global, Big Four professional services firm
- **Problem:** Had thousands survey responses that would take weeks to analyze manually
- **Solution:** Used the Promptbook ecosystem to process responses automatically
- **Result:** Delivered complete analysis in 2 days, significantly reducing need for developer nor labor costs

---

<!-- Slide 3: Team (Only if it's a strength) -->
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

<!-- --- -->

<!-- Slide 4: Traction (Only if strong) -->
<!-- # Traction

<div class="grid">
<div>

## Key Metrics
- [Specific metric] in [timeframe]
- [Growth rate] over [period]
- [Key milestone] achieved in [time]

</div>
<div>

## Timeline
- [Month Year]: Started development
- [Month Year]: [Important milestone]
- [Month Year]: [Current achievement]

</div>
</div> -->

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

<!-- Slide 6: Market Size -->
# Market Size

## Bottom-up Calculation
- [Number of potential users] × [Price per user] = [Total addressable market]
- In 2025: 1000 users × $50 per month × 12 months = $600,000 annual revenue potential
- In 2026: Potential growth to 5000 users = $3M/year
- In 2027: Potential growth to 15,000 users = $9M/year
- These are quite conservative estimates

## Market Positioning
- **Our Solution:** $99 per user/month
- **Competitors:** $200-500 per user/month for more narrow solutions

---

<!-- Slide 7: The Ask -->
# Investment Opportunity
- **Raising:** $500,000
- **Timeline:** 18-24 months to reach key milestones

**Key Milestones:**
- Reach 1,000 active users ($600K ARR) by end of 2025
- Launch enhanced UI to attract more users
- Expand team with key hires in sales and development
- Begin scaling to 5,000 users for 2026 ($3M ARR)<>

**Use of Funds:**
- Product development and AI capabilities
- Go-to-market strategy execution
- Key strategic hires

---

<!-- Slide 8: Contact -->
# Let's Connect

**Jiří Jahn**
jiri@ptbk.io
+420 777 090 067

**Pavol Hejný**
pavol@ptbk.io
+420 777 759 767