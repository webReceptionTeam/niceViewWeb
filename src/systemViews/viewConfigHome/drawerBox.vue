<template>
  <el-drawer title="修改模块" size="50%" v-model="drawerFlag" direction="rtl">
    <div style="padding:24px">
      <!-- card 卡片类型 Banners 横幅 link 链接 List 列表  team 团队 等 -->
      <span @click="abc">我来啦!</span>
      <div></div>
    </div>
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