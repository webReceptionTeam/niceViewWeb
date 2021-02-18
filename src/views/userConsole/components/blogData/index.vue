<template>
  <div class="blog-data">
    <h1>数据统计</h1>
    <div class="blog-box">
      <el-row>
        <el-col :span="6" v-for="item in list" :key="item">
          <div class="item">
            <p class="title">{{ item.table }}</p>
            <p class="num">{{ item.total }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <h1>文章分析</h1>
    <div style="height: 20px"></div>
    <div class="blog-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          fontWeight: '400',
          fontSize: '12px',
          color: '#292B34',
          background: '#fafafa',
          fontFamily: 'Microsoft YaHei',
        }"
      >
        <el-table-column
          prop="name"
          label="文章标题"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="date" label="创建日期" width="180"> </el-table-column>
        <el-table-column prop="address" label="访问量" width="88">
          <template #default="scope">
            {{ scope.row.abv || "-" }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="评论数" width="88">
          <template #default="scope">
            {{ scope.row.abv || "-" }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="收藏数" width="88">
          <template #default="scope">
            {{ scope.row.abv || "-" }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "userConsoleBlogData",
  setup(props) {
    let list = ref([
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
        {
          table: "文章总数",
          total: "190",
        },
      ]),
      tableData = ref([
        {
          name: "123",
          date: "2020-01-21",
        },
      ]);
    return {
      list,
      tableData,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-data {
  min-height: 800px;
  background: #fff;
  padding: 24px;
  > h1 {
    font-size: 20px;
  }
  .blog-box {
    .item {
      margin-bottom: 12px;
      padding: 15px 24px 17px 24px;
      p {
        margin: 0;
        text-align: center;
      }
      .title {
        font-size: 16px;
        color: #3d3d3d;
        line-height: 22px;
        margin-bottom: 12px;
      }
      .num {
        font-size: 24px;
        font-weight: 600;
        color: #2e2e2e;
        line-height: 33px;
      }
    }
  }
}
</style>
