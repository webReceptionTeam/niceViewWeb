<template>
  <div class="user-home">
    <div class="user-home-top">
      <headerView />
    </div>
    <div class="user-home-box">
      <aside>测试二</aside>
      <main>asdf</main>
    </div>
    <!-- <myNav :refList="refList" :navList="list" /> -->
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHandleScroll } from './useIndex'
export default {
  name: 'userHome',
  setup(props) {
    let route = useRoute()
    const btn = () => {
      console.log(route.path)
      open(route.path + '/user-center/user-info')
    }
    const handleScroll = useHandleScroll()
    return {
      btn,
      ...handleScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.user-home {
  min-height: calc(100% - 52px);
  &-top {
    height: 100px;
    // background: url('@/assets/user-view/user-header.png') no-repeat center;
    background: url('../../assets/user-view/user-header.png') no-repeat center;
    background-size: 1920px auto;
  }

  &-box {
    padding: 0 24px 0;
    margin: 0 auto;
    padding-bottom: 32px;
    height: 10000px;
    aside {
      width: 300px;
      float: left;
      background: #fff;
    }
    main {
      float: right;
      background: red;
    }
  }
}
</style>