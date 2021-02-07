<template>
  <el-menu
    :uniqueOpened="true"
    default-active="1"
    class="user-center-menu"
    background-color="#fff"
    text-color="#ccc"
    active-text-color="#000"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in menuList"
      :key="item.id"
      :index="item.id"
      :route="item.route"
    >
      <template #title>{{ item.title }}</template>
      <!-- <template #title>
        <router-link :to="item.route">{{ item.title }}</router-link>
      </template> -->
      <!-- <a href="javascript:;">跳转</a> -->
    </el-menu-item>
  </el-menu>
</template>
<script>
import { userCerterMenu, handleSelect } from './index'
export default {
  name: 'userCerterMenu',
  setup() {
    const { menuList, handleSelect } = userCerterMenu()
    return {
      menuList,
      handleSelect
    }
  }
}
</script>

<style lang="scss" scoped>
.user-center-menu {
  width: 100%;
}
// is-active
/deep/ .el-menu {
  padding: 8px 0;
  &-item {
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #555666 !important;
  }
  &-item.is-active,
  &-item:hover {
    background: #f0f0f5 !important;
    font-weight: 500 !important;
    color: #222226 !important;
  }
}
</style>
