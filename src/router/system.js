// 后台路由
const systemRouter = [
    {
        path: '/',
        component: () => import('@/layout/administration'),
        name: "LayoutSystem",
        meta: { liu: '11' },
        children: [
            {
                path: 'viewConfigHome',
                component: () => import('@/systemViews/viewConfigHome/index.vue'),
                name: "viewConfigHome",
                meta: {
                    tao: '11'
                }
            }
        ]
    },
    {
        path: '/:catch(.*)',
        redirect: { name: 'error404' },
    }
]

export default systemRouter