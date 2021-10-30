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

    <div v-if="type === 'link'">
      <div class="clearfix" style=" margin-bottom:30px">
        <el-button type="primary" style="float:right" @click="linkAdd">添加连接</el-button>
      </div>
      <el-form ref="form" label-width="100px">
        <el-row v-for="(item,index) in  linkList" :key="index">
          <el-col :span="11">
            <el-form-item label="连接名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="连接地址">
              <el-input v-model="item.link"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <div class="del-btn cursorfix" @click="linkDel(index)">
              <i class="el-icon-delete"></i>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="type === 'card'">
      <div class="clearfix" style=" margin-bottom:30px">
        <el-button @click="blogListFlag = true" style="float:right">选择博客</el-button>
      </div>
      <blogListDialog @change="changeBnt"></blogListDialog>
      <el-table :data="cardList" style="width: 100%">
        <el-table-column prop="title" width="200" label="博客标题" show-overflow-tooltip></el-table-column>
        <el-table-column prop label="图片" align="center">
          <template #default="scope"></template>
        </el-table-column>
        <el-table-column fixed="right" width="100" label="操作">
          <template #default="scope">删除</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import { useMain, useChildrenMain } from './use/config'
export default {
  setup() {
    const main = useMain(),
      childrenMain = useChildrenMain()
    return { ...main, ...childrenMain }
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
.del-btn {
  width: 35px;
  height: 35px;
  text-align: center;
  background: #f56c6c;
  border-radius: 50%;
  line-height: 35px;
  margin-left: 10px;
  .el-icon-delete {
    color: #fff;
  }
}
</style>