<template>
  <div class="console_box">
    <div class="console_box_left">
      <consoleMenu />
    </div>
    <div class="console_box_right">
      <router-view />
    </div>
  </div>
</template>

<script>
import consoleMenu from './components/menu/index'
export default {
  name: 'consoleBox',
  components: { consoleMenu }
}
</script>

<style lang="scss" scoped>
.console_box {
  position: relative;
  width: auto;
  min-width: 896px;
  min-height: 800px;
  background: transparent;
  margin: 16px 50px 0;
  &_left {
    position: absolute;
    width: 186px;
    height: 100%;
    top: 0;
    float: left;
    background: #fff;
  }
  &_right {
    min-width: 998px;
    margin-left: 202px;
    min-height: 800px;
  }
}
</style>