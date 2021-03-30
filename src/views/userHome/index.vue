<template>
  <div class="user-home">
    <div class="user-home-top" v-if="!userViewFlag">
      <headerView v-if="!errorFlag" />
    </div>
    <div class="user-home-box" v-if="!errorFlag">
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
// import { useHandleScroll } from "./useIndex";
import asideBox from "./components";
import { filterGetRoutePath } from "@/utils/filterData";
export default {
  name: "userHome",
  components: { asideBox },
  setup(props) {
    let route = useRoute(),
      userViewFlag = ref(filterGetRoutePath().articleId || ''),
      errorFlag = route?.meta?.errorPage404 || false;

    return {
      userViewFlag,
      errorFlag
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
    margin: 0 auto;
    padding-bottom: 32px;
    padding-top: 10px;
    // position: relative;
    // -webkit-box-sizing:border-box
    // height: 10000px;
    main {
      float: right;
      // background: red;
    }
  }
}
</style>
