<template>
  <div>
    <!-- 账号配置
    {{ objlist }} -->
    <blIcon
      v-for="(item, index) in objlist.glyphs"
      :fontClass="item.font_class"
      :key="index"
    ></blIcon>
  </div>
</template>

<script>
import { ref } from "vue";
const json = require("fonts/iconfont.json");
export default {
  name: "accountConfiguration",
  setup() {
    let objlist = ref(json);
    return { objlist };
  },
};
</script>

<style lang="scss" scoped></style>
