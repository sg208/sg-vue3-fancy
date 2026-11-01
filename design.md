# design.md

PURPOSE: architecture, data flow and key decisions for sg-vue3-fancy. Reader = acting agent.

## Architecture

| layer       | path                                                                  | fact                                                                                                       |
| ----------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| entry       | `src/main.ts:14`                                                      | `initColorScheme()` runs before `createApp` → no theme flash                                               |
| theme       | `src/main.ts:24`                                                      | PrimeVue 4 themed by `minuteBookPreset` (`src/theme/preset.ts`)                                            |
| data cache  | `src/main.ts:35`                                                      | Vue Query `staleTime` 5 min, `gcTime` 10 min                                                               |
| routing     | `vite.config.ts:23` · `src/router.ts`                                 | `vite-plugin-pages` → `~pages`; one file in `src/pages/` = one route                                       |
| auto-import | `vite.config.ts:25` · `vite.config.ts:31`                             | `PrimeVueResolver` for components; `dirResolver` for `src/composables/`                                    |
| styles      | `src/assets/styles/tailwind.css:1-3`                                  | Tailwind 4 CSS-first, `source(none)` + explicit `@source` for `index.html` and `src/**/*.vue`              |
| legal pages | `src/pages/{accessibility,privacy-policy,terms}.vue`                  | share `src/components/layouts/LegalPage.vue`                                                               |
| footer      | `src/components/layouts/Footer/NavLinks.vue` · `Footer/Copyright.vue` | NavLinks → Privacy · Terms · Accessibility · Contact; Copyright → `https://github.com/sg208/sg-vue3-fancy` |
| hosting     | `wrangler.jsonc:6` · `wrangler.jsonc:8`                               | Cloudflare Worker static assets from `dist/`, SPA fallback, custom domain `sg-vue3-fancy.engg.app`         |

## Data flow

1. `useRecipes()` (`src/composables/useRecipes.ts:18`) → `GET https://dummyjson.com/recipes` → query key `['recipes']`.
2. `/recipe/:id` (`src/pages/recipe/[id].vue:121-131`) → reads cached `['recipes']` list as `initialData` → `useRecipe()` (`src/composables/useRecipes.ts:44`) fetches `/recipes/<id>` only on cache miss.
3. Route change → `router.afterEach` (`src/App.vue:13`) moves focus to `main h1` (fallback `#main`).

## Decisions

- Hosting = Cloudflare Worker at `https://sg-vue3-fancy.engg.app`; deploy = `pnpm run deploy` (build + `wrangler` v4 devDependency; env `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID`). SOURCE: commit `e9196f6`. Vercel · Netlify · Railway · Cloudflare Pages · engg.me retired.
- `not_found_handling: single-page-application` (`wrangler.jsonc:6`). WHY: client-side routes need `index.html` on deep links.
- Tailwind `source(none)` (`src/assets/styles/tailwind.css:1`). WHY: auto-detection scanned docs and tripled CSS size.
- PrimeVue overrides in `@layer components` (`src/assets/styles/tailwind.css:90`), not `@utility`. WHY: PrimeVue classes are runtime-only; `@utility` output gets dropped.
- Privacy route stays `/privacy-policy`. WHY: keep existing links working.
- No backend; demo data = public DummyJSON API. Privacy page lists every external host → update it when adding one.
