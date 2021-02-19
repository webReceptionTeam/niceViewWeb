<template>
  <myHeader />
  <div class="home_wrap">
    <div class="content_wrap">
      <div class="index_nav">
        <ul class="index_nav_left">
          <li>
            <img src="@/assets/home/nav-index.png" alt="" />
            <span>首页</span>
          </li>
          <li>
            <img src="@/assets/home/nav-index.png" alt="" />
            <span>首页</span>
          </li>
          <li>
            <img src="@/assets/home/nav-index.png" alt="" />
            <span>首页</span>
          </li>
        </ul>
        <div class="index_nav_center">
          <ul class="nav_center_wrap">
            <li v-for="(item, index) in 20" :key="index">测量</li>
          </ul>
        </div>
        <div class="index_nav_right">
          <ul class="nav_right_wrap">
            <li v-for="(item, index) in 4" :key="index">
              <img src="@/assets/home/nav-index.png" alt="" />
              <span>其他</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 导航 -->
      <div
        class="content-wrap-div"
        v-for="(item, index) in list"
        :id="`div${index + 1}`"
        :key="index"
        :ref="
          (el) => {
            refList[index] = el;
          }
        "
      >
        <div class="card_header">
          <em>{{ item.name }}</em>
        </div>
      </div>
    </div>
    <naviGation :refList="refList" :navList="list" />
  </div>
</template>

<script>
import emitter from "@/utils/eventBus";
import myHeader from "../headerView";
import { onBeforeMount, provide, onMounted, ref } from "vue";
export default {
  name: "LayoutHome",
  components: { myHeader },
  setup(props) {
    const refList = ref([]);
    const list = ref([
      {
        ref: "div1",
        name: "导航",
        tabName: "导航",
      },
      {
        ref: "div2",
        name: "精选头条",
        tabName: "精选头条",
      },
      {
        ref: "div3",
        name: "会员精选",
        tabName: "会员精选",
      },
      {
        ref: "div4",
        name: "精彩视频",
        tabName: "精彩视频",
      },
      {
        ref: "div5",
        name: "推荐专题",
        tabName: "推荐专题",
      },
      {
        ref: "div6",
        name: "Python",
        tabName: "Python",
      },
      {
        ref: "div99",
        name: "程序人生",
        tabName: "程序人生",
      },
      {
        ref: "div7",
        name: "大前端",
        tabName: "大前端",
      },
      {
        ref: "div8",
        name: "技术团队",
        tabName: "技术团队",
      },
      {
        ref: "div9",
        name: "技术团队",
        tabName: "技术团队",
      },
      {
        ref: "div10",
        name: "精选10头条",
        tabName: "",
      },
      {
        ref: "div11",
        name: "开源技术",
        tabName: "开源技术",
      },
      {
        ref: "div12",
        name: "友情链接",
        tabName: "友情链接",
      },
    ]);
    return {
      refList,
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.home_wrap {
  width: 100%;
  margin-top: 10px;
}
.content_wrap {
  padding: 0 16px;
  margin: 0 auto;
  padding-bottom: 32px;
  background: #ffffff;
  .index_nav {
    display: flex;
    height: 84px;
    padding-top: 16px;
    margin-bottom: 20px;
    // position: relative;
    &_left {
      display: flex;
      height: 68px;
      li {
        width: 36px;
        margin-right: 24px;
        height: 68px;
        text-align: center;
        img {
          width: 36px;
          height: 36px;
          display: block;
        }
        span {
          display: inline-block;
          text-align: center;
          color: #20232c;
          font-size: 14px;
          line-height: 32px;
        }
      }
    }
    &_left::after {
      display: block;
      content: "";
      width: 1px;
      height: 40px;
      background-color: #e1e1e1;
      position: relative;
      right: 0;
      top: 15px;
    }
    &_center {
      flex: 1;
      padding: 0 27px;
      .nav_center_wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        height: 68px;
        li {
          padding-top: 3px;
          height: 34px;
          line-height: 34px;
          text-align: left;
          padding-left: 7px;
          font-size: 14px;
          color: #20232c;
          cursor: pointer;
        }
        li:hover {
          color: #fc5531;
        }
      }
    }
    &_right {
      position: relative;
      .nav_right_wrap {
        min-width: 130px;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 70px;
        li {
          margin-right: 10px;
          height: 34px;
          line-height: 34px;
          cursor: pointer;
        }
        img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }

        span {
          padding-left: 8px;
          color: #20232c;
          line-height: 20px;
          font-size: 14px;
          vertical-align: middle;
        }
        span:hover {
          color: #fc5531;
        }
      }
    }
    &_right:before {
      display: block;
      content: "";
      width: 1px;
      height: 40px;
      background-color: #e1e1e1;
      position: absolute;
      left: -18px;
      top: 15px;
    }
  }
}
.content-wrap-div {
  // height: 800px;
  .card_header {
    margin-bottom: 12px;
    em {
      color: #20232c;
      font-size: 18px;
      margin-left: 5px;
      font-weight: bolder;
      vertical-align: middle;
    }
  }
}
</style>
