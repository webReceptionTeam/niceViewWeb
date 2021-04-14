<template>
  <div>
    <el-form ref="form" label-width="100px" style="padding-right:20px">
      <h2>一级模块</h2>
      <el-row>
        <el-col :span="12">
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
          <el-form-item label="顺序">
            <el-input v-model.number="orders" maxlength="5" show-word-limit></el-input>
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
          <el-form-item label="图标">
            <el-input v-model="icon"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否禁用">
            <el-switch v-model="disable" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
</style>