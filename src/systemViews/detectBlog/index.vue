<template>
  <!--   < template >
  <div>检测博客 < /div>
  < /template>

  < script >
export default {
  name: "detectBlog",
  setup() {
    return {};
  },
};
</script>

  <style lang="scss" scoped></style>-->
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :on-change="onChange"
    :file-list="fileList"
    :auto-upload="false"
    :show-file-list="false"
  >
    <template #trigger>
      <el-button size="small" type="primary">选取文件</el-button>
    </template>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </el-upload>
  {{ fileList }}
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
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
    }
  }
}
</script>
