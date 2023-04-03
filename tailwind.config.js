/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#fc3f5c',
      'gray': '#7c7c7c',
    },
    fontSize: {
      sm: ['13px', '18px'],
      base: ['15px', '22px'],
      lg: ['18px', '26px'],
      xl: ['22px', '30px'],
    },
    spacing: {
      '1': '7px',
      '2': '11px',
      '3': '14px',
      '4': '20px',
      '5': '28px',
      '6': '38px',
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1320px',
      }
    },
    extend: {},
  },
  plugins: [],
}