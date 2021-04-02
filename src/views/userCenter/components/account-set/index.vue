<template>
  <div class="account-set">
    <span class="account-set-title">账号设置</span>
    <ul>
      <li class="accout-body-item">
        <span>
          <span>密</span>
          <span>码</span>
        </span>
        <p>
          <span class="accout-error">存在风险请设置密码</span>
          <span class="accout-open">设置密码</span>
        </p>
      </li>

      <li class="accout-body-item">
        <span>
          <span>手</span>
          <span>机</span>
        </span>
        <p>
          <span class="accout-error">131****1111</span>
          <span class="accout-open">修改手机</span>
        </p>
      </li>
      <li class="accout-body-item">
        <span>
          <span>邮</span>
          <span>箱</span>
        </span>
        <p>
          <span class="accout-error">存在风险请设置邮箱</span>
          <span class="accout-open">设置邮箱</span>
        </p>
      </li>
      <li class="accout-body-item">
        <span>登录记录</span>
        <p>
          <span class="accout-open">查看记录</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accountSet'
}
</script>

<style lang="scss" scoped>
.account-set {
  width: 100%;
  padding: 24px 16px 0;
  min-height: 200px;
  background: #fff;
  font-size: 14px;
  &-title {
    min-width: 72px;
    height: 24px;
    font-size: 18px;
    font-weight: 600;
    color: #2e2e2e;
    line-height: 24px;
  }
  ul {
    li {
      height: 72px;
      padding: 32px 0 16px;
      color: #555666;

      > span {
        float: left;
        width: 56px;
        height: 24px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-left: 16px;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
      > p {
        float: right;
        text-align: right;
        width: calc(100% - 72px);
        color: #222226;
        .accout-open {
          display: inline-block;
          min-width: 56px;
          margin-left: 32px;
          color: #1989fa;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
