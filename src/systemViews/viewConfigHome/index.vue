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
    <el-row class="config-home-header">
      <el-col :span="6">
        <el-button @click="abcd" v-premissionBtn="'adfas'">排序设置应用</el-button>
      </el-col>
      <el-col :span="18" class="right">
        <el-button type="primary">添加</el-button>
      </el-col>
    </el-row>
    <div style="padding:24px;background:#fff">
      <el-table :data="tableData" style="width: 100%" @cell-click="celClick">
        <el-table-column prop="title" label="模块名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="orders" label="顺序" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" align="center"></el-table-column>
        <el-table-column prop label="图标" align="center">
          <template #default="scope">
            <!-- <img src="@/assets/home/modular.jpg" alt style="width: 80px; height: 40px" /> -->
            <blIcon
              fontSize="30"
              :fontClass="scope.row.icon"
              v-if="scope.row.icon.indexOf('el') == -1"
            ></blIcon>
            <i v-else :class="scope.row.icon"></i>
          </template>
        </el-table-column>
        <el-table-column prop="TypeSize" label="模块个数" width="300" align="center"></el-table-column>
        <el-table-column fixed="right" width="100" label="是否起用">
          <template #default="scope">
            <el-switch
              @click.stop
              v-model="scope.row.disable"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <drawerBox />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useHomeData } from './use/index'
import { ElMessage } from 'element-plus'
import drawerBox from './drawerBox'
export default {
  name: "viewConfigHome",
  components: { drawerBox },
  setup() {
    let value = ref(""),
      form = reactive({}),
      value1 = ref(true),
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
      ]);

    const honeData = useHomeData()
    const abcd = () => {
      ElMessage('只是一条消息提示')
    }
    return { value, options, form, value1, ...honeData, abcd };
  },
};
</script>

<style lang="scss" scoped>
.config-home {
  > h2 {
    padding: 10px 0;
    font-size: 20px;
  }
  &-header {
    padding: 24px 24px 0;
    background: #fff;
    .right {
      .el-button {
        float: right;
      }
    }
  }
}
.el-table {
  border: 1px solid #ebeef5;
  border-bottom: none;
  i {
    font-size: 18px;
  }
}
</style>
