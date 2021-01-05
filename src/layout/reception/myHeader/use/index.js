import { reactive, ref } from 'vue'

export function useInitNav(){
    let activeIndex = ref('1')
    let navList = reactive(
        [
            {to:'/',text:'首页'},
            {to:'/',text:'博客'},
            {to:'/',text:'论坛'},
        ]
    )

    const handleSelect = (key,keyPath)=>{
        activeIndex.value=key;
    }
    return {
        navList,
        activeIndex,
        handleSelect
    }
}