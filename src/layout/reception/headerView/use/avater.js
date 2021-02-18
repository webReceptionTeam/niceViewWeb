import { reactive, ref ,onBeforeMount} from "vue";
import { useRouter } from 'vue-router'
export function useAvater(isLogin){
    let circleUrl = ref('images/default-avater.png')//默认头像
    const userInfo = reactive({nickname:'',userid:'',gender:''})
    const router = useRouter()//获取router对象

    const exitLogin =()=>{
        //退出登录清楚缓存
      localStorage.clear();
      isLogin.value=false
      
    }

    const commandCallback = (commad)=>{
        //根据菜单项commad值做不同处理
        switch(commad){
            case 'personal':console.log('去个人中心页');break;
            case 'manage':console.log('去内容管理页');break;
            case 'exit':exitLogin();break;
        }
    }

    const directTo = (url)=>{
        console.log(url)
        //router.push(url)
    }

    onBeforeMount(()=>{
        //获取用户信息渲染头像菜单
        const nickname = localStorage.getItem('nickname')||'---';
        const userid = localStorage.getItem('userid')||'';
        const gender = localStorage.getItem('gender')||'';
        if(nickname&&userid&&gender){
            userInfo.nickname=nickname;
            userInfo.userid=userid;
            userInfo.gender=gender;
        }
       


    })
    return {
        userInfo,
        circleUrl,
        commandCallback,
        directTo
    }
}