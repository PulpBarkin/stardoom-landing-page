import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // mirrors src/theme.ts in the mobile app
        wine: {
          DEFAULT: '#2A0A14',
          dark: '#1A0606',
          glow: 'rgba(255,213,107,0.08)',
        },
        cream: {
          DEFAULT: '#FBF2E3',
          dim: 'rgba(251,242,227,0.65)',
          fade: 'rgba(251,242,227,0.4)',
        },
        gold: '#FFD56B',
        cosmic: '#C4A8FF',
        doom: '#C0392B',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
