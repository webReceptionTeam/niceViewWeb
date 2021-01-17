/**
 * 前台路由
 *  meta -> toolbar 参数 true -> 头部固定  false -> 头部固定
 */

// 前台路由
const viewRouter = {
    path: '/view',
    component: () => import('@/layout'),
    name: "LayoutView",
    children: [
        {
            path: '',
            component: () => import('@/views/home/index.vue'),
            name: "HelloWorld",
            meta: {
                toolbar: true
            }
        },
        {
            path: 'user-center',
            redirect: { name: 'userInfo' },
            component: () => import('@/views/user-center/index.vue'),
            name: "userCenter",
            meta: {
                us: '11'
            },
            children: [
                {
                    path: 'user-info',
                    component: () => import('@/views/user-center/components/user-info/index.vue'),
                    name: 'userInfo',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'account-set',
                    component: () => import('@/views/user-center/components/account-set/index.vue'),
                    name: 'accountSet',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'my-favorites',
                    component: () => import('@/views/user-center/components/my-favorites/index.vue'),
                    name: 'myFavorites',
                    meta: {
                        usinfo: '22'
                    }
                },
                {
                    path: 'my-test',
                    component: () => import('@/views/user-center/components/my-test/index.vue'),
                    name: 'myTest',
                    meta: {
                        usinfo: '22'
                    }
                },
            ]
        }
    ]
}

export default viewRouter