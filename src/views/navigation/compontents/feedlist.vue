<template>
  <div class="feed-list">
    <div
      class="feed-list-item"
      v-infinite-scroll="loadScroll"
      :infinite-scroll-disabled="loading"
      v-for="(item, index) in blogList"
      :key="index"
    >
      <div class="title">
        <h2>测试标题</h2>
      </div>
      <div class="user-bar">
        <div class="info">
          <div class="user_img">
            <img
              src="@/assets/nav/monkey.png"
              alt="weixin_46242909"
              title="weixin_46242909"
              username="weixin_46242909"
            />
          </div>

          <div class="name">张大小姐</div>
          <div class="con">
            从原理出发理解Promise，用源码分析其构造从原理出发理解Promise，用源码分析其构造从原理出发理解Promise，用源码分析其构造从原理出发理解Promise，用源码分析其构造
          </div>
        </div>
        <div class="interactive">
          <span>点赞 123</span>
          <span class="line"></span>
          <span>浏览 112</span>
          <span class="line"></span>
          <span>评论 112</span>
        </div>
      </div>
    </div>
    <div v-show="loading">加载中</div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  name: 'feedlist',
  setup(props) {
    let blogList = ref(10),
      loading = ref(false)
    const loadScroll = () => {
      loading.value = true
      setTimeout(() => {
        blogList.value += 2
        loading.value = false
      }, 2000)
    }
    return {
      blogList,
      loadScroll,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.feed-list {
  // height: 500px;
  // overflow: auto;
  &-item {
    padding: 18px 24px 13px 24px;
    background: #fff;
    .title {
      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        height: 24px;
        margin-bottom: 4px;
        overflow: hidden;
        white-space: nowrap;
      }
      h2:hover {
        color: #fc5531;
      }
    }
    .user-bar {
      display: flex;
      .info {
        flex: 1;
        display: flex;
        height: 24px;
        .user_img {
          margin-right: 6px;
        }
        img {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          -o-object-fit: cover;
          object-fit: cover;
          overflow: hidden;
        }
        .name {
          font-size: 14px;
          color: #3d3d3d;
          line-height: 24px;
        }
        .con {
          flex: 1;
          margin-left: 16px;
          color: #8a8a8a;
          font-size: 14px;
          line-height: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          white-space: normal;
          overflow: hidden;
        }
      }
      .interactive {
        span {
          display: inline-block;
        }
        .line {
          width: 1px;
          height: 12px;
          border-radius: 50%;
          background-color: #e0e0e0;
          margin-top: 6px;
          margin-left: 8px;
          margin-right: 8px;
        }
      }
    }
  }
  &-item:hover {
    background: #fafaff;
  }
}
</style>