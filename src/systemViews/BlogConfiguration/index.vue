<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-row class="query_row">
      <el-col :span="8">
        <el-form-item label="用户账号">
          <el-input v-model="formUserName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="默认类型">
          <el-radio-group v-model="formType">
            <el-radio :label="1">默认标签</el-radio>
            <el-radio :label="2">默认分类</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>

      <el-col :span="8">
        <el-button type="primary" @click="queryBtn">查询</el-button>
        <el-button>清空</el-button>
      </el-col>
    </el-row>
  </el-form>
  <div class="tentcent_box">
    <div style="padding-bottom:20px">
      <el-button type="primary" @click="addDataBtn">添加默认选项</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-for="(item,index) in tableHeaderList"
        :key="index"
        :prop="item.prop"
        :label="item.name"
      />
    </el-table>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  name: "blogConfiguration",
  setup() {
    let form = reactive({
      formUserName: '',
      formType: 1
    })
    let tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
    let tableHeaderData = reactive({
      label: [
        {
          prop: 'date',
          name: '标签ID'
        },
        {
          prop: 'name',
          name: '标签名称'
        }
      ],
      class: [
        {
          prop: 'date',
          name: '分类ID'
        },
        {
          prop: 'date',
          name: '分类名称'
        },
        {
          prop: 'date',
          name: '分类图片'
        },
        {
          prop: 'date',
          name: '分类置顶'
        },
        {
          prop: 'date',
          name: '是否前台显示'
        }
      ]
    })
    let tableHeaderList = tableHeaderData.label


    const queryBtn = () => {
      console.log('queryBtn!')
    }
    const addDataBtn = () => {
      console.log('addDataBtn');
    }
    return {
      form,
      ...toRefs(form),
      tableData,
      tableHeaderList,
      queryBtn,
      addDataBtn
    }
  },
};
</script>

<style lang="scss" scoped>
.query_row {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px 20px 20px 0;
}
.tentcent_box {
  padding: 20px;
  background: #fff;
}
</style>
