<template>
  <aside>
    <aside-user class="aside-box" />
    <aside-search class="aside-box" />
    <asideCard class="aside-box" card="hot" />
    <asideCard class="aside-box" card="classification" />
    <asideCard class="aside-box" card="comment" />
    <asideCard class="aside-box" />
  </aside>
</template>

<script>
import asideUser from './asideUser'
import asideSearch from './asideSearch'
import asideCard from './asideCard'
export default {
  name: 'asideBox',
  components: { asideUser, asideSearch, asideCard }
}
</script>

<style lang="scss" scoped>
aside {
  width: 300px;
  float: left;
  .aside-box {
    margin-bottom: 8px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>