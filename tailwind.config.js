// tailwind.config.js
module.exports = {
  mode: "",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    extend: {
      fontSize:{
        'tiny':'0.74rem'
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50'
      },
      colors: {
        'card-1': '#877fa8',
        'card-2': '#bd86a6',
        'card-3': '#d47e97',
        'card-4': '#f59193',
        'card-5': '#faad91',
        'cyno-1': '#000004',
        'cyno-2': '#030051',
        'cyno-3': '#4b2266',
        'cyno': '#8b66a1',
        'water': '#0889ab',
        'water-dark': '#0889ab',
        'ted-red': '#e9280b',
        'footer-black': '#090b0c',
        'footer-black-1': '#050708'
      },
      backgroundImage: {
        'night-sky': "url('/web/bg.png')",
        'footer': "url('/web/footer.png')",
        'footer-mobile': "url('/mobile/footer.png')",
        'white-dots': "url('/WhiteDots.png')",
        'elayne-bg': "url('/elayne/elaynebg.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}