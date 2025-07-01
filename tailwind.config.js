/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'glow-tight': '0 0 4px rgba(59, 130, 246, 0.8)',
        'glow-strong': '0 0 8px rgba(59, 130, 246, 0.6)',
        neon: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

