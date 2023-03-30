/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js, ejs}", "**/**/*.{html, js, ejs}"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        darkPurpleValhalla: 'RGB(36, 21, 69)',
        darkBlueBigStone: 'RGB(23, 37, 64)',
        brightTurquoise: 'RGB(21, 204, 237)',
        cyanPictonBlue: 'RGB(58, 215, 232)',
        blueDenim: 'RGB(19, 122, 172)',
        fuschiaCabaret: 'RGB(212, 81, 112)',
        palePinkCancan: 'RGB(212, 135, 164)'
      },
      fontSize: {
        '12xl': '10rem'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Potra: ['Potra', 'Roboto', 'sans-serif']
    },
  },
  plugins: [],
}

// Color palette 1:
// Valhalla (#241545): RGB(36, 21, 69)
// Cabaret (#D45170): RGB(212, 81, 112)
// Bright Turquoise (#15CCED): RGB(21, 204, 237)
// Denim (#1259B8): RGB(18, 89, 184)

// Color palette 2:
// Big Stone (#172540): RGB(23, 37, 64)
// Can Can (#D487A4): RGB(212, 135, 164)
// Picton Blue (#3AD7E8): RGB(58, 215, 232)
// Denim (#137AAC): RGB(19, 122, 172)