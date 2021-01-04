// 前台路由
const viewRouter = {
    path: '/view',
    component: () => import('@/layout'),
    name: "LayoutView",
    meta: { liu: '11' },
    children: [
        {
            path: 'aaa',
            component: () => import('@/components/HelloWorld.vue'),
            name: "HelloWorld",
            meta: {
                tao: '11'
            }
        }
    ]
}

export default viewRouter