import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchRecipes } from '../src/composables/useRecipes';

describe('fetchRecipes', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('returns the parsed recipe list', async () => {
    const payload = { recipes: [{ id: 1, name: 'Soup' }] };
    const okResponse = { ok: true, status: 200, json: async () => payload };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => okResponse)
    );

    await expect(fetchRecipes()).resolves.toEqual(payload);
  });

  it('rejects when the API answers with an error status', async () => {
    const failedResponse = { ok: false, status: 503, json: async () => ({}) };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => failedResponse)
    );

    await expect(fetchRecipes()).rejects.toThrow('Recipes request failed: 503');
  });
});
