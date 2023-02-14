/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'bundesSans': 'Bundes Sans'
      },
      maxWidth:{
        1400:"90rem",
        1320:"82.5rem",
        950:"59.375rem",
        750:"46.875rem",
      },
      colors:{
        brand:{
          maroon:"#780f2d",
          burgundy:"#660D26",
          gray:{
            200:"#71777e",
            300:"#F2F3F4",
          },
          violet:"#c99fab",
          teal:"#003f97",
          blue:"#007194",
          'blue-200':"#00607e",
        } 
      },
      fontSize:{
        40:"40px"
      },
      boxShadow:{
        "base":"0 20px 20px -20px rgb(0 0 0 / 50%)"
      },
   
      backgroundImage:{
        hero:"linear-gradient(90deg,#007194 65%,#fff 35%)"
      },
      borderRadius:{
        45:"45px"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}


