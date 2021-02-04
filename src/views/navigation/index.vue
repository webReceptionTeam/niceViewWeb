<template>
  <div class="navigation-box">
    <div class="nav-com">
      <navList />
    </div>
    <main>
      <feedList />
    </main>
  </div>
</template>

<script>
import navList from './compontents/nav'
import feedList from './compontents/feedlist'
export default {
  name: 'navigationBox',
  components: { navList, feedList }
}
</script>

<style lang="scss" scoped>
// box-shadow: 0 1px 2px 0 rgb(0 0 0 / 4%);
.navigation-box {
  padding: 12px 0 0;
  display: flex;
  .nav-com {
    width: 100px;
    margin-right: 12px;
  }
  main {
    flex: 1;
    // height: 20000px;
  }
}
</style>