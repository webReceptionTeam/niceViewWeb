<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{
      item.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { filterGetRoutePath } from "@/utils/filterData";
import { ref } from "vue";
export default {
  name: "adminHeader",
  setup() {
    let breadcrumbList = ref([
      {
        name: "首页",
        path: "",
      },
      {
        name: "首页配置",
        path: "viewConfigHome",
      },
    ]);
    return {
      breadcrumbList,
    };
  },
};
</script>

<style lang="scss"></style>
