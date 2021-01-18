const registerComponent = (Vue) => {
    const component = require.context('@/components', true, /index.vue/)
    // 首页组件
    const faceComponent = require.context('@/components/face', true, /index.vue/)
    // 合并组件数组
    component.keys().concat(faceComponent.keys)
    component.keys().forEach(filename => {
        const Module = component(filename)
        Vue.component(Module.default.name, Module.default)
    })
}

export default registerComponent

