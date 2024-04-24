const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
    require('preline/plugin'),
  ],
};