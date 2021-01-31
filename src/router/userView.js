/**
 * 前台路由
 *  用于前台用户登录后配置的路由
 *  meta -> toolbar 参数 true -> 头部固定  false -> 头部固定
 */
// 个人中心
const userPersonalRouter = {
    path: '/user-center',
    redirect: { name: 'userInfo' },
    component: () => import('@/views/user-center/index.vue'),
    name: "userCadadenter",
    meta: {
        us: '11'
    },
    children: [
        {
            path: 'user-info',
            component: () => import('@/views/user-center/components/user-info/index.vue'),
            name: 'userInfo',
            meta: {
                usinfo: '22'
            }
        },
        {
            path: 'account-set',
            component: () => import('@/views/user-center/components/account-set/index.vue'),
            name: 'accountasdSet',
            meta: {
                usinfo: '22'
            }
        },
        {
            path: 'my-favorites',
            component: () => import('@/views/user-center/components/my-favorites/index.vue'),
            name: 'myFavordsites',
            meta: {
                usinfo: '22'
            }
        },
        {
            path: 'my-test',
            component: () => import('@/views/user-center/components/my-test/index.vue'),
            name: 'myTesaasdasdt',
            meta: {
                usinfo: '22'
            }
        },
    ]
}
// 用户的博客管理设置等
const userConsoleRouter = {
    path: '/userConsole',
    // redirect: { name: 'userInfo' },
    component: () => import('@/views/user-center/index.vue'),
    name: "userConsole",
    children: []
}
// const userAddEditor = {
//     path: '/editor'
// }
export { userPersonalRouter, userConsoleRouter }