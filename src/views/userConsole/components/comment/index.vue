<template>
  <div class="console-comment">
    <el-tabs v-model="TabActive" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.id"
        :label="item.name"
        :name="item.id"
      ></el-tab-pane>
    </el-tabs>
    <div class="comment-tab-content">
      <div class="comment-list-box">
        <div class="img-box">
          <img src="" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <div class="title-left"></div>
            <div class="title-right">
              <span>快速回复</span>
              <span>删除</span>
            </div>
          </div>
          <div class="view"></div>
          <div class="reply" style="display: none"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "userConsoleComment",
  setup(props) {
    let tabList = ref([
        { id: "1", name: "我的文章评论", type: "00" },
        { id: "2", name: "我发表的", type: "01" },
      ]),
      TabActive = ref("1");
    return {
      tabList,
      TabActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.console-comment {
  background: #fff;
  padding: 20px 24px 24px;
  min-height: 800px;
  /deep/ .el-tabs__nav-wrap::after {
    display: none;
  }
  .comment-tab-content {
    .comment-list-box {
      display: flex;
      min-height: 83px;
      color: #4f4f4f;
      padding: 7px 0 12px;
      font-size: 14px;
      line-height: 22px;
      border-bottom: 1px dashed #ddd;
    }
  }
}
</style>
