
const systemRouter = {
    path: '/system',
    component: () => import('@/layout'),
    name: "LayoutSystem",
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

export default systemRouter