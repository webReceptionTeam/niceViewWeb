import { inject, ref, } from '@vue/runtime-core'
export function useMain() {
  // 展示模块详情
  let drawerFlag = inject('drawerFlag')
  return {
    drawerFlag
  }
}