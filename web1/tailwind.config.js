/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        neumorphic: {
          bg: '#E0E5EC',
          light: '#FFFFFF',
          dark: '#A3B1C6'
        }
      },
      boxShadow: {
        'neumorph-inset': 'inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF',
        'neumorph-outset': '8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF',
        'neumorph-hover': '12px 12px 24px #A3B1C6, -12px -12px 24px #FFFFFF',
        'neumorph-pressed': 'inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF'
      },
      borderRadius: {
        'neumorphic': '32px'
      },
      animation: {
        'intro-zoom': 'introZoom 2s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'lift': 'lift 0.3s ease-out forwards',
        'press': 'press 0.15s ease-out forwards'
      },
      keyframes: {
        introZoom: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        fadeIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        lift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' }
        },
        press: {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(2px)' }
        }
      },
      transitionDuration: {
        '300': '300ms'
      }
    },
  },
  plugins: [],
}