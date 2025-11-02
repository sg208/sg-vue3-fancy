<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-orange-50 to-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
            Featured Recipe
          </p>
          <h1 class="text-5xl font-bold text-gray-900">
            Discover Today's <span class="italic font-serif">Special</span>
          </h1>
          <p class="text-gray-600 mt-3">Handpicked recipes that bring joy to your kitchen</p>
        </div>

        <div v-if="loading" class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2 h-80 bg-gray-200 animate-pulse"></div>
            <div class="md:w-1/2 p-8">
              <div class="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
              <div class="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div class="h-20 bg-gray-200 rounded mb-4 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div v-else-if="featured" class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2 relative">
              <img
                :src="imageFor(featured)"
                :alt="featured.name"
                class="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-orange-500 text-sm font-medium"
                    >{{ featured.prepTimeMinutes }} mins</span
                  >
                  <span class="text-green-600 text-sm font-medium">{{ featured.difficulty }}</span>
                </div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ featured.name }}</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ preview(featured.instructions, 180) }}
                </p>
                <div class="mb-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Key Ingredients:</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="ingredient in featured.ingredients.slice(0, 4)"
                      :key="ingredient"
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {{ ingredient.split(" ").slice(1).join(" ") || ingredient }}
                    </span>
                  </div>
                </div>
              </div>
              <router-link
                :to="`/recipe/${featured.id}`"
                class="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-center"
              >
                View Full Recipe
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collection Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
            All Recipes
          </p>
          <h2 class="text-4xl font-bold text-gray-900">
            Explore Our <span class="italic font-serif">Collection</span>
          </h2>
        </div>

        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="n in 6" :key="n" class="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="recipe in displayedRecipes"
            :key="recipe.id"
            :to="`/recipe/${recipe.id}`"
            class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group block"
          >
            <div class="relative">
              <img
                :src="imageFor(recipe)"
                :alt="recipe.name"
                class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {{ recipe.prepTimeMinutes }} mins
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{{ recipe.cuisine }}</span>
                <span>•</span>
                <span>{{ recipe.difficulty }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ recipe.name }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {{ preview(recipe.instructions, 100) }}
              </p>
              <div class="text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                View Recipe
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Newsletter & FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Newsletter -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Ready to cook</h2>
            <h2 class="text-3xl font-bold italic font-serif text-gray-900 mb-4">delicious</h2>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">meals?</h2>
            <p class="text-gray-600 mb-6">
              Subscribe to our newsletter and get weekly recipe inspiration delivered to your inbox.
            </p>
            <div class="flex gap-2">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                @click="subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>

          <!-- FAQ -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6">
              Got questions? Check out our<br />frequently asked questions.
            </h3>
            <div class="space-y-4">
              <button
                class="w-full flex items-center justify-between text-left text-gray-700 hover:text-orange-500 transition-colors py-3 border-b border-gray-200"
              >
                <span>How do I submit a recipe?</span>
                <svg
                  class="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                class="w-full flex items-center justify-between text-left text-gray-700 hover:text-orange-500 transition-colors py-3 border-b border-gray-200"
              >
                <span>Can I save my favorite recipes?</span>
                <svg
                  class="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                class="w-full flex items-center justify-between text-left text-gray-700 hover:text-orange-500 transition-colors py-3 border-b border-gray-200"
              >
                <span>Are the recipes beginner-friendly?</span>
                <svg
                  class="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-4">
            <a href="#" class="text-orange-500 hover:text-orange-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" class="text-orange-500 hover:text-orange-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                />
                <path
                  d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
            <a href="#" class="text-orange-500 hover:text-orange-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
            <a href="#" class="text-orange-500 hover:text-orange-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <router-link to="/contact" class="hover:text-orange-500">Privacy Policy</router-link>
            <router-link to="/terms" class="hover:text-orange-500">Terms & Conditions</router-link>
            <router-link to="/contact" class="hover:text-orange-500">Contact</router-link>
          </div>
          <div class="text-sm text-gray-500">© 2024 RecipeHub. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const loading = ref(true);
const recipes = ref([]);
const featured = ref(null);
const email = ref("");

const displayedRecipes = computed(() => {
  if (!featured.value) return recipes.value.slice(0, 6);
  return recipes.value.filter((r) => r.id !== featured.value.id).slice(0, 6);
});

function imageFor(r) {
  if (r && r.image) return r.image;
  const q = encodeURIComponent(r?.name || "food");
  return `https://source.unsplash.com/800x600/?${q}`;
}

function preview(instructions, max = 220) {
  const text = Array.isArray(instructions) ? instructions.join(" ") : String(instructions || "");
  return text.length > max ? text.slice(0, max) + "…" : text;
}

function subscribe() {
  if (email.value) {
    alert("Thank you for subscribing!");
    email.value = "";
  }
}

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    const list = Array.isArray(data?.recipes) ? data.recipes : [];
    recipes.value = list;
    if (list.length) {
      featured.value = list[Math.floor(Math.random() * list.length)];
    }
  } catch (e) {
    recipes.value = [];
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
