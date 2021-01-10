<template>
  <div>
    <!-- 这是首页,这里区分用户网站和后台管理系统 -->
    <component :is="viewIs" />
  </div>
</template>

<script>
import administration from './administration'
import reception from './reception'
import { ref ,onBeforeMount} from 'vue'
import { useRoute } from "vue-router"
export default {
  name: 'Layout',
  components: {
    administration,
    reception
  },
  setup(props) {

    let viewIs = ref('')
    const route = useRoute()

    onBeforeMount(()=>{
      console.log(route.path, '路由名称判断')
      if (route.path.indexOf('/system') != -1) {
        viewIs.value = 'administration'
      } else {
        viewIs.value = 'reception'
      }
    })
    

    return {
      viewIs
    }
  },
  
}
</script>

<style lang="scss" scoped>
</style>