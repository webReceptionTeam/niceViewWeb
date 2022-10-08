<template>
  <div class="blog-box">
    <div class="displayfix blog-box-header">
      <div class="left">
        <el-checkbox v-model="original">原创</el-checkbox>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="screenFlag">
          <el-breadcrumb-item :to="{ path: '/' + allBlog }">全部文章</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right">
        <span class="sort">排序：</span>
        <span
          style="margin-right: 24px"
          :class="{ select: sortType === '01' }"
          @click="sortClick('01')"
        >按最后发布时间</span>
        <span
          style="margin-right: 24px"
          :class="{ select: sortType === '02' }"
          @click="sortClick('02')"
        >按发布量</span>
      </div>
    </div>

    <div class="article-list">
      <div class="article-item-box" v-for="(item, index) in articleList" :key="index">
        <h4>
          <span class="article-type">原创</span>
          标题部分
        </h4>
        <p class="content">
          this的指向问题一句话说明 this 的指向 谁调用它 this
          指向谁全局中的this指向window
          node环境都是空对象new绑定如果构造函数没有返回 object 或者是 function
          ，那么 this 指向这个新对象显式绑定call apply bindnode环境中:非严格模式
          global ， 严格模式为null浏览器环境中：非严格模式 window，严格模...
        </p>
        <div class="info-box">
          <span class="date">2019-07-01 20:15:55</span>
          <span class="read-num">
            <img src="https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png" alt />21
          </span>
        </div>
        <div class="opt-box">
          <button class="btn-opt" data-type="top">置顶</button>
          <a
            class="btn-opt"
            data-type="edit"
            href="https://editor.csdn.net/md?articleId=94406189"
          >编辑</a>
          <button class="btn-opt" data-type="delete">删除</button>
        </div>
      </div>
      <div class="pagination-box">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>

      <el-empty v-if="articleList.length === 0" :image-size="200" description="空空如也"></el-empty>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { filterGetRoutePath } from '@/utils/filterData'
export default {
  name: 'blog',
  setup(props) {
    let allBlog = ref(''),
      screenFlag = ref(false),
      original = ref(false),
      sortType = ref('01'), // 01 时间 02 访问量
      articleList = ref([1])
    onBeforeMount(() => {
      // 动态拿到blog首页路由
      allBlog.value = filterGetRoutePath().userName
    })
    const sortClick = (type) => {
      sortType.value = type
    }
    return {
      allBlog,
      screenFlag,
      original,
      sortType,
      articleList,
      // 事件
      sortClick
    }
  }
}
 </script>

<style lang="scss" scoped>
.blog-box {
  background: #fff;
  &-header {
    justify-content: space-between;
    height: 42px;
    padding: 0 24px;
    line-height: 42px;
    border-bottom: 1px solid #f0f2f5;
    .left {
      ::v-deep .el {
        &-breadcrumb {
          line-height: 42px;
        }
        &-breadcrumb__inner {
          font-weight: 500;
          color: #303133;
        }
        &-breadcrumb__separator {
          color: #303133;
        }
      }
    }
    .right {
      span {
        color: #555666;
        cursor: pointer;
      }
      .sort {
        color: #999aaa;
        cursor: auto;
      }
      .select {
        color: #fc5531;
      }
    }
  }
  .article-list {
    .article-item-box {
      padding: 16px 24px 12px 24px;
      border-bottom: 1px solid #f0f2f5;
      position: relative;
      h4 {
        color: #555666;
        cursor: pointer;
      }
      h4:hover {
        color: #fc5531;
      }
      .article-type {
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 34px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        border-radius: 2px;
        vertical-align: 1px;
        color: #fc5531;
        background-color: #fff5f2;
      }
      .content {
        margin-top: 6px;
        font-size: 14px;
        line-height: 22px;
        white-space: normal;
        color: #999aaa;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info-box {
        margin-top: 2px;
        span {
          line-height: 24px;
        }
        .date {
          color: #5f6471;
        }
        .read-num {
          color: #5f6471;
          margin-left: 16px;
          img {
            width: 14px;
            height: 14px;
            vertical-align: -2px;
            margin-right: 4px;
          }
        }
      }
      .opt-box {
        display: none;
        position: absolute;
        right: 24px;
        bottom: 14px;
        .btn-opt {
          border: none;
          color: #222226;
          font-size: 14px;
          margin-left: 12px;
          background-color: transparent;
        }
        .btn-opt:hover,
        .btn-opt[data-type="delete"] {
          color: #fc5531;
        }
      }
    }
    .article-item-box:hover {
      background: #f9fafc;
      .opt-box {
        display: block;
      }
    }
    .article-item-box:last-of-type {
      border-bottom: none;
    }
    .pagination-box {
      padding: 16px;
      text-align: center;
    }
  }
}
</style>