<template>
  <div class="user-home">
    <div class="user-home-top"></div>
    <div class="user-home-box">内容</div>
    <!-- <myNav :refList="refList" :navList="list" /> -->
  </div>
</template>

<script>
import { onBeforeMount, provide, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'userHome',
  // components: { myNav },
  setup(props) {
    const refList = ref([])
    let route = useRoute()
    const btn = () => {
      console.log(route.path)
      open(route.path + '/user-center/user-info')
    }
    const list = ref([
      {
        ref: 'div1',
        name: '导航',
        tabName: '导航'
      },
      {
        ref: 'div2',
        name: '精选头条',
        tabName: '精选头条'
      },
      {
        ref: 'div3',
        name: '会员精选',
        tabName: '会员精选'
      },
      {
        ref: 'div4',
        name: '精彩视频',
        tabName: '精彩视频'
      },
      {
        ref: 'div5',
        name: '推荐专题',
        tabName: '推荐专题'
      },
      {
        ref: 'div6',
        name: 'Python',
        tabName: 'Python'
      },
      {
        ref: 'div99',
        name: '程序人生',
        tabName: '程序人生'
      },
      {
        ref: 'div7',
        name: '大前端',
        tabName: '大前端'
      },
      {
        ref: 'div8',
        name: '技术团队',
        tabName: '技术团队'
      },
      {
        ref: 'div9',
        name: '技术团队',
        tabName: '技术团队'
      },
      {
        ref: 'div10',
        name: '精选10头条',
        tabName: ''
      },
      {
        ref: 'div11',
        name: '开源技术',
        tabName: '开源技术'
      },
      {
        ref: 'div12',
        name: '友情链接',
        tabName: '友情链接'
      }
    ])
    return {
      refList,
      list,
      btn
    }
  }
}
</script>

<style lang="scss" scoped>
.user-home {
  min-height: calc(100% - 52px);
  &-box {
    margin: 0 auto;
    padding-bottom: 32px;
  }
}
</style>