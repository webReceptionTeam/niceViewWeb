import { onMounted, ref, provide, reactive } from 'vue'
import { homeQuer } from '@/api/system'
import { ElMessage } from '@/utils/message.js'
let tableData = ref([]);
export function useData() {
  return {
    tableData
  }
}
export function useHomeData() {
  let drawerFlag = ref(true),
    // homeData = reactive({ item: {} })
    homeData = ref({})
  onMounted(() => {
    getHomeData()

  })

  // 查询首页全量数据
  const getHomeData = async () => {
    const { data: res } = await homeQuer()
    console.log(res, '测试首页');
    if (res.code === 0) {
      tableData.value = res.data || []
    } else {
      // ElMessage.error('请求超时，请稍后再试！');
      ElMessage.warning(res.msg || '异常提示')

    }
  }
  const celClick = (row, column, cell, event) => {
    // if (row.disable) {

    // }
    drawerFlag.value = true
    homeData.value = row
  }
  // 共享数据
  provide('drawerFlag', drawerFlag)
  provide('drawerHomeItem', homeData)
  return {
    tableData, drawerFlag, celClick
  }
}

