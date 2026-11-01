# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Redesigned the demo as The Minute Book: split-screen layout, Boska type, newsprint and brass palette, prep and cook times drawn as five-minute bars.
- PrimeVue is themed through a design-token preset instead of CSS overrides.
- Pinned PrimeVue to 4.x, `@primeuix/themes` to 2.x and PrimeIcons to 7.x (MIT). PrimeVue 5 and PrimeIcons 8 moved to the PrimeUI license, which needs a license key and shows a notice without one.
- The home list can be filtered by available minutes and is sorted quickest first.
- The FAQ shows every answer; the newsletter form confirms inline instead of with an alert.

### Added

- Light and dark themes with a header toggle, skip link, per-page titles and focus moved to the page heading after navigation.
- SVG favicon and a Netlify SPA fallback (`public/_redirects`).

### Removed

- Unused `getDisplayedRecipes` helper.
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
