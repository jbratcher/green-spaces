import colors from "vuetify/es5/util/colors";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/green-spaces/",
      },
    }
    : {};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Green Spaces",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          'https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro&display=swap" rel="stylesheet',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/breakpoint",
    "~/plugins/vuetify-theme-cache",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxtjs auth module
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: {
            url: "/auth/logout",
            method: "post",
            propertyName: "token"
          },
          user: { url: "/auth/user", method: "get", propertyName: false }
        }
      }
    },
    token: {
      prefix: "token"
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://greenspacesapi.herokuapp.com/api',
  },
  /*
  ** Proxy module configuration
  ** See https://github.com/nuxt-community/proxy-module
  */
  proxy: {
    // '/api': 'https://greenspacesapi.herokuapp.com/'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      icons: false,
    },
    theme: {
      options: {
        minifyTheme: function (css) {
          return process.env.NODE_ENV === "production"
            ? css.replace(/[\r\n|\r|\n]/g, "")
            : css;
        },
      },
      light: true,
      dark: false,
      themes: {
        light: {
          primary: colors.teal.darken2,
          accent: colors.teal.lighten1,
          secondary: colors.lightGreen.darken3,
          info: colors.blueGrey.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.teal.base,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  ...routerBase,
};
