module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}