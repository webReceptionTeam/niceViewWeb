<template>
  <div>
    <!-- 用户名称及头像 -->
    <div class="profile-title displayfix">
      <div class="profile-title-imgbox">
        <img src="https://profile.csdnimg.cn/B/7/6/3_duxinshuxiaobian" alt />
      </div>
      <div class="profile-title-info">
        <div class="name">涛涛</div>
        <div>
          <!-- 码龄时间需要自行处理 精确到 年 月 日考虑不做 -->
          <span class="years">码龄2年</span>
          <span class="certification">暂无认证</span>
        </div>
      </div>
    </div>
    <!-- 用户排名及发访问量 -->
    <div class="profile-info displayfix">
      <dl class="text-center" v-for="item in 5" :key="item">
        <dt class="count">10万+</dt>
        <dd :class="{ font: item < 4 }">原创</dd>
      </dl>
    </div>
    <div class="item-rank"></div>
    <!-- 粉丝 评论等 -->
    <div class="data-info displayfix">
      <dl class="text-center" v-for="item in 5" :key="item">
        <dt class="count">10万+</dt>
        <dd :class="{ font: item < 4 }">积分</dd>
      </dl>
    </div>
    <!-- 私信 关注 -->
    <div class="profile-intro">
      <div class="opt-letter-watch-box">
        <!-- 私信功能最后边在做 前期不考虑啦 -->
        <a
          class="bt-button personal-letter"
          href="https://im.csdn.net/chat/duxinshuxiaobian"
          target="_blank"
        >私信</a>
      </div>
      <div class="opt-letter-watch-box">
        <a class="personal-watch bt-button">关注</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-title {
  padding: 16px 16px 6px 16px;
  &-imgbox {
    width: 48px;
    height: 48px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &-info {
    flex: 1;
    .name {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      height: 20px;
      line-height: 20px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .years {
      min-width: 54px;
    }
    .certification {
      color: #292b34;
      margin-left: 10px;
    }
    span {
      color: #999aaa;
      font-size: 13px;
      line-height: 20px;
      height: 20px;
      overflow: hidden;
    }
  }
}
.profile-info,
.data-info {
  padding: 9px 10px;

  .text-center {
    text-align: center;
    flex: 1;
    .count {
      color: #4a4d52;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
    }
    .font {
      color: #222226;
    }
    dd {
      color: #999aaa;
      font-size: 14px;
      line-height: 22px;
      padding: 3px 0;
    }
  }
}
.item-rank {
  height: 1px;
  background-color: #f5f6f7;
  width: 268px;
  margin: auto;
}
.profile-intro {
  padding: 8px 16px 10px 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .opt-letter-watch-box {
    color: #f5a523;
    font-size: 12px;
    width: 126px;
    height: 28px;
    border-radius: 14px;
    line-height: 26px;
    text-align: center;
    .bt-button {
      display: block;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 100%;
      font-size: 14px;
    }
    .personal-letter {
      border: 1px solid #fc5531;
      background-color: #fff;
      color: #fc5531;
      line-height: 28px;
      border-radius: 14px;
    }
    .personal-watch {
      background: linear-gradient(
        92deg,
        #ffba40 0%,
        #ff503e 37%,
        #ff2f50 81%,
        #ff1b40 100%
      );
      color: #fff;
      line-height: 26px;
      border-radius: 14px;
    }
  }
}
</style>