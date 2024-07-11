/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#eee8d5',
        'peach': '#dbac98',
        'darkred': '#6b353c',
        'light-beige': '#f3e8d9',
      }
    },
  },
  plugins: [],
}

