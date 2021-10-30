// 过滤路由地址拿到动态用户名
import { useRoute } from 'vue-router'
export function filterGetRoutePath() {
    let userName = '', articleId = '';
    let route = useRoute()
    if (route && route.path) {
        let routeList = route.path.slice(1)
        let pathNameList = routeList.split('/')
        userName = pathNameList[0]
        if (pathNameList.length > 1) {
            articleId = pathNameList[pathNameList.length - 1]
        }
    }
    return { userName, articleId }
}
// class aaa {
//     b() {
//         // console.log();
//         return '测试class'
//     }
//     c() {
//         return 'adsfa'
//     }
// }

// export let { b, c } = new aaa()