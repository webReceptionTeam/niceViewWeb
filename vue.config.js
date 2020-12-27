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
    // 项目路径
    // outputDir: 'prod',
    assetsDir: 'static',
    // lintOnSave: process.env.NODE_ENV === "development",
    // lintOnSave: false,
    // productionSourceMap: false,
    devServer: {
        port: port,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api/xxx': {
                target: 'xxx', //   注册 （人保理赔）
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api/xxx': '' // 重写接口
                }
            },
        }
    },
    configureWebpack: {
        name: '测试',
        resolve: {
            alias: {
                '@': resolve('src')
                // SingleMember: resolve('src/components/SingleMember'),
                // images: resolve('public/images')
            }
        },
        // externals: {
        //     vue: 'Vue'
        // },
    },
    // configureWebpack: {
    //   // provide the app's title in webpack's name field, so that
    //   // it can be accessed in index.html to inject the correct title.
    //   name: name,
    //   resolve: {
    //     alias: {
    //       '@': resolve('src'),
    //       SingleMember: resolve('src/components/SingleMember'),
    //       images: resolve('public/images')
    //     }
    //   },
    //   externals: {
    //     vue: 'Vue'
    //   },
    //   output:
    //     process.env.NODE_ENV === 'development'
    //       ? {}
    //       : {
    //         // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
    //         filename: `./static/js/[name].[chunkhash:5].${isVersion(
    //           process.env.NODE_ENV
    //         )}js`,
    //         chunkFilename: `./static/js/[name].[chunkhash:5].${isVersion(
    //           process.env.NODE_ENV
    //         )}js`
    //       },
    //   plugins:
    //     process.env.NODE_ENV === 'development'
    //       ? []
    //       : [
    //         new MiniCssExtractPlugin({
    //           // Options similar to the same options in webpackOptions.output
    //           // both options are optional
    //           filename: `./static/css/[name].[chunkhash:5].${Version}.css`,
    //           chunkFilename: `./static/css/[name].[chunkhash:5].${Version}.css`
    //         })
    //       ]
    // },
    // chainWebpack(config) {
    //   config.output.filename()
    //   config.plugin('html').tap((args) => {
    //     args[0].cdn = cdn
    //     return args
    //   })
    //   config.plugins.delete('preload') // TODO: need test
    //   config.plugins.delete('prefetch') // TODO: need test

    //   // set svg-sprite-loader
    //   config.module
    //     .rule('svg')
    //     .exclude.add(resolve('src/icons'))
    //     .end()
    //   config.module
    //     .rule('icons')
    //     .test(/\.svg$/)
    //     .include.add(resolve('src/icons'))
    //     .end()
    //     .use('svg-sprite-loader')
    //     .loader('svg-sprite-loader')
    //     .options({
    //       symbolId: 'icon-[name]'
    //     })
    //     .end()

    //   // set preserveWhitespace
    //   config.module
    //     .rule('vue')
    //     .use('vue-loader')
    //     .loader('vue-loader')
    //     .tap((options) => {
    //       options.compilerOptions.preserveWhitespace = true
    //       return options
    //     })
    //     .end()

    //   config
    //     // https://webpack.js.org/configuration/devtool/#development
    //     .when(process.env.NODE_ENV === 'development', (config) =>
    //       config.devtool('cheap-source-map')
    //     )

    //   config.when(process.env.NODE_ENV !== 'development', (config) => {
    //     config
    //       .plugin('ScriptExtHtmlWebpackPlugin')
    //       .after('html')
    //       .use('script-ext-html-webpack-plugin', [
    //         {
    //           // `runtime` must same as runtimeChunk name. default is `runtime`
    //           inline: /runtime\..*\.js$/
    //         }
    //       ])
    //       .end()
    //     config.optimization.splitChunks({
    //       chunks: 'all',
    //       cacheGroups: {
    //         libs: {
    //           name: 'chunk-libs',
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: 10,
    //           maxSize: 200000,
    //           chunks: 'initial' // only package third parties that are initially dependent
    //         },
    //         elementUI: {
    //           name: 'chunk-elementUI', // split elementUI into a single package
    //           priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //           maxSize: 100000,
    //           test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
    //         },
    //         commons: {
    //           name: 'chunk-commons',
    //           test: resolve('src/components'), // can customize your rules
    //           minChunks: 3, //  minimum common number
    //           priority: 5,
    //           reuseExistingChunk: true
    //         }
    //       }
    //     })
    //     config.optimization.runtimeChunk('single')
    //   })
    // // },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    resources: './src/styles/scss/variable.scss',

                    // Or array of paths
                    // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                })
                .end()
        })
    },
}