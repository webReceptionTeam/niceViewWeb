<template>
  <div class="user-info">
    <div class="profile-header">
      <div class="general-info">
        <div class="general-info-t">
          <div class="general-info-avatar">
            <img src="@/assets/dogsinger.gif" wi alt="" />
          </div>
          <div class="general-info-t-info">
            <div class="profile-name-info">
              <div class="person-name">三天两渣是也</div>
              <div
                class="person-code-age"
                style="background-color: rgb(209, 221, 241); color: rgb(69, 81, 101);"
              >
                <span data-v-df75d7f8="">码龄1年</span>
              </div>
            </div>
            <div class="profile-vip-info no-vip">
              <div class="no-vip-info">您还不是会员身份</div>
              <a href="javascript:;" class="go-mall"
                >开通会员<i data-v-df75d7f8="" class="el-icon-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="general-info-sign">已完成0/5</div>
        </div>
        <div class="general-info-b"></div>
      </div>
      <div class="base-info">
        <h3 class="base-info-head">基本信息</h3>
      </div>
    </div>
    <div class="edu-info"></div>
    <div class="job-info"></div>
    <div class="interest-tag"></div>
  </div>
</template>

<script>
export default {
  name: 'userInfo'
}
</script>
<style lang="scss" scoped>
.user-info {
  min-width: 998px;
  align-content: space-between;
}
.profile-header {
  .general-info {
    margin-bottom: 16px;
    background: #fff;
    .general-info-t {
      padding: 24px 0 40px 24px;
      position: relative;
      display: flex;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.04);
      .general-info-avatar {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: relative;
        width: 96px;
        height: 96px;
        margin-right: 16px;
        -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;
      }
      .general-info-avatar > img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
      }
      .general-info-t-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .profile-name-info {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          .person-name {
            color: #222226;
            font-weight: 500;
            line-height: 24px;
            font-size: 20px;
            margin-right: 16px;
          }
          .person-code-age {
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            font-size: 14px;
          }
        }
        .profile-vip-info {
          display: flex;
          align-items: center;
          height: 32px;
          background: linear-gradient(90deg, #ffe3b2, #fff3de);
          border-radius: 4px;
          padding: 0 8px;
          font-size: 14px;
          .no-vip-info {
            color: #999aaa;
            margin-right: 88px;
          }
          .go-mall {
            color: #fc5531;
          }
        }
        .no-vip {
          background: linear-gradient(90deg, #efefef, #f9f9f9);
        }
      }
      .general-info-sign {
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 32px;
        font-size: 12px;
        color: #555666;
        line-height: 16px;
        width: 106px;
        height: 94px;
        padding-top: 67px;
        padding-left: 8px;
        background: url('./../../../../assets/sign-in.png') no-repeat 50%;
        background-size: cover;
      }
    }
    .general-info-b {
      display: flex;
      align-items: center;
    }
  }
  .base-info {
    min-width: 998px;
    padding: 24px 16px 16px;
    background: #fff;
    margin-bottom: 16px;
    .base-info-head {
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      color: #2e2e2e;
      margin-bottom: 16px;
    }
  }
}
</style>
