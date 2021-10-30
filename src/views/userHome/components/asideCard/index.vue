<template>
  <div>
    <h3 class="aside-title">{{ cardTatle[card] }}</h3>
    <div class="aside-content">
      <!-- 最多五个 -->
      <ul class="hot-list" v-if="card === 'hot'">
        <li v-for="item in 4" :key="item">
          HTML5知识点总结（五）
          <span class="read">7969</span>
        </li>
      </ul>
      <!-- 建议是4个 其他待定 -->
      <ul class="classification-list" v-else-if="card === 'classification'">
        <li v-for="item in 4" :key="item">
          <img src="@/assets/user-view/vue.png" alt />
          <span class="text">Vue</span>
          <span class="count">8篇</span>
        </li>
      </ul>
      <!-- 最大五个评论 -->
      <ul class="comment-list" v-else-if="card === 'comment'">
        <li v-for="item in 4" :key="item">
          <a href="javascript;" class="title">三子棋（井字棋）的实现</a>
          <p class="ellipsis">
            <a href="javascript;">涛涛：</a>
            <span>原创不易，博主加油，欢迎回访</span>
          </p>
        </li>
      </ul>
      <div v-else class="new-list">
        <ul>
          <li v-for="item in 4" :key="item">我对编程的看法</li>
        </ul>
        <div class="archive-bar"></div>
        <div class="archive-box">
          <div class="archive-list-item" v-for="item in 4" :key="item">
            <span class="year">2021年</span>
            <span class="num">12篇</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asideCard',
  props: {
    card: {
      type: String,
      //   required: true, 必填字符串
      default: 'new'
    }
  },
  data() {
    return {
      cardTatle: {
        hot: '热门文章',
        classification: '分类专栏',
        comment: '最新评论',
        new: '最新文章'
      }
    }
  }
  //   Hot 热门
  //   classification 分类
  // comment 评论
  //   不传 默认 最新文章 new
}
</script>

<style lang="scss" scoped>
.aside-title {
  color: #3d3d3d;
  background: url(../../../../assets/user-view/bg-nav.png) no-repeat center;
  background-size: 300px 38px;
  padding: 0 16px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  font-weight: bold;
}
.aside-content {
  padding: 12px 16px 16px 16px;
  overflow: hidden;
  .hot-list {
    li {
      margin-top: 8px;
    }
    li:hover {
      color: #fc5531;
    }
    .read {
      font-size: 12px;
      color: #999aaa;
      line-height: 24px;
    }
  }
  .classification-list {
    li {
      display: flex;
      margin-top: 16px;
      img {
        width: 28px;
        height: 28px;
        margin-right: 12px;
        border-radius: 4px;
      }
      .text {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        max-width: 155px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 8px;
        line-height: 28px;
      }
      .count {
        max-width: 42px;
        font-size: 12px;
        color: #999aaa;
        line-height: 28px;
      }
    }
  }
  .comment-list {
    li {
      margin-top: 8px;
      .title {
        line-height: 22px;
        margin-bottom: 2px;
        color: #999aaa;
        display: block;
      }
      .ellipsis {
        font-size: 14px;
        color: #555666;
        word-wrap: break-word;
        vertical-align: top;
        display: block;
        word-break: break-all;
        position: relative;
        line-height: 1.5em;
        max-height: 3em;
        overflow: hidden;
        a {
          color: #555666;
        }
      }

      p:before {
        height: 18px;
      }
      .ellipsis:before {
        content: "...";
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        width: 24px;
        padding-left: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(transparent),
          color-stop(40%, #fff)
        );
        background: linear-gradient(to right, transparent, #fff 40%);
      }
      .ellipsis:after {
        content: "";
        display: inline-block;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
  }
  .new-list {
    li {
      margin-top: 12px;
      display: block;
      color: #555666;
      cursor: pointer;
    }
    .archive-bar {
      background: #f0f0f0;
      height: 1px;
      margin: 12px 0;
    }
    .archive-box {
      overflow: hidden;
      overflow-y: auto;
      margin-right: -4px;
      margin-left: -3px;
      scrollbar-width: thin;
      max-height: 248px;
      margin-top: 8px;
      .archive-list-item {
        padding: 4px 0 4px 6px;
        width: 50%;
        float: left;
        color: #555666;
        cursor: pointer;

        .year,
        .num {
          color: #4a4d52;
          line-height: 22px;
        }
        .year {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>