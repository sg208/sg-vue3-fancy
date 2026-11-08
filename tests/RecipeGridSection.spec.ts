import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import RecipeGridSection from '../src/components/sections/RecipeGridSection.vue';

const mountGrid = (props: Record<string, unknown>) =>
  mount(RecipeGridSection, {
    props,
    global: { stubs: { TimeFilter: true, RecipeCard: true } },
  });

describe('RecipeGridSection', () => {
  it('says the book could not be loaded when the request failed', () => {
    const wrapper = mountGrid({ recipes: [], error: new Error('offline') });

    expect(wrapper.find('[role=alert]').text()).toContain(
      'The recipes could not be loaded.'
    );
    expect(wrapper.text()).toContain('The book could not be loaded.');
    expect(wrapper.text()).not.toContain('Nothing in the book is that quick');
  });

  it('keeps showing cached recipes when a background refetch fails', () => {
    const wrapper = mountGrid({
      recipes: [{ id: 1, name: 'Soup', prepTimeMinutes: 5 }],
      error: new Error('offline'),
    });

    expect(wrapper.find('[role=alert]').exists()).toBe(false);
    expect(wrapper.text()).not.toContain('The book could not be loaded.');
  });

  it('shows skeleton rows while loading', () => {
    const wrapper = mountGrid({ recipes: [], isLoading: true });

    expect(wrapper.text()).toContain('Loading the book…');
    expect(wrapper.find('[role=alert]').exists()).toBe(false);
  });
});
