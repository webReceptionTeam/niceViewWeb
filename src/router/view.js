/**
 * 前台路由
 *  meta -> toolbar 参数 true -> 头部固定  false -> 头部固定
 */

// 前台路由
const viewRouter = {
    // 博客各个用户博客信息
    path: '/:catchAll(.*)',
    component: () => import('@/layout/reception'),
    name: "viewCatchAll",
    children: [
        {
            path: '',
            component: () => import('@/views/home/index.vue'),
            name: "userHome",
            meta: {
                toolbar: true
            }
        },
        {
            path: 'article',
            component: () => import('@/views/a.vue'),
            children: [
                {
                    // 匹配全部路由 为了拿到动态博客id
                    path: ':catchAll(.*)',
                    component: () => import('@/views/b.vue'),
                }
            ]
        },

    ]
}

export default viewRouter