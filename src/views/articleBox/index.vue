<template>
  <div class="article-box">
    <div class="article-box-title">
      <h1>测试标题</h1>
      <div class="article-info-box">
        <div class="bar-content">
          <span class="follow-nickName">CSDN资讯</span>
          <span class="time">2021-01-29 17:56:18 </span>
          <span class="read">166</span>
          <span class="favorites">收藏</span>
        </div>
        <div class="blog-tags-box">
          <span class="label">文章标签：</span>
          <a href="/asdf/article" target="_blank" class="tag-link">测试</a>
        </div>
        <div class="operating" @click="operatingFlag = !operatingFlag">
          版权
        </div>
      </div>
      <el-collapse-transition>
        <div class="article-copyright" v-show="operatingFlag">
          <div class="creativecommons">
            版权声明：本文为博主原创文章，遵循
            <a href="/asdf/article" target="_blank">xxxx.xxx-.xx</a>
            版权协议，转载请附上原文出处链接和本声明。
          </div>
          <div class="article-source-link">
            本文链接：<a href="/asdf/article" target="_blank"
              >http://localhost:8080/asdf/article</a
            >
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="article-box-content">
      <div v-html="testHtml"></div>
    </div>
  </div>
  <!-- 这里后期需要优化 -->
  <div class="more-toolbox">
    <span>点赞</span>
    <span>评论</span>
    <span>分享</span>
    <span>收藏</span>
    <span>打赏</span>
    <span>举报</span>

    <a class="tool-button tool-df" href="javascript:;">已关注</a>
    <a class="tool-button attend">关注</a>
  </div>
  <blogFooter />
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'articleBox',
  setup(props) {
    let operatingFlag = ref(false),
      testHtml = ref(
        '<p>前端自动构建工具 主要做一些格式 转换 打包 压缩 搭建服务器<br> 需要下载对应的插件依赖<br> 修复 公众号调试窗口缩放时网址下拉菜单错位的问题<br> A 新增 公众号调试网址栏下拉菜单点击自动跳转<br> F 修复 公众号调试网址栏 URL 长按删除卡住的问题<br> F 修复 公众号调试模拟器不显示页面标题的问题<br> 新增 上传/预览前保存文件选项与提示</p>'
      )
    return {
      operatingFlag,
      testHtml
    }
  }
}
</script>

<style lang="scss" scoped>
.article-box {
  background: #fff;
  padding: 0 24px 16px;
  &-title {
    padding-top: 8px;
    h1 {
      font-size: 28px;
      word-wrap: break-word;
      color: #222226;
      font-weight: 600;
      margin: 0;
      word-break: break-all;
      margin-bottom: 8px;
    }
    .article-info-box {
      background: #f8f8f8;
      background-color: rgb(248, 248, 248);
      border-radius: 4px;
      padding: 0 8px;
      margin-bottom: 10px;
      position: relative;
      .bar-content {
        span {
          vertical-align: top;
          margin-right: 12px;
          line-height: 32px;
        }
        .follow-nickName {
          color: #555666;
          cursor: pointer;
          margin-right: 20px;
        }
        .time,
        .read {
          color: #999aaa;
        }
        .favorites {
          color: #999aaa;
          cursor: pointer;
          display: inline-block;
        }
      }
      .blog-tags-box {
        .label {
          display: inline-block;
          color: #999aaa;
        }
        .tag-link {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin-right: 8px;
          padding: 3px 6px;
          font-size: 12px;
          background-color: #fff;
          color: #5094d5;
          border: 1px solid #eaeaef;
          height: 24px;
          line-height: 17px;
          border-radius: 4px;
          display: inline-block;
        }
        .tag-link:hover {
          color: #277ccc;
        }
      }
      .operating {
        position: absolute;
        top: 0;
        right: 8px;
        line-height: 32px;
        color: #8fb0c9;
        padding: 0 4px;
        font-size: 12px;
        cursor: pointer;
      }
      .follow-nickName:hover,
      .favorites:hover,
      .operating:hover {
        color: #fc5531;
      }
    }
    .article-copyright {
      padding: 8px;
      padding-top: 0;
      padding-left: 0;
      color: #525258;
      .creativecommons,
      .article-source-link {
        color: #6f6f82;
        font-size: 13px;
      }
      a {
        color: #5094d5;
        font-size: 13px;
      }
    }
  }
  &-content {
    margin-top: 16px;
  }
}
.more-toolbox {
  width: 100%;
  background: #f8f8f8;
  z-index: 999;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  padding-left: 24px;
  height: 48px;
  span {
    color: #999aaa;
    font-size: 14px;
    height: 36px;
    padding: 0 10px;
    cursor: pointer;
    line-height: 48px;
  }
  span:hover {
    color: #fc5531;
  }
  .tool-button {
    color: #555666;
    position: relative;
    border: 1px solid #555666;
    border-radius: 14px;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    display: inline-block;
    margin: 4px 4px 0 4px;
    background: #fff;
    padding: 0 16px;
  }

  .tool-df:hover.tool-df::before {
    content: '取消关注';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fc5531;
    background: #fff;
    border-radius: 14px;
    text-align: center;
  }
  .attend {
    background: #fc5531;
    color: #fff;
    border: 1px solid #fc5531;
  }
  .attend:hover {
    background: #fc5531;
    border: 1px solid #fc5531;
  }
}
</style>