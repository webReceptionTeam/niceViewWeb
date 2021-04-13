<template>
  <el-aside width="201px" style="background-color: #fff">
    <el-menu :default-active="active ? active : '/'" unique-opened @select="handleSelect">
      <template v-for="item in meunList" :key="item.id">
        <el-submenu v-if="item.children && item.children.length > 0" :index="item.router">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.meunName }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.id"
            :route="child.router"
            :index="child.router"
          >{{ child.meunName }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.router" :route="item.router">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.meunName }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { useAdminMenu } from './use/index'
export default {
  name: "adminMeun",
  setup() {
    const adminMenu = useAdminMenu()
    return { ...adminMenu };
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.el-menu) {
  border-right: none;
}
</style>
