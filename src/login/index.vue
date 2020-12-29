<template>
  <div class="login-wrap">
    <!-- 登录页 再拆 后台登录 注册 -->
    <div class="login-wrap-box">
      <el-row>
        <el-col :span="24">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="input1"
          >
          </el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="input2"
            :show-password="true"
          >
          </el-input>
        </el-col>
        <el-col>
          <el-button type="primary">登陆</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  width: 100%;
  min-width: 1366px;
  min-height: 700px;
  background: url('../assets/login.jpg') no-repeat;
  background-size: 100% 100%;
  &-box {
    width: 450px;
    height: 500px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    padding: 60px;
    border-radius: 5px;
  }
}
/deep/ .el-col-24 {
  margin-bottom: 15px;
}
/deep/ .el-button {
  width: 260px;
  height: 40px;
  border-radius: 30px;
  display: block;
  margin: 0 auto;
}
/deep/ .el-button--primary {
  background-color: #4a33f5;
  border-color: #4a33f5;
}
/deep/ .el-button--primary:hover {
  opacity: 0.8;
}
</style>