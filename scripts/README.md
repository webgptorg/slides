# 🛠 Scripts

This directory contains scripts that are used to automate various tasks. The scripts are written in TypeScript and can be run using Deno.

The Markdown import script scans the `slides/` directory recursively.

Presentation conversion and publishing are handled by:

```bash
~/.deno/bin/deno --allow-env --allow-read --allow-write --allow-sys --unstable-sloppy-imports ./scripts/import-markdown/import-markdown.ts
npm run convert:presentations
```
