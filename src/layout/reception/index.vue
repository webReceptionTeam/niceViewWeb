<template>
  <div>
    <myHeader />
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