import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'

import axios from '@/utils/http.js'
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
            gender: '2',
            email: '',
            phone: '',
            info: ''
        }
        try {
            let { data: res } = await axios.post('/users/register', data)
            console.log(res, '测试')
            if (res.code == 0) {
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

export function useOpen() {
    const openLogin = () => {
        router.push('/login')
    }
    return {
        openLogin
    }
}

