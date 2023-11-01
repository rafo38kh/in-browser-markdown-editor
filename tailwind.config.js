/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   darkOrange: "#E46643",
      //   lightOrange: "#F39765",
      //   darkBg: "#151619",
      //   sidebarBg: "#1D1F22",
      //   topMenuBg: "#2B2D31",
      //   lightHeading: "#35393F",
      //   lightTxt: "#7C8187",
      //   switchColor: "#5A6069",
      //   lightBg: "#E4E4E4",
      //   darkHeading: "#FFFFFF",
      //   darkTxt: "#C1C4CB",
      //   underMenuBg: "#F5F5F5",
      // },
      colors: {
        "primary-1000": "#151619",
        "primary-900": "#1D1F22",
        "primary-800": "#2B2D31",
        "primary-700": "#35393F",
        "secondary-600": "#5A6069",
        "secondary-500": "#7C8187",
        "secondary-400": "#C1C4CB",
        "secondary-300": "#E4E4E4",
        "tertiary-200": "#F5F5F5",
        "orange-primary": "#E46643",
        "orange-secondary": "#F39765",
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
      fontSize: {
        "heading-1": ["2rem", "2.625rem"],
        "heading-2": ["1.75rem", "2.3125rem"],
        "heading-3": ["1.5rem", "2rem"],
        "heading-4": ["1.25rem", "1.625rem"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
