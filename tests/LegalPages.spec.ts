import { describe, expect, it } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import AccessibilityPage from '../src/pages/accessibility.vue';
import PrivacyPage from '../src/pages/privacy-policy.vue';
import TermsPage from '../src/pages/terms.vue';
import NavLinks from '../src/components/layouts/Footer/NavLinks.vue';
import Copyright from '../src/components/layouts/Footer/Copyright.vue';

const stubs = { RouterLink: RouterLinkStub };

const pages = [
  { page: AccessibilityPage, heading: 'Accessibility' },
  { page: PrivacyPage, heading: 'Privacy' },
  { page: TermsPage, heading: 'Terms' },
];

describe('legal pages', () => {
  it.each(pages)(
    '$heading has one h1 and its own title',
    ({ page, heading }) => {
      const wrapper = mount(page, { global: { stubs } });
      const headings = wrapper.findAll('h1');
      expect(headings).toHaveLength(1);
      expect(headings[0]?.text()).toBe(heading);
      expect(document.title).toBe(`${heading} · The Minute Book`);
      expect(wrapper.find('time').attributes('datetime')).toBe('2026-11-01');
    }
  );

  it('dates the pages 1 November 2026', () => {
    const wrapper = mount(AccessibilityPage, { global: { stubs } });
    expect(wrapper.find('time').text()).toBe('1 November 2026');
  });
});

describe('footer', () => {
  it('links to all three legal pages', () => {
    const targets = mount(NavLinks, { global: { stubs } })
      .findAllComponents(RouterLinkStub)
      .map((link) => link.props('to'));
    expect(targets).toEqual(
      expect.arrayContaining(['/accessibility', '/privacy-policy', '/terms'])
    );
  });

  it('links to the GitHub repository', () => {
    const link = mount(Copyright).find('a');
    expect(link.attributes('href')).toBe(
      'https://github.com/sg208/sg-vue3-fancy'
    );
    expect(link.text()).toContain('GitHub');
  });
});
