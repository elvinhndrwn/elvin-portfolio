// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Elvin Dwi Hendrawan | Software Developer",
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512", // 👉 ukuran besar
          href: "/images/logo.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180", // untuk perangkat iPhone/iPad
          href: "/images/logo.png",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});
