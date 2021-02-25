<template>
  <div class="system_home">
    <div class="navigation">
      <div>注册账号</div>
      <div>账号配置</div>
      <div>账号列表</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemHome",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.system_home {
  // background: red;
  .navigation {
    display: flex;
    background: #fff;
    justify-content: space-around;
    > div {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
  }
}
</style>
