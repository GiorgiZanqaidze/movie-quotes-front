/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '700px',
      md: '1224px',
      lg: '1920px'
    },
    fontFamily: {
      helventica_bold: ['helventica_eng_light', 'helventica_geo_bold'],
      helventica_light: ['helventica_eng_light', 'helventica_geo_light']
    },

    extend: {
      colors: {
        darkRed: '#E31221',
        lightGrey: '#DDCCAA',
        darkGray: '#222030',
        mediumGray: '#6C757D',
        lightDark: '#CED4DA',
        mediumDark: '#181624',
        mediumBlue: '#0D6EFD',
        gray: '#24222F',
        darkBlack: '#11101A',
        light: '#EFEFEF4D',
        mediumRed: '#9747FF66',
        lightBlue: '#198754',
        lightBlack: '#12101A'
      }
    }
  },
  plugins: []
}
