<template>
  <div>
    <div style="height: 48px">
      <myHeader />
    </div>
    <router-view />
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
</style>