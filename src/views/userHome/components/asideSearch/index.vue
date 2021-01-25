<template>
  <div class="aside-content search-comter">
    <el-input
      placeholder="搜博主文章"
      v-model="input3"
      class="input-with-select"
    >
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'asideSearch',
  setup(props) {
    let input3 = ref('')
    return {
      input3
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-content {
  padding: 8px 16px;
}
/deep/ .el-input .el-input__inner {
  height: 32px;
}
</style>