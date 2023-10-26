/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: "#E46643",
        lightOrange: "#F39765",
        darkBg: "#151619",
        sidebarBg: "#1D1F22",
        topMenuBg: "#2B2D31",
        lightHeading: "#35393F",
        lightTxt: "#7C8187",
        switchColor: "#5A6069",
        lightBg: "#E4E4E4",
        darkHeading: "#FFFFFF",
        darkTxt: "#C1C4CB",
        underMenuBg: "#F5F5F5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "roboto-mono": "var(--font-roboto-mono)",
        "roboto-slab": "var(--font-roboto_slab)",
      },
    },
  },
  plugins: [],
};
