const lineClamp = require('@tailwindcss/line-clamp')
const typography = require('@tailwindcss/typography')
const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      mobile: { max: '639px' },
      tablet: { min: '640px', max: '1023px' },
      laptop: { min: '1024px', max: '1279px' },
      desktop: { min: '1280px' },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(88, 88, 88, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(88, 88, 88, 0.1), 0 1px 2px 0 rgba(88, 88, 88, 0.06)',
      md: '0 4px 6px -1px rgba(88, 88, 88, 0.1), 0 2px 4px -1px rgba(88, 88, 88, 0.06)',
      lg: '0 10px 15px -3px rgba(88, 88, 88, 0.1), 0 4px 6px -2px rgba(88, 88, 88, 0.05)',
      xl: '0 20px 25px -5px rgba(88, 88, 88, 0.1), 0 10px 10px -5px rgba(88, 88, 88, 0.04)',
      '2xl': '0 25px 50px -12px rgba(88, 88, 88, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(88, 88, 88, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--color-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--color-primary)',
      },
      gridTemplateColumns: {
        layout: 'minmax(0, auto) minmax(0, 288px)',
      },
      gap: {
        layout: '6rem 3rem',
      },
      boxShadow: {
        card: {
          sm: '0 0 20px -4px rgba(88, 88, 88, 0.1), 0 0 10px -2px rgba(88, 88, 88, 0.075)',
          DEFAULT: '0 0 30px -6px rgba(88, 88, 88, 0.125), 0 0 15px -3px rgba(88, 88, 88, 0.1)',
          lg: '0 0 40px -8px rgba(88, 88, 88, 0.15), 0 0 20px -4px rgba(88, 88, 88, 0.125)',
        },
      },
      fontFamily: {
        brand: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        brand: '#27284B',
        brand2: '#EF5350',
        brandDark: '#38bdf8',
        'background-pink': '#ed3ad7',
        'background-blue': '#112765',
        'background-purple': '#7a0dd0',
        dark: colors.gray,
        primary: colors.sky,
        secondary: colors.pink,
        info: colors.indigo,
        success: colors.emerald,
        alert: colors.amber,
        warn: colors.orange,
        danger: colors.rose,
        error: colors.red,
        white: colors.white,
        bgColor0: '#fc5c65',
        bgColor1: '#26de81',
        bgColor2: '#10b9b1',
        bgColor3: '#10b9b1',
        bgColor4: '#662d91',
        bgColor5: '#fa8231',
        bgColor6: '#4b7bec',
        bgColor7: '#4b7bec',
        bgColor8: '#778ca3',
        bgColor9: '#f7b731',
        bgColor10: '#ea7d7d',
        pilot: '#4b7bec',
        published: '#26de81',
        finished: '#fa8231',
      },
      ringColor: {
        DEFAULT: '#442e4c',
      },
    },
  },
  plugins: [
    typography,
    lineClamp,
    forms,
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.5xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h4: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h5: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h6: {
          fontSize: theme('fontSize.text-lg'),
          fontWeight: theme('fontWeight.bold'),
        },
      })
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
