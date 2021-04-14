<template>
  <el-dialog
    v-model="dialogVisible"
    :width="width"
    :custom-class="customClass"
    :before-close="handleClose"
  >
    <template #title>
      <div>{{ title }}</div>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'blogDialog',
  props: {
    // 开关
    dialogVisible: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: String,
      default: '30%'
    },
    // 标题提示
    title: {
      type: String,
      default: "提示"
    },
    // 自定义类名
    customClass: {
      type: String,
      default: ''
    },
    // 关闭形式提示 默认false 不进行处理 true自行处理
    handleCloseFlag: {
      type: Boolean,
      default: false
    }
  },
  // 自定义事件需要emits进行声明
  emits: ["handleClose"],
  setup(props, context) {
    // 关闭弹窗前钩子函数
    const handleClose = (ev) => {
      // 判断是否需要关闭前的提示 提示会暴露一个方法进行自行处理弹框提示
      if (props.handleCloseFlag) {
        context.emit('handleClose', ev)
      } else {
        context.props.dialogVisible = false
      }
    }

    return {
      handleClose
    }
  }
}
</script>

<style lang="scss" scoped>
</style>