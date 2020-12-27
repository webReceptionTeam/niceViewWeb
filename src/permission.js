// import { from } from "core-js/fn/array";
import NProgress from 'nprogress'
// import { sendToAnalytics } from 'vue-router'
import router from './router'

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from,) => {
    NProgress.start()
    console.log(to, from, 'beforeEach');

    // return false
    // sendToAnalytics()
})

router.afterEach((to, from,) => {
    NProgress.done()
    console.log(to, from, 'afterEach');

})