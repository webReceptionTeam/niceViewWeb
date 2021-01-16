import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { str_decrypt } from '@/utils/dense.js'
import { useRoute } from 'vue-router'
import axios from '@/utils/http.js'
export function useSignIn(loginMode,) {
    let userName = ref('')
        , passWord = ref('')
        , phone = ref('')
        , phoneCode = ref('');
    let route = useRoute()
    // 登录
    const loginBtn = async () => {
        // 账号登录
        console.log(route.query, '9cehsi ');
        if (loginMode.value === '01') {
            try {
                //为了拿到token先不要解构
                let result = await axios.post('/users/login', {
                    userName: userName.value,
                    userPassWord: passWord.value
                })
                const { data: res } = result;//在这解构

                if (res.code == 0) {
                    //登陆成功从响应头里拿token存入Localstorage
                    let path = '/'
                    if (route && route.redirect) {
                        path = str_decrypt(route.redirect)
                    }
                    const token = result.headers.authorization
                    token && localStorage.setItem('token', token)
                    //存用户nickname，userid,gender
                    const { userId, nickname, gender, premission } = res.data
                    localStorage.setItem('userid', userId);
                    localStorage.setItem('nickname', nickname);
                    localStorage.setItem('gender', gender);
                    localStorage.setItem('premission', premission);

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

export function useOpen() {
    const openRegister = () => {
        router.push('/register')
    }
    return {
        openRegister
    }
}

