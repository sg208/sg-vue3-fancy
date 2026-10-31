# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
