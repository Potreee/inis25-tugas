// remember to use module.exports instead of tailwind.config in production
tailwind.config = {
  // Note: config only includes the used styles & variables of your selection
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pirata: ['"Pirata One"', "cursive"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {},
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};
