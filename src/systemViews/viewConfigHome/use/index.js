import { onMounted, ref } from 'vue'
import { homeQuer } from '@/api/system'

export function useHomeData() {
  // let flag = ref('aaa')
  onMounted(() => {
    console.log('1234');
    getHomeData()
  })

  const getHomeData = async () => {
    const { data: res } = await homeQuer()
    console.log(res, '测试首页');
  }
  return {
    // flag
  }
}

