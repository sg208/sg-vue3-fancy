# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2026-11-01

### Added

- **Cloudflare Workers hosting**: the demo is live at https://sg-vue3-fancy.engg.app. `wrangler.jsonc` serves the built app with `not_found_handling: single-page-application`, so deep links load the app. `pnpm run deploy` builds and deploys.

### Removed

- **Netlify `public/_redirects`**: Cloudflare rejected its catch-all rule as an infinite redirect loop. The Workers SPA fallback replaces it.

## [0.2.0] - 2026-11-01

### Added

- **Light and dark themes**: a header toggle switches between them. Pages also get a skip link, their own titles, and focus moves to the page heading after navigation.
- **Netlify SPA fallback**: `public/_redirects` sends deep links to the app. An SVG favicon ships too.

### Changed

- **The Minute Book redesign**: the demo now has a split-screen layout, Boska type, a newsprint and brass palette, and prep and cook times drawn as five-minute bars.
- **PrimeVue pinned to 4.x (MIT)**: `primevue` 4.x, `@primeuix/themes` 2.x and `primeicons` 7.x. PrimeVue 5 and PrimeIcons 8 are under the commercial PrimeUI license, which needs a license key and shows a notice on the page without one.
- **Token preset theming**: PrimeVue is themed through a design-token preset (`src/theme/preset.ts`) instead of CSS overrides.
- **Time filter on the home list**: filter recipes by the minutes you have; the list is sorted quickest first.
- **FAQ and newsletter**: the FAQ shows every answer, and the newsletter form confirms inline instead of with an alert.

### Removed

- Placeholder social links in the footer (they pointed to `#`).

## [0.1.0] - 2026-10-31

### Added

- Vitest suite (`pnpm test`) for recipe utils and `RecipeCard`
- MIT `LICENSE`; `license` and `author` in `package.json`

### Changed

- Package manager: npm to pnpm (`pnpm-lock.yaml`, `packageManager`)
- Vite 8, Vue Router 5, PrimeVue 5 (`@primeuix/themes`), PrimeIcons 8, Vue Query Devtools 6, ESLint 10, TypeScript 6, unplugin-auto-import 21, unplugin-vue-components 32
- Tailwind CSS 3 to 4 via `@tailwindcss/vite`; config moved into `src/assets/styles/tailwind.css`

### Removed

- `vite-plugin-eslint`, `@eslint/eslintrc`, `.eslintrc.cjs`, `postcss.config.cjs`, `tailwind.config.js`, `autoprefixer`, `@tailwindcss/aspect-ratio`

### Security

- Fixed all high `npm audit` advisories (vite, vue, postcss and transitive)

## [0.0.6] - 2026-02-26

### Changed

- Pin Node to LTS 24: `.node-version` and `.nvmrc` set to `24` (was 22.18.0)
- Regenerated `package-lock.json` (Rollup, glob, and transitive dependency updates)

## [0.0.5] - 2026-02-26

### Removed

- HelloWorld component
- Nav subcomponents (Logo, SubmitRecipeButton)
- RecipeDetail subcomponents (BackButton, RecipeDetailSkeleton, RecipeHeader, RecipeIngredients, RecipeInstructions, RecipeNotFound)

### Changed

- Refactor and cleanup: removed unused components, simplified recipe detail and layouts
- Updated layouts (Footer, Nav, FAQSection, NewsletterSection) and footer subcomponents
- Updated recipe components (FeaturedRecipe, FeaturedRecipeSkeleton, RecipeCard) and recipe detail page
- Updated sections (HeroSection, NewsletterAndFAQSection, RecipeGridSection)
- Updated composables (useRecipes, useSomething, useSomething2, useSomething3) and recipe utils
- Updated pages (index, recipe/[id], blog, contact, features, privacy-policy, submit-new-recipe, terms, [...all])
- App, main, router, Vite and Tailwind config updates
- ESLint and Prettier configuration (eslint.config.cjs, .prettierrc.json, .prettierignore)
