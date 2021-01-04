<template>
  <div class="register-login">
    <div class="register-login-box">
      <el-row>
        <el-col :span="24">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            v-model="userName"
          >
          </el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-key"
            v-model="passWord"
            :show-password="true"
          >
          </el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerLogin'
}
</script>

<style lang="scss" scoped>
.register-login {
  height: 100%;
  width: 100%;
  min-width: 1366px;
  min-height: 700px;
  background: url('../assets/login.jpg') no-repeat;
  background-size: 100% 100%;
  &-box {
    width: 400px;
    height: 450px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px;
    border-radius: 5px;
    &-title {
      position: absolute;
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>