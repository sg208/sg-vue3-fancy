# sg-vue3-fancy

A Vue 3 starter template with a small demo app on top. Live at https://sg-vue3-fancy.engg.app

The demo is **The Minute Book**, a recipe browser. It draws each recipe's prep and cook time as five-minute bars and filters the list by how much time you have. Recipes come from the public [DummyJSON](https://dummyjson.com/docs/recipes) API. It has light and dark themes and follows your system setting.

The footer links to Accessibility, Privacy and Terms pages and to this repo on GitHub.

## Stack

- Vue 3 with [Vite](https://vite.dev/)
- [File-based routing](https://github.com/hannoeru/vite-plugin-pages): every file in `src/pages/` is a route
- Auto-imported [components](https://github.com/antfu/unplugin-vue-components) and [composables](https://github.com/antfu/unplugin-auto-import) (with [vite-auto-import-resolvers](https://github.com/dishait/vite-auto-import-resolvers/blob/main/README_EN.md))
- [Tailwind CSS 4](https://tailwindcss.com/)
- [PrimeVue 4](https://primevue.org/), themed through a design-token preset in `src/theme/preset.ts`
- [TanStack Vue Query](https://tanstack.com/query/latest/docs/vue/overview) for fetching and caching. Data stays fresh for 5 minutes, and a recipe page reuses the recipe from the cached list when it can. The [devtools](https://tanstack.com/query/latest/docs/vue/devtools) load in development only.
- [sg208-button](https://www.npmjs.com/package/sg208-button), the Sg208 Vue component library
- Vitest and Vue Test Utils for unit tests

Still to come: i18n, meta tags and layouts.

## Run it locally

You need Node `>=22.12.0` (`.nvmrc` pins 24) and pnpm. `corepack enable` picks up the pnpm version from `package.json`.

```bash
pnpm install
pnpm dev
```

## Test and check

```bash
pnpm test          # Vitest
pnpm type-check    # vue-tsc
pnpm lint:check    # ESLint
pnpm format:check  # Prettier
```

## Build and deploy

`pnpm build` writes a single-page app to `dist/`.

The site runs as a Cloudflare Worker that serves `dist/` as static assets. `wrangler.jsonc` sets `not_found_handling: single-page-application`, so every route gets `index.html`, and binds the custom domain `sg-vue3-fancy.engg.app`.

```bash
pnpm run deploy
```

This builds and runs `wrangler deploy`. It needs `wrangler` 4 installed globally and `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in your environment.

## License

[MIT](./LICENSE) © 2026 Syailendra Ginting
