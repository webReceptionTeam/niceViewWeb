<template>
  <div>
    <myHeader />
    前台框架
    <router-view />
  </div>
</template>

<script>
import myHeader from './myHeader'
export default {
  name: 'reception',
  components: {
    myHeader
  }
}
</script>

<style lang="scss" scoped>
</style>