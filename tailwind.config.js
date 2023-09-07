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
        'eggshell': '#FAF3F0',
        'purple': '#DBC4F0',
        'pink': '#E893CF',
        'yellow': '#F2BE22',
        'red': '#FF6666',
        'blue': '#00C4FF',
        'green': '#00DFA2',
      },
    },
  },
  plugins: [],
}
