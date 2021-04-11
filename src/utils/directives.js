import { Object } from "core-js";

// 指令树
const directiveData = {
  'premissionBtn': {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的 attribute 或事件监听器被应用之前调用
    created() { },
    // 在绑定元素的父组件挂载之前调用
    beforeMount(el, binding) {
      // console.log(el, binding, '测试directiveData');
      if (binding.value != 2) {
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
    },
    // 绑定元素的父组件被挂载时调用
    mounted(el) {
      // console.log(el, '测试directiveData');
    },
    // 在包含组件的 VNode 更新之前调用
    beforeUpdate() { },
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() { },
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() { },
    // 卸载绑定元素的父组件时调用
    unmounted() { }
  }
}

// 添加所有指令
const Direatives = (app) => {
  Object.keys(directiveData).forEach(key => {
    app.directive(key, directiveData[key])
  })
}
export default Direatives