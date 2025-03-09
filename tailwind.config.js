/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "90":"340px",
        "96":"350px",
        "100":"400px",
        "130":"520px",
        "115":"460px",
        "79":"316px",
        "75":"300px"
      },
      width:{
        "85":"380px",
        "100":"400px",
        "105":"420px",
        "120":"600px",
        "160":"680px",
        "115":"460px",
        "185":"740px",
        "51":"204px"
      }
    },
  },
  plugins: [],
}

