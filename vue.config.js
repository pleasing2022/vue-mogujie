const { defineConfig } = require('@vue/cli-service')
const isProd = process.env.NODE_ENV === 'production'
const baseUrl = '/vue-mogujie'


module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: isProd ? baseUrl : '/',
})
