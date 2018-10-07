module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-jwt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    // Vuetify の設定はここに書く
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  axios: {
    baseURL: 'http://localhost:8080/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'authenticate', method: 'post', propertyName: 'token' },
          user: { url: 'me', method: 'get',propertyName: ''},
          logout: false
        }
      }
    }
  }
}
