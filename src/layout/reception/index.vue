<template>
  <div style="width: 100%; height: 100%">
    <!-- 头 -->
    <div style="height: 48px">
      <myHeader />
    </div>
    <div class="layout-box">
      <router-view />
    </div>
  </div>
</template>

<script>
import myHeader from './myHeader'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'reception',
  components: {
    myHeader
  },
  setup(props) {
    const router = useRoute()
    onBeforeMount(() => {
      console.log(router.meta)
    })
  }
}
</script>

<style lang="scss" scoped>
.layout-box {
  margin: 0 auto;
}
</style>