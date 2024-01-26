const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rufina: "var(--font-rufina)",
        roboto: "var(--font-roboto)",
      },
      colors: {
        /*
         * body, modal, drawer background & ring-offset-color
         */
        background: colors.white,

        /*
         * body text color
         */
        foreground: colors.gray[600],

        /*
         * border, default flat bg color for input components, tab & dropdown hover color
         */
        muted: colors.gray[200],
        /*
         * primary colors
         */
        primary: {
          lighter: colors.gray[200],
          default: colors.gray[800],
          dark: colors.gray[950],
          foreground: colors.white,
        },

        /*
         * secondary colors
         */
        secondary: {
          lighter: colors.indigo[200],
          default: colors.indigo[500],
          dark: colors.indigo[700],
          foreground: colors.white,
        },

        /*
         * danger colors
         */
        red: {
          lighter: colors.rose[200],
          default: colors.rose[500],
          dark: colors.rose[700],
        },

        /*
         * warning colors
         */
        orange: {
          lighter: colors.amber[200],
          default: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
         * info colors
         */
        blue: {
          lighter: colors.sky[200],
          default: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
         * success colors
         */
        green: {
          lighter: colors.emerald[200],
          default: colors.emerald[500],
          dark: colors.emerald[700],
        },
      },
    },
  },
  plugins: [],
};
