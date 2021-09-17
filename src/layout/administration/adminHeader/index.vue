<template>
  <div class="system_header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
        {{
          item.name
        }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title_avater">
      <el-badge is-dot>
        <blIcon class="news" :fontClass="'xiaoxitongzhi'" fontSize="25" />
      </el-badge>
      <el-avatar class="avatar" :size="30" :src="squareUrl"></el-avatar>
      <div class="user_name">管理员</div>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userNmae }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item></el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="useLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { filterGetRoutePath } from "@/utils/filterData";
import { userLogout } from '@/api/loginApi'
import { removeTokenData } from '@/utils/auth.js'
export default {
  name: "adminHeader",
  setup() {
    let active = ref(filterGetRoutePath().userName);

    let breadcrumbList = ref([
      {
        name: "首页",
        path: "",
      },
      {
        name: "首页配置",
        path: "viewConfigHome",
      },
    ]);
    let userNmae = ref(window.localStorage.nickname || '管理员')
    let meunList = ref([
      {
        meunName: "首页",
        icon: "el-icon-menu",
        router: "",
        id: "1",
      },
      {
        meunName: "前台页面配置",
        icon: "el-icon-menu",
        router: "viewConfigHome",
        id: "5",
        children: [
          { id: "5-1", meunName: "首页配置", router: "viewConfigHome" },
          { id: "5-2", meunName: "头部配置", router: "viewHeadConfiguration" },
          { id: "5-3", meunName: "博客配置", router: "blogConfiguration" },
          { id: "5-4", meunName: "个人中心", router: "viewConfigPersonalCenter" },
          { id: "5-5", meunName: "内容管理", router: "viewCongigContent" },
          { id: "5-6", meunName: "皮肤管理", router: "viewConfigSkin" },
        ],
      },
      {
        meunName: "内容检测",
        icon: "el-icon-menu",
        router: "detectBlog",
        id: "2",
        children: [
          { id: "2-1", meunName: "博客", router: "detectBlog" },
          { id: "2-2", meunName: "评论", router: "detectComment" },
          { id: "2-3", meunName: "分类", router: "detectClassification" },
          { id: "2-4", meunName: "标签", router: "detectLabel" },
        ],
      },
      {
        meunName: "权限配置",
        icon: "el-icon-menu",
        router: "registeredView",
        id: "3",
        children: [
          { id: "3-1", meunName: "注册账号", router: "registeredView" },
          { id: "3-2", meunName: "用户管理", router: "manageUsers" },
          { id: "3-3", meunName: "账号配置", router: "accountConfiguration" },
          { id: "3-4", meunName: "接口配置", router: "interfaceConfiguration" },
        ],
      },
      {
        meunName: "个人数据",
        icon: "el-icon-menu",
        id: "4",
        router: "accountNumberList",
        children: [
          { id: "4-3", meunName: "个人资料", router: "personalSettings" },
          { id: "4-1", meunName: "账号列表", router: "accountNumberList" },
          { id: "4-2", meunName: "测试模块", router: "testModule" },
        ],
      },
    ]);

    onBeforeMount(() => {
      let navTab = [{ name: "首页" }];
      meunList.value.forEach((item) => {
        if (item.children) {
          item.children.forEach((child) => {
            if (child.router == active.value) {
              navTab = [
                {
                  name: item.meunName,
                },
                {
                  name: child.meunName,
                },
              ];
            }
          });
        }
      });
      breadcrumbList.value = navTab;
    });
    let squareUrl = ref(
      "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    );

    // 退出
    const useLogout = async () => {
      await userLogout()
      await removeTokenData()
      window.location.href = '/login'
    }
    return {
      breadcrumbList,
      squareUrl,
      userNmae,
      useLogout
    };
  },
};
</script>

<style lang="scss">
.system_header {
  display: flex;
  justify-content: space-between;
  .title_avater {
    display: flex;
    align-items: center;
    ::v-deep(.el-badge) {
      height: 25px;
    }
    .news {
      cursor: pointer;
    }
    .avatar {
      margin: 0 15px 0;
    }
    .user_name {
      margin-right: 10px;
    }
  }
}
.el-dropdown-link {
  cursor: pointer !important;
}
</style>
