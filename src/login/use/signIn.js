import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { str_decrypt } from '@/utils/dense.js'
import { useRoute } from 'vue-router'
import axios from '@/utils/http.js'

/**
 * 用户登录操作
 */
export function useSignIn(loginMode) {
    let userName = ref(''),
        passWord = ref(''),
        phone = ref(''),
        phoneCode = ref(''),
        remember = ref(false);
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
                    //登录成功从响应头里拿token存入Localstorage
                    let path = '/'
                    if (route && route.query.redirect) {
                        path = str_decrypt(route.query.redirect)
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

    // 用户登录方式切换触发
    const handLoginModeClick = (type) => { }

    // 获取验证码
    const getPhoneCode = () => { }
    return {
        // 变量
        userName,
        passWord,
        phone,
        phoneCode,
        remember,
        // 方法
        loginBtn,
        handLoginModeClick,
        getPhoneCode
    }
}

/**
 * 管理员操作
 */
export function useSystemSign() {
    let dialogVisible = ref(false),
        systemUserName = ref(''),
        systemPassWord = ref('')

    // 管理员弹层
    const openSystem = () => {
        dialogVisible.value = true
        systemUserName.value = ''
        systemPassWord.value = ''
    }
    // 管理员登录
    const systemBtn = () => {
        dialogVisible.value = false
    }
    // 取消管理员登录
    const handleClose = (done) => {
        dialogVisible.value = false
    }
    return {
        dialogVisible,
        systemUserName,
        systemPassWord,
        openSystem,
        systemBtn,
        handleClose
    }
}

// 打开页面或其他链接
export function useOpen() {
    // 打开注册页面
    const openRegister = () => {
        router.push('/register')
    }
    return {
        openRegister
    }
}

