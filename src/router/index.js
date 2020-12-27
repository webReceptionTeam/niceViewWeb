// 分类导入 router@4
import { createRouter, createWebHistory } from 'vue-router'
// 创建模式
const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        component: () => import('@/layout/home/index.vue'),
        name: "LayoutHome",
        meta: { aaa: '11' }
    },
    {
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
    },
    {
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
    },
    // 
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
        name: "error404"
    },
    { path: '/:catchAll(.*)', redirect: { name: 'error404' } }
]
const router = createRouter({
    history: routerHistory,
    routes
})



export default router

