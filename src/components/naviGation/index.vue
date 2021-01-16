<template>
  <div class="box-nav">
    <img src="@/assets/nav/monkey.png" class="top-img" alt="" />
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ chosen: tabIndex == index }"
      @click="tabClick(index)"
    >
      {{ item }}
    </div>
    <div class="back-top">
      <i class="el-icon-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref, toRefs, inject, watch } from 'vue'
import { useMethod } from './use/index'
import emitter from '@/utils/eventBus'
export default {
  name: 'naviGation',
  props: {
    list: Boolean | Number | String,
    tabIndex: Number,
    heightList: Array
  },
  setup(props) {
    onBeforeMount(() => {
      // console.log(inject('aaa'))
      console.log(props.list, props, '测试props')
      // emitter.on('some-event', function (arg1, arg2, arg3) {
      //   console.log(arg1, arg2, arg3)
      // })
    })
    onMounted(() => {
      console.log(props.list, props, '测试props')
    })
    watch(
      () => props.tabIndex,
      (count, prevCount) => {
        /* ... */
        console.log(count, prevCount, '9009')
      }
    )
    watch(
      () => props.heightList,
      (count, prevCount) => {
        /* ... */
        console.log(count, prevCount, '测试')
      }
    )
    let tab = ref('1')
    let list = ref([
      '导航',
      '精选头条',
      '会员精选',
      '精彩视频',
      '推荐专题',
      'Python',
      '程序人生',
      '大前端',
      '技术团队',
      'Java',
      '开源技术',
      '人工智能',
      ' 友情链接'
    ])

    // 点击事件
    const method = useMethod(props.heightList)
    return {
      ...props,
      tab,
      list,
      ...method
    }
  }
}
</script>

<style lang="scss" scoped>
.box-nav {
  position: fixed;
  margin-left: 512px;
  bottom: 40px;
  left: 50%;
  transition: all 0.1s;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  .top-img {
    // background: url('../../assets/login.jpg') no-repeat;
    width: 55px;
    position: absolute;
    top: -65px;
    left: 31px;
    z-index: 9;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  a {
    display: block;
    padding: 0 3px 5px;
    font-size: 14px;
  }
  .item {
    width: 64px;
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;
  }
  .back-top {
    line-height: 30px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 25px;
  }
  .item:hover,
  .back-top:hover {
    border-radius: 4px;
    background-color: #fc5531;
    color: #fff;
  }
}
.btn {
  border-radius: 4px;
  background-color: #fc5531;
  color: #fff;
}
@media screen and (max-width: 1919px) and (min-width: 1440px) {
  .box-nav {
    margin-left: 626px;
  }
}
@media screen and (max-width: 1439px) and (min-width: 1281px) {
  // .box-nav {
  //   margin-left: 512px;
  // }
}
@media screen and (max-width: 1280px) {
  // .box-nav {
  //   margin-left: 501px;
  // }
}
.chosen {
  border-radius: 4px;
  background-color: #fc5531;
  color: #fff;
}
</style>