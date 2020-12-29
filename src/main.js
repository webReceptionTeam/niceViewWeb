import { createApp } from 'vue'
import App from './App.vue';
// 路由引入
import router from './router'
// 引入ElementPlus ui库
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './styles/index.scss'

import './permission.js'

import store from './store'

// 导入App页面
const app = createApp(App)
// 导入ElementPlus
app.use(ElementPlus)
// 导入router
app.use(router)

app.use(store)

// 链接根节点
app.mount('#app')