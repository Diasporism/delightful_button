/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#353648',
        'purple': '#DBC4F0',
        'eggshell': '#FAF3F0'
      },
    },
  },
  plugins: [],
}
