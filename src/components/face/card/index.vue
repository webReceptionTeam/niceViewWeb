<template>
  <div class="card">
    <div class="card-item" v-for="item in cardList" :key="item">
      <div class="card-item-img">
        <div class="hover_mask"></div>
        <img src="@/assets/home/modular.jpg" alt="" />
        <div class="imgTextPlug_info"></div>
      </div>
      <div class="card-item-info">
        <p class="headP">
          面试官：“说一下Python的垃圾回收机制”，千万别敷衍，看完此文你也能装B！
        </p>
        <p class="infoP">
          Python的垃圾回收机制到底是什么回事？从网上找到一大堆的文档，看的也是一知半解，最终就学会了一句话：引用计数器为主、分代码回收和标记清除为辅。就这么一知半解地去忽悠面试官了，如果面试官恰好也只会这几句话，那便达成和解了，如果不是，那"今天暂时先这样，你回去等消息吧（基本凉凉）"。本篇文章从C语言源码底层来聊聊Python内存管理和垃圾回收机制到底是个啥？让你能够真正了解内存管理&amp;垃圾回收。用通俗的语言解释内存管理和垃圾回收的过程，搞懂这一部分就可以去面试、去装...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faceCaard',
  props: {
    // cardList: Array
    cardList: Number
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  height: 450px;
  overflow: hidden;
  &-item {
    width: 214px;
    margin-bottom: 24px;
    border-radius: 4px;
    &-img {
      width: 100%;
      height: 120px;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .hover_mask {
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        opacity: 1;
        border-radius: 4px 4px 0 0;
        position: relative;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
      }
      .imgTextPlug_info {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(hsla(0, 0%, 100%, 0.5)),
          color-stop(40%, hsla(0, 0%, 100%, 0.8)),
          to(#fff)
        );
        background: linear-gradient(
          180deg,
          hsla(0, 0%, 100%, 0.5),
          hsla(0, 0%, 100%, 0.8) 40%,
          #fff
        );
        padding: 0 8px;
        width: 214px;
        height: 17px;
        position: absolute;
        bottom: -2px;
        left: 0;
        color: #fff;
        font-size: 12px;
        border-radius: 0;
        opacity: 1;
        overflow: visible;
      }
    }
    &-info {
      padding: 6px 8px 8px 12px;
      height: 86px;
      font-size: 16px;
      color: #000;
      position: relative;
      .headP {
        font-size: 15px;
        color: #20232c;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 48px;
        line-height: 24px;
        word-break: break-all;
        font-weight: 500;
      }
      .infoP {
        padding-top: 4px;
        color: #999;
        font-size: 14px;
        width: 192px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &-info::before {
      display: block;
      content: '';
      background-color: #fc5531;
      width: 4px;
      height: 16px;
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
  &-item:hover {
    .hover_mask {
      opacity: 0;
    }

    .headP {
      color: #fc5531;
    }
  }
}
// width: 100%;
// height: 120px;
</style>