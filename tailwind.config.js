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
      helventica_bold: ['helventica_eng_bold', 'helventica_geo_bold'],
      helventica_light: ['helventica_eng_light', 'helventica_geo_light']
    },

    extend: {
      colors: {
        darkRed: '#E31221',
        lightGrey: '#DDCCAA',
        darkGray: '#222030',
        mediumGray: '#6C757D',
        lightDark: '#CED4DA',
        mediumBlue: '#0D6EFD',
        mediumDark: '#181624',
        gray: '#24222F',
        darkBlack: '#11101A',
        light: '#EFEFEF4D',
        mediumRed: '#9747FF66'
      }
    }
  },
  plugins: []
}
