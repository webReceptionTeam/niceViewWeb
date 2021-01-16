import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { userRegister } from '@/api/loginApi'
export function useSignIn() {
    let username = ref('')
        , password = ref('')
        , repassword = ref('')
        , nickname = ref('')

    // 注册
    const loginBtn = async () => {
        let data = {
            username: username.value,
            password: password.value,
            repassword: repassword.value,
            nickname: nickname.value,
        }
        try {
            let { data: res } = await userRegister(data)
            if (res.code == 0) {
                ElMessage({
                    showClose: true,
                    message: res.msg + '已自动为您跳转到登录页',
                    type: 'success'
                });
                router.push('/login')
            } else if (res.code == -1) {
                ElMessage.warning({
                    message: res.msg,
                    type: 'warning'
                });
            } else {
                ElMessage.error('待开发呀！');
            }
        } catch (err) {
            ElMessage.error('请求超时，请稍后再试！');
        }

    }
    return {
        // 变量
        username,
        password,
        repassword,
        nickname,
        // 方法
        loginBtn
    }
}

// 跳转登录
export function useOpen() {
    const openLogin = () => {
        router.push('/login')
    }
    return {
        openLogin
    }
}

