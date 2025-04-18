/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        richblack: {
          100: '#666666',
          700: '#2C333F',
          900: '#000000'
        },
        blue: {
          100: '#47A5C5'
        },
        yellow: {
          50: '#FFD60A'
        }
      }
    },
  },
  plugins: [],
};