/**
 * 前台路由
 *  用于前台用户登录后配置的路由
 *  meta -> toolbar 参数 true -> 头部固定  false -> 头部固定
 */
// 个人中心
const userPersonalRouter = {
    path: '/userCenter',
    component: () => import('@/layout/reception'),
    meta: { redirect: '' },
    name: "userCadadenter",
    children: [
        {
            path: '',
            redirect: { name: 'userInfo' },
            component: () => import('@/views/userCenter/index.vue'),
            name: "userCadadenterBox",
            meta: {
                us: '11'
            },
            children: [
                {
                    path: 'user-info',
                    component: () => import('@/views/userCenter/components/user-info/index.vue'),
                    name: 'userInfo',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'account-set',
                    component: () => import('@/views/userCenter/components/account-set/index.vue'),
                    name: 'accountasdSet',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'my-favorites',
                    component: () => import('@/views/userCenter/components/my-favorites/index.vue'),
                    name: 'myFavordsites',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'my-test',
                    component: () => import('@/views/userCenter/components/my-test/index.vue'),
                    name: 'myTesaasdasdt',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'setting',
                    component: () => import('@/views/userCenter/components/user-setting/index.vue'),
                    name: 'myUserSetting',
                    meta: {
                        usinfo: '22'
                    }
                },
            ]
        },
        // 重定向到个人详情页
        {
            path: ':catchAll(.*)',
            redirect: { name: 'userCadadenterBox' },
        }
    ]
}
// 用户的博客管理设置等
const userConsoleRouter = {
    path: '/userConsole',
    component: () => import('@/layout/reception'),
    name: "userConsole",
    children: [
        // 内容管理
        {
            path: '',
            redirect: { name: 'userConsoleHome' },
            component: () => import('@/views/userConsole/index.vue'),
            meta: { redirect: '' },
            name: "userConsoleBox",
            children: [
                // 内容首页 
                {
                    path: 'home',
                    component: () => import('@/views/userConsole/components/home/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleHome",
                },
                // 文章管理
                {
                    path: 'article',
                    component: () => import('@/views/userConsole/components/article/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleArticle",
                },
                // 文章管理
                {
                    path: 'article',
                    component: () => import('@/views/userConsole/components/article/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleArticle",
                },
                // 评论管理
                {
                    path: 'comment',
                    component: () => import('@/views/userConsole/components/comment/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleComment",
                },
                // 分类管理
                {
                    path: 'classification',
                    component: () => import('@/views/userConsole/components/classification/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleClassification",
                },
                {
                    path: 'classAdd',
                    component: () => import('@/views/userConsole/components/classification/classAdd.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleClassAdd",
                },
                // 数据观星
                {
                    path: 'blogData',
                    component: () => import('@/views/userConsole/components/blogData/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleBlogData",
                },
                // 文章设置
                {
                    path: 'configBlog',
                    component: () => import('@/views/userConsole/components/configBlog/index.vue'),
                    meta: { redirect: '' },
                    name: "userConsoleConfigBlog",
                }
            ]
        },
        // 重定向到设置管理首页
        {
            path: ':catchAll(.*)',
            redirect: { name: 'userConsoleBox' },
        }
    ]
}
const userAddEditor = {
    path: '/editor',
    component: () => import('@/views/userAddEditor/index.vue'),
    name: "userAddEditor",
}
export default [userPersonalRouter, userConsoleRouter, userAddEditor]