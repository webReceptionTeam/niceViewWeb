<template>
  <div class="console-home">
    <div class="console-home-user">
      <div class="console-home-user-img">
        <img src="@/assets/images/empty.png" />
      </div>
      <div class="console-home-user-name">
        <div class="title">Mrxiaotaotao</div>
        <div class="info">简介</div>
      </div>
    </div>
    <div class="console-home-entrance">
      <div class="title">常用入口</div>
      <ul class="entrance-list">
        <li>首页</li>
        <li>博客列表</li>
        <li>博客数据</li>
        <li>个人中心</li>
        <li>发布内容</li>
      </ul>
    </div>
    <div class="console-home-blog-box">
      <span class="more">更多</span>
      <div class="title">近期发布文章</div>
      <ul class="blog-list">
        <li v-for="(item, index) in 3" :key="index">
          <div class="item-left">
            <span>文章</span>
            <div>
              <p>标题</p>
              <p>
                详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
              </p>
            </div>
          </div>
          <ul class="item-right">
            <li>
              <p>10</p>
              <p>阅读数</p>
            </li>
            <li>
              <p>102</p>
              <p>评论数</p>
            </li>
            <li>
              <p>130</p>
              <p>点赞数</p>
            </li>
            <li>
              <p>1012</p>
              <p>收藏数</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userConsoleHome'
}
</script>

<style lang="scss" scoped>
.console-home {
  > div {
    border-radius: 4px;
    margin-bottom: 8px;
    background: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  &-user {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 126px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 16px;
    &-img {
      margin-right: 16px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    &-name {
      .title {
        font-size: 18px;
        font-weight: 600;
        color: #474747;
      }
      .info {
        margin-top: 5px;
        font-size: 12px;
        color: #555666;
      }
    }
  }
  &-entrance,
  &-blog-box {
    .title {
      font-size: 16px;
      padding: 8px 0 10px 16px;
      margin-right: 5px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #474747;
    }
  }

  &-entrance {
    padding-bottom: 24px;
    .entrance-list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      padding: 16px 16px 8px;
      li {
        width: 20%;
        height: 56px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        text-align: center;
        line-height: 56px;
        cursor: pointer;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3d3d3d;
        margin-right: 16px;
        position: relative;
      }
    }
  }
  &-blog-box {
    position: relative;
    .more {
      position: absolute;
      top: 0;
      right: 16px;
      line-height: 42px;
      font-weight: 400;
      color: #555666;
      font-size: 14px;
      cursor: pointer;
    }
    .blog-list {
      padding: 0 16px;
      > li {
        border-bottom: 1px solid #e9e9e9;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 80px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:first-child {
          font-size: 18px;
          color: #474747;
          line-height: 25px;
        }
        p:last-child {
          font-size: 14px;
          margin-top: 4px;
          color: #999;
          line-height: 22px;
        }
        .item-left {
          width: 480px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          span {
            width: 44px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            font-size: 14px;
            background: #fff;
            border-radius: 2px;
            color: #474747;
            border: 1px solid #e0e0e0;
          }
          > div {
            width: 420px;
          }
        }
        .item-right {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          li {
            width: 118px;
            p {
              width: 100%;
              text-align: center;
            }
            p:first-child {
              font-weight: 600;
            }
          }
        }
      }
      > li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>