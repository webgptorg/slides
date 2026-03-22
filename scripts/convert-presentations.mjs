#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const workspaceDir = process.cwd();
const slidesDir = path.join(workspaceDir, 'slides');
const distDir = path.join(workspaceDir, 'dist');

const formats = [
    { name: 'html', extension: '.html', marpArgs: ['--html'] },
    { name: 'pdf', extension: '.pdf', marpArgs: ['--pdf'] },
    { name: 'pptx', extension: '.pptx', marpArgs: ['--pptx'] },
];

const presentations = await collectPresentations(slidesDir);

if (presentations.length === 0) {
    throw new Error('No presentations found in slides/.');
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const format of formats) {
    await mkdir(path.join(distDir, format.name), { recursive: true });
}

for (const presentation of presentations) {
    for (const format of formats) {
        const outputPath = path.join(distDir, format.name, `${presentation.outputBasePath}${format.extension}`);
        await mkdir(path.dirname(outputPath), { recursive: true });

        console.info(`Converting ${presentation.relativePath} to ${format.name.toUpperCase()}...`);
        runMarpCli([presentation.absolutePath, ...format.marpArgs, '--allow-local-files', '--output', outputPath]);
    }
}

await writeFile(path.join(distDir, 'index.html'), renderIndex(presentations), 'utf8');

console.info(`Generated ${presentations.length} presentation(s).`);

async function collectPresentations(directory, relativeSegments = []) {
    const entries = await readdir(directory, { withFileTypes: true });
    const sortedEntries = [...entries].sort((left, right) => left.name.localeCompare(right.name));
    const found = [];

    for (const entry of sortedEntries) {
        const entryPath = path.join(directory, entry.name);
        const nextSegments = [...relativeSegments, entry.name];

        if (entry.isDirectory()) {
            if (shouldSkipDirectory(entry.name)) {
                continue;
            }

            found.push(...(await collectPresentations(entryPath, nextSegments)));
            continue;
        }

        if (!entry.isFile()) {
            continue;
        }

        if (!entry.name.endsWith('.md') || entry.name.endsWith('.book.md') || entry.name.startsWith('.')) {
            continue;
        }

        const relativePath = toPosixPath(nextSegments.join(path.sep));
        const outputBasePath = relativePath.slice(0, -'.md'.length);
        const relativeDirectory = path.posix.dirname(relativePath);
        const folder = relativeDirectory === '.' ? '' : relativeDirectory;
        const fileName = path.posix.basename(outputBasePath);

        found.push({
            absolutePath: entryPath,
            relativePath,
            outputBasePath,
            folder,
            fileName,
            title: formatTitle(fileName),
        });
    }

    return found;
}

function shouldSkipDirectory(directoryName) {
    return directoryName === 'node_modules' || directoryName.startsWith('.') || directoryName.startsWith('_');
}

function formatTitle(fileName) {
    return fileName
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (character) => character.toUpperCase());
}

function runMarpCli(args) {
    const command = getMarpCommand();
    const result = spawnSync(command, args, {
        cwd: workspaceDir,
        stdio: 'inherit',
        shell: process.platform === 'win32',
    });

    if (result.status !== 0) {
        throw new Error(`Marp CLI failed with exit code ${result.status ?? 'unknown'}.`);
    }
}

function getMarpCommand() {
    return path.join(workspaceDir, 'node_modules', '.bin', process.platform === 'win32' ? 'marp.cmd' : 'marp');
}

