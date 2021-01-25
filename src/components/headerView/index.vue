<template>
  <div class="header-box">
    <div class="title-blog">
      <h1>{{ userName }}的博客</h1>
      <p class="description">共同学习，共同进步</p>
    </div>
    <div class="opt-box">
      <a href="" class="btn btn-sm">管理博客</a>
      <a href="javascript:;" class="btn btn-sm" @click.stop="updataSkin"
        >换皮肤啦</a
      >
      <div class="skin-template-box" v-if="skinViewFlag">换肤设置</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSkin } from './useLogic.js'
export default {
  name: 'headerView',
  setup(props) {
    // 用户名 自定义名称优先不然展示用户账号
    let userName = ref('涛涛')
    let skin = useSkin()
    return {
      userName,
      ...skin
    }
  }
}
</script>

<style lang="scss" scoped>
.header-box {
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  .title-blog {
    flex: 1;
    h1 {
      font-size: 24px;
      color: #fff;
    }
    .description {
      font-size: 14px;
      color: #858585;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .opt-box {
    display: flex;
    margin-left: auto;
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    .btn {
      margin-left: 8px;
      margin-right: 8px;
      height: 28px;
      background-color: #fff;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
      font-size: 12px;
      border-radius: 4px;
      text-align: center;
      border: none;
      padding: 0 8px;
      display: inline-block;
      cursor: pointer;
    }
    .btn.btn-sm {
      margin-top: 6px;
      margin-bottom: 6px;
      line-height: 28px;
      min-width: 72px;
    }
    .skin-template-box {
      // display: none;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 16px 16px 18px 10px;
      position: absolute;
      right: 0;
      top: 76px;
      z-index: 10;
      width: 423px;
      height: 240px;
      background: #fff;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }
    .skin-template-box:before {
      position: absolute;
      content: '';
      right: 36px;
      top: -12px;
      margin-right: 0;
      display: block;
      width: 0;
      height: 0;
      border: 6px solid;
      border-color: transparent transparent #fff;
    }
  }
}
</style>