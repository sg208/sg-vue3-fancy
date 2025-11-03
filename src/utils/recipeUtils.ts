/**
 * Utility functions for recipe-related operations
 * Follows Single Responsibility Principle
 */

export interface Recipe {
  id: number;
  name: string;
  image?: string;
  instructions?: string | string[];
  ingredients?: string[];
  cuisine?: string;
  difficulty?: string;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  [key: string]: unknown;
}

/**
 * Get image URL for a recipe
 * @param recipe - The recipe object
 * @returns The image URL
 */
export function getRecipeImageUrl(recipe: Recipe | null | undefined): string {
  if (recipe?.image) return recipe.image;
  const query = encodeURIComponent(recipe?.name || "food");
  return `https://source.unsplash.com/800x600/?${query}`;
}

/**
 * Preview text with max length
 * @param text - The text to preview
 * @param maxLength - Maximum length
 * @returns Preview text
 */
export function previewText(text: string | string[] | null | undefined, maxLength = 220): string {
  const textStr = Array.isArray(text) ? text.join(" ") : String(text || "");
  return textStr.length > maxLength ? textStr.slice(0, maxLength) + "…" : textStr;
}

/**
 * Format instructions as readable text
 * @param instructions - The instructions
 * @returns Formatted instructions
 */
export function formatInstructions(instructions: string | string[] | null | undefined): string {
  if (Array.isArray(instructions)) {
    return instructions.join(" ");
  }
  return String(instructions || "");
}

/**
 * Get a random featured recipe from recipes array
 * @param recipes - Array of recipes
 * @returns Random recipe or null
 */
export function getRandomRecipe(recipes: Recipe[]): Recipe | null {
  if (!Array.isArray(recipes) || recipes.length === 0) return null;
  return recipes[Math.floor(Math.random() * recipes.length)];
}

/**
 * Filter out featured recipe from displayed recipes
 * @param recipes - All recipes
 * @param featuredRecipe - Featured recipe to exclude
 * @param limit - Maximum number of recipes to return
 * @returns Filtered recipes
 */
export function getDisplayedRecipes(
  recipes: Recipe[],
  featuredRecipe: Recipe | null,
  limit = 6
): Recipe[] {
  if (!featuredRecipe) return recipes.slice(0, limit);
  return recipes.filter((r) => r.id !== featuredRecipe.id).slice(0, limit);
}

/**
 * Parse ingredient to display name
 * Removes leading numbers/measurements (e.g., "2 cups", "1/2 tsp") but preserves
 * ingredients that start with words (e.g., "black pepper", "olive oil")
 * @param ingredient - Full ingredient string
 * @returns Display name
 */
export function formatIngredient(ingredient: string | null | undefined): string {
  if (!ingredient || typeof ingredient !== "string") {
    return ingredient || "";
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
