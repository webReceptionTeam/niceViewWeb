<template>
  <div>
    <div>账号列表</div>
    <!--       :auto-upload="false" -->
    <el-upload
      class="avatar-uploader"
      action="#"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-progress="onProgress"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import axios from "@/utils/http.js";
export default {
  name: "accountNumberList",
  setup() {
    return {};
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  mounted() {
    let formData = new FormData();
    formData.append("file", "---");
    formData.append("fileqq", "asf");
    console.log(formData.get("file"));
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onProgress(event, file, fileList) {
      console.log(event, file, fileList);
      console.log(file, file.raw, "990");
      // axios
      let formData = new FormData();
      formData.append("file", file.raw);
      axios.post("/uploads", formData).then((item) => {
        console.log(item, "测试");
        this.imageUrl = item.data.a;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/ .avatar-uploader /deep/ .el-upload:hover {
  border-color: #409eff;
}
/deep/ .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
/deep/ .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
