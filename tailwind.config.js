module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_green: { 900: "#426b1f" },
        gray: { 50: "#fafaf5", 300: "#e6e6e6", 400: "#c2c2c2", 600: "#6d6d6d" },
        black: { 900: "#000000", "900_0f": "#0000000f", "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", newsreader: "Newsreader" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
