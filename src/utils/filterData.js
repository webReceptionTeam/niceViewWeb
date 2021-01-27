// 过滤路由地址拿到动态用户名
export function filterGetRoutePath(path) {
    let userName = '', articleId = '';
    if (path) {
        let route = path.slice(1)
        let pathNameList = route.split('/')
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