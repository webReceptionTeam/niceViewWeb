<template>
  <div class="my-header">
    <el-row>
      <el-col :span="8">
        <div class="header-left-wrap">
          <h1 class="logo"><router-link to="/"><img src="images/logo.png" /></router-link></h1>
      
          <el-menu  active-text-color="red" :default-active="activeIndex" class="el-menu-csdn" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,index) in navList" :key="index" :index="index+''">{{item.text}}</el-menu-item>
            <!-- <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">博客</el-menu-item>
            <el-menu-item index="3">论坛</el-menu-item> -->
          </el-menu>
        </div>
      </el-col>
       <el-col :span="8">
         <div class="header-middle-wrap">
            <el-input
              placeholder="请输入内容"
              v-model="searchInput"
              class="input-with-select"
            > 
              <template #append>
                <el-button  icon="el-icon-search" @click="searchClickHandler"></el-button>
              </template>
            </el-input>
         </div>
      </el-col>
        <el-col :span="8">
          <div class="header-right-wrap">
            <a href="javascript:;"><el-avatar :size="32" :src="circleUrl"></el-avatar></a>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import { useInitNav } from './use/nav'
import { useSearch } from './use/search'
import { useAvater } from "./use/avater"
export default {
  name: 'my-header',

  setup(props){

    //导航相关逻辑
    const { activeIndex,handleSelect,navList } = useInitNav();
    //搜索
    const { searchInput,searchClickHandler } = useSearch()
    //头像
    const { circleUrl } = useAvater()
    
    return {
      navList,
      handleSelect,
      activeIndex,
      searchInput,
      searchClickHandler,
      circleUrl
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
.header-left-wrap,.header-middle-wrap,.header-right-wrap{
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height:48px;
  padding:0 10px;
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