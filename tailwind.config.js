/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      screens:['1224px'],
    },
    colors:{
      white: "#FFF",
      inputGrey: "rgba(224, 231, 255, 0.3)",
      textDark: "rgb(40, 41, 61)",
      captchBg: "rgb(250,250,250)",
      mainBlue: "rgb(46, 91, 255)",
      inputText: "rgba(46, 56, 77, 0.4)",
      tabText: "rgba(51, 102, 255, 0.6)",
      pageChangeBg: "rgb(253, 253, 253)" 
    },
    fontFamily:{
      proDisplay: 'SF Pro Display',
      roboto: 'Roboto',
      rubic: 'Rubik'
    },
    extend: {},
  },
  plugins: [],
}

