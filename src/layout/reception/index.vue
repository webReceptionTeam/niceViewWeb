<template>
  <!-- 头 -->
  <div style="height: 48px">
    <myHeader />
  </div>
  <div class="layout-box">
    <router-view />
    <blogFooter v-if="!metaFooter" />
  </div>
</template>

<script>
import myHeader from "./headerView/index";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "reception",
  components: {
    myHeader,
  },
  setup(props) {
    const router = useRoute();
    onBeforeMount(() => {
      console.log(router.meta);
    });
    return {
      metaFooter: router.meta.blogFooter,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-box {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
