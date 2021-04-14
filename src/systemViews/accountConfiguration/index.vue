<template>
  <div>
    <!-- 账号配置
    {{ objlist }}-->
    <blIcon v-for="(item, index) in objlist.glyphs" :fontClass="item.font_class" :key="index"></blIcon>
    <el-button type="text" @click="handleClose">点击打开 Dialog</el-button>
    <input ref="input" style="opacity: 0;" type="text" value />

    <iconSelectionTimorous></iconSelectionTimorous>
    <ul class="icon-list"></ul>
  </div>
</template>

<script>
import { ref } from "vue";
const json = require("fonts/iconfont.json");
export default {
  name: "accountConfiguration",
  setup() {
    let objlist = ref(json);
    let forgetPunctuation = ref(true)
    return { objlist, forgetPunctuation };
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      // window.copy('123123')
      const oInput = this.$refs.input
      oInput.value = 'name'
      oInput.select();
      document.execCommand("Copy");
    }
  }
};
</script>

<style lang="scss" scoped></style>
