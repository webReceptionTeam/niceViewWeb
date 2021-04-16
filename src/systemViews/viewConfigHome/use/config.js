import { reactive, toRefs, provide, ref } from 'vue'
import {
  moduleTypeList,
  sizeTypeList
} from './data'

export function useMain() {
  let iconFlag = ref(false),
    configData = reactive({
      title: '',
      type: 'card',
      orders: 10,
      TypeSize: '4',
      icon: 'el-icon-eleme',
      disable: false,
    });

  provide('dialogVisible', iconFlag)

  const handleClose = () => { }
  const clickName = (icon) => {
    console.log(icon);
    configData.icon = icon
  }

  // 情况icon
  const emptyIcon = () => {
    configData.icon = ''
  }
  // 打开选择icon图标组件
  const openIconSelect = () => {
    iconFlag.value = true
  }
  return {
    moduleTypeList,
    sizeTypeList,
    ...toRefs(configData),
    handleClose,
    clickName,
    emptyIcon,
    openIconSelect
  }
}