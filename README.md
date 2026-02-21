# Starlight Docs Project

This repository uses [Astro](https://docs.astro.build/) + [Starlight](https://starlight.astro.build/) and `pnpm`.

## Requirements

- Node.js 20+
- pnpm 10+

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Build and preview

```bash
pnpm build
pnpm preview
```

## Project structure

```text
.
|- public/
|- src/
|  |- assets/
|  |- content/
|     |- docs/
|     |- content.config.ts
|- astro.config.mjs
|- package.json
|- tsconfig.json
```

Write docs in `src/content/docs/` using `.md` or `.mdx`.

## GitHub Pages deployment

The workflow file is at `.github/workflows/deploy.yml`.

- Trigger: push to `main` (or run manually).
- Output: deploy `dist/` to GitHub Pages.
- Package manager: `pnpm`.

In GitHub repository settings, set Pages source to `GitHub Actions`.

## Site URL and base path

`astro.config.mjs` reads:

- `SITE_URL` (default: `https://example.com`)
- `BASE_PATH` (default: `/`)

The GitHub Actions workflow sets both automatically for project pages and user pages.
For other platforms, set these environment variables in your build environment.
