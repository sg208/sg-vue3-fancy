# sg-vue3-fancy

This is a simple template with Vue 3 and couple of simple packages.

## Stacks

- Vue 3
- [Vite (bundler)](https://vitejs.dev/)
- [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- [Auto import components](https://github.com/antfu/unplugin-vue-components)
- [Auto import composables and modules](https://github.com/antfu/unplugin-auto-import)
    - Resolver https://github.com/dishait/vite-auto-import-resolvers/blob/main/README_EN.md
- [Tailwind CSS (V3)](https://tailwindcss.com/)
- [Pinia (state management)](https://pinia.vuejs.org/)
- More on the way ...

## Demo

https://sg-vue3-fancy.onrender.com/

## Deployment notes for render.com

- Node version: `16.15.0`
- Target: `Single Page App`
- Public folder: `dist`
- Build command: `npm run build`
- Create a rewrite rules:
    - Go to your project, then go to `Redirects/Rewrites`
    - Add the following:
        - Source: `/*`
        - Destination: `/index.html`
        - Action: `Rewrite`
        - [HELPDER DOCS](https://dashboard.render.com/static/srv-ca8lkqvd17ccpsrnbfng/redirects)

