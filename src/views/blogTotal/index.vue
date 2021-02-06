<template>
  <div class="">
    <!-- 博客首页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in blogTabList"
        :key="index"
        :label="item.table"
        :name="item.tabId"
      >
      </el-tab-pane>
    </el-tabs>
    <component :is="viewName[activeName]" />
    <!-- <blog-view v-show="activeName == '00'" />
    <collect-view v-show="activeName == '01'" />
    <follow-view v-show="activeName == '02'" /> -->
    <blogFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import blogView from './blogContent/blog'
import collectView from './blogContent/collect'
import followView from './blogContent/follow'
export default {
  name: 'blogTotal',
  components: { blogView, collectView, followView },
  setup(props) {
    let blogTabList = ref([
        { tabId: '00', table: '博客' },
        // { tabId: '', table: '资源 ' },
        // { tabId: '', table: '论坛' },
        // { tabId: '', table: '问答 ' },
        { tabId: '01', table: '收藏' },
        { tabId: '02', table: '关注' }
      ]),
      activeName = ref('01'),
      viewName = ref({
        '00': 'blogView',
        '01': 'collectView',
        '02': 'followView'
      })
    return { blogTabList, activeName, viewName }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-tabs__item {
  height: 50px;
  padding: 0 20px !important;
}
/deep/ .el-tabs {
  background: #fff;
  &__header {
    margin: 0;
  }
}
/deep/ .el-tabs__nav-wrap::after {
  height: 1px;
}
/deep/ .el-tabs__active-bar {
  height: 1px;
  bottom: 1px;
}
</style>