<template>
  <div class="addeditor">
    <header>
      <label>文章管理</label>
      <el-input v-model="ditorTitle" placeholder="请输入标题(5-100)"></el-input>
      <el-button @click="btn('1')">保存草稿</el-button>
      <el-button @click="btn('2')">发布内容</el-button>
    </header>
    <div class="md-editor-box">
      <v-md-editor v-model="markdown" height="100%"></v-md-editor>
    </div>
    <!-- {{ markdown }} -->
    <!-- <v-md-preview-html :html="markdown" preview-class="vuepress-markdown-body"></v-md-preview-html> -->
    <editorAubmitted />
  </div>
</template>

<script>
import editorAubmitted from './editorAubmitted.vue'
export default {
  name: 'userAddEditor',
  components: { editorAubmitted },
  data() {
    return {
      markdown: 'asd',
      ditorTitle: ''
    }
  },
  mounted() {
    this.ditorTitle = new Date().toLocaleDateString()
  },
  methods: {
    btn(type) {
      let a = {
        str: type,
        num: '11'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
button {
  min-width: 100px;
}
.addeditor {
  width: 100%;
  height: 100%;
  min-width: 1366px;
  min-height: 600px;
  header {
    display: flex;
    align-items: center;
    padding: 10px 15px 10px 0;
    label {
      width: 150px;
      padding-left: 20px;
      font-size: 20px;
    }
    ::v-deep(.el-input) {
      margin-right: 20px;
      .el-input__inner {
        border-radius: 20px;
        padding-left: 20px;
      }
    }
  }
  .md-editor-box {
    height: calc(100% - 60px);
  }
}
</style>