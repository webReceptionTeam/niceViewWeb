import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { str_decrypt } from '@/utils/dense.js'
import { useRoute } from 'vue-router'
import { userLogin } from '@/api/loginApi'
import { setOtherCookie } from '@/utils/auth.js'

/**
 * 用户登录操作
 */
let userName = ref('admin'),
    passWord = ref('1111');

export function useSignIn(loginMode) {
    let phone = ref(''),
        phoneCode = ref(''),
        remember = ref(false);
    let route = useRoute()
    // 登录
    const loginBtn = async () => {
        // 账号登录
        console.log(route.query, '9cehsi ');
        if (loginMode.value === '01') {
            try {
                loginFn()
            } catch (err) {
                ElMessage.error('请求超时，请稍后再试！');
            }
        } else {
            ElMessage('请耐心等候更新');
        }

    }

    // 用户登录方式切换触发
    const handLoginModeClick = (type) => {
        try {
            // 切换处理方式
        } catch (error) {
            ElMessage.error('请求超时，请稍后再试！');
        }
    }



    // 获取验证码
    const getPhoneCode = () => { }
    return {
        phone,
        phoneCode,
        remember,
        // 方法
        loginBtn,
        handLoginModeClick,
        getPhoneCode,

    }
}

const loginFn = async (flag = false) => {
    let route = useRoute()
    let { data: res } = await userLogin({
        userName: userName.value,
        userPassWord: passWord.value,
        systemFlag: flag
    })
    if (res.code == 0) {
        //登录成功从响应头里拿token存入Localstorage
        let path = '/'
        if (route && route.query && route.query.redirect) {
            path = str_decrypt(route.query.redirect)
        }
        const token = res?.headers?.authorization
        if (token) {
            localStorage.setItem('token', token)
        }
        //存用户nickname，userid,gender
        const { userId, nickname, gender, premission } = res.data
        localStorage.setItem('userid', userId);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('gender', gender);
        localStorage.setItem('premission', premission);
        await setOtherCookie('token', premission)
        // router.push(path)
        // router.replace(path)
        // window.location.href = path


    } else if (res.code == -1) {
        ElMessage.warning({
            message: res.msg,
            type: 'warning'
        });
    } else {
        ElMessage.warning({
            message: res.msg,
            type: 'error'
        });
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
    const systemLoginBtn = async () => {
        try {
            await loginFn(true)
            dialogVisible.value = false
        } catch (error) {
            ElMessage.error('请求超时，请稍后再试！');

        }
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
        systemLoginBtn,
        handleClose,
        userName,
        passWord,
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

