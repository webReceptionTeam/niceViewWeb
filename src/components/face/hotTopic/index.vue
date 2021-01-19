<template>
  <ul class="hot-topic-box">
    <li v-for="(item, index) in list" :key="index" @click="topicClick(item)">
      <h2>{{ item.title }}</h2>
      <p class="desc1">{{ item.context }}</p>
      <div>
        <span class="desc2"
          >查看更多
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiantou"></use></svg
        > -->
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import { useClick } from './index'
export default {
  name: 'hotTopic',
  setup(props) {
    let list = ref([
      {
        title: '最佳 IT 技术图书评选',
        context: '为好书点赞！'
      },
      {
        title: '最佳 IT 技术图书评选',
        context: '为好书点赞！'
      },
      {
        title: '最佳 IT 技术图书评选',
        context: '为好书点赞！'
      },
      {
        title: '最佳 IT 技术图书评选',
        context: '为好书点赞！'
      }
    ])
    const click = useClick()
    return {
      list,
      ...click
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-topic-box {
  display: flex;
  li {
    margin-right: 15px;
    flex: 1;
    max-height: 173px;
    border-radius: 4px;
    padding: 14px 16px 10px;
    cursor: pointer;
    h2,
    .desc1,
    .desc2 {
      font-weight: 400 !important;
    }
    h2 {
      height: 20px;
      font-size: 17px;
      color: #fff;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc1 {
      margin-top: 6px;
      height: 40px;
      font-size: 14px;
      color: #fff;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .desc2 {
      height: 16px;
      font-size: 14px;
      color: #fff;
      line-height: 16px;
      opacity: 0.8;
      float: right;
    }
    .desc2:hover {
      opacity: 1;
    }
  }
  li:nth-child(odd) {
    background: url('../../../assets/home/hot-topic-single.jpg') no-repeat;
    background-size: 100% 100%;
  }

  li:nth-child(even) {
    background: url('../../../assets/home/hot-topic-double.jpg') no-repeat;
    background-size: 100% 100%;
  }
}
</style>