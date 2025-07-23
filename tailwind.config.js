/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores Neubrutalist
        'neubrutalist-yellow': '#FFFF00',
        'neubrutalist-pink': '#FF1493',
        'neubrutalist-lime': '#32FF32',
        'neubrutalist-blue': '#0080FF',
        'neubrutalist-red': '#FF0000',
        'neubrutalist-black': '#000000',
        'neubrutalist-white': '#FFFFFF',
        'neubrutalist-orange': '#FF8C00',
        'neubrutalist-purple': '#8A2BE2',
      },
      fontFamily: {
        'brutal': ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        'brutal-xl': ['4rem', { lineHeight: '1', fontWeight: '900' }],
        'brutal-lg': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
        'brutal-md': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'brutal-sm': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-pink': '8px 8px 0px 0px #FF1493',
        'brutal-blue': '8px 8px 0px 0px #0080FF',
        'brutal-red': '8px 8px 0px 0px #FF0000',
        'brutal-lime': '8px 8px 0px 0px #32FF32',
        'brutal-orange': '8px 8px 0px 0px #FF8C00',
      },
      borderWidth: {
        'brutal': '4px',
        'brutal-thick': '6px',
      },
      animation: {
        'bounce-brutal': 'bounce 1s infinite',
        'pulse-brutal': 'pulse 2s infinite',
      }
    },
  },
  plugins: [],
}
