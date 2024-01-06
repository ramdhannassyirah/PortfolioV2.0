/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        DotGothic16: ["DotGothic16"],
        Pixelify: "Pixelify Sans",
        Manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
