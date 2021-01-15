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
      <i class="el-icon-setting"></i>
      <template #title>{{ item.title }}</template>
      <!-- <template #title>
        <router-link :to="item.route">{{ item.title }}</router-link>
      </template> -->
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
</style>
