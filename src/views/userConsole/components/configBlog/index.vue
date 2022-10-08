<template>
  <div class="config-blog">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="博客标题：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="博客描述：">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="皮肤设置："></el-form-item>
      <el-form-item label>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "userConsoleConfigBlog",
  data() {
    return {
      form: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped>
.config-blog {
  background: #fff;
  padding: 24px;
  min-height: 800px;
  ::v-deep .el {
    &-input__inner {
      width: 500px;
    }
    &-button--primary {
      border: 1px solid rgb(252, 85, 49);
      background-color: rgb(252, 85, 49);
      min-width: 96px;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 20px;
      transition: color 0.15s ease 0s;
    }
    &-button--primary,
    &-button--primary:focus,
    &-button--primary:hover {
      background: #fc5531;
      color: #fff;
    }
  }
}
</style>
