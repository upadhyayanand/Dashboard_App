/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
  // Custom plugin to add utilities for hiding scrollbars
    function name({addUtilities}) {
      const newUtilities = {
        // Hides scrollbars in WebKit browsers (Chrome, Safari, etc.)
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',    // For Internet Explorer and Edge
          'scrollbar-width': 'none'    // For Firefox and Chrome
        },
      }
      addUtilities(newUtilities)    // Adds the new utilities to Tailwind's configuration
    }
  ],
}