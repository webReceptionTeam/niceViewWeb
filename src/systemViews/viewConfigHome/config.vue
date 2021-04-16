<template>
  <div>
    <h2>一级模块</h2>
    <el-form ref="form" label-width="100px" style="padding-right:20px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input v-model="title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类型">
            <el-select v-model="type" placeholder="请选择">
              <el-option
                v-for="item in moduleTypeList"
                :key="item.code"
                :label="item.label"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模块个数">
            <el-select v-model="TypeSize" placeholder="请选择">
              <el-option
                v-for="item in sizeTypeList"
                :key="item.code"
                :label="item.label"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="顺序">
            <el-input-number v-model="orders" :step="1"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="图标">
            <div v-if="icon" class="config-icon">
              <blogIcon :fontName="icon"></blogIcon>
            </div>
            <div v-else class="cursorfix" style="font-size: 20px" @click="openIconSelect">
              <i class="el-icon-plus"></i>
            </div>
            <iconSelectionTimorous @iconClose="handleClose" @clickName="clickName"></iconSelectionTimorous>
            <div class="del cursorfix" v-if="icon" @click="emptyIcon">
              <i class="el-icon-close"></i>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否禁用">
            <el-switch v-model="disable" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <h2>二级模块</h2>
  </div>
</template>

<script>

import { useMain } from './use/config'
export default {
  setup() {
    const main = useMain()
    return { ...main }
  }
}
</script>

<style lang="scss" scoped>
.config-icon {
  height: 40px;
  display: flex;
  align-items: center;
}
.del {
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 25px;
  height: 20px;
  line-height: 20px;
}
</style>