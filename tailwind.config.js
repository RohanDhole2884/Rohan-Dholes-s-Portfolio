/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          900: '#050508',
          800: '#07070a',
          700: '#0a0a0f',
          600: '#0f0f1a',
          500: '#111118',
          400: '#1a1a2e',
          300: '#1e1e2e',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee-left': 'marqueeLeft var(--duration) linear infinite',
        'marquee-right': 'marqueeRight var(--duration) linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.3 },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-186px * var(--items)))' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(calc(-186px * var(--items)))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
