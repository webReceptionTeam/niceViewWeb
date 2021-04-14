import { reactive, toRefs } from 'vue'
import {
  moduleTypeList,
  sizeTypeList
} from './data'

export function useMain() {
  let form = reactive({
    title: '',
    type: 'card',
    orders: '',
    TypeSize: '4',
    icon: '',
    disable: false,
  })

  return {
    moduleTypeList,
    sizeTypeList,
    ...toRefs(form),
  }
}