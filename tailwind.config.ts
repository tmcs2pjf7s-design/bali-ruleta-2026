import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Mediterranean base
        paper:     '#f6f2ea', // warm white — page ground
        ivory:     '#f2ece0',
        cream:     '#ece4d5',
        sand:      '#e4dbc8',
        limestone: '#ddd3bf', // panels / media ground
        stone:     '#e9e2d3', // warm grey — reservation contrast
        // Ink family (headings, nav, buttons, details only)
        ink:       '#1c1a16',
        graphite:  '#4a453c', // body text
        warmgrey:  '#8c8474', // muted / small caps
        line:      '#d9cfba', // hairline
        // Champagne — used extremely sparingly
        champ:     { DEFAULT: '#b29469', soft: '#c9b48f' },
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
