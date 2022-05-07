module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#303138",
        "primary-dark": "#2e2f35",
        "primary-highlight": "#5A5C60",
        body: "#36393E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
