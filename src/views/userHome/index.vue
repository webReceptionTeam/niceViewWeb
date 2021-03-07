<template>
  <div class="user-home">
    <div class="user-home-top">
      <headerView />
    </div>
    <div class="user-home-box">
      <!-- 左侧模块 -->
      <aside-box />
      <main>
        <!-- 这里做无此用户及无此博客id时展示 总博客列表 -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useHandleScroll } from "./useIndex";
import asideBox from "./components";
import { filterGetRoutePath } from "@/utils/filterData";
export default {
  name: "userHome",
  components: { asideBox },
  setup(props) {
    let route = useRoute();
    const btn = () => {
      console.log(route.path);
      open(route.path + "/user-center/user-info");
    };
    onMounted(() => {
      let rou = route.path.slice(1);
      let list = rou.split("/");
      console.log(
        list,
        list[1],
        filterGetRoutePath(route.path),

        "测试"
      );
    });
    const handleScroll = useHandleScroll();
    return {
      btn,
      ...handleScroll,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-home {
  min-height: calc(100% - 52px);
  width: 100%;
  &-top {
    height: 100px;
    width: 100%;
    background: url("../../assets/user-view/user-header.png") no-repeat center;
    background-size: 1920px auto;
  }

  &-box {
    padding: 0 24px 0;
    margin: 0 auto;
    padding-bottom: 32px;
    // height: 10000px;
    main {
      float: right;
      // background: red;
    }
  }
}
</style>
