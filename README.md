# Promptbook Presentations

Slide decks for Promptbook, written in [Marp](https://marp.app/) Markdown and converted to HTML, PDF, and PPTX.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Deno](https://deno.com/)

```bash
npm install
```

## Day-to-day workflow

### Editing a presentation

All decks live in `slides/`. Each `.md` file is one presentation. Edit it directly in VS Code — the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension gives a live preview.

Folders whose name starts with `_` (e.g. `_common/`) are skipped during conversion and are used for shared partials only.

### Using shared slides

Common slides (e.g. the contact/last slide) live in `slides/_common/`. Reference them with an import comment pair inside any deck:

```markdown
<!-- Import ./_common/last-slide.md -->
<!-- /Import ./_common/last-slide.md -->
```

After editing a shared file, run the import script to push the changes into every deck that references it:

```bash
deno run --allow-env --allow-read --allow-write --allow-sys --unstable-sloppy-imports \
  ./scripts/import-markdown/import-markdown.ts
```

> ⚠️ The content between the import tags is auto-generated. Always edit the source file in `_common/`, not the pasted block — it will be overwritten on the next run.

### Building locally

```bash
npm run convert:presentations
```

Outputs HTML, PDF, and PPTX for every deck under `dist/`, plus a `dist/index.html` gallery. The `dist/` folder is not committed — builds happen automatically on push via GitHub Actions.

## Folder structure

```
slides/
  _common/       # Shared partials — not converted directly
  <Category>/    # Any subfolder groups related decks
    <deck>.md
```

Decks can be nested arbitrarily deep. The folder structure is mirrored in `dist/` and in the gallery index.

## 📄 License

See [LICENSE](LICENSE) if present, or contact [pavol@ptbk.io](mailto:pavol@ptbk.io).
