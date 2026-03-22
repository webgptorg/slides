# 📖 Promptbook Slides

This repository automatically converts Markdown presentations to multiple formats and deploys them to GitHub Pages.

## 🚀 Features

- **Automatic Conversion**: Converts Marp-based Markdown presentations to HTML, PDF, and PPTX formats
- **GitHub Pages Integration**: Automatically deploys a beautiful presentation gallery
- **Triggered on Push**: Runs conversion and deployment on every commit to the main branch
- **Multiple Formats**: View presentations online (HTML) or download them (PDF/PPTX)

## 📋 Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Structure

Place your Marp presentations (`.md` files) in the `slides/` directory. The workflow will automatically:

- Convert all `.md` files in `slides/` to HTML, PDF, and PPTX
- Generate a presentation gallery at your GitHub Pages URL
- Update the gallery on every commit to main

### 3. Presentation Format

Your presentations should use Marp format with frontmatter:

```markdown
---
marp: true
theme: default
paginate: true
size: 16:9
---

# Your Presentation Title

Your content here...
```

## 🔧 How It Works

The GitHub Actions workflow (`.github/workflows/convert-presentations.yml`) automatically:

1. **Triggers** on every push to the main branch
2. **Installs** dependencies including Marp CLI
3. **Converts** all Markdown presentations to:
    - HTML (for online viewing)
    - PDF (for download)
    - PPTX (for PowerPoint compatibility)
4. **Generates** a presentation gallery index page
5. **Deploys** everything to GitHub Pages

## 📁 Output Structure

After conversion, the following structure is created:

```
dist/
├── index.html          # Main gallery page
├── html/              # HTML presentations
│   ├── presentation1.html
│   └── presentation2.html
├── pdf/               # PDF downloads
│   ├── presentation1.pdf
│   └── presentation2.pdf
└── pptx/              # PowerPoint downloads
    ├── presentation1.pptx
    └── presentation2.pptx
```

## 🎨 Gallery Features

The generated gallery includes:

- **Responsive Design**: Works on desktop and mobile
- **Statistics**: Shows total presentations and files
- **Easy Navigation**: Click to view HTML or download PDF/PPTX
- **Modern UI**: Clean, professional appearance
- **Last Updated**: Shows when the gallery was last refreshed

## 🛠 Dependencies

- **@marp-team/marp-cli**: For converting Markdown to presentations
- **Node.js 20**: Runtime environment
- **GitHub Actions**: For automation

## 📝 Adding New Presentations

1. Create a new `.md` file in the `slides/` directory
2. Add Marp frontmatter and your content
3. Commit and push to the main branch
4. The workflow will automatically convert and deploy your presentation

## 🔗 Accessing Your Presentations

After setup, your presentations will be available at:
`https://[username].github.io/[repository-name]/`

## 🤝 Contributing

1. Add your presentation as a `.md` file in `slides/`
2. Follow the Marp format guidelines
3. Commit to the main branch
4. The automation handles the rest!

---

_This repository uses GitHub Actions to automatically convert and deploy presentations. No manual intervention required!_
