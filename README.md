# AI Coding from Zero

This repository uses [Astro](https://docs.astro.build/) + [Starlight](https://starlight.astro.build/) and `pnpm`.
Repository: https://github.com/stevending1st/ai-coding-from-zero
Production URL: https://stevending1st.github.io/ai-coding-from-zero

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

- `SITE_URL` (default: `https://stevending1st.github.io`)
- `BASE_PATH` (default: `/ai-coding-from-zero` in production, `/` in development)

The GitHub Actions workflow sets these values to match the project page.
For other platforms, set these environment variables in your build environment.
