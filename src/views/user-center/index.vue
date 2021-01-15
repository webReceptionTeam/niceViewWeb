<template>
  <div class="user-center">
    <div class="container-left">
      <centerMenu />
    </div>
    <div class="container-right">
      <router-view />
    </div>
  </div>
</template>

<script>
import centerMenu from './components/user-center-menu/index.vue'
export default {
  name: 'userCenter',
  components: {
    centerMenu
  }
}
</script>

<style lang="scss" scoped>
.user-center {
  position: relative;
  width: auto;
  min-width: 896px;
  min-height: 800px;
  background: transparent;
  margin: 16px 50px 0;
}
.container-left {
  position: absolute;
  width: 186px;
  top: 0;
  float: left;
  background: #fff;
}
.container-right {
  min-width: 998px;
  margin-left: 202px;
  min-height: 800px;
}
</style>
