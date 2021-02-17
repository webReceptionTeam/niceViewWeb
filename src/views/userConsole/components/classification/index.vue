<template>
  <div class="classification">
    <div class="title">
      <h1>分类专栏</h1>
      <div>
        <span>新增</span>
      </div>
    </div>
    <el-tabs v-model="TabActive" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.id"
        :label="`${item.name}(${item.total || 0})`"
        :name="item.id"
      ></el-tab-pane>
    </el-tabs>
    <div class="content">
      <div class="table">
        <div class="table-header">
          <div>类别</div>
          <div>操作</div>
          <div>前台是否显示</div>
          <div>文章</div>
        </div>
        <div class="table-body">
          <div class="table-body-tr">
            <div>
              <img src="@/assets/home/modular.jpg" alt="" />
              <div>数据</div>
            </div>
            <div>
              <a href="javascript:;">测试</a>
              <a href="javascript:;">测试</a>
              <a href="javascript:;">测试</a>
              <a href="javascript:;">测试</a>
            </div>
            <div>
              <el-switch v-model="value" active-color="#13ce66"> </el-switch>
            </div>
            <div>10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "userConsoleClassification",
  setup(props) {
    let tabList = ref([
        { id: "1", name: "全部", total: "", type: "00" },
        { id: "2", name: "审核未通过", total: "", type: "01" },
        { id: "3", name: "回收站", total: "", type: "02" },
      ]),
      TabActive = ref("1"),
      value = ref(false);
    const handleClick = () => {};

    return {
      tabList,
      TabActive,
      value,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.classification {
  background: #fff;
  padding: 24px;
  min-height: 800px;
  .title {
    display: flex;
    justify-content: space-between;
    h1 {
      line-height: 32px;
      font-size: 18px;
    }
    span {
      display: block;
      width: 64px;
      height: 32px;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #fff;
      background: #fc5531;
      border-radius: 16px;
      border: 1px solid #fc5531;
      -webkit-transition: none 0s;
      transition: none 0s;
      font-weight: 700;
    }
  }
  /deep/ .el-tabs__nav-wrap::after {
    display: none;
  }
  .content {
    .table {
      &-header,
      &-body-tr {
        display: flex;
        > div:nth-of-type(1) {
          flex: 5;
        }
        > div:nth-of-type(2) {
          flex: 3;
          text-align: center;
        }
        > div:nth-of-type(3),
        > div:nth-of-type(4) {
          flex: 1;
          text-align: center;
          line-height: 48px;
        }
      }
      &-header {
        padding-bottom: 4px;
        line-height: 30px;
        color: #999;
        font-size: 14px;
        border-bottom: 1px solid #e9e9e9;
      }
      &-body {
        &-tr {
          font-size: 14px;
          color: #4f4f4f;
          line-height: 22px;
          padding: 24px 0;
          border-bottom: 1px dotted #ddd;
          > div:nth-of-type(1) {
            display: flex;
            img {
              display: block;
              width: 48px;
              height: 48px;
              margin-right: 16px;
            }
            > div {
              padding: 0 8px;
              height: 48px;
              line-height: 48px;
              color: transparent;
              text-shadow: 0 0 0 #545454;
              font-weight: 700;
            }
          }
          > div:nth-of-type(2) {
            a {
              font-size: 12px;
              padding-right: 8px;
              margin-right: 8px;
              border-right: 1px solid #e9e9e9;
              color: #349edf;
              text-decoration: none;
              cursor: pointer;
              line-height: 48px;
            }
            a:last-child {
              border: none;
              color: #fc5531;
            }
          }
        }
      }
    }
  }
}
</style>
