/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",                // Pointing to the main HTML file in the project root
    "./src/**/*.{html,js}",         // All HTML and JS files in the /tailwind/src directory
    "../js/**/*.{js,html}",         // All JS files in the /js directory in the project root
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1E1E2F',
        'primary-text': '#FFFFFF',
        'secondary-text': '#A0A0A0',
        'accent': '#FF3E3E',
        'card-background': '#282845',
      },
    },
  },
  plugins: [],
}