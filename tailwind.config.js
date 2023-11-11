module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-secondary": "#494949",
        dark: "#1F1F1F",
        primary: "#3BC527",
        "primary-hover": "#33B121",
        neutral: "hsla(0, 0%, 12%, 0.07)",
        "neutral-hover": "hsla(0, 0%, 12%, 0.14)",
        gray: "#F4F8FF",
      },
      fontFamily: {
        "gt-walsheim-pro": ['"GT Walsheim Pro Light"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
