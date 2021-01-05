<template>
  <div class="my-header">
    <el-row>
      <el-col :span="10">
        <div class="header-left-wrap">
          <h1 class="logo"><router-link to="/"><img src="images/logo.png" /></router-link></h1>
      
          <el-menu  active-text-color="red" :default-active="activeIndex" class="el-menu-csdn" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,index) in navList" :index="index+''">{{item.text}}</el-menu-item>
            <!-- <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">博客</el-menu-item>
            <el-menu-item index="3">论坛</el-menu-item> -->
          </el-menu>
        </div>
      </el-col>
       <el-col :span="7"><div class="grid-content"></div></el-col>
        <el-col :span="7"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { useInitNav } from './use'

export default {
  name: 'my-header',

  setup(props){

    //导航相关逻辑
    const { activeIndex,handleSelect,navList } = useInitNav();

    return {
      navList,
      handleSelect,
      activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header{
  height:48px;
  background:#fff;
  padding:0 24px;
}
.header-left-wrap{
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height:48px;
}
.logo{
  width:80px;
  height:44px;
  margin:0;
  img{
    width:80px;
  }
}
.el-menu-csdn{
  height:48px;
  margin-left:20px;
  li{
    height:48px;
    line-height:48px;
  }
}
.el-menu.el-menu--horizontal{
  border-bottom:none;
}
</style>