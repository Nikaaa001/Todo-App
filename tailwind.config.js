/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-blackOne': '#14131B',
        'active': '#9495A5',
        'clickedBlue': '#3A7CFD',
        'checkedcolor': '#D1D2DA',
        'taskCOlor': '#494C6B'
      },
      fontFamily: {
        josefin: "''Josefin Sans', sans-serif"
      },
      fontSize: {
        '20px': '20px',
        '40px': '40px',
        '14px': '14px',
        '12px': '12px',
      },
      boxShadow: {
        'shadowConts': '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
      }
    },
  },
  plugins: [],
}

// font-family: 'Josefin Sans', sans-serif;

