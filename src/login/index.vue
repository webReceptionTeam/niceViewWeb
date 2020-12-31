<template>
  <div class="login-wrap">
    <!-- 登录页 再拆 后台登录 注册 -->
    <div class="login-wrap-box">
      <div class="login-wrap-box-title">用户登录CSDN</div>
      <el-tabs v-model="loginMode" @tab-click="handLoginModeClick">
        <el-tab-pane label="账号登录" name="01">
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
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="02">
          <el-row>
            <el-col :span="24">
              <el-input
                placeholder="请输入手机号"
                prefix-icon="el-icon-mobile-phone"
                v-model="phone"
              >
              </el-input>
            </el-col>
            <el-col :span="24">
              <el-input
                placeholder="请输入验证码"
                prefix-icon="el-icon-unlock"
                v-model="phoneCode"
                class="phone-code-input"
              >
              </el-input>
              <span class="phone-code" @click="getPhoneCode">获取验证码</span>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-row>
        <el-col>
          <el-checkbox v-model="remember">记住账号</el-checkbox>
          <span class="forgot">忘记密码?</span>
        </el-col>
        <el-col>
          <el-button type="primary" @click="btn">登陆</el-button>
        </el-col>
        <el-col>
          <div class="social-contactp">
            <h6>社交帐号登录</h6>
            <span>qq</span>
            <span>微信</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/**
 * 用户登录接口
 * 用户注册接口
 * 查询用户昵称重复及查询账号重复
 * 重置接口
 */
export default {
  name: 'login',
  data() {
    return {
      loginMode: '01',
      userName: '',
      passWord: '',
      remember: false,
      phone: '',
      phoneCode: ''
    }
  },
  methods: {
    // 登录方式切换触发
    handLoginModeClick(type) {},
    // 登录
    btn() {
      console.log(this.userName, this.passWord, this.remember)
    },
    // 获取验证码
    getPhoneCode() {}
  }
}
</script>

<style lang="scss" scoped>
/deep/ .is-active,
/deep/ .el-tabs__item:hover {
  color: red;
}
/deep/ .el-tabs__active-bar {
  background: red;
  height: 3px;
}
/deep/ .el-tabs__nav-wrap::after {
  height: 0;
}
/deep/ .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
.login-wrap {
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
    right: 10%;
    transform: translateY(-50%);
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
/deep/ .el-col-24 {
  margin-bottom: 15px;
}
/deep/ .el-button {
  width: 240px;
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
.forgot {
  color: blue;
  font-size: 14px;
  float: right;
  cursor: pointer;
}
.phone-code {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
  color: blue;
  cursor: pointer;
}
/deep/ .phone-code-input .el-input__inner {
  padding-right: 90px;
}
.social-contactp {
  margin-top: 40px;
  h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
  }

  h6::after,
  h6::before {
    content: '';
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 10px;
  }
  h6::before {
    left: 30px;
  }
  h6::after {
    right: 30px;
  }
}
</style>
