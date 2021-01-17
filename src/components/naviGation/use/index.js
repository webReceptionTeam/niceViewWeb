import { ref, onBeforeMount, onMounted } from 'vue'

export function useMethod(props) {
    let heightList = ref([])
    let tabIndex = ref('0')

    onBeforeMount(() => {
        // 页面滚动事件
        document.addEventListener('scroll', handleScroll)
    })
    onMounted(() => {
        // 处理页面元素的距顶部的高度
        props.refList.map((item) => {
            heightList.value.push(item.offsetTop)
        })
    })
    // 导航点击事件
    const tabClick = (index) => {
        // 页面滚动事件
        window.scrollTo(0, heightList.value[index] - 48)
    }
    // 导航返回顶部
    const tabTopClick = () => {
        window.scrollTo(0, 0)
        tabIndex.value = '0'
    }
    // 判断导航对应显示事件
    const handleScroll = (el) => {
        let docScrollTop = document.documentElement.scrollTop
        heightList.value.map((item, index) => {
            // 滚动距离暂时先定为 200 有空进行调整
            if (item - 200 <= docScrollTop) {
                tabIndex.value = index
            }
        })
    }
    return {
        tabIndex,
        tabClick,
        tabTopClick,
        handleScroll
    }
}
