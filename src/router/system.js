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
                meta: {
                    title: "后台管理-首页"
                }
            },
            // ** 前台页面配置 **
            // 前台首页配置
            {
                path: 'viewConfigHome',
                component: () => import('@/systemViews/viewConfigHome/index.vue'),
                name: "viewConfigHome",
                meta: {
                    title: "前台首页配置"
                }
            },
            // 前台头部配置
            {
                path: 'viewHeadConfiguration',
                component: () => import('@/systemViews/viewHeadConfiguration/index.vue'),
                name: "viewHeadConfiguration",
                meta: {
                    title: "前台头部配置"
                }
            },
            // 前台博客配置
            {
                path: 'blogConfiguration',
                component: () => import('@/systemViews/blogConfiguration/index.vue'),
                name: "blogConfiguration",
                meta: {
                    title: "前台博客配置"
                }
            },
            // 个人中心
            {
                path: 'viewConfigPersonalCenter',
                component: () => import('@/systemViews/viewConfigPersonalCenter/index.vue'),
                name: "viewConfigPersonalCenter",
                meta: {
                    title: "个人中心"
                }
            },
            // 内容管理
            {
                path: 'viewCongigContent',
                component: () => import('@/systemViews/viewCongigContent/index.vue'),
                name: "viewCongigContent",
                meta: {
                    title: "内容管理"
                }
            },
            // 皮肤管理
            {
                path: 'viewConfigSkin',
                component: () => import('@/systemViews/viewConfigSkin/index.vue'),
                name: "viewConfigSkin",
                meta: {
                    title: "皮肤管理"
                }
            },
            // ** 检测博客 **
            // 检测博客
            {
                path: 'detectBlog',
                component: () => import('@/systemViews/detectBlog/index.vue'),
                name: "detectBlog",
                meta: {
                    title: "检测博客"
                }
            },
            // 检测评论
            {
                path: 'detectComment',
                component: () => import('@/systemViews/detectComment/index.vue'),
                name: "detectComment",
                meta: {
                    title: "检测评论"
                }
            },
            // 检测分类
            {
                path: 'detectClassification',
                component: () => import('@/systemViews/detectClassification/index.vue'),
                name: "detectClassification",
                meta: {
                    title: "检测分类"
                }
            },
            //  检测标签
            {
                path: 'detectLabel',
                component: () => import('@/systemViews/detectLabel/index.vue'),
                name: "detectLabel",
                meta: {
                    title: "检测标签"
                }
            },
            // ** 权限配置 **
            // 注册账号
            {
                path: 'registeredView',
                component: () => import('@/systemViews/registeredView/index.vue'),
                name: "registeredView",
                meta: {
                    title: "注册账号"
                }
            },
            // 用户管理
            {
                path: 'manageUsers',
                component: () => import('@/systemViews/manageUsers/index.vue'),
                name: "manageUsers",
                meta: {
                    title: "用户管理"
                }
            },
            // 账号配置
            {
                path: 'accountConfiguration',
                component: () => import('@/systemViews/accountConfiguration/index.vue'),
                name: "accountConfiguration",
                meta: {
                    title: "账号配置"
                }
            },

            // 接口配置
            {
                path: 'interfaceConfiguration',
                component: () => import('@/systemViews/interfaceConfiguration/index.vue'),
                name: "interfaceConfiguration",
                meta: {
                    title: "接口配置"
                }
            },
            // ** 个人设置 **
            // 个人资料
            {
                path: 'personalSettings',
                component: () => import('@/systemViews/personalSettings/index.vue'),
                name: "personalSettings",
                meta: {
                    title: "个人资料"
                }
            },
            // 账号列表
            {
                path: 'accountNumberList',
                component: () => import('@/systemViews/accountNumberList/index.vue'),
                name: "accountNumberList",
                meta: {
                    title: "账号列表"
                }
            },
            // 测试页面
            {
                path: 'testModule',
                component: () => import('@/systemViews/testModule/index.vue'),
                name: "testModule",
                meta: {
                    title: "测试页面"
                }
            },
            {
                path: '/:catch(.*)',
                redirect: { name: 'error404' },
            }
        ]
    },
    {
        path: '/:catch(.*)',
        redirect: { name: 'error404' },
    }
]

export default systemRouter