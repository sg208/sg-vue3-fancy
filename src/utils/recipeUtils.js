/**
 * Utility functions for recipe-related operations
 * Follows Single Responsibility Principle
 */

/**
 * Get image URL for a recipe
 * @param {Object} recipe - The recipe object
 * @returns {string} The image URL
 */
export function getRecipeImageUrl(recipe) {
  if (recipe?.image) return recipe.image;
  const query = encodeURIComponent(recipe?.name || "food");
  return `https://source.unsplash.com/800x600/?${query}`;
}

/**
 * Preview text with max length
 * @param {string|Array} text - The text to preview
 * @param {number} maxLength - Maximum length
 * @returns {string} Preview text
 */
export function previewText(text, maxLength = 220) {
  const textStr = Array.isArray(text) ? text.join(" ") : String(text || "");
  return textStr.length > maxLength ? textStr.slice(0, maxLength) + "…" : textStr;
}

/**
 * Format instructions as readable text
 * @param {string|Array} instructions - The instructions
 * @returns {string} Formatted instructions
 */
export function formatInstructions(instructions) {
  if (Array.isArray(instructions)) {
    return instructions.join(" ");
  }
  return String(instructions || "");
}

/**
 * Get a random featured recipe from recipes array
 * @param {Array} recipes - Array of recipes
 * @returns {Object|null} Random recipe or null
 */
export function getRandomRecipe(recipes) {
  if (!Array.isArray(recipes) || recipes.length === 0) return null;
  return recipes[Math.floor(Math.random() * recipes.length)];
}

/**
 * Filter out featured recipe from displayed recipes
 * @param {Array} recipes - All recipes
 * @param {Object|null} featuredRecipe - Featured recipe to exclude
 * @param {number} limit - Maximum number of recipes to return
 * @returns {Array} Filtered recipes
 */
export function getDisplayedRecipes(recipes, featuredRecipe, limit = 6) {
  if (!featuredRecipe) return recipes.slice(0, limit);
  return recipes.filter((r) => r.id !== featuredRecipe.id).slice(0, limit);
}

/**
 * Parse ingredient to display name
 * Removes leading numbers/measurements (e.g., "2 cups", "1/2 tsp") but preserves
 * ingredients that start with words (e.g., "black pepper", "olive oil")
 * @param {string} ingredient - Full ingredient string
 * @returns {string} Display name
 */
export function formatIngredient(ingredient) {
  if (!ingredient || typeof ingredient !== "string") {
    return ingredient;
  }
  
  const parts = ingredient.split(" ");
  const firstPart = parts[0];
  
  // Only remove first part if it's a number or fraction (e.g., "2", "1/2", "0.5")
  // Use anchored regex to ensure we match at the start of the first word only
  const isMeasurement = /^(\d+\/\d+|\d+(\.\d+)?)$/.test(firstPart);
  
  if (isMeasurement && parts.length > 1) {
    return parts.slice(1).join(" ") || ingredient;
  }
  
  return ingredient;
}




