# GOLD LUXURY HAIR

Premium human hair and made-to-measure wigs storefront.

The storefront deploys automatically from `main` through `.github/workflows/deploy-pages.yml`.

Published site: https://goldnaldo9-spec.github.io/GOLD-LUXURY-HAIR/

The Vite build uses `/GOLD-LUXURY-HAIR/` as its production base path, and `404.html` is generated as an SPA fallback so direct links remain openable on GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Static build

```bash
pnpm build:static
```

## Manus runtime

The Manus-managed deployment remains available through the project Preview and server build.

- `pnpm dev`: development server; honors `PORT` (default 3000).
- `pnpm build` / `pnpm start`: build and serve `dist/index.js` and `dist/public/`.
- `pnpm db:migrate`: apply checked-in migrations. `pnpm db:push`: generate and apply new schema changes.
- `pnpm check` / `pnpm test`: types and application tests.

Start with the Webdev skill's default-template guide. Platform login, storage, payments and service contracts live in its shared references; read the relevant capability before extending its helper.

`server/_core/publicConfig.ts` exposes only named public runtime values. Private keys stay server-side. The platform serves managed `/manus-storage/` assets; the application does not register a second proxy.

Platform configuration is readable and editable through `webdev.config`. Default settings are initial values, not enforced constraints. The agent may modify the files, commands and configuration or follow the flexible guide for another stack.
