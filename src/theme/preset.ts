import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/*
  "Newsprint and brass": one paper scale serves as both the primary and the
  surface palette, so PrimeVue widgets print in the page's own ink. Brass is
  kept for the single selected state (see `--accent` in tailwind.css).
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

const brass = 'light-dark(#bfb21a, #cfc22a)';

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
    primary: {
      ...paper,
      color: 'light-dark({primary.950}, {primary.100})',
      contrastColor: 'light-dark({primary.100}, {primary.950})',
      hoverColor: 'light-dark({primary.800}, {primary.0})',
      activeColor: 'light-dark({primary.700}, {primary.200})',
    },
    surface: paper,
    text: {
      color: 'light-dark({surface.950}, {surface.100})',
      hoverColor: 'light-dark({surface.950}, {surface.0})',
      mutedColor: 'light-dark({surface.700}, {surface.400})',
      hoverMutedColor: 'light-dark({surface.700}, {surface.300})',
    },
    content: {
      background: 'light-dark({surface.100}, {surface.950})',
      hoverBackground: 'light-dark({surface.200}, {surface.900})',
      borderColor: 'light-dark({surface.300}, {surface.800})',
    },
    highlight: {
      background: brass,
      focusBackground: brass,
      color: '{surface.950}',
      focusColor: '{surface.950}',
    },
    formField: {
      fontSize: '1rem',
      paddingX: '0.875rem',
      paddingY: '0.75rem',
      background: 'light-dark({surface.0}, {surface.900})',
      filledBackground: 'light-dark({surface.50}, {surface.800})',
      borderColor: 'light-dark({surface.600}, {surface.500})',
      hoverBorderColor: 'light-dark({surface.950}, {surface.200})',
      focusBorderColor: '{primary.color}',
      color: '{text.color}',
      placeholderColor: '{text.muted.color}',
      shadow: 'none',
    },
  },
  components: {
    togglebutton: {
      root: {
        background: 'light-dark({surface.200}, {surface.900})',
        hoverBackground: 'light-dark({surface.200}, {surface.900})',
        checkedBackground: 'light-dark({surface.200}, {surface.900})',
        borderColor: 'light-dark({surface.200}, {surface.900})',
        checkedBorderColor: 'light-dark({surface.200}, {surface.900})',
        color: 'light-dark({surface.700}, {surface.300})',
        hoverColor: '{text.color}',
        checkedColor: '{surface.950}',
        fontSize: '1rem',
        padding: '0.25rem',
      },
      content: {
        padding: '0.5rem 0.875rem',
        checkedBackground: brass,
        checkedShadow: 'none',
      },
    },
    tabs: {
      tablist: { background: 'transparent', borderColor: 'transparent' },
      tab: {
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        fontWeight: '500',
        fontSize: '1rem',
        padding: '0.75rem 1.25rem 0.75rem 0',
      },
      tabpanel: { background: 'transparent', padding: '1.25rem 0 0 0' },
      activeBar: { height: '3px', background: brass },
    },
    card: {
      root: {
        background: 'light-dark({surface.0}, {surface.900})',
        shadow: 'none',
      },
      subtitle: { color: '{text.muted.color}' },
    },
    button: {
      root: {
        label: { fontWeight: '500' },
        lg: { fontSize: '1.0625rem', paddingX: '1.5rem', paddingY: '0.875rem' },
      },
    },
  },
});
