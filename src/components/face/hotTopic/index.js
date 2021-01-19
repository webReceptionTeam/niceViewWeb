export function useClick() {
    // 详情点击事件
    let topicClick = (item) => {
        console.log(item, '测试')
    }
    return {
        topicClick
    }
}