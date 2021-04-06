<template>
  <el-drawer title="修改模块" size="50%" v-model="drawerFlag" direction="rtl">
    <span @click="abc">我来啦!</span>
  </el-drawer>
</template>

<script>
import { useMain } from './use/drawerBox'
export default {
  setup() {
    const main = useMain()
    return { ...main }
  }
}
</script>

<style lang="scss" scoped>
</style>