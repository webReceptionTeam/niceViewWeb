import { ref } from 'vue'
import axios from '@/utils/http.js'
export function signIn() {
    let userName = ref('')
    let passWord = ref('')
    // 登录
    const loginBtn = async () => {
        try {
            let { data: res } = await axios.post('/users/login', {
                userName: userName.value,
                userPassWord: passWord.value
            })
            console.log(res, '测试')
        } catch (err) { }
    }
    return {
        userName,
        passWord,
        loginBtn
    }
}


