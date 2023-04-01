/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          xs:"375px",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1170px",
          "2xl": "1140px",
        },
      },
      colors:{
        primary:"#B0B435",
        secondary:"#f5f5f5",
        green:"#008e34"
      },
      fontFamily:{
        dosis:["Dosis","sans-serif"],
        dancing:["Dancing Script", "cursive"],
      }
    },
  },
  plugins: [],
}