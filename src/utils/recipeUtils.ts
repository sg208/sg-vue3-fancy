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
  caloriesPerServing?: number;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  mealType?: string[];
  [key: string]: unknown;
}

const PLACEHOLDER_IMAGE_URL = '/recipe-placeholder.svg';

/** The recipe photo, or the local placeholder when the API sends none. */
export const getRecipeImageUrl = (recipe: Recipe | null | undefined): string =>
  recipe?.image ?? PLACEHOLDER_IMAGE_URL;

/** Joins step arrays and cuts the text at maxLength with an ellipsis. */
export const previewText = (
  text: string | string[] | null | undefined,
  maxLength = 220
): string => {
  const joinedText = Array.isArray(text) ? text.join(' ') : String(text || '');
  if (joinedText.length <= maxLength) return joinedText;
  return joinedText.slice(0, maxLength) + '…';
};

export const getRandomRecipe = (recipes: Recipe[]): Recipe | null => {
  if (!Array.isArray(recipes) || recipes.length === 0) return null;
  return recipes[Math.floor(Math.random() * recipes.length)];
};

/** Prep plus cook minutes; 0 when unknown. */
export const getTotalMinutes = (recipe: Recipe | null | undefined): number =>
  (recipe?.prepTimeMinutes ?? 0) + (recipe?.cookTimeMinutes ?? 0);

/** Keeps recipes that fit in maxMinutes (null keeps all), quickest first. */
export const filterByMinutes = (
  recipes: Recipe[],
  maxMinutes: number | null
): Recipe[] =>
  recipes
    .filter(
      (recipe) => maxMinutes === null || getTotalMinutes(recipe) <= maxMinutes
    )
    .sort((first, second) => getTotalMinutes(first) - getTotalMinutes(second));

/** Splits prep and cook time into blocks (five minutes each by default), rounded up. */
export const getMinuteBlocks = (
  recipe: Recipe | null | undefined,
  blockMinutes = 5
): { prep: number; cook: number } => ({
  prep: Math.ceil((recipe?.prepTimeMinutes ?? 0) / blockMinutes),
  cook: Math.ceil((recipe?.cookTimeMinutes ?? 0) / blockMinutes),
});
