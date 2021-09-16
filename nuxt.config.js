export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  server: {
    port: 8008, // default: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Vision International Professionals – connecting talents",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Vision International Professionals",
        name: "Vision International Professionals",
        content:
          "Our mission is to connect talented people to amazing opportunities in unique places to create lasting value for our customers",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/vue-video-background",
      ssr: false,
    },
    {
      src: "~/plugins/vue-notifications.js",
      ssr: false,
    },
    "~/plugins/vue-lazysizes.client.js",
    "~/plugins/vue-screen.js",
    "~/plugins/clickaway.js",
    "@/plugins/aos.client",
    "~/plugins/vee-validate.js",
    "~/plugins/v-tooltip.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/html-validator",
    "@aceforth/nuxt-optimized-images",
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/proxy"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vt-notifications", "epic-spinners"],
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    },
  },
  css: ["aos/dist/aos.css"],
};
