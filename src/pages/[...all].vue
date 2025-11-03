<template>
  <div class="min-h-screen bg-white text-gray-900">
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <router-link
          to="/"
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Go Back Home
        </router-link>
      </div>
    </div>
  </div>
</template>
