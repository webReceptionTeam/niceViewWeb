import { createApp } from 'vue'
import App from './App.vue';

// 引入ElementPlus ui库
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 路由引入
import router from './router'
// vuex引入
import store from './store'
// 路由拦截引入
import './permission.js'
// 全局注册文件引入
import registerComponent from './register_workbench.js'
// 全局样式
import './styles/index.scss'

// 导入App页面
const app = createApp(App)

// 导入ElementPlus
app.use(ElementPlus)
// 导入router
app.use(router)
// vuex
app.use(store)
// 全局注册
registerComponent(app)

// 链接根节点
app.mount('#app')