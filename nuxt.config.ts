// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
  ],
  googleFonts: {
    families: {
      DotGothic16: true,
      "Pixelify Sans": true,
      Manrope: true,
      "Nunito Sans": true,
    },
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "slide-left": {
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 600,
              },
            },
          },
        },
      },
    },
  },
});
