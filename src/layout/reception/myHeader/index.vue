<template>
  <div class="my-header">
    <el-row>
      <el-col :span="8">
        <div class="header-left-wrap">
          <h1 class="logo">
            <router-link to="/"><img src="images/logo.png" /></router-link>
          </h1>

          <el-menu
            active-text-color="red"
            :default-active="activeIndex"
            class="el-menu-csdn"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item
              v-for="(item, index) in navList"
              :key="index"
              :index="index + ''"
              >{{ item.text }}</el-menu-item
            >
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
              <el-button
                icon="el-icon-search"
                @click="searchClickHandler"
              ></el-button>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-right-wrap">
          <!-- 登录注册或头像 -->
          <span class="login-register" v-if="!isLogin">
            <router-link to="/login" >登录</router-link>/
            <router-link to="/register">注册</router-link>
          </span>
          <el-dropdown v-else >
            <a href="javascript:;" class="avater-wrap"
              ><el-avatar :size="32" :src="circleUrl"></el-avatar
            ></a>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="userinfo-menu">
                  <p class="nick_name">weixin_39822683</p>
                  <p class="level"><i class="el-icon-star-on"></i></p>
                  <el-divider></el-divider>
                  <div class="user-info">
                    <a href="javascript:;">
                      <span>--</span>
                      <span class="gray">粉丝</span>
                    </a>
                    <a href="javascript:;">
                      <span>--</span>
                      <span class="gray">收藏</span>
                    </a>
                    <a href="javascript:;">
                      <span>--</span>
                      <span class="gray">获赞</span>
                    </a>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { onBeforeMount,ref } from 'vue' 
import { useInitNav } from './use/nav'
import { useSearch } from './use/search'
import { useAvater } from './use/avater'
import { useIsLogin } from './use/isLogin'
export default {
  name: 'my-header',

  setup(props, context) {
    //导航相关逻辑
    const { activeIndex, handleSelect, navList } = useInitNav()
    //搜索
    const { searchInput, searchClickHandler } = useSearch()
    //头像
    const { circleUrl } = useAvater()

    //是否已经登录
    const { isLogin } = useIsLogin()
    
    return {
      navList,
      handleSelect,
      activeIndex,
      searchInput,
      searchClickHandler,
      circleUrl,
      isLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header {
  height: 48px;
  background: #fff;
  padding: 0 24px;
}
.header-left-wrap,
.header-middle-wrap,
.header-right-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  padding: 0 10px;
}
.logo {
  width: 80px;
  height: 44px;
  margin: 0;
  img {
    width: 80px;
  }
  a {
    display: grid;
  }
}
.el-menu-csdn {
  height: 48px;
  margin-left: 20px;
  li {
    height: 48px;
    line-height: 48px;
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/**头像菜单 */

.userinfo-menu {
  width: 300px;
}
.nick_name {
  color: #2e2e2e;
  text-align: center;
  font-size: 20px;
}
.level {
  color: coral;
  text-align: center;
  font-size: 20px;
}
.user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 22px;
    .gray {
      color: rgb(165, 157, 157);
    }
  }
}
.login-register {
  a:hover{
    color:red;
  }
}
</style>