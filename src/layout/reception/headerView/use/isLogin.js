
import { ref, onBeforeMount } from 'vue'
export function useIsLogin() {
    let isLogin = ref(false);//是否登录
    const getIsLogin = () => {
        const token = localStorage.getItem('nickname') || ''
        isLogin.value = token ? true : false
        return isLogin.value
    }
    onBeforeMount(() => {
        getIsLogin()
    })

    return { isLogin, getIsLogin }

}
