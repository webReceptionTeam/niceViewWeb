import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { str_decrypt } from '@/utils/dense.js'

import axios from '@/utils/http.js'
export function useSignIn(loginMode, route) {
    let userName = ref('')
        , passWord = ref('')
        , phone = ref('')
        , phoneCode = ref('')
    // 登录
    const loginBtn = async () => {
        // 账号登录
        if (loginMode.value === '01') {
            try {
                let { data: res } = await axios.post('/users/login', {
                    userName: userName.value,
                    userPassWord: passWord.value
                })
                console.log(res, '测试')
                if (res.code == 0) {
                    let path = '/'
                    if (route.value && route.value.query && route.value.query.redirect) {
                        path = str_decrypt(route.value.query.redirect)
                    }
                    router.push(path)
                } else if (res.code == -1) {
                    ElMessage.warning({
                        message: res.msg,
                        type: 'warning'
                    });
                } else {
                }
            } catch (err) {
                ElMessage.error('请求超时，请稍后再试！');
            }
        } else {
            ElMessage('请耐心等候更新');
        }

    }
    return {
        // 变量
        userName,
        passWord,
        phone,
        phoneCode,
        // 方法
        loginBtn
    }
}


