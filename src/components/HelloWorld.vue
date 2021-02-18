<template>
  <div>
    测试路由及vuex
    <div>
      {{ $store.state.count }}
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    console.log(this.$store.state.count, "测试vuex");
  },
};
</script>

<style lang="scss">
body {
  background: $theme-color;
}
</style>
