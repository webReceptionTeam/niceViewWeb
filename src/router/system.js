// 后台路由
const systemRouter = [
    {
        path: '/',
        component: () => import('@/layout/administration'),
        name: "LayoutSystem",
        meta: { liu: '11' },
        children: [
            // 首页
            {
                path: '',
                component: () => import('@/systemViews/home/index.vue'),
                name: "systemHome",
            },
            // ** 前台页面配置 **
            // 前台首页配置
            {
                path: 'viewConfigHome',
                component: () => import('@/systemViews/viewConfigHome/index.vue'),
                name: "viewConfigHome",
            },
            // 前台头部配置
            {
                path: 'viewHeadConfiguration',
                component: () => import('@/systemViews/viewHeadConfiguration/index.vue'),
                name: "viewHeadConfiguration",
            },
            // 前台博客配置
            {
                path: 'blogConfiguration',
                component: () => import('@/systemViews/blogConfiguration/index.vue'),
                name: "blogConfiguration",
            },
            // 个人中心
            {
                path: 'viewConfigPersonalCenter',
                component: () => import('@/systemViews/viewConfigPersonalCenter/index.vue'),
                name: "viewConfigPersonalCenter",
            },
            // 内容管理
            {
                path: 'viewCongigContent',
                component: () => import('@/systemViews/viewCongigContent/index.vue'),
                name: "viewCongigContent",
            },
            // 皮肤管理
            {
                path: 'viewConfigSkin',
                component: () => import('@/systemViews/viewConfigSkin/index.vue'),
                name: "viewConfigSkin",
            },
            // ** 检测博客 **
            // 检测博客
            {
                path: 'detectBlog',
                component: () => import('@/systemViews/detectBlog/index.vue'),
                name: "detectBlog",
            },
            // 检测评论
            {
                path: 'detectComment',
                component: () => import('@/systemViews/detectComment/index.vue'),
                name: "detectComment",
            },
            // 检测分类
            {
                path: 'detectClassification',
                component: () => import('@/systemViews/detectClassification/index.vue'),
                name: "detectClassification",
            },
            //  检测标签
            {
                path: 'detectLabel',
                component: () => import('@/systemViews/detectLabel/index.vue'),
                name: "detectLabel",
            },
            // ** 权限配置 **
            // 注册账号
            {
                path: 'registeredView',
                component: () => import('@/systemViews/registeredView/index.vue'),
                name: "registeredView",
            },
            // 用户管理
            {
                path: 'manageUsers',
                component: () => import('@/systemViews/manageUsers/index.vue'),
                name: "manageUsers",
            },
            // 账号配置
            {
                path: 'accountConfiguration',
                component: () => import('@/systemViews/accountConfiguration/index.vue'),
                name: "accountConfiguration",
            },

            // 接口配置
            {
                path: 'interfaceConfiguration',
                component: () => import('@/systemViews/interfaceConfiguration/index.vue'),
                name: "interfaceConfiguration",
            },
            // ** 个人设置 **
            // 个人资料
            {
                path: 'personalSettings',
                component: () => import('@/systemViews/personalSettings/index.vue'),
                name: "personalSettings",
            },
            // 账号列表
            {
                path: 'accountNumberList',
                component: () => import('@/systemViews/accountNumberList/index.vue'),
                name: "accountNumberList",
            },
            // 测试页面
            {
                path: 'testModule',
                component: () => import('@/systemViews/testModule/index.vue'),
                name: "testModule",
            },
        ]
    },
    {
        path: '/:catch(.*)',
        redirect: { name: 'error404' },
    }
]

export default systemRouter