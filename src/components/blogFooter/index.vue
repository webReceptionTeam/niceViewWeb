<template>
  <div class="blog-footer-box">
    <div id="footer" class="footer-box">
      <ul class="footer-column-top">
        <li v-for="(item, index) in about" :key="index">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
      </ul>
      <ul class="footer-column-content">
        <li v-for="(item, index) in information" :key="index">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
export default {
  name: 'blogFooter',
  setup(props) {
    let about = ref([])
    let information = ref([])
    onBeforeMount(() => {
      about.value = [
        { url: 'javascript:;', name: '关于我们' },
        { url: 'javascript:;', name: '招贤纳士' },
        { url: 'javascript:;', name: '广告服务' },
        { url: 'javascript:;', name: '开发助手' },
        { url: 'javascript:;', name: '400-660-0108' },
        { url: 'javascript:;', name: 'kefu@csdn.net' },
        { url: 'javascript:;', name: '在线客服' },
        { url: 'javascript:;', name: '工作时间 8:30-22:00' }
      ]
      information.value = [
        { url: 'javascript:;', name: '公安备案号11010502030143' },
        { url: 'javascript:;', name: '京ICP备19004658号' },
        { url: 'javascript:;', name: '京网文〔2020〕1039-165号' },
        { url: 'javascript:;', name: '经营性网站备案信息' },
        { url: 'javascript:;', name: '北京互联网违法和不良信息举报中心' },
        { url: 'javascript:;', name: '网络110报警服务' },
        { url: 'javascript:;', name: '中国互联网举报中心' },
        { url: 'javascript:;', name: '家长监护' },
        { url: 'javascript:;', name: 'Chrome商店下载' },
        { url: 'javascript:;', name: '©1999-2021北京创新乐知网络技术有限公司' },
        { url: 'javascript:;', name: '版权与免责声明' },
        { url: 'javascript:;', name: '版权申诉' }
      ]
    })
    return {
      about,
      information
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-footer-box {
  width: 100%;
  margin-top: 8px;
  background: #fff;
  .footer-box {
    max-width: 760px;
    min-width: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
    box-sizing: border-box;
  }
  #footer {
    margin: 0 auto;
    width: 100%;
    background: #fff;
    padding: 16px 0 14px;
  }
  .footer-column-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    li {
      margin: 0 4px;
      color: #999aaa;
      font-size: 14px;
      height: 16px;
      line-height: 16px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
  .footer-column-content {
    margin-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    li {
      color: #999aaa;
      height: 16px;
      line-height: 16px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 2px 3px;
      a {
        font-size: 12px;
      }
    }
  }
}
</style>     