# conventions.md

PURPOSE: patterns the repo follows that lint/format configs do not enforce. Style rules enforced by `eslint.config.cjs` + Prettier are omitted.

## Naming

- Components → PascalCase `.vue` under `src/components/{layouts,sections,recipes}/` (e.g. `src/components/layouts/LegalPage.vue`).
- Composables → `useX.ts` in `src/composables/`, auto-imported (e.g. `src/composables/usePageTitle.ts`).
- Pages → kebab-case `.vue` in `src/pages/`; dynamic segments `[id].vue`; catch-all `[...all].vue`.
- Tests → `tests/<Subject>.spec.ts` (e.g. `tests/LegalPages.spec.ts`).

## Structure

- Pure logic → `src/utils/` (`src/utils/recipeUtils.ts`), unit-tested without mounting.
- New legal/static text page → wrap in `LegalPage` layout + add link in `src/components/layouts/Footer/NavLinks.vue`.
- New external host → list it on `src/pages/privacy-policy.vue`.

## Git

- Conventional commit subjects: `feat:` · `fix:` · `chore:` · `docs:` · `refactor:`, optional scope (`feat(recipes):`, `chore(release):`).
- Branches `<type>/<slug>` off `develop`, merged back with `Merge branch '<branch>' into develop`; releases merge `develop` → `main` (`Merge branch 'develop' for vX.Y.Z`).
