import { reactive, ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from 'vue-router'
import axios from '@/utils/http.js'
// 加密函数
import { str_encrypt } from '@/utils/dense'
import { getSession } from '@/utils/auth'
export function useAvater(isLogin) {
    let circleUrl = ref('images/default-avater.png')//默认头像
    const userInfo = reactive({ nickname: '', userid: '', gender: '' })
    const router = useRouter(), route = useRoute();//获取router对象

    const exitLogin = async () => {
        //退出登录清楚缓存
        localStorage.clear();
        isLogin.value = false
        let result = await axios.post('/users/logout')

    }
    const commandCallback = (commad) => {
        //根据菜单项commad值做不同处理
        switch (commad) {
            case 'personal':
                router.push('/userCenter/user-info')
                console.log('去个人中心页'); break;
            case 'manage': console.log('去内容管理页'); break;
            case 'exit': exitLogin(); break;
        }
    }

    const directTo = (url) => {
        console.log(url)
        //router.push(url)
    }

    onBeforeMount(() => {
        //获取用户信息渲染头像菜单
        const nickname = localStorage.getItem('nickname') || '---';
        const userid = localStorage.getItem('userid') || '';
        const gender = localStorage.getItem('gender') || '';
        if (nickname && userid && gender) {
            userInfo.nickname = nickname;
            userInfo.userid = userid;
            userInfo.gender = gender;
        }
    })

    // 去登录处理路由地址
    const toLoginPath = reactive({ path: "/login", query: { redirect: str_encrypt(route.path || '/') } })
    return {
        userInfo,
        circleUrl,
        toLoginPath,
        commandCallback,
        directTo
    }
}