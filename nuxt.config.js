export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FF6666" },
      { name: "msapplication-navbutton-color", content: "#FF6666" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#FF6666" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/app-components.js",
    "~/plugins/i18n.js",
    "~/plugins/cursor.js",
    "~/plugins/normwheel.js"
  ],
  /*
   ** Nuxt.js modules
   */

  modules: [],
  /*
   ** Build configuration
   */
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = "#source-map"
      }

      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      })
    }
  }
}
