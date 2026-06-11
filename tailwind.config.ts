import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — derived from Mầm Xanh logo
        orange: {
          50:  '#FFF4EA',
          100: '#FFE2C7',
          200: '#FFC591',
          300: '#FFA84A',
          400: '#F58220', // PRIMARY orange (hand + outer C)
          500: '#E36B11',
          600: '#C45709',
          700: '#9A4307',
          800: '#6E2F05',
          900: '#481E03',
        },
        leaf: {
          50:  '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#A5D6A7',
          400: '#8BC34A', // light sprout leaves
          500: '#66BB6A', // mid sprout
          600: '#4CAF50', // PRIMARY green
          700: '#388E3C',
          800: '#2E7D32', // deep green (gradient end)
          900: '#1B5E20',
        },
        sunny: {
          DEFAULT: '#FFC107', // sparkle yellow
          light:   '#FFE082',
          soft:    '#FFF8E1',
        },
        cream:  '#FFFBF5',
        ink: {
          900: '#1F2A14',
          700: '#3D4A2A',
          500: '#6B7556',
          300: '#A5AC95',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft:  '0 4px 14px rgba(245, 130, 32, .12)',
        warm:  '0 12px 30px rgba(245, 130, 32, .18)',
        leaf:  '0 12px 30px rgba(76, 175, 80, .18)',
        ring:  '0 24px 60px rgba(245, 130, 32, .22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float:       'float 14s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
        'fade-up':   'fade-up .7s cubic-bezier(.2,.7,.3,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
