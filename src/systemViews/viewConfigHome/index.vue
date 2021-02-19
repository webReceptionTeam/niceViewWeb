<template>
  <div class="config-home">首页配置</div>
</template>

<script>
/**
 分类模块
  1 首页
  2 排行
  3 动态

  分类 至少16  > 20 出现更多 和博客模块成正比

  友情连接

  正文
    导航列表
    type
    1 四个模块
    2 八个模块
    3 二个模块
    0 友情连接
    至少 有 4个模块 最多 14个 包含一个友情连接并且只有一个 写死
    
    图片 自定义配置 或者 随机处理（没有配置有情况下）
    查找模块的规则

    navHome
      id
      navType
      rule 0 自定义 1~。。 为博客分类 例如 js 代表前端排名先后顺序 【这里一个条件不够，后边在说】
      pId 和夫级关联
      blogUrl 博客id
      image 图片地址 可以为空
      Sort
    navList
      id 
      navName 导航名称
      navCode 导航code 不可重复
      pId
 */
export default {
  name: "viewConfigHome",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
