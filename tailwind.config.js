/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './@/src/**/*.{js,jsx}',
    './@/node_modules/preline/dist/*.js',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
       fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
     backgroundImage: {
      'customer': "url('/images/custormer-section.svg')",
      'services': "url('/images/services.svg')",
      'wave': "url('/images/wave.svg')",
    },
     
  },
  plugins: [require("tailwindcss-animate"),
  require('@tailwindcss/forms'),
  require('preline/plugin'),  ],
  
}
};