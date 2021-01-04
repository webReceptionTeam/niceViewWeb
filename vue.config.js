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
                target: 'xxx', //   注册
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