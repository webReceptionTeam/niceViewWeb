import { reactive, ref } from 'vue'
import { filterGetRoutePath } from "@/utils/filterData";
import { useRouter } from "vue-router";

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

    return {
        navList,
        activeIndex,
        handleSelect
    }
}