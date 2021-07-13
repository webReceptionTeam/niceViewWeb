/**
 * 前台路由
 *  meta -> toolbar 参数 true -> 固定  false -> 一直在顶部展示
 */

// 前台路由
const viewRouter = [
    // 首页
    {
        path: '/',
        component: () => import('@/layout/reception/home/index.vue'),
        name: "LayoutHome",
        meta: { toolbar: true },
    },
    {
        path: "/nav",
        component: () => import('@/layout/reception'),
        name: "nav",
        children: [
            {
                // 用户博客首页布局
                path: '',
                component: () => import('@/views/navigation/index.vue'),
                name: "navigationBox",
            }
        ]
    },
    {
        // 博客各个用户博客信息
        path: '/:catch(.*)',
        component: () => import('@/layout/reception'),
        redirect: { name: 'userHome' },
        name: "viewCatchAll",
        meta: { blogFooter: true },
        children: [
            {
                // 用户博客首页布局
                path: '',
                component: () => import('@/views/userHome/index.vue'),
                name: "userHome",
                meta: {
                    toolbar: false
                },
                children: [
                    {
                        // 用户博客首页
                        path: '',
                        component: () => import('@/views/blogTotal/index.vue'),
                        name: "blogTotal",
                    },
                    {
                        // 用户博客内层布局
                        path: 'article',
                        component: () => import('@/views/articleBox/index.vue'),
                        name: 'articleBox',
                        children: [
                            {
                                // 博客展示部分
                                // 匹配全部路由 为了拿到动态博客id
                                path: ':catchAll(.*)',
                                // path: 'adsfa',
                                component: () => import('@/views/articleBox/index.vue'),
                            }
                        ]
                    }
                ]
            },
            {
                // 错误路由
                path: ':catchAll(.*)',
                component: () => import('@/views/userHome/index.vue'),
                meta: { errorPage404: true },
            }
        ]
    }
]

export default viewRouter