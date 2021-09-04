<template>
  <blog-dialog width="60%" title="博客选择">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="创建日期" width="120">
        <template #default="scope">{{ timeFilter(scope.row.firstDate) }}</template>
      </el-table-column>
      <el-table-column prop="nickname" label="用户" width="120"></el-table-column>
      <el-table-column prop="title" label="博客标题" show-overflow-tooltip></el-table-column>
      <template #empty>暂无数据</template>
    </el-table>
    <el-pagination
      v-if="total > pageSize"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="pageSize"
    ></el-pagination>
    <template #footer>
      <button @click="chooseBtn">确定选择</button>
    </template>
  </blog-dialog>
</template>

<script>
import { ref, toRefs, reactive, watch, inject, provide } from 'vue'
import { blogQuery } from '@/api/index'
import { ruleTime } from '@/utils/public'
import { ElMessage } from '@/utils/message.js'
export default {
  name: "blogListDialog",
  props: {
    blogLength: {
      type: Number,
      default: 2
    }
  },
  emits: ['change'],
  setup(props, context) {
    let blogListFlag = inject('blogListFlag'),
      data = reactive({
        page: 1,
        pageSize: 10,
        total: 0
      }),
      tableData = ref([]),
      chooseList = ref([])

    // 透传
    provide('dialogVisible', blogListFlag)

    // 获取数据
    const getBlogList = async () => {
      const { data: res } = await blogQuery({
        queryType: 'system',
        page: data.page,
        pageSize: data.pageSize
      })

      if (res.code == 0) {
        tableData.value = res.data.data
        data.total = res.data.total || 0
      }
    }

    // 选中触发事件
    const handleSelectionChange = (val) => {
      // console.log(val);
      chooseList.value = val
    }

    // 确定选中事件
    const chooseBtn = () => {
      if (props.blogLength == 0) {
        ElMessage('当前不需要添加博客')
        return
      }
      if (chooseList.value.length == 0) {
        ElMessage('请选择要选择的博客')
        return
      }
      if (props.blogLength >= chooseList.value.length) {
        context.emit('change', chooseList.value)
        blogListFlag.value = false
      } else {
        ElMessage('超过最大选择列数')
      }
    }

    // 监听
    watch(blogListFlag, (newFlag) => {
      if (newFlag) {
        getBlogList()
        chooseList.value = []
      }
    })
    return {
      tableData,
      chooseList,
      ...toRefs(data),
      handleSelectionChange,
      chooseBtn
    }
  },
  methods: {
    timeFilter(val) {
      return ruleTime(val).split(' ')[0]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>