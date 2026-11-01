import { watchEffect, type MaybeRefOrGetter, toValue } from 'vue';

const SITE_NAME = 'The Minute Book';

/** Keep document.title in step with the page (WCAG 2.4.2). */
export const usePageTitle = (title: MaybeRefOrGetter<string | undefined>) => {
  watchEffect(() => {
    const pageTitle = toValue(title);
    document.title = pageTitle ? `${pageTitle} · ${SITE_NAME}` : SITE_NAME;
  });
};
