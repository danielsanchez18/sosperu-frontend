/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D0502',
        'primary': '#FF4500',
        'secondary': '#4E4946',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
