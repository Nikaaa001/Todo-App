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
        'taskCOlor': '#494C6B',
        'backgroundWhite': '#FAFAFA',
        'backgroundBlack': '#171823',
        'darkModeMain': '#25273D',
        'darkModeDrag': '#9495A5',
        'darkTaskColor': '#767992',
        'addedTaskColor': '#C8CBE7',
        'filterDark': '#5B5E7E',
      },
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif"
      },
      fontSize: {
        '40px': '40px',
        '20px': '20px',
        '18px': '18px',
        '14px': '14px',
        '12px': '12px',
      },
      boxShadow: {
        'shadowConts': '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
      },
      backgroundImage: {
        'img1': "url('/images/bg-mobile-light.jpg')",
        'img2': "url('/images/bg-mobile-dark.jpg')",
        'img3': "url('/images/bg-desktop-light.jpg')",
        'img4': "url('/images/bg-desktop-dark.jpg')",
      }
    },
  },
  plugins: [],
}

// font-family: 'Josefin Sans', sans-serif;

