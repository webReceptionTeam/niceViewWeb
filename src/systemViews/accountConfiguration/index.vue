<template>
  <div>
    <!-- 账号配置
    {{ objlist }}-->
    {{ forgetPunctuation }}
    <blIcon v-for="(item, index) in objlist.glyphs" :fontClass="item.font_class" :key="index"></blIcon>
    <el-button type="text" @click="forgetPunctuation = true">点击打开 Dialog</el-button>
    <input ref="input" style="opacity: 0;" type="text" value />

    <iconSelectionTimorous @iconClose="handleClose"></iconSelectionTimorous>
    <ul class="icon-list"></ul>
  </div>
</template>

<script>
import { ref, provide } from "vue";
const json = require("fonts/iconfont.json");
export default {
  name: "accountConfiguration",
  setup() {
    let objlist = ref(json);
    let forgetPunctuation = ref(false)
    // 关闭弹窗前钩子函数
    const handleClose = (ev) => { }
    provide('dialogVisible', forgetPunctuation)
    return {
      objlist,
      forgetPunctuation,
      handleClose
    };
  },
};
</script>

<style lang="scss" scoped></style>
