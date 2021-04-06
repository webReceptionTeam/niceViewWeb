import { onMounted, ref, provide } from 'vue'
import { homeQuer } from '@/api/system'
import { ElMessage } from 'element-plus'

export function useHomeData() {
  let tableData = ref([]),
    drawerFlag = ref(false);


  onMounted(() => {
    getHomeData()

  })

  const getHomeData = async () => {
    const { data: res } = await homeQuer()
    console.log(res, '测试首页');
    if (res.code == 0) {
      tableData.value = res.data || []
    } else {
      // ElMessage.error('请求超时，请稍后再试！');
      ElMessage.warning(res.msg || '异常提示')

    }
  }
  const celClick = (row, column, cell, event) => {
    if (row.disable) {
      drawerFlag.value = true
      // provide('flag', drawerFlag.value)
      provide.flag = true
      console.log('000')
    }
  }
  // 共享数据
  provide('drawerFlag', drawerFlag)
  return {
    tableData, drawerFlag, celClick
  }
}

