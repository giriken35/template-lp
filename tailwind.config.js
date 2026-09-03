/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        card: '#1a1a1a',
        border: '#2a2a2a',
        foreground: '#f8fafc',
        muted: {
          DEFAULT: '#8f9ba8',
          foreground: '#a1a1aa',
        },
        primary: {
          DEFAULT: '#10b981', // Emerald 500
          hover: '#059669',   // Emerald 600
        },
        brand: {
          DEFAULT: '#10b981',
          2: '#06b6d4', // Cyan 500
        }
      }
    },
  },
  plugins: [],
}
