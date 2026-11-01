<template>
  <LegalPage title="Privacy" updated="2026-11-01">
    <h2>What this site collects</h2>
    <p>
      The site itself collects nothing about you. There are no accounts, no
      analytics and no cookies. The services your browser contacts to load the
      site are listed below.
    </p>
    <p>
      If you press the theme button, your choice of light or dark is saved in
      your browser's local storage under the key
      <code>minute-book-scheme</code>. It never leaves your device, and you can
      clear it from your browser settings at any time.
    </p>
    <p>
      The newsletter form on the home page is a demo. It checks that the email
      address looks valid, then clears the field. The address is not sent or
      stored anywhere.
    </p>

    <h2>Who your browser talks to</h2>
    <p>
      Loading a page makes your browser contact these services, each of which
      sees your IP address and a standard request:
    </p>
    <ul>
      <li>
        Cloudflare, which hosts and serves this site. Like any web host it may
        keep standard request logs, such as IP address, user agent and the page
        requested. It also asks your browser to send it reports of network
        errors, if your browser supports them.
      </li>
      <li>
        <code>dummyjson.com</code> for the recipe data, and
        <code>cdn.dummyjson.com</code> for the recipe photos.
      </li>
      <li>
        <code>source.unsplash.com</code>, only when a recipe comes without a
        photo of its own.
      </li>
      <li>
        Fontshare (<code>api.fontshare.com</code> and
        <code>cdn.fontshare.com</code>) for the Boska typeface.
      </li>
    </ul>
    <p>
      Each of these has its own privacy policy. The site sends them nothing
      beyond what your browser sends with every request.
    </p>
    <p>
      The "Source on GitHub" link in the footer takes you to GitHub, which then
      applies its own policy.
    </p>

    <h2>Questions</h2>
    <p>
      Open an issue on the
      <a class="link" href="https://github.com/sg208/sg-vue3-fancy/issues"
        >GitHub repository</a
      >. The <router-link class="link" to="/terms">terms</router-link> cover the
      rest.
    </p>
  </LegalPage>
</template>

<script setup lang="ts">
import LegalPage from '../components/layouts/LegalPage.vue';
</script>
