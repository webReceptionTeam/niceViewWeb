<template>
  <el-drawer
    :title="drawerHomeItem.title || '添加'"
    size="60%"
    v-model="drawerFlag"
    :before-close="drawerClose"
    :with-header="false"
    direction="rtl"
  >
    <div class="drawer-box">
      <div class="drawer-box-header clearfix">
        <h2>{{ drawerHomeItem.title || '添加' }}</h2>
        <i class="el-icon-close cursorfix" @click="drawerClose"></i>
      </div>
      <div class="drawer-box-content">
        <!-- card 卡片类型 Banners 横幅 link 链接 List 列表  team 团队 等 -->
        <!-- <span @click="abc">我来啦!</span>
        <div>{{ drawerHomeItem }}</div>-->
        <!-- 默认为模块详情 点击修改按钮进行调整修改，添加为另一个状态 -->
        <div v-if="!addDataFlag && !modifyFlag">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="item in tableHeader"
              :prop="item.prop"
              :label="item.label"
              align="center"
              :show-overflow-tooltip="item.showOverflowTooltip"
            >
              <template #default="scope">
                <span
                  v-if="item.prop == 'lastDate'"
                >{{ scope.row[item.prop] ? timeFilter(scope.row[item.prop]) : '-' }}</span>
                <span v-else>{{ scope.row[item.prop] || '-' }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="addDataFlag || modifyFlag">
          <configData />
        </div>
      </div>
      <div class="drawer-box-floot">
        <el-button v-if="!addDataFlag && !modifyFlag">修改</el-button>
        <el-button type="primary" v-if="addDataFlag">保存</el-button>
        <el-button type="primary" v-if="modifyFlag">确认修改</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { useMain } from './use/drawerBox'
import { ruleTime } from '@/utils/public'
import configData from './config'
export default {
  setup() {
    const main = useMain()
    return { ...main }
  },
  components: { configData },
  methods: {
    // 因setup不可用this所以写在此出 后期是否可以写在setup中-源码调整 截至日期 2021-12-30当天
    // 关闭事件
    drawerClose(ev) {
      if (this.modifyFlag && this.addDataFlag) {
        this.$confirm('确认关闭？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
          .then(_ => {
            this.drawerFlag = false
          })
          .catch(_ => { });
      } else {
        this.drawerFlag = false
      }

    },
    timeFilter(val) {
      return ruleTime(val).split(' ')[0]
    }
  },
}
</script>

<style lang="scss" scoped>
.drawer-box {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 24px;
  &-header {
    margin: 20px 0;
    h2 {
      float: left;
      font-size: 18px;
    }
    i {
      font-size: 24px;
      float: right;
    }
  }
  &-content {
    height: calc(100% - 150px);
    overflow: auto;
    .el-form {
      width: 100%;
    }
  }
  &-floot {
    // height: 20px;
    padding: 20px 10px 20px 0;
    text-align: right;
  }
}
</style>