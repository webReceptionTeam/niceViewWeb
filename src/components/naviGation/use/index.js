import { ref, inject } from 'vue'

export function useMethod(list) {
    let tabIndex = ref('0')
    // let aaa = inject('aaa')
    const tabClick = (index) => {
        // tabIndex.value = index

        console.log(list[index]);
        window.scrollTo(0, list[index])
    }
    return {
        tabIndex,
        tabClick
    }
}
