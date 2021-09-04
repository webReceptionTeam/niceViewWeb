import { reactive, toRefs, provide, ref } from 'vue'
import { ElMessage } from '@/utils/message.js'
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
    openIconSelect,
  }
}

export function useChildrenMain() {
  let blogListFlag = ref(false),
    linkList = ref([
      {
        link: '',
        name: ''
      }
    ]),
    cardList = ref([]);

  provide('blogListFlag', blogListFlag)

  // 博客选中返回事件
  const changeBnt = (list) => {
    // list.forEach(item => {
    //   cardList.value.push(item)
    // }) 

    cardList.value = list
    console.log(cardList.value);

  }

  // 添加连接
  const linkAdd = () => {
    linkList.value.push({ link: '', name: '' })
  }
  // 删除连接
  const linkDel = (i) => {
    if (linkList.value.length > 1) {
      linkList.value.splice(i, 1)
    } else {
      ElMessage('至少保留一个连接')
    }
  }

  return {
    linkList,
    blogListFlag,
    cardList,
    changeBnt,
    linkDel,
    linkAdd
  }
}