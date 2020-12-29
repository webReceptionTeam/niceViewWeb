# myvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
#### Configuration Reference
See [vue-cli @3.0.0](https://cli.vuejs.org/config/).
See [vue-router @4.0.0-alpha.5](https://next.router.vuejs.org/).
See [element-plus @1.0.1-beta.10](https://element-plus.gitee.io/#/zh-CN/component/installation).
#### 其他ui框架参考地址
See [Vant 3.0](https://vant-contrib.gitee.io/vant/next).
See [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/).



# 3 目录详解
待调整
```
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── |——...                 # 其他的公用组件
│   ├── directive              # 全局指令
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── |——validate.js         # 表单校验的公用方法
│   ├── |——request.js          #axios配置（请求拦截和返回拦截）的公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
```



#### Ant-design-vue
ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步，组件的 html 结构和 css 样式也保持一致，真正做到了样式 0 修改，组件 API 也尽量保持了一致

现状：支持 Vue 3.0 的 2.0.0 测试版 已发布

地址：https://antdv.com/docs/vue/introduce-cn/

#### Vant 3.0
Vant 是有赞前端团队开源的移动端组件库，于 2016 年开源，已持续维护 4 年时间。

Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一

现状：目前 Vant 已完成了对 Vue 3.0 的适配工作，并发布了 Vant 3.0 Beta 版本，计划在十月底或十一月发布 Vant 3.0 正式版

地址：https://vant-contrib.gitee.io/vant/next

#### Element-plus
elementui风格的组件库，Vue3.0 重构版

现状：没有明确发布计划，目前还在紧急开发中，有兴趣参与开源项目的也可以去issues认领任务

地址：https://element-plus.org/#/zh-CN/component/installation