<template>
  <div class="my-header" :class="{ toolbar: !toolbarClass }">
    <el-row>
      <el-col :span="8">
        <div class="header-left-wrap">
          <h1 class="logo">
            <router-link to="/">
              <img src="images/logo.png" />
            </router-link>
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
              :index="item.to"
            >{{ item.text }}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-middle-wrap">
          <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
            <template #append>
              <el-button icon="el-icon-search" @click="searchClickHandler"></el-button>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-right-wrap">
          <!-- 登录注册或头像 -->
          <span class="login-register" v-if="!isLogin">
            <router-link :to="{ ...toLoginPath }">登录</router-link>/
            <router-link to="/register">注册</router-link>
          </span>
          <el-dropdown @command="commandCallback" v-else>
            <a href="/weixin_44933553" class="avater-wrap" target="_blank">
              <el-avatar :size="32" :src="circleUrl"></el-avatar>
            </a>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="userinfo-menu">
                  <p class="nick_name">{{ nickname }}</p>
                  <p class="level">
                    <i class="el-icon-star-on"></i>
                  </p>
                  <el-divider></el-divider>
                  <div class="user-info">
                    <a href="javascript:;" @click="directTo('粉丝页path')">
                      <span>--</span>
                      <span class="gray">粉丝</span>
                    </a>
                    <a href="javascript:;" @click="directTo('收藏页path')">
                      <span>--</span>
                      <span class="gray">收藏</span>
                    </a>
                    <a href="javascript:;" @click="directTo('获赞页path')">
                      <span>--</span>
                      <span class="gray">获赞</span>
                    </a>
                  </div>
                </div>
                <el-divider></el-divider>
                <el-dropdown-item command="personal">
                  <i class="el-icon-user-solid"></i>个人中心
                </el-dropdown-item>
                <el-dropdown-item command="manage">
                  <i class="el-icon-document"></i>内容管理
                </el-dropdown-item>
                <el-dropdown-item divided command="exit">
                  <i class="el-icon-switch-button"></i>退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <a href="javascript:;" class="shoucang">收藏</a>
          <a href="javascript:;" class="message">消息</a>
          <el-button type="danger" icon="el-icon-edit" round @click="toEditor">创作中心</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { onBeforeMount, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useInitNav } from "./use/nav";
import { useSearch } from "./use/search";
import { useAvater } from "./use/avater";
import { useIsLogin } from "./use/isLogin";
export default {
  name: "my-header",

  setup(props, context) {
    let toolbarClass = ref(false);
    const route = useRoute();
    toolbarClass = route.meta.toolbar;
    //是否已经登录
    const { isLogin } = useIsLogin();
    //导航相关逻辑
    const { activeIndex, handleSelect, navList, toEditor } = useInitNav();
    //搜索
    const { searchInput, searchClickHandler } = useSearch();
    //头像以及退出前台登录
    const { circleUrl, userInfo, commandCallback, directTo, toLoginPath } = useAvater(isLogin);
    return {
      navList,
      circleUrl,
      isLogin,
      activeIndex,
      searchInput,
      toolbarClass,
      toLoginPath,
      circleUrl,
      isLogin,
      ...toRefs(userInfo),
      searchClickHandler,
      commandCallback,
      directTo,
      handleSelect,
      toEditor
    };
  },
};
</script>

<style lang="scss" scoped>
.my-header {
  height: 48px;
  background: #fff;
  padding: 0 24px;
  min-width: 1366px;
  z-index: 100;
}
.toolbar {
  position: fixed;
  width: 100%;
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
.header-right-wrap {
  justify-content: flex-end;
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
  a:hover {
    color: red;
  }
}
.menu-item {
  color: #2e2e2e;
  text-align: center;
}
.shoucang,
.message {
  color: #2e2e2e;
  margin: 0 20px;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    color: red;
  }
}

::v-deep(.el-button.el-button--danger) {
  padding: 9px 16px;
  border-radius: 5px;
}
::v-deep(.el-input) {
  .el-input__inner {
    height: 35px;
    background: #f5f6f7;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    background: #ff4d4d;
    margin: -10px -25px;
    border: 1px solid #ff4d4d;
    .el-icon-search {
      font-size: 20px;
      color: #fff;
    }
  }
}
::v-deep(.el-menu-item) {
  font-weight: 500;
}
::v-deep(.el-menu-item.is-active) {
  font-weight: 800 !important;
}
</style>
