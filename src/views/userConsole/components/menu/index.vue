<template>
  <div class="console-menu">
    <a
      href="http://localhost:8080/editor"
      target="_blank"
      class="console-menu-bt console-menu-bt-md"
      ><span>Markdown编辑器</span></a
    >
    <el-menu :default-active="active" class="el-menu-vertical-demo" unique-opened>
      <template v-for="item in menuList" :key="item.id">
        <el-submenu v-if="item.children && item.children.length > 0" :index="item.route">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <a
            v-for="child in item.children"
            :key="child.id"
            :href="child.route"
            :target="child.open ? '_blank' : ''"
          >
            <el-menu-item :index="child.route">
              {{ child.title }}
            </el-menu-item>
          </a>
        </el-submenu>
        <a v-else :href="item.route" :target="item.open ? '_blank' : ''">
          <el-menu-item :index="item.route">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
          </el-menu-item>
        </a>
      </template>
    </el-menu>
    <div class="console-menu-bottom">
      <img src="@/assets/company/company_wechat.jpg" class="top-img" alt="" />
      <p>开发人员WX</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { filterGetRoutePath } from "@/utils/filterData";
export default {
  name: "userConsoleMenu",
  setup(props) {
    let menuList = ref([
      {
        id: "1",
        icon: "el-icon-s-home",
        image: "",
        title: "首页",
        route: "home",
      },
      {
        id: "2",
        icon: "el-icon-edit",
        image: "",
        title: "内容创作",
        route: "/editor",
        open: true,
      },
      {
        id: "3",
        icon: "el-icon-edit",
        image: "",
        title: "内容管理",
        route: "home",
        children: [
          {
            parentId: "3-1",
            title: "文章管理",
            route: "article",
          },
          {
            parentId: "3-2",
            title: "评论管理",
            route: "comment",
          },
          {
            parentId: "3-1",
            title: "分类管理",
            route: "classification",
          },
        ],
      },
      {
        id: "4",
        icon: "el-icon-setting",
        image: "",
        title: "数据观星",
        route: "blogData",
      },
      {
        id: "5",
        icon: "el-icon-setting",
        image: "",
        title: "设置",
        route: "configBlog",
      },
    ]);
    const router = useRouter();
    let active = ref(
      filterGetRoutePath().articleId == "classAdd"
        ? "classification"
        : filterGetRoutePath().articleId
    );
    const handleSelect = (key, keyPath, urls) => {
      const url = urls.route;
      console.log(key, keyPath, urls);
      if (url) {
        router.push(url);
      }
    };
    return {
      menuList,
      handleSelect,
      active,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
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
    background: linear-gradient(92deg, #ffba40, #ff503e 37%, #ff2f50 81%, #ff1b40);
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
