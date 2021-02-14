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
      <div
        class="comment-list-box"
        v-for="item in 3"
        :key="item"
        @click="commentFlag = false"
      >
        <div class="img-box">
          <img src="@/assets/home/modular.jpg" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <div class="title-left">
              <span style="color: rgb(79, 79, 79)">Mrxiaotaotao</span>
              <span>一周前</span>
              <span>回复了你的文章</span>
              <a>gulp记录（后期完善）</a>
            </div>
            <div class="title-right">
              <a @click.stop="commentFlag = !commentFlag">快速回复</a>
              <div class="divider"></div>
              <a style="color: rgb(252, 85, 49)">删除</a>
            </div>
          </div>
          <div class="view">测试内容</div>
          <div class="reply" v-show="commentFlag">
            <img src="@/assets/home/modular.jpg" alt="" />
            <input type="" name="" value="" />
            <el-button>cehsi</el-button>
          </div>
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
      TabActive = ref("1"),
      commentFlag = ref(false);
    const handleClick = () => {};
    return {
      tabList,
      TabActive,
      commentFlag,
      handleClick,
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
    .img-box {
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    .comment-list-box {
      display: flex;
      min-height: 83px;
      color: #4f4f4f;
      padding: 7px 0 12px;
      font-size: 14px;
      line-height: 22px;
      border-bottom: 1px dashed #ddd;

      .content {
        flex: 1;
        margin-left: 10px;
        .title {
          display: flex;
          font-weight: 400;
          margin-top: 5px;
          margin-bottom: 12px;
          min-height: 22px;
          color: #999;
          a {
            color: #349edf;
            text-decoration: none;
            cursor: pointer;
          }
          &-left {
            flex: 1;
            > span {
              margin-right: 8px;
              color: #999;
            }
          }
          .title-right {
            display: none;
          }

          .divider {
            margin: 0 9px;
            display: inline-block;
            height: 0.9em;
            width: 1px;
            vertical-align: middle;
            position: relative;
            top: -0.06em;
            background: #e8eaec;
          }
        }
        .view {
          max-width: 930px;
          display: block;
          word-wrap: break-word;
          padding: 0 32px;
        }
        .reply {
          margin-top: 8px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
      }
    }
    .comment-list-box:hover {
      .title-right {
        display: block !important;
      }
    }
  }
}
</style>
