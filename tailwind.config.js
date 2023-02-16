/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      boxShadow: {
        skillOuter:
          "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
        darkSkillOuter:
          "6px 6px 10px -1px rgb(94 94 94 / 15%), -6px -6px 10px -1px rgb(25 25 25 / 70%)",
        skillInner:
          "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05)",
        darkSkillInner:
          "inset 4px 4px 6px -1px rgb(123 121 121 / 20%), inset -4px -4px 6px -1px rgb(18 18 18 / 70%), -0.5px -0.5px 0px rgb(61 61 61), 0.5px 0.5px 0px rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        photo_bg: "11% 89% 0% 100% / 73% 50% 50% 27%",
      },
      backgroundColor: {
        main: "#C4B454",
        darkColor3: "#121212ed",
        darkColor1: "#181818",
        darkColor2: "#282828",
      },
      colors: {
        main: "#C4B454",
      },
      transitionDelay: {
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
      },
      keyframes: {
        linksAnimate: {
          "100%": { right: "0px" },
        },
        hireAnimte: {
          "0%": { left: "-20%" },
          "10%": { left: "120%" },
          "20%": { left: "120%" },
          "30%": { left: "120%" },
          "40%": { left: "120%" },
          "50%": { left: "120%" },
          "60%": { left: "120%" },
          "70%": { left: "120%" },
          "80%": { left: "120%" },
          "90%": { left: "120%" },
          "100%": { left: "120%" },
        },
      },
      animation: {
        linksAnimate6: "linksAnimate 1.4s ease-in-out forwards",
        hireAnimted: "hireAnimte 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
