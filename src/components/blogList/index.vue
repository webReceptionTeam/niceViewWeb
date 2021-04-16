<template>
  <div>
    {{ blogListFlag }}
    <blog-dialog width="60%" @handleClose="handleCloses" title="博客选择">as</blog-dialog>
  </div>
</template>

<script>
import { ref, actions, toRefs, inject, provide } from 'vue'
export default {
  name: "blogListDialog",
  setup(props) {
    let blogListFlag = inject('blogListFlag')

    const handleCloses = () => {
    }

    provide('dialogVisible', blogListFlag)
    return {
      handleCloses,
      blogListFlag
    }
  }
}
</script>

<style lang="scss" scoped>
</style>