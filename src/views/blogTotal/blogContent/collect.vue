<template>
  <div class="collect-box">
    <div></div>
    <ul class="collect-box-favorite">
      <li v-for="(item, index) in 4" :key="index">
        <div class="title">
          <span>博客</span>
          <a href="javascript:;"><h4>js 实现上传文件</h4></a>
        </div>
        <div class="content">
          <a href="javascript:;">涛涛测试</a>
          <span> 2021-01-19 09:13:32</span>
        </div>
      </li>
      <div class="article-login">- 到底了 -</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'collect'
}
</script>

<style lang="scss" scoped>
.collect-box {
  background: #fff;
  &-favorite {
    li {
      height: 82px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background: #fbfbfb;
      padding: 18px 48px;
      border-bottom: 1px solid #f0f2f5;
      .title {
        margin-bottom: 8px;
        span {
          background: #fff5f2;
          border-radius: 2px;
          display: inline-block;
          height: 18px;
          padding: 0 4px;
          line-height: 18px;
          font-size: 12px;
          font-weight: 400;
          color: #fc5531;
          margin-right: 8px;
        }
        h4 {
          font-size: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #555666;
          line-height: 22px;
          margin-bottom: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .title,
      .content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        a {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #5f6471;
          line-height: 20px;
          margin-right: 16px;
        }
        span {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #5f6471;
          line-height: 20px;
          margin-right: 16px;
        }
      }
    }
    .article-login {
      text-align: center;
      background: #fff;
    }
  }
}
</style>