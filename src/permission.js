import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// 前台路由
import viewRouter from './router/view'
// 后台路由
import systemRouter from './router/system'

NProgress.configure({ showSpinner: false });

/**
 * 白名单
 */
const whiteList = ['/', '/login', '/register']
// 免检权
const businessList = []

// 判断前后项目逻辑 待调整
const type = window.localStorage.getItem("type")
if (type) {
    router.addRoute(type == '02' ? systemRouter : viewRouter)
}

router.beforeEach((to, from,) => {
    NProgress.start()
    console.log(String(to.path), from, 'beforeEach');
    console.log(whiteList.indexOf(to.path));
    // 判断是否需要登陆 在此之前需要判断是否登陆啦
    if (whiteList.indexOf(to.path) == -1) {
        // 重定向登陆页
        return { path: "/login" }
    }
})

router.afterEach((to, from,) => {
    NProgress.done()
    console.log(to, from, 'afterEach');

})