function renderIndex(items) {
    const groupedItems = groupByFolder(items);
    const folderCount = groupedItems.length;
    const presentationCount = items.length;
    const totalFiles = presentationCount * formats.length;
    const generatedAt = new Date().toLocaleString();

    const sections = groupedItems
        .map(([folder, presentationsInFolder]) => renderFolderSection(folder, presentationsInFolder))
        .join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentations</title>
    <style>
        :root {
            color-scheme: light;
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
            color: #334155;
        }

        h1 {
            color: #0f172a;
            margin-bottom: 0.75rem;
        }

        .subtitle {
            margin: 0 0 2rem;
            color: #475569;
            max-width: 60rem;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .stat {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 1.25rem;
            box-shadow: 0 10px 30px -20px rgba(15, 23, 42, 0.55);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #2563eb;
        }

        .stat-label {
            color: #64748b;
            font-size: 0.95rem;
        }

        .folder-section {
            margin-top: 2rem;
        }

        .folder-header {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }

        .folder-title {
            margin: 0;
            font-size: 1.25rem;
            color: #0f172a;
        }

        .folder-path {
            color: #64748b;
            font-size: 0.95rem;
        }

        .presentation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1rem;
        }

        .presentation-card {
            background: rgba(255, 255, 255, 0.94);
            border-radius: 16px;
            padding: 1.25rem;
            box-shadow: 0 10px 30px -24px rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(148, 163, 184, 0.18);
        }

        .presentation-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 0.35rem;
        }

        .presentation-source {
            color: #64748b;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            word-break: break-word;
        }

        .presentation-links {
            display: flex;
            gap: 0.75rem;
            flex-wrap: wrap;
        }

        .format-link {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 0.9rem;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .format-link:hover {
            transform: translateY(-1px);
            opacity: 0.92;
        }

        .format-link.html {
            background: #dbeafe;
            color: #1d4ed8;
        }

        .format-link.pdf {
            background: #fee2e2;
            color: #dc2626;
        }

        .format-link.pptx {
            background: #dcfce7;
            color: #15803d;
        }

        .last-updated {
            text-align: center;
            color: #64748b;
            font-size: 0.9rem;
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(148, 163, 184, 0.3);
        }
    </style>
</head>
<body>
    <h1>📖 Promptbook Slides</h1>
    <p class="subtitle">Slides can be organized into folders inside <strong>slides/</strong>. Folders starting with <strong>_</strong> are treated as internal and are excluded from conversion and the published gallery.</p>

    <div class="stats">
        <div class="stat">
            <div class="stat-number">${presentationCount}</div>
            <div class="stat-label">Presentations</div>
        </div>
        <div class="stat">
            <div class="stat-number">${folderCount}</div>
            <div class="stat-label">Folders</div>
        </div>
        <div class="stat">
            <div class="stat-number">${totalFiles}</div>
            <div class="stat-label">Generated Files</div>
        </div>
    </div>

    ${sections}

    <div class="last-updated">
        Last updated: ${escapeHtml(generatedAt)}
    </div>
</body>
</html>`;
}

function groupByFolder(items) {
    const groups = new Map();

    for (const item of items) {
        const folder = item.folder || 'Root';
        if (!groups.has(folder)) {
            groups.set(folder, []);
        }

        groups.get(folder).push(item);
    }

    return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right));
}

function renderFolderSection(folder, items) {
    const folderTitle = folder === 'Root' ? 'Root' : path.posix.basename(folder);
    const folderLabel = folder === 'Root' ? 'slides/' : `slides/${folder}/`;
    const cards = items.map((item) => renderCard(item)).join('\n');

    return `<section class="folder-section">
        <div class="folder-header">
            <h2 class="folder-title">${escapeHtml(folderTitle)}</h2>
            <div class="folder-path">${escapeHtml(folderLabel)}</div>
        </div>
        <div class="presentation-grid">
            ${cards}
        </div>
    </section>`;
}

function renderCard(item) {
    const htmlHref = encodePath(`html/${item.outputBasePath}.html`);
    const pdfHref = encodePath(`pdf/${item.outputBasePath}.pdf`);
    const pptxHref = encodePath(`pptx/${item.outputBasePath}.pptx`);

    return `<article class="presentation-card">
        <div class="presentation-title">${escapeHtml(item.title)}</div>
        <div class="presentation-source">${escapeHtml(item.relativePath)}</div>
        <div class="presentation-links">
            <a href="${htmlHref}" class="format-link html" target="_blank" rel="noreferrer">📄 View HTML</a>
            <a href="${pdfHref}" class="format-link pdf" target="_blank" rel="noreferrer">📋 Download PDF</a>
            <a href="${pptxHref}" class="format-link pptx" target="_blank" rel="noreferrer">📊 Download PPTX</a>
        </div>
    </article>`;
}

function encodePath(value) {
    return value
        .split('/')
        .map((segment) => encodeURIComponent(segment))
        .join('/');
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function toPosixPath(value) {
    return value.split(path.sep).join('/');
}
