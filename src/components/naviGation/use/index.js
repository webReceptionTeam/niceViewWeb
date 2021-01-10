import { ref } from 'vue'

export function useMethod() {
    let tabIndex = ref('0')
    const tabClick = (index) => {
        tabIndex.value = index
    }
    return {
        tabIndex,
        tabClick
    }
}
