module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/**/*.vue",
    "./src/pages/**/*.vue",
    "vite.config.js",
    "vite.config.ts",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
