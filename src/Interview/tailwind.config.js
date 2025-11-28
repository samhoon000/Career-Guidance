/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        muted: '#f5f7fb',
        text: '#0f1724',
        accent: '#6B21A8',
      },
      borderRadius: {
        'card': '16px',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #BDE0FE 0%, #E9D5FF 100%)',
      },
    },
  },
  plugins: [],
}



