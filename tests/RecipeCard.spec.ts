import { describe, expect, it } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import RecipeCard from '../src/components/recipes/RecipeCard.vue';

const recipe = {
  id: 7,
  name: 'Pad Thai',
  image: 'pad-thai.jpg',
  cuisine: 'Thai',
  difficulty: 'Easy',
  prepTimeMinutes: 20,
  instructions: ['Soak the noodles.', 'Stir-fry everything together.'],
};

const mountCard = (previewLength?: number) =>
  mount(RecipeCard, {
    props: { recipe, previewLength },
    global: { stubs: { RouterLink: RouterLinkStub } },
  });

describe('RecipeCard', () => {
  it('links to the recipe detail route', () => {
    expect(mountCard().findComponent(RouterLinkStub).props('to')).toBe(
      '/recipe/7'
    );
  });

  it('renders the name, image and meta', () => {
    const wrapper = mountCard();
    expect(wrapper.find('h3').text()).toBe('Pad Thai');
    expect(wrapper.find('img').attributes()).toMatchObject({
      src: 'pad-thai.jpg',
      alt: 'Pad Thai',
    });
    expect(wrapper.text()).toContain('20 mins');
    expect(wrapper.text()).toContain('Thai');
    expect(wrapper.text()).toContain('Easy');
  });

  it('truncates the instructions preview', () => {
    expect(mountCard(10).find('p').text()).toBe('Soak the n…');
  });
});
