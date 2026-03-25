/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        environment: {
          bg: '#091317',
          panel: '#102027',
          panelStrong: '#16353f',
          foam: '#dff8f1',
          water: '#3db7c6',
          river: '#1b7689',
          moss: '#9dd17c',
          silt: '#f0c87b',
          alert: '#ff8f70',
        },
      },
    },
  },
  plugins: [],
}
