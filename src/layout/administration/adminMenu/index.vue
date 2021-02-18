<template>
  <el-aside width="200px" style="background-color: #fff">
    <el-menu>
      <el-menu-item index="0-1">
        <template #title>
          <i class="el-icon-message"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>前台页面配置</template>
        <el-menu-item index="2-1">首页配置</el-menu-item>
        <el-menu-item index="2-2">头部配置</el-menu-item>
        <el-menu-item index="2-3">博客配置</el-menu-item>
        <el-menu-item index="2-4">个人中心</el-menu-item>
        <el-menu-item index="2-5">内容管理</el-menu-item>
        <el-menu-item index="2-6">皮肤管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-menu"></i>内容检测</template>
        <el-menu-item index="3-1">博客</el-menu-item>
        <el-menu-item index="3-2">评论</el-menu-item>
        <el-menu-item index="3-3">分类</el-menu-item>
        <el-menu-item index="3-4">标签</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title><i class="el-icon-menu"></i>权限配置</template>
        <el-menu-item index="4-1">注册账号</el-menu-item>
        <el-menu-item index="4-2">用户管理</el-menu-item>
        <el-menu-item index="4-3">账号配置</el-menu-item>
        <el-menu-item index="4-3">接口配置</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template #title><i class="el-icon-menu"></i>个人数据</template>
        <el-menu-item index="5-1">账号列表</el-menu-item>
        <el-menu-item index="5-2">测试模块</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "adminMeun",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
/deep/ {
  .el-menu {
    border-right: none;
  }
}
</style>
