import { onBeforeMount, ref } from 'vue'
export function useHandleScroll() {
    let headerViewFlag = ref(true), docScrollTop = ref(0)
    onBeforeMount(() => {
        document.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
        docScrollTop.value = document.documentElement.scrollTop
        // console.log(docScrollTop, docScrollTop > 48);
        // docScrollTop > 48 ? headerViewFlag.value = false : headerViewFlag.value = true
    }
    return {
        headerViewFlag,
        docScrollTop,
        onBeforeMount
    }
}