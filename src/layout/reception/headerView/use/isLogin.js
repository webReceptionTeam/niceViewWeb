
import { ref, onBeforeMount } from 'vue'
export function useIsLogin() {
    let isLogin = ref(false);//是否登录

    onBeforeMount(() => {
        const token = localStorage.getItem('token') || ''
        isLogin.value = token ? true : false
    })

    return { isLogin }

}
