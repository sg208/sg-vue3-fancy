<template>
  <LegalPage title="Accessibility" updated="2026-11-01">
    <h2>Our target</h2>
    <p>
      The Minute Book aims to meet the Web Content Accessibility Guidelines
      (WCAG) 2.2 at level AA.
    </p>

    <h2>What is in place</h2>
    <ul>
      <li>
        A "Skip to content" link is the first thing you reach with the keyboard.
      </li>
      <li>
        Each page has a header, main content and footer landmark, a single
        top-level heading and its own page title.
      </li>
      <li>
        After you follow a link, focus moves to the new page's heading, so
        keyboard and screen reader users start at the top of what changed.
      </li>
      <li>Focused links and buttons show a visible outline.</li>
      <li>
        The light and dark themes follow your system setting, and the theme
        button tells assistive technology whether dark mode is on.
      </li>
      <li>
        Animations stop when your system asks for reduced motion. They move text
        but never fade it, so contrast holds while they run.
      </li>
      <li>
        The prep and cook time bars have a text label, for example "20 minutes
        prep, 15 minutes cooking".
      </li>
      <li>
        Form fields have visible labels, and the newsletter form announces its
        error message and links it to the field.
      </li>
      <li>
        Decorative images have empty alt text. The main photo on a recipe page
        is described by the recipe's name.
      </li>
    </ul>

    <h2>Known limitations</h2>
    <ul>
      <li>
        Recipe text and photos come from the DummyJSON demo API, so photo
        descriptions are limited to the recipe name.
      </li>
      <li>
        The site has not had an independent audit, and the test suite does not
        include automated accessibility checks.
      </li>
      <li>The contact page is still a placeholder.</li>
    </ul>

    <h2>Reporting a problem</h2>
    <p>
      If something gets in your way, open an issue on the
      <a class="link" href="https://github.com/sg208/sg-vue3-fancy/issues"
        >GitHub repository</a
      >. Say which page you were on and what you were using, such as browser and
      screen reader.
    </p>
  </LegalPage>
</template>

<script setup lang="ts">
import LegalPage from '../components/layouts/LegalPage.vue';
</script>
