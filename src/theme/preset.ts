import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/*
  "Newsprint and brass": one paper scale serves as both the primary and the
  surface palette, so PrimeVue widgets print in the page's own ink. Brass is
  kept for the single selected state (see `--color-brass` in tailwind.css).
*/
const paper = {
  0: '#f4f4f0',
  50: '#eeeee9',
  100: '#e8e8e3',
  200: '#dcdcd6',
  300: '#c8c7c0',
  400: '#a3a29a',
  500: '#7f7e77',
  600: '#63625c',
  700: '#4a4945',
  800: '#2e2d2a',
  900: '#22211e',
  950: '#181715',
};

const brass = { light: '#bfb21a', dark: '#cfc22a' };

// Tokens that differ between the light and dark scheme, written once.
const scheme = (mode: 'light' | 'dark') => {
  const isLight = mode === 'light';
  return {
    surface: paper,
    primary: {
      color: isLight ? '{primary.950}' : '{primary.100}',
      contrastColor: isLight ? '{primary.100}' : '{primary.950}',
      hoverColor: isLight ? '{primary.800}' : '{primary.0}',
      activeColor: isLight ? '{primary.700}' : '{primary.200}',
    },
    text: {
      color: isLight ? '{surface.950}' : '{surface.100}',
      hoverColor: isLight ? '{surface.950}' : '{surface.0}',
      mutedColor: isLight ? '{surface.700}' : '{surface.400}',
      hoverMutedColor: isLight ? '{surface.700}' : '{surface.300}',
    },
    content: {
      background: isLight ? '{surface.100}' : '{surface.950}',
      hoverBackground: isLight ? '{surface.200}' : '{surface.900}',
      borderColor: isLight ? '{surface.300}' : '{surface.800}',
    },
    highlight: {
      background: brass[mode],
      focusBackground: brass[mode],
      color: '{surface.950}',
      focusColor: '{surface.950}',
    },
    formField: {
      background: isLight ? '{surface.0}' : '{surface.900}',
      filledBackground: isLight ? '{surface.50}' : '{surface.800}',
      borderColor: isLight ? '{surface.600}' : '{surface.500}',
      hoverBorderColor: isLight ? '{surface.950}' : '{surface.200}',
      color: '{text.color}',
      placeholderColor: '{text.muted.color}',
      shadow: 'none',
    },
  };
};

const toggleScheme = (mode: 'light' | 'dark') => {
  const ground = mode === 'light' ? '{surface.200}' : '{surface.900}';
  return {
    root: {
      background: ground,
      hoverBackground: ground,
      checkedBackground: ground,
      borderColor: ground,
      checkedBorderColor: ground,
      color: mode === 'light' ? '{surface.700}' : '{surface.300}',
      hoverColor: '{text.color}',
      // Light: ink fill, since brass on the ground is only ~1.6:1.
      checkedColor: mode === 'light' ? '{surface.0}' : '{surface.950}',
    },
    content: {
      checkedBackground: mode === 'light' ? '{surface.950}' : brass.dark,
    },
  };
};

export const minuteBookPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '2px',
      md: '2px',
      lg: '2px',
      xl: '2px',
    },
  },
  semantic: {
    transitionDuration: '0.18s',
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px',
      shadow: 'none',
    },
    primary: paper,
    formField: { paddingX: '0.875rem', paddingY: '0.75rem' },
    colorScheme: { light: scheme('light'), dark: scheme('dark') },
  },
  components: {
    togglebutton: {
      root: { padding: '0.25rem' },
      content: { padding: '0.5rem 0.875rem', checkedShadow: 'none' },
      colorScheme: { light: toggleScheme('light'), dark: toggleScheme('dark') },
    },
    tabs: {
      tablist: {
        background: 'transparent',
        borderColor: 'transparent',
        borderWidth: '0',
      },
      tab: {
        borderWidth: '0',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        activeBorderColor: 'transparent',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        fontWeight: '500',
        padding: '0.75rem 1.25rem 0.75rem 0',
      },
      tabpanel: { background: 'transparent', padding: '1.25rem 0 0 0' },
      // Cook brass: 3:1+ against paper in both schemes, unlike light brass.
      activeBar: { height: '3px', background: '#7a700b' },
    },
    card: {
      root: { shadow: 'none' },
      colorScheme: {
        light: { root: { background: '{surface.0}' } },
        dark: { root: { background: '{surface.900}' } },
      },
    },
    button: {
      root: {
        label: { fontWeight: '500' },
        lg: { fontSize: '1.0625rem', paddingX: '1.5rem', paddingY: '0.875rem' },
      },
    },
  },
});
