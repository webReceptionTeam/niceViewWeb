<template>
  <div class="follow-box">
    <div class="follow-box-type">
      <span
        data-type="FollowNum"
        :class="{ active: followActive == 'attention' }"
        @click="followTabType('attention')"
      >TA关注的人（ 2 ）</span>
      <span
        data-type="FollowFan"
        :class="{ active: followActive == 'fans' }"
        @click="followTabType('fans')"
      >TA的粉丝（ 1 ）</span>
    </div>
    <ul class="follow-box-user">
      <li v-for="(item, index) in 3" :key="index">
        <div class="user-left">
          <img src="@/assets/nav/monkey.png" />
          <dl>
            <dd>
              <h4>涛涛专属</h4>
            </dd>
            <dt>码龄好几年</dt>
          </dl>
        </div>
        <p
          class="button"
          :class="{ active: followActive == 'attention' }"
        >{{ followActive == 'attention' ? '已关注' : '关注' }}</p>
      </li>
      <div class="article-login">- 到底了 -</div>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'follow',
  setup(props) {
    let followActive = ref('attention')
    const followTabType = (type) => {
      followActive.value = type
    }
    return { followActive, followTabType }
  }
}
</script>

<style lang="scss" scoped>
.follow-box {
  background: #fff;
  &-type {
    height: 42px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #f0f2f5;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #555666;
      margin-left: 24px;
      cursor: pointer;
    }
    .active {
      color: #fc5531;
    }
  }
  &-user {
    display: block;
    li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 76px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 17px 0 23px;
      border-bottom: 1px solid #f0f2f5;
      .user-left {
        img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-right: 16px;
          display: inline-block;
        }
        dl {
          display: inline-block;
          dd {
            color: #4f4f4f;
            h4 {
              color: #555666;
              font-size: 18px;
              font-weight: 500;
              max-width: 500px;
              white-space: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              word-wrap: break-word;
              word-wrap: break-word;
            }
          }
          dt {
            line-height: 22px;
            font-size: 12px;
            font-weight: 400;
            color: #999aaa;
          }
        }
      }
      .button {
        width: 80px;
        height: 28px;
        cursor: pointer;
        border: 1px solid #fc5531;
        border-radius: 14px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fc5531;
        font-size: 14px;
        line-height: 28px;
      }
      .active {
        border-color: #555666;
        color: #555666;
        position: relative;
        background: #fff;
        position: relative;
      }
      .button:hover {
        background: #fff5f2;
      }
      .button:hover.active::before {
        content: "取消关注";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        border-radius: 14px;
        color: #555666;
      }
    }
    li:hover {
      background: #f9fafc;
    }
    .article-login {
      text-align: center;
      background: #fff;
    }
  }
}
</style>