// import { from } from "core-js/fn/array";
import NProgress from 'nprogress'
// import { sendToAnalytics } from 'vue-router'
import router from './router'
import { sendToAnalytics } from 'vue-router'
NProgress.configure({ showSpinner: false });

router.beforeEach((to, from,) => {
    NProgress.start()
    console.log(to, from, 'beforeEach');
    // sendToAnalytics('/view')
    // return false
    // sendToAnalytics()
    // if (to.path == '/login') {
    //     return { path: '/view' }
    // }
})

router.afterEach((to, from,) => {
    NProgress.done()
    console.log(to, from, 'afterEach');

})