/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '428px',
      md: '1024px',
      lg: '1920px'
    },
    fontFamily: {
      helventica_eng: ['helventica_eng', 'helventica_geo']
    },

    extend: {
      colors: {
        darkRed: '#E31221',
        lightGrey: '#DDCCAA'
      }
    }
  },
  plugins: []
}
