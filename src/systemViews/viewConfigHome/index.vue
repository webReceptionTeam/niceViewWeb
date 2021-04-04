<template>
  <!-- info 接口是干啥的
   用户图片地址放到-- 不能每次都请求 节约性能
   https://cube.elemecdn.com/ 这是什么地址 没网也可以访问
  -->
  <!-- /**
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
  */-->
  <div class="config-home">
    <h2>首页配置</h2>
    <el-row>
      <el-col :span="2">排序设置</el-col>
      <el-col :span="6">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="模块名称" width="180"></el-table-column>
        <el-table-column prop="sort" label="排名" width="180"></el-table-column>
        <el-table-column prop="address" label="类型" width="300">
          <template #default>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="图片设置">
          <template #default>
            <img src="@/assets/home/modular.jpg" alt style="width: 80px; height: 40px" />
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="自定义图片">
          <template #default>
            <el-button>添加</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="是否禁用">
          <template #default>
            <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-drawer title="我是标题" v-model="drawer" direction="rtl">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { ref } from "vue";
import { useHomeData } from './use/index'
export default {
  name: "viewConfigHome",
  setup() {
    let value = ref(""),
      value1 = ref(true),
      drawer = ref(false),
      options = ref([
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ]),
      tableData = ref([
        {
          sort: "1",
          name: "热门话题",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ]);

    const honeData = useHomeData()
    return { value, options, tableData, value1, drawer, ...honeData };
  },
};
</script>

<style lang="scss" scoped></style>
