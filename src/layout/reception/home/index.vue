<template>
  <myHeader />
  <div class="home_wrap">
    <div class="content_wrap">
      <!-- 导航 -->
      <div
        class="content-wrap-div"
        v-for="(item, index) in list"
        :id="`div${index + 1}`"
        :key="index"
        :ref="
          (el) => {
            refList[index] = el
          }
        "
      >
        {{ item.name }}
      </div>
    </div>
    <myNav :refList="refList" :navList="list" />
  </div>
</template>

<script>
import emitter from '@/utils/eventBus'
import myHeader from '../myHeader'
import myNav from '@/components/naviGation'
import { onBeforeMount, provide, onMounted, ref } from 'vue'
export default {
  name: 'LayoutHome',
  components: { myNav, myHeader },
  setup(props) {
    const refList = ref([])
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
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.home_wrap {
  width: 100%;
  margin-top: 10px;
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