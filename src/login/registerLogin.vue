<template>
  <div class="register-login">
    <div class="register-login-box">
      <h4>用户注册</h4>
      <el-row>
        <el-col :span="24">
          <el-input
            placeholder="请输入注册账号"
            prefix-icon="el-icon-user-solid"
            v-model="username"
          >
          </el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请输入您的密码"
            prefix-icon="el-icon-key"
            v-model="password"
            :show-password="true"
          >
          </el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请再次输入密码"
            prefix-icon="el-icon-key"
            v-model="repassword"
            :show-password="true"
          >
          </el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请输入您的昵称"
            prefix-icon="el-icon-tickets"
            v-model="nickname"
          >
          </el-input>
        </el-col>
        <el-col :span="24" class="register-btn">
          <el-button type="primary" class="el-signin" @click="loginBtn"
            >注 册</el-button
          >
          <p class="new-reg-guide-login">
            已有账号？<span class="login_btn" @click="openLogin">登录</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/* *
 * 入参：username:string--用户名
 *      password:string--密码
 *      nickname:string -- 昵称
 *      repassword:string --重复确认输入的密码
 *      gender:'0'|'1' ---- 性别
 *      email: string ----邮箱
 *      phone:string ----电话
 *      info:string ---- 自我介绍
 */
// 注册需要 用户名 秘密 昵称 其他的先默认传死
// 如果需要全部写上 考虑其他页面重构及排版
export default {
  name: 'registerLogin',
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
      nickname: ''
    }
  },
  methods: {
    // 调整登录
    openLogin() {
      this.$router.push('/login')
    },
    // 注册
    loginBtn() {
      //
    }
  }
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
  position: relative;
  &-box {
    width: 400px;
    // height: 450px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 40px 10px;
    border-radius: 5px;
    h4 {
      font-size: 18px;
      text-align: center;
    }
    &-title {
      position: absolute;
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
/deep/ .el-col-24 {
  margin-bottom: 15px;
}
.register-btn {
  margin-top: 10px;
}
/deep/ .el-signin.el-button {
  // width: 240px;
  width: 100%;
  height: 40px;
  // border-radius: 30px;
  display: block;
  margin: 0 auto;
}
/deep/ .el-signin.el-button--primary {
  background-color: #4a33f5;
  border-color: #4a33f5;
}
/deep/ .el-signin.el-button--primary:hover {
  opacity: 0.8;
}
.new-reg-guide-login {
  font-size: 14px;
  color: #9b9b9b;
  padding-left: 5px;
}

.login_btn {
  color: #2e58ff;
  cursor: pointer;
}
</style>
