import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchRecipes } from '../src/composables/useRecipes';

describe('fetchRecipes', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

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

  it('aborts the request after the timeout', async () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      'fetch',
      vi.fn(
        (_url: string, init: RequestInit) =>
          new Promise((_resolve, reject) => {
            init.signal?.addEventListener('abort', () =>
              reject(new Error('aborted'))
            );
          })
      )
    );

    const pending = expect(fetchRecipes()).rejects.toThrow('aborted');
    await vi.advanceTimersByTimeAsync(10_000);
    await pending;
  });
});
