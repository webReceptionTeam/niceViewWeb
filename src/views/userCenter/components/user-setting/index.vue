<template>
  <div class="setting">
    <h4>隐私设置</h4>
    <div class="setting-content">
      <div class="setting-content-items">
        <div>
          <h5>工作信息</h5>
          <p>开启后在个人主页等模块向他人展示工作信息</p>
        </div>
        <span>
          <el-switch v-model="value" active-color="#13ce66"> </el-switch>
        </span>
      </div>
      <div class="setting-content-items">
        <div>
          <h5>教育信息</h5>
          <p>开启后在个人主页等模块向他人展示教育信息</p>
        </div>
        <span>
          <el-switch v-model="value" active-color="#13ce66"> </el-switch>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'userSetting',
  setup(props) {
    let value = ref(true)
    return { value }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  min-height: 632px;
  background: #fff;
  padding: 24px 16px;
  h4 {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222226;
    line-height: 22px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f5;
  }
  &-content {
    &-items {
      box-sizing: content-box;
      padding: 24px 0;
      border-bottom: 1px solid #f0f0f5;
      display: flex;
      justify-content: space-between;
      > div {
        h5,
        p {
          height: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          line-height: 24px;
        }
        h5 {
          font-size: 18px;
          font-weight: 600;
          color: #2e2e2e;
          margin-bottom: 16px;
        }
        P {
          font-size: 14px;
          font-weight: 400;
          color: #555666;
        }
      }
    }
  }
}
</style>