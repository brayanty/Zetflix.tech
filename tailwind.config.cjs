/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      margin: {
        '0-auto': '0 auto'
      },
      fontFamily: {
        primaryRegular: ['Regular', 'sans-serif'],
        primaryMedium: ['Medium', 'sans-serif'],
        primarybold: ['Bold', 'sans-serif'],
        titleSemiBold: ['PixelifySans-Semibold'],
        Filano: ['filano']
      }
    }
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    }
  ]
}
