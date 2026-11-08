import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import MinuteBand from '../src/components/recipes/MinuteBand.vue';

const recipe = { id: 1, name: 'Pie', prepTimeMinutes: 10, cookTimeMinutes: 5 };

const blockClasses = (isOnPanel = false) =>
  mount(MinuteBand, { props: { recipe, isOnPanel } })
    .findAll('span')
    .map((block) => block.classes().find((name) => name.startsWith('bg-')));

describe('MinuteBand', () => {
  it('draws prep, then cook, then idle blocks on an 18-block track', () => {
    const classes = blockClasses();

    expect(classes).toHaveLength(18);
    expect(classes.slice(0, 3)).toEqual(['bg-ink', 'bg-ink', 'bg-cook']);
    expect(classes.slice(3).every((name) => name === 'bg-panel')).toBe(true);
  });

  it('uses paper for idle blocks on the panel tone', () => {
    const classes = blockClasses(true);
    expect(classes[classes.length - 1]).toBe('bg-paper');
  });
});
