const pkg = require('./package')

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['./assets/scss/main'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://app.ecarsuite.com/api/',
    credentials: true,
    headers: {
      'X-Partner-Key': 'W1eLAEFdxDuLiMeSKpNaMqmiN7hUAO5oITOER3Bt'
    }
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    ssr: false,

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // config.module.rules.push({
        //   test: /\.(png|jpe?g|gif|svg|webp)$/,
        //   loader: 'url-loader',
        //   query: {
        //     // limit: 1000, // 1kB
        //     name: 'img/[name].[hash:7].[ext]'
        //   }
        // })
        // config.module.rules.push({
        //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //   loader: 'url-loader',
        //   query: {
        //     // limit: 1000, // 1kB
        //     name: 'fonts/[name].[hash:7].[ext]'
        //   }
        // })
      }
    }
  }
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.map(route => {
  //       console.log(route)
  //       if (route.path === '/') {
  //         route.path = '/:brand?/:model?/:type?/:fuel?'
  //       }
  //     })
  //   }
  // }
}
