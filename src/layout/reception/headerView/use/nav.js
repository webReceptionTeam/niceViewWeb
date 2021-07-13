import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { filterGetRoutePath } from "@/utils/filterData";
import { useRouter } from "vue-router";
import { useIsLogin } from "./isLogin";

export function useInitNav() {
    let activeIndex = ref(
        `/${filterGetRoutePath().userName || ''}`
    )
    let navList = reactive(
        [
            { to: '/', text: '首页' },
            { to: '/nav', text: '博客' },
            // { to: '/', text: '论坛' },
        ]
    )
    const router = useRouter();
    const handleSelect = (key, keyPath) => {
        activeIndex.value = key;
        console.log(key);
        router.push(key);
    }

    const toEditor = () => {
        let { getIsLogin } = useIsLogin()
        if (getIsLogin()) {
            window.open('/editor')
        } else {
            ElMessage('当前您未登陆');
        }
    }

    return {
        navList,
        activeIndex,
        handleSelect,
        toEditor
    }
}