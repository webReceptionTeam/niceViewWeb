<template>
  <div class="">
    <!-- 博客首页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <input type="text" />
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <blogFooter />
  </div>
</template>

<script>
export default {
  name: 'blogTotal',
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-tabs__item {
  height: 50px;
  padding: 0 20px !important;
}
/deep/ .el-tabs {
  background: #fff;
}
</style>