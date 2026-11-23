# memos.moe

Website for [Moe Memos](https://memos.moe), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
pnpm install
pnpm dev
```

Type-check and build:

```bash
pnpm check
pnpm build
```

## Updating Content

- **Supported Memos versions, downloads, and features**: edit `src/data/site.ts`.
- **Screenshots**: replace `public/screenshots/ios-1.png`, `ipad-1.png`, `android-light.png`, and `android-dark.png`.
- **Markdown pages**: edit files in `src/content/docs/` (`faq.md`, `privacy.md`, `privacy_zh.md`, `ios-acknowledgements.md`, `android-acknowledgements.md`).
- **README-linked assets**: `/memos.png`, `/app-store-badge.svg`, and `/screenshot.png` remain in `public/`.

## Deployment

- **Build command**: `pnpm build`
- **Output directory**: `dist`
