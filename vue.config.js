const port = 8080
// All configuration item explanations can be find in https://cli.vuejs.org/config/

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!a
     * Detail: https://cli.vuejs.org/config/#publicpath
     */

  publicPath: '/',
  // 组件路径
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === "development",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // 环境接口ip
      '/api': {
        target: 'http://8.131.91.95:3000', //   注册
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': 'http://8.131.91.95:3000' // 重写接口
        }
      },
      // 本地接口ip
      '/local': {
        target: 'http://127.0.0.1:3000', //   注册
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/local': 'http://127.0.0.1:3000' // 重写接口
        }
      }
    }
  },
  configureWebpack: {
    name: 'asOneWishes',
    resolve: {
      alias: {
        // '@': resolve('src'),
        // SingleMember: resolve('src/components/SingleMember'),
        'images': resolve('public/images'),
        'fonts': resolve('public/fonts')
      }
    }
    // externals: {
    //     vue: 'Vue'
    // },
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/styles/scss/variable.scss'
          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '我的网站'
        return args
      })
  }
}
