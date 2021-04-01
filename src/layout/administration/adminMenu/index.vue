<template>
  <el-aside width="201px" style="background-color: #fff">
    <el-menu :default-active="active ? active : '/'" unique-opened>
      <template v-for="item in meunList" :key="item.id">
        <el-submenu v-if="item.children && item.children.length > 0" :index="item.router">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.meunName }}</span>
          </template>
          <a v-for="child in item.children" :key="child.id" :href="child.router">
            <el-menu-item :index="child.router">{{ child.meunName }}</el-menu-item>
          </a>
        </el-submenu>
        <a v-else :href="item.router">
          <el-menu-item :index="item.router">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.meunName }}</span>
            </template>
          </el-menu-item>
        </a>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { filterGetRoutePath } from "@/utils/filterData";
export default {
  name: "adminMeun",
  setup() {
    let active = ref(filterGetRoutePath().userName);
    console.log(filterGetRoutePath(), "测试");
    const router = useRouter();
    let meunList = ref([
      {
        meunName: "首页",
        icon: "el-icon-menu",
        router: "/",
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
        meunName: "个人设置",
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
    const handleSelect = (key, keyPath, urls) => {
      const url = urls.route;
      console.log(key, keyPath, urls);
      if (url) {
        router.push(url);
      }
    };
    return { active, meunList, handleSelect };
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
