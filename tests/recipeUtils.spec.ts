import { describe, expect, it } from 'vitest';
import {
  formatIngredient,
  formatInstructions,
  filterByMinutes,
  getDisplayedRecipes,
  getMinuteBlocks,
  getRandomRecipe,
  getRecipeImageUrl,
  getTotalMinutes,
  previewText,
  type Recipe,
} from '../src/utils/recipeUtils';

const makeRecipes = (count: number): Recipe[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Dish ${i + 1}`,
  }));

describe('getRecipeImageUrl', () => {
  it('uses the recipe image when present', () => {
    expect(getRecipeImageUrl({ id: 1, name: 'Soup', image: 'soup.jpg' })).toBe(
      'soup.jpg'
    );
  });

  it('falls back to an encoded name query', () => {
    expect(getRecipeImageUrl({ id: 1, name: 'Mac & Cheese' })).toBe(
      'https://source.unsplash.com/800x600/?Mac%20%26%20Cheese'
    );
  });

  it('falls back to "food" without a recipe', () => {
    expect(getRecipeImageUrl(null)).toBe(
      'https://source.unsplash.com/800x600/?food'
    );
  });
});

describe('previewText', () => {
  it('keeps short text unchanged', () => {
    expect(previewText('short', 10)).toBe('short');
  });

  it('truncates long text with an ellipsis', () => {
    expect(previewText('abcdefghij', 4)).toBe('abcd…');
  });

  it('joins arrays and handles empty input', () => {
    expect(previewText(['a', 'b'])).toBe('a b');
    expect(previewText(undefined)).toBe('');
  });
});

describe('formatInstructions', () => {
  it('joins step arrays with spaces', () => {
    expect(formatInstructions(['Boil.', 'Serve.'])).toBe('Boil. Serve.');
  });

  it('returns an empty string for null', () => {
    expect(formatInstructions(null)).toBe('');
  });
});

describe('getRandomRecipe', () => {
  it('returns null for an empty list', () => {
    expect(getRandomRecipe([])).toBeNull();
  });

  it('returns one of the given recipes', () => {
    const recipes = makeRecipes(3);
    expect(recipes).toContain(getRandomRecipe(recipes));
  });
});

describe('getDisplayedRecipes', () => {
  it('limits the list when there is no featured recipe', () => {
    expect(getDisplayedRecipes(makeRecipes(10), null)).toHaveLength(6);
  });

  it('excludes the featured recipe', () => {
    const recipes = makeRecipes(4);
    const displayed = getDisplayedRecipes(recipes, recipes[1], 6);
    expect(displayed.map((recipe) => recipe.id)).toEqual([1, 3, 4]);
  });
});

describe('formatIngredient', () => {
  it('drops a leading number or fraction', () => {
    expect(formatIngredient('2 eggs')).toBe('eggs');
    expect(formatIngredient('1/2 cup flour')).toBe('cup flour');
    expect(formatIngredient('0.5 lemon')).toBe('lemon');
  });

  it('keeps ingredients that start with a word', () => {
    expect(formatIngredient('black pepper')).toBe('black pepper');
  });

  it('keeps a lone number and handles empty input', () => {
    expect(formatIngredient('2')).toBe('2');
    expect(formatIngredient(null)).toBe('');
  });
});

describe('getTotalMinutes', () => {
  it('adds prep and cook time', () => {
    expect(
      getTotalMinutes({
        id: 1,
        name: 'Soup',
        prepTimeMinutes: 10,
        cookTimeMinutes: 25,
      })
    ).toBe(35);
  });

  it('treats missing times as zero', () => {
    expect(getTotalMinutes({ id: 1, name: 'Salad', prepTimeMinutes: 5 })).toBe(
      5
    );
    expect(getTotalMinutes(null)).toBe(0);
  });
});

describe('filterByMinutes', () => {
  const timed: Recipe[] = [
    { id: 1, name: 'Slow', prepTimeMinutes: 20, cookTimeMinutes: 40 },
    { id: 2, name: 'Quick', prepTimeMinutes: 5, cookTimeMinutes: 5 },
    { id: 3, name: 'Middle', prepTimeMinutes: 10, cookTimeMinutes: 20 },
  ];

  it('keeps recipes that fit, quickest first', () => {
    expect(filterByMinutes(timed, 30).map((recipe) => recipe.id)).toEqual([
      2, 3,
    ]);
  });

  it('keeps everything when no limit is given', () => {
    expect(filterByMinutes(timed, null).map((recipe) => recipe.id)).toEqual([
      2, 3, 1,
    ]);
  });

  it('does not mutate the input', () => {
    filterByMinutes(timed, null);
    expect(timed.map((recipe) => recipe.id)).toEqual([1, 2, 3]);
  });
});

describe('getMinuteBlocks', () => {
  it('rounds each phase up to whole five-minute blocks', () => {
    expect(
      getMinuteBlocks({
        id: 1,
        name: 'Pie',
        prepTimeMinutes: 12,
        cookTimeMinutes: 30,
      })
    ).toEqual({ prep: 3, cook: 6 });
  });
});
