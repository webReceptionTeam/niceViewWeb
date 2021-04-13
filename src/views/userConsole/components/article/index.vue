<template>
  <div class="console-arrticle">
    <el-tabs v-model="TabActive" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.id"
        :label="`${item.name}(${item.total || 0})`"
        :name="item.id"
      ></el-tab-pane>
    </el-tabs>
    <!-- 有交互 联动 -->
    <el-row>
      <el-col :span="3">
        <el-select v-model="value" placeholder="年">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="value" placeholder="年">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-select v-model="value" placeholder="年">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="年">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="article-list">
      <div class="list-item">
        <div class="list-item-title">标题</div>
        <div class="list-item-type">
          <span class="type-text">原创</span>
          <span class="type-text">原创</span>
        </div>
        <div class="list-item-info">
          <div class="item-info-left">
            <span>2019年07月01日 20:15:55</span>
            <span class="border"></span>
            <p class="readComment">
              <i class="el-icon-s-home"></i>12
            </p>
            <p class="readComment">
              <i class="el-icon-s-home"></i>12
            </p>
            <p class="readComment">
              <i class="el-icon-s-home"></i>12
            </p>
          </div>
          <div class="item-info-right">
            <span>编辑</span>
            <span>浏览</span>
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "userConsoleArticle",
  setup(props) {
    let tabList = ref([
      { id: "1", name: "全部", total: 100, type: "00" },
      { id: "2", name: "公开", total: 100, type: "01" },
      { id: "3", name: "私密", total: 100, type: "02" },
      { id: "4", name: "审核", total: 100, type: "03" },
      { id: "5", name: "回收站", total: 100, type: "04" },
    ]),
      TabActive = ref("1"),
      value = ref(""),
      input = ref(""),
      options = ref([
        {
          value: "",
          label: "不限",
        },
        {
          value: "2021",
          label: "2021",
        },
        {
          value: "2020",
          label: "2020",
        },
        {
          value: "2019",
          label: "2019",
        },
      ]);
    const handleClick = () => { };
    return {
      tabList,
      TabActive,
      handleClick,
      value,
      options,
      input,
    };
  },
});
</script>

<style lang="scss" scoped>
.console-arrticle {
  background: #fff;
  padding: 20px 24px 24px;
  min-height: 800px;
  ::v-deep(.el) {
    &-tabs__nav-wrap::after {
      display: none;
    }
    &-button:hover {
      background-color: #fc5531;
      color: #fff;
    }
    &-button {
      padding: 0 24px;
      border: 1px solid #fc5531;
      border-color: #fc5531;
      font-size: 14px;
      color: #fc5531;
      -webkit-transition: background-color 0.3s ease-in,
        border-color 0.3s ease-in;
      transition: background-color 0.3s ease-in, border-color 0.3s ease-in;
      line-height: 30px;
      border-radius: 4px;
    }
    &-input__inner {
      height: 32px;
    }
    &-input__icon {
      line-height: 32px;
    }
    &-select {
      margin-right: 20px;
    }
  }
  .article-list {
    margin-top: 20px;
    .list-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      border-bottom: 1px dotted #ddd;
      padding: 1rem 0 1rem 0;
      color: #999;
      font-size: 14px;
      &-title {
        font-size: 16px;
        color: #555666;
        margin-bottom: 16px;
      }
      &-type {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 12px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .type-text {
          width: 32px;
          margin-right: 8px;
          font-size: 12px;
        }
        span {
          color: #fc5531;
          background: #fff5f2;
        }
      }
      &-info {
        margin-top: 16px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .border {
          width: 1px;
          height: 10px;
          background: #e1e1e1;
          margin: 0 16px;
        }
        .item-info-left {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          > span,
          > p {
            color: #999aaa;
          }
          .readComment {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-right: 32px;
          }
        }
        .item-info-right {
          > span {
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
