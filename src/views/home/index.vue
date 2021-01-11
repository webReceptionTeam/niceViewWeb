<template>
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
            divs[index] = el
          }
        "
      >
        {{ item.name }}
      </div>
      <!-- <div class="content-wrap-div" id="div3">会员精选</div>
      <div class="content-wrap-div" id="div4">精彩视频</div>
      <div class="content-wrap-div" id="div5">推荐专题</div>
      <div class="content-wrap-div" id="div6">Python</div>
      <div class="content-wrap-div" id="div7">程序人生</div>
      <div class="content-wrap-div" id="div8">大前端</div>
      <div class="content-wrap-div" id="div9">技术团队/社区号</div>
      <div class="content-wrap-div" id="div10">Java</div>
      <div class="content-wrap-div" id="div11">开源技术</div>
      <div class="content-wrap-div" id="div12">人工智能</div> -->
      <!-- <div class="content-wrap-div" id="div13">
        <a href="#div1">友情链接</a>
      </div> -->
    </div>
    <myNav :list="'刘江涛'" :tabIndex="tabIndex" />
  </div>
</template>

<script>
import emitter from '@/utils/eventBus'

import myNav from '../../components/naviGation'
import { onBeforeMount, provide, onMounted, ref } from 'vue'
export default {
  name: 'LayoutHome',
  components: { myNav },
  setup(props) {
    provide('aaa', '刘江涛')
    onBeforeMount(() => {
      document.addEventListener('scroll', handleScroll)
    })
    let heightList = ref([])
    let tabIndex = ref(0)
    onMounted(() => {
      // window.addEventListener('scroll', handleScroll)
      divs.value.map((item) => {
        // if (item.offsetTop <= docScrollTop) {
        // }
        // console.log(item.offsetTop)
        heightList.value.push(item.offsetTop)
      })
    })
    const divs = ref([])
    const list = ref([
      {
        ref: 'div1',
        name: '导航'
      },
      {
        ref: 'div2',
        name: '精选头条2'
      },
      {
        ref: 'div3',
        name: '精选头3条'
      },
      {
        ref: 'div4',
        name: '精选4头条'
      },
      {
        ref: 'div5',
        name: '精选5头条'
      },
      {
        ref: 'div6',
        name: '精选6头条'
      },
      {
        ref: 'div7',
        name: '精选7头条'
      }
    ])

    const handleScroll = (el) => {
      let docScrollTop = document.documentElement.scrollTop
      // console.log('handleScroll', docScrollTop)

      // console.log(divs.value[0].offsetTop, '990')
      heightList.value.map((item, index) => {
        if (item <= docScrollTop) {
          // console.log('adfa')
          tabIndex.value = index
        }
      })
      // console.log(tabIndex.value)
    }
    return {
      handleScroll,
      divs,
      list,
      tabIndex
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