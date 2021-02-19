<template>
  <div>
    <div>
      {{ $store.state.count }}
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
/**
 用户模块 最高权限
    查询所有用户的信息 除隐私信息外
    有提升某个用户权限
注册管理员 最高权限

评论模块
    查看所有评论
    举报评论处理
    有删除评论权限
博客模块
    查看所有博客
    删除所有博客权限

标签模块

配置模块
    首页配置
    导航配置 首页 分类
    标签配置
    推荐条件配置

首页模块
    总览 图表
    排行榜 指标 列表
反馈模块
    用于查询用户提出的意见及处理
资源模块 
    添加账号及备注 
    查询账号 模糊查询用户名、备注 时间 密码徐有显示隐藏功能 双击 及复制
    ResourcesTable
        userId 用户id
        userName 用户名
        passWord 密码
        mark 备注
        time 添加时间


 */
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    console.log(this.$store.state.count, "测试vuex");
  },
};
</script>

<style lang="scss">
body {
  background: $theme-color;
}
</style>
