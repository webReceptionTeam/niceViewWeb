<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :on-change="onChange"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :limit="limit"
    :auto-upload="false"
    :show-file-list="false"
    :multiple="multiple"
  >
    <template #trigger>
      <!-- <el-button size="small" type="primary">选取文件</el-button> -->
      <slot></slot>
    </template>
    <el-button style="display:none" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </el-upload>
  {{ fileList }}
</template>
<script>
export default {
  name: "myUpload",
  data() {
    return {
      fileList: []
    };
  },
  props: {
    // 选择个数
    limit: {
      type: Number,
      default: 1
    },
    // 多文件上传
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: [],
  methods: {
    submitUpload() {
      // this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList)
    },
    onChange(file, fileList) {
      console.log(file.raw, fileList);
      this.fileList.push(file)
      // this.$emit('')
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>
