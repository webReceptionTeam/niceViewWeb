<template>
  <div>
    <button @click="blogListFlag = true">这里要做博客相关配置</button>
    <blogListDialog @change="changeBnt"></blogListDialog>
    {{ liu }}
  </div>
</template>

<script>
import { ref, provide, watch } from 'vue'
export default {
  name: "blogConfiguration",
  setup() {
    let blogListFlag = ref(false),
      liu = ref([])
    // 
    provide('blogListFlag', blogListFlag)

    const changeBnt = (list) => {
      console.log(list, 'list')
      liu.value = list
    }
    return {
      blogListFlag,
      changeBnt,
      liu
    };
  },
};
</script>

<style lang="scss" scoped></style>
