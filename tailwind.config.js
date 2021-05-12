module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        custom : ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#4A6572',
        'secondary-blue': '#344955',
        'tertiary-blue': '#232F34',
        'primary-orange': '#F9AA33',
        'secondary-orange': '#ffd942',
        'tertiary-orange': '#fdeb5d',
        'quaternary-orange': '#fff9c6',
        'primary-dark': '#121212',
        'secondary-dark': '#1e1e1e',
        'tertiary-dark': '#212121',
        'quarternary-dark': '#272727'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
