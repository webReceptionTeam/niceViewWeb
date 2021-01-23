import { ref, onBeforeMount } from 'vue'
export function useSkin() {
    // 换肤框标注位
    let skinViewFlag = ref(false)
    // 换肤展示取消
    const updataSkin = () => {
        skinViewFlag.value = !skinViewFlag.value
    }
    onBeforeMount(() => {
        // 点击空白取消展示换肤框
        window.onclick = () => {
            skinViewFlag.value = false
        }
    })
    return {
        skinViewFlag,
        updataSkin
    }
}