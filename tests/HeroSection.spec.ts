import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HeroSection from '../src/components/sections/HeroSection.vue';

const mountHero = (props: Record<string, unknown>) =>
  mount(HeroSection, {
    props,
    global: { stubs: { Skeleton: true, MinuteBand: true } },
  });

describe('HeroSection', () => {
  it('replaces the skeleton with a message when recipes failed to load', () => {
    const wrapper = mountHero({ featured: null, error: new Error('offline') });

    expect(wrapper.text()).toContain("Today's recipe could not be loaded.");
    expect(wrapper.findComponent({ name: 'Skeleton' }).exists()).toBe(false);
  });

  it('counts the dishes from the data', () => {
    expect(mountHero({ featured: null, count: 30 }).text()).toContain(
      '30 dishes from around the world'
    );
  });

  it('reads naturally before the count is known', () => {
    expect(mountHero({ featured: null }).text()).toContain(
      'Dishes from around the world'
    );
  });
});
