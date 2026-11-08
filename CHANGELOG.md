# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.3] - 2026-11-08

### Added

- **Load error message**: when the recipes cannot be fetched, the home page now says so instead of showing an empty list and a skeleton that never finishes.

### Changed

- **Blog page**: it is now a plain "coming soon" page. The sample composables it used to show were removed.
- **Hero count**: the number of dishes in the intro now comes from the recipe data.

### Fixed

- **Missing recipe photos**: a recipe without an image, or with an empty image address, now shows a local placeholder. The old fallback pointed at an Unsplash address that no longer answers.
- **Slow or failing recipe API**: recipe requests give up after 10 seconds and retry once, so the error message shows in about 21 seconds instead of the skeleton staying up. Recipes already on screen stay there when a background refresh fails.
- **Today's plate after a load error**: the section and its link in the intro are hidden when there is no featured recipe to show.

## [0.3.2] - 2026-11-04

### Changed

- **Dependency advisories**: pnpm overrides pin patched versions of `glob` and `postcss-selector-parser`.

## [0.3.1] - 2026-11-02

### Changed

- **GitHub link in the footer**: the "Source on GitHub" text link is now a small GitHub icon. It opens the repo in a new tab and screen readers announce it as "Source code on GitHub (opens in a new tab)". The privacy page wording now matches.

## [0.3.0] - 2026-11-01

### Added

- **Accessibility, privacy and terms pages**: `/accessibility`, `/privacy-policy` and `/terms` say what the site does, which services your browser contacts and how to report a problem. The footer links to all three and to the source on GitHub.
- **Local `wrangler`**: `wrangler` is now a dev dependency, so `pnpm run deploy` no longer relies on a global install.

### Changed

- **Newsletter demo message**: after a valid address, the form now says it is a demo and nothing was sent, instead of claiming you joined a list.

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
