import { ref } from 'vue';

const STORAGE_KEY = 'minute-book-scheme';
const DARK_CLASS = 'app-dark';

const readStoredScheme = (): string | null => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const prefersDark = (): boolean =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const isDark = ref(false);

const applyScheme = (shouldBeDark: boolean) => {
  isDark.value = shouldBeDark;
  document.documentElement.classList.toggle(DARK_CLASS, shouldBeDark);
};

/** Apply the stored or system colour scheme before the app mounts. */
export const initColorScheme = () => {
  const stored = readStoredScheme();
  applyScheme(stored ? stored === 'dark' : prefersDark());

  window
    .matchMedia?.('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      if (!readStoredScheme()) applyScheme(event.matches);
    });
};

export const useColorScheme = () => {
  const handleToggle = () => {
    applyScheme(!isDark.value);
    try {
      window.localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light');
    } catch {
      // Storage can be blocked; the choice then lasts for this visit only.
    }
  };

  return { isDark, handleToggle };
};

export const DARK_MODE_SELECTOR = `.${DARK_CLASS}`;
