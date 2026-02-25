const { defineConfig, globalIgnores } = require('eslint/config');
const js = require('@eslint/js');
const pluginVue = require('eslint-plugin-vue');
const vueParser = require('vue-eslint-parser');
const tsParser = require('@typescript-eslint/parser');
const configPrettier = require('eslint-config-prettier/flat');
const globals = require('globals');

module.exports = defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/dist/',
    '**/.cache/',
    '**/.temp/',
    '**/.vite/',
    '**/coverage/',
    '**/*.tsbuildinfo',
  ]),
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
  },
  { rules: configPrettier.rules },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
]);
