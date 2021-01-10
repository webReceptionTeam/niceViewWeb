<template>
  <div class="home_wrap">
    <div class="content_wrap">
      <!-- 导航 -->
      <div class="content-wrap-div" id="div1">导航</div>
      <div class="content-wrap-div" id="div2">精选头条</div>
      <div class="content-wrap-div" id="div3">会员精选</div>
      <div class="content-wrap-div" id="div4">精彩视频</div>
      <div class="content-wrap-div" id="div5">推荐专题</div>
      <div class="content-wrap-div" id="div6">Python</div>
      <div class="content-wrap-div" id="div7">程序人生</div>
      <div class="content-wrap-div" id="div8">大前端</div>
      <div class="content-wrap-div" id="div9">技术团队/社区号</div>
      <div class="content-wrap-div" id="div10">Java</div>
      <div class="content-wrap-div" id="div11">开源技术</div>
      <div class="content-wrap-div" id="div12">人工智能</div>
      <div class="content-wrap-div" id="div13">
        <a href="#div1">友情链接</a>
      </div>
    </div>
    <myNav :list="'刘江涛'" />
  </div>
</template>

<script>
import myNav from '../../components/naviGation'
import { onBeforeMount, provide } from 'vue'
export default {
  name: 'LayoutHome',
  components: { myNav },
  setup(props) {
    provide('aaa', '刘江涛')
    onBeforeMount(() => {
      document.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
      console.log('handleScroll')
    }
    return {
      handleScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.home_wrap {
  width: 100%;
}
.content_wrap {
  margin: 0 auto;
  padding-bottom: 32px;
  background: #ffffff;
}
@media screen and (max-width: 1919px) and (min-width: 1440px) {
  .content_wrap {
    width: 1232px;
  }
}
@media screen and (max-width: 1439px) and (min-width: 1281px) {
  .content_wrap {
    width: 1004px;
  }
}
@media screen and (max-width: 1280px) {
  .content_wrap {
    width: 1004px;
  }
}
.content-wrap-div {
  height: 800px;
}
</style>