<template>
  <div>
    <h3 class="aside-title">{{ cardTatle[card] }}</h3>
    <div class="aside-content">
      <ul class="hot-list" v-if="card == 'hot'">
        <li v-for="item in 4" :key="item">
          HTML5知识点总结（五）
          <span class="read">7969</span>
        </li>
      </ul>
      <ul class="classification-list" v-else-if="card == 'classification'">
        <li v-for="item in 4" :key="item">
          <img src="@/assets/user-view/vue.png" alt="" />
          <span class="text">Vue</span>
          <span class="count">8篇</span>
        </li>
      </ul>
      <ul class="comment-list" v-else-if="card == 'comment'">
        <li>测试</li>
      </ul>
      <ul v-else class="new-list">
        <li>默认</li>
      </ul>
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
}
</style>