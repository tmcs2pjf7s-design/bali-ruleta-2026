import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:  '#0a0908',
        ink:    '#100f0d',
        char:   '#1a1815',   // charcoal panel
        line:   '#2c2823',   // hairline
        ivory:  '#f2ede2',
        mist:   '#a89f92',   // muted text
        gold:   { DEFAULT: '#c6a15b', dim: '#8c7038', deep: '#6f5827' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.26em',
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
