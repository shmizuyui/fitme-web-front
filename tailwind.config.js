const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  media: false,
  theme: {
    extend: {
      width: {
        "5/16": "31.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
