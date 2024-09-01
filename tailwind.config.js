/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        'primary-blue': '#1F499E',
        'primary-orange': '#F59121'
      },
      fontFamily:{
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Georgia', 'ui-serif', 'Georgia'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New']
      }
    }
  }
}

