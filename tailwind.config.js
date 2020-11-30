const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        light: "#A4E0D2",
        DEFAULT: "#39A78E",
        dark: "#246A5A"
      },
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
