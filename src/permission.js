import router from './router'
// 加载进度条 
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// 前台路由
import viewRouter from './router/view'
// 前台登录后设置路由
import userView from './router/userView'
// 后台路由
import systemRouter from './router/system'
// 加密函数
import { str_encrypt } from '@/utils/dense'

NProgress.configure({ showSpinner: false });
// token
const token = window.localStorage.getItem('token')
/**
 * 白名单
 *  首页 登录 注册
 */
const whiteList = ['/', '/login', '/register']
// 免检权
const businessList = []

// 判断前后项目逻辑 待调整
const premission = window.localStorage.getItem("premission")
router.addRoute(premission == '1' ? systemRouter : viewRouter)
if (token) {
    // 用户登录后添加路由 前台
    userView.map(item => {
        router.addRoute(item)
    })
}

// 路由加载前
router.beforeEach((to, from,) => {
    // 加载进度条 开始
    NProgress.start()
    // 公共处理位置

    if (premission == '1') {
        // 管理员处理方式
        return systemBeforeRouter(to, from)
    } else {
        // 用户处理方式
        return userViewFeforeRouter(to, from)
    }
})

// 管理员
function systemBeforeRouter(to, from) {
    if (token) {
        console.log(to.path);
    } else {
        // 判断是否需要登陆 在此之前需要判断是否登陆啦
        if (whiteList.indexOf(to.path) == -1) {
            // 重定向登陆页
            console.log(to.path);
            if (to.path == '/404') {
                return { path: "/login" }
            } else {
                return { path: "/login", query: { redirect: str_encrypt(to.path || '/') } }
            }
        }
    }
}

// 用户
function userViewFeforeRouter(to, from) {
    console.log('用户路由', to.path);
}

router.afterEach((to, from,) => {
    // 加载进度条 结束
    NProgress.done()
})