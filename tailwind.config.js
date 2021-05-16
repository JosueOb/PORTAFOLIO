module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom : ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#F9AA33',
        'secondary-orange': '#ffd942',
        'tertiary-orange': '#fdeb5d',
        'quaternary-orange': '#fff9c6',
        'primary-dark': '#121212',
        'secondary-dark': '#1e1e1e',
        'tertiary-dark': '#212121',
        'quarternary-dark': '#272727',
        //ligth mode
        'light-surface': '#ffff',
        'light-backgound': '#f3f4f6',
        //dark mode
        'dark-surface': '#000000',
        'dark-background': '#121212',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
