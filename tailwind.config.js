/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'white-brand': '#f7f7f7',
        'gray-brand': '#959799',
        'gray-text': 'rgba(0, 0, 0, 0.3)',
        'gray-input': '#DDDDDD',
        'gray-button': '#C7C9CC',
        'wine-brand': '#630A37',
        'gray-helper': '#797979'
      },
      borderRadius: {
        opea: '4px'
      }
    }
  },
  plugins: []
}
