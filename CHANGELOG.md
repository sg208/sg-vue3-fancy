# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
