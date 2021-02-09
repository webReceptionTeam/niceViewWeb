<template>
  <div class="console-menu">
    <a
      href="https://editor.csdn.net/md/"
      target="_blank"
      class="console-menu-bt console-menu-bt-md"
      ><span>Markdown编辑器</span></a
    >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <template #title>
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-edit"></i>
          <span>内容创作</span>
        </template>
        <el-menu-item index="2-1">发布博客</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-edit"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="3-1">文章管理</el-menu-item>
        <el-menu-item index="3-2">评论管理</el-menu-item>
        <el-menu-item index="3-3">分类管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>数据观星</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
    <div class="console-menu-bottom">
      <img src="@/assets/company/company_wechat.jpg" class="top-img" alt="" />
      <p>开发人员WX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'consoleMenu',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.console-menu {
  background: #fff;
  &-bt {
    display: block;
    margin: auto;
    width: 152px;
    height: 40px;
    text-align: center;
    border-radius: 20px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
  }
  &-bt-md {
    background: linear-gradient(
      92deg,
      #ffba40,
      #ff503e 37%,
      #ff2f50 81%,
      #ff1b40
    );
    color: #fff;
    margin-top: 16px;
    margin-bottom: 10px;
  }
  &-bottom {
    border-radius: 4px;
    width: 126px;
    margin: 24px auto 8px;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      width: 110px;
      margin-bottom: 8px;
      padding: 1px;
      vertical-align: middle;
      border-style: none;
    }
    p {
      margin: 0;
      text-align: center;
    }
  }
}
</style>