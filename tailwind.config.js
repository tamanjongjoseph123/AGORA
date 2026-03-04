/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agora-purple': '#7B2CBF',
        'agora-orange': '#FF6B35',
        'agora-red': '#D62828',
        'agora-dark': '#1a1a1a',
        'agora-light': '#f8f8f8',
      },
      backgroundImage: {
        'agora-gradient': 'linear-gradient(135deg, #7B2CBF 0%, #FF6B35 100%)',
        'agora-gradient-reverse': 'linear-gradient(135deg, #FF6B35 0%, #7B2CBF 100%)',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
