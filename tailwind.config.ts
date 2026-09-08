import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nocturnal base
        obsidian: '#0a0806',
        void:     '#100c09',
        surface:  '#16110d',
        card:     '#1c1611',
        border:   '#2a2018',
        // Warm accents
        wine:  { DEFAULT: '#7d1128', light: '#a8324a', dark: '#4c0a19' },
        gold:  { DEFAULT: '#c69749', light: '#e0b567', dim: '#8a6a34' },
        bone:  '#ece3d2',
        cream: '#d9ccb2',
        dim:   '#8a7d68',
      },
      fontFamily: {
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':   'fadeUp .7s cubic-bezier(.16,1,.3,1) forwards',
        'fade-in':   'fadeIn .6s ease forwards',
        'grain':     'grain .8s steps(2) infinite',
        'drift':     'drift 14s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-3%,2%)' },
          '40%': { transform: 'translate(2%,-3%)' },
          '60%': { transform: 'translate(-2%,-2%)' },
          '80%': { transform: 'translate(3%,1%)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(2%,-2%) scale(1.05)' },
        },
      },
      boxShadow: {
        'plate': '0 30px 80px -20px rgba(0,0,0,.7), 0 0 0 1px rgba(198,151,73,.08)',
        'glow':  '0 0 60px -10px rgba(125,17,40,.45)',
      },
    },
  },
  plugins: [],
}

export default config
