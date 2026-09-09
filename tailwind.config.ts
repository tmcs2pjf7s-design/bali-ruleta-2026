import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light, warm paper base
        paper:  '#fbf8f3',
        paper2: '#f3ede1',
        ink:    '#221e18',
        muted:  '#7c7264',
        line:   '#e6ddcd',
        // Primary accent
        wine:  { DEFAULT: '#b31942', light: '#cf2b57', dark: '#8a1233' },
        // Course accents (also available as utilities)
        teal:   '#0e7c7b',
        ocean:  '#2563a8',
        leaf:   '#4f7a2f',
        amber:  '#d97528',
        claret: '#b31942',
        violet: '#7b3aa8',
      },
      fontFamily: {
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp .7s cubic-bezier(.16,1,.3,1) forwards',
        'fade-in': 'fadeIn .6s ease forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}

export default config
