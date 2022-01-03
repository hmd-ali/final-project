module.exports = {
  content: ['./index.html', './src/**/*.{vue, ts, js, tsx, html}'],
  theme: {
    extend: {
      fontFamily: {
        'Fredericko': ['Fredericka the Great', 'cursive'],
        'Monoton': ['Monoton', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'],
        'NeueMachina': ['NeueMachina', 'sans-serif']
      },
      colors: {
        'primary': '#1b1b1b',
        'accent': '#dc3433',
        'secondary-dark': '#222831',
        'secondary-light': '#393E46',
      },
      backgroundImage: {
        'texture': "url('/src/assets/images/hero/texture_720x.webp')"
      }
    },
  },
  plugins: [],
}
