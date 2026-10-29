/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        ink: '#1d1d1f',
        muted: '#6e6e73',
        hairline: '#d2d2d7',
        surface: '#f5f5f7',
        accent: {
          DEFAULT: '#0071e3',
          hover: '#0077ed'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        lift: '0 16px 48px rgba(0, 0, 0, 0.12)'
      },
      animation: {
        marquee: 'marquee 60s linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
