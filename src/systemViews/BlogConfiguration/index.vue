<template>
  <div>
    <button @click="blogListFlag = true">这里要做博客相关配置</button>
    <blogListDialog></blogListDialog>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  name: "blogConfiguration",
  setup() {
    let blogListFlag = ref(false)
    provide('blogListFlag', blogListFlag)
    return { blogListFlag };
  },
};
</script>

<style lang="scss" scoped></style>
