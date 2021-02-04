<template>
  <el-affix target=".nav-com" :offset="60">
    <ul>
      <li
        class="nav_com_li"
        v-for="(item, index) in navList"
        :key="index"
        :class="{ active: navTab == index }"
        @click="tabClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </el-affix>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'navList',
  setup(props) {
    let navList = ref([
      {
        name: '推荐'
      },
      {
        name: '推荐1'
      },
      {
        name: '推荐3'
      },
      {
        name: '推荐44'
      }
    ])
    let navTab = ref(0)
    const tabClick = (index) => {
      navTab.value = index
    }

    return {
      navList,
      navTab,
      tabClick
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  li {
    border-radius: 4px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: #555666;
    margin-bottom: 1px;
    cursor: pointer;
  }
  li:hover {
    background-color: #f6f7f8;
    color: #222226;
    font-weight: 700;
    border-radius: 16px;
  }
  .active {
    color: #222226;
    font-weight: 700;
  }
}
</style>