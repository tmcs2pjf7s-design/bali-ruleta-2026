import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        obsidian: '#080810',
        void:     '#0d0d18',
        surface:  '#13131f',
        card:     '#181828',
        border:   '#1e1e32',
        // Accent
        red:  { DEFAULT: '#c0152a', light: '#e8202a', dark: '#8b0000' },
        gold: { DEFAULT: '#c8a030', light: '#e8ba2a', dim: '#8b7020' },
        cream: '#d4c9a8',
        dim:   '#7a7060',
        // Case accent (set via CSS var --ca)
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        mono:    ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp .5s ease forwards',
        'fade-in':    'fadeIn .4s ease forwards',
        'stamp':      'stamp .55s cubic-bezier(.15,1.4,.35,1) forwards',
        'pulse-dot':  'pulseDot 1.5s ease-in-out infinite',
        'grain':      'grain .15s steps(1) infinite',
        'glitch-t':   'glitchTop 4s infinite linear',
        'glitch-b':   'glitchBot 4s infinite linear',
        'shimmer':    'shimmer 1.8s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        stamp:     { from: { opacity: '0', transform: 'scale(1.6) rotate(-4deg)' }, to: { opacity: '1', transform: 'scale(1) rotate(-3deg)' } },
        pulseDot:  { '0%,100%': { opacity: '.4', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.4)' } },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-2%,-2%)' },
          '30%': { transform: 'translate(2%,1%)' },
          '50%': { transform: 'translate(-1%,2%)' },
          '70%': { transform: 'translate(1%,-1%)' },
          '90%': { transform: 'translate(-2%,1%)' },
        },
        glitchTop: {
          '0%,100%': { clip: 'rect(0,900px,0,0)' },
          '20%': { clip: 'rect(14px,900px,20px,0)', transform: 'translate(-2px)' },
          '40%': { clip: 'rect(5px,900px,12px,0)', transform: 'translate(2px)' },
          '60%': { clip: 'rect(0,900px,0,0)' },
        },
        glitchBot: {
          '0%,100%': { clip: 'rect(0,900px,0,0)' },
          '25%': { clip: 'rect(30px,900px,40px,0)', transform: 'translate(2px)' },
          '50%': { clip: 'rect(20px,900px,28px,0)', transform: 'translate(-2px)' },
          '75%': { clip: 'rect(0,900px,0,0)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to:   { backgroundPosition:  '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'case':  '0 20px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(200,160,48,.06)',
        'glow-r': '0 0 40px rgba(192,21,42,.3)',
        'glow-g': '0 0 40px rgba(200,160,48,.25)',
      },
    },
  },
  plugins: [],
}

export default config
