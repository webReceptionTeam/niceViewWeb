// 分类导入 router@4
import { createRouter, createWebHistory } from 'vue-router'
// 创建模式
const routerHistory = createWebHistory()
// 引入页面
import Home from '../App.vue'
import Contact from '../components/HelloWorld.vue'

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})



export default router

