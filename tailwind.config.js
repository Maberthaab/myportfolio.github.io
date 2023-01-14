/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container :{
      center: true,
      padding : '16 px',
    },
    extend: {
      colors: {
        primary:'#e11d48',
        dark: '#0f172a',
        secondary:'#64748b'
      },
      screens: {
        '2xl' :'1320px'
      },
    },
  },
  plugins: [],
}
