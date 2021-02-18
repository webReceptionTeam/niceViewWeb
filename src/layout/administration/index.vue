<template>
  <el-container style="height: 100%">
    <admin-menu />
    <el-container>
      <el-header><admin-header /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import adminMenu from "./adminMenu";
import adminHeader from "./adminHeader";
export default {
  name: "administration",
  components: { adminMenu, adminHeader },
};
</script>

<style lang="scss" scoped>
/deep/ {
  .el-header {
    background: #fff;
    box-shadow: inset 0 -1px 0 0 #e2e2e2;
    .el-breadcrumb {
      line-height: 60px !important;
    }
  }
  .el-aside {
    border-right: 1px solid #e2e2e2;
  }
}
</style>
