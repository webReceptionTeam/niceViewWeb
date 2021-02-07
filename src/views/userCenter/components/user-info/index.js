import { reactive, ref, onBeforeMount } from 'vue'
export function getUserInfo() {
  const userInfo = reactive({ nickname: '', userid: '', gender: '' })

  onBeforeMount(() => {})
  return {}
}
