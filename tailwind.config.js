/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c3c3c3",
        dark: "#151515",
        "semi-black": "rgba(0, 0, 0, 0.1)",
        "semi-white": "rgba(255, 255, 255, 0.05)",
        yellow: "#FFD336",
        border: "rgba(211, 211, 211, 0.2)",
        "border-hover": "rgba(211, 211, 211, 0.5)",
      },
      fontSize: {
        'button-size': '14px',
        'page-title': '40px',
        'page-title-mobile': '24px',
        'normal': '16px',
        'normal-mobile': '14px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '30px',
      },
      boxShadow: {
        'inner-yellow': 'inset 0 0 500px 0 #FFD336',
      },
      textShadow: {
        'md': '1px 2px 3px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        sm: '2px',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}