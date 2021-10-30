<template>
  <div class="base-info" v-if="baseInfoType[userInfoType]">
    <div class="base-info-head">{{ baseInfoType[userInfoType] }}</div>
    <ul class="base-info-show" v-if="userInfoType === '00' && !editFlag">
      <li>
        <div class="content-show-l">用户昵称</div>
        <div class="content-show-r">Mrxiaotaotao</div>
      </li>
      <li>
        <div class="content-show-l">用 户 ID</div>
        <div class="content-show-r">weixin_44933553</div>
      </li>
      <li>
        <div class="content-show-l">真实姓名</div>
        <div class="content-show-r">Mrxiaotaotao</div>
      </li>
      <li>
        <div class="content-show-l">性 别</div>
        <div class="content-show-r">男</div>
      </li>
      <li>
        <div class="content-show-l">个人简介</div>
        <div class="content-show-r">Mrxiaotaotao</div>
      </li>

      <li>
        <div class="content-show-l">所在地区</div>
        <div class="content-show-r">北京-朝阳区</div>
      </li>
      <li>
        <div class="content-show-l">出生日期</div>
        <div class="content-show-r">2019-07-12</div>
      </li>
      <li>
        <div class="content-show-l">开始工作</div>
        <div class="content-show-r">2019-07</div>
      </li>
      <div class="edit-icon" @click="editFlag = true">编辑</div>
    </ul>
    <ul class="base-info-show" v-if="userInfoType === '01' && !editFlag">
      <li>
        <div class="content-show-l">学校名称</div>
        <!-- <div class="content-show-r"></div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <li>
        <div class="content-show-l">专 业</div>
        <!-- <div class="content-show-r">Mrxiaotaotao</div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <li>
        <div class="content-show-l">入学时间</div>
        <!-- <div class="content-show-r">Mrxiaotaotao</div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <li>
        <div class="content-show-l">学 历</div>
        <!-- <div class="content-show-r">Mrxiaotaotao</div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <div class="edit-icon" @click="editFlag = true">编辑</div>
    </ul>
    <ul class="base-info-show" v-if="userInfoType === '02' && !editFlag">
      <li>
        <div class="content-show-l">公司名称</div>
        <!-- <div class="content-show-r"></div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <li>
        <div class="content-show-l">职业名称</div>
        <!-- <div class="content-show-r">Mrxiaotaotao</div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <li>
        <div class="content-show-l">所属行业</div>
        <!-- <div class="content-show-r">Mrxiaotaotao</div> -->
        <div class="content-show-text">末选择</div>
      </li>
      <div class="edit-icon" @click="editFlag = true">编辑</div>
    </ul>
    <div class="base-info-edit" v-if="editFlag">
      <el-form ref="form" :model="userInfo" label-width="80px" label-position="top">
        <el-row :gutter="48" v-if="userInfoType === '00'">
          <el-col :span="12">
            <el-form-item label="用户昵称">
              <el-input v-model="userInfo.name" placeholder="请输入昵称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div class="text">每月仅支持修改 1 次</div>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户ID">
              <el-input :disabled="true" v-model="userInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="真实姓名">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-radio v-model="userInfo.gender" label="1" border>男</el-radio>
              <el-radio v-model="userInfo.gender" label="2" border>女</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期">
              <el-date-picker v-model="userInfo.birthday" type="date" placeholder="请设置您的出生日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开始工作">
              <el-date-picker v-model="userInfo.theWorkTime" type="month" placeholder></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所在地区">
              <el-cascader v-model="userInfo.city" :options="options" @change="handleChange"></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="个人简介">
              <el-input type="textarea" :rows="4" placeholder="你很懒，还没有添加简介" v-model="userInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="48" v-if="userInfoType === '01'">
          <el-col :span="12">
            <el-form-item label="学校名称">
              <el-input v-model="userInfo.name" placeholder="请填写 例如：北京大学"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="专业">
              <el-input v-model="userInfo.name" placeholder="请填写 例如：计算机科学与技术"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="入学时间">
              <div class="tiem">
                <el-date-picker v-model="userInfo.theWorkTime" type="month" placeholder="请选择入学时间"></el-date-picker>
                <div class="to">至</div>
                <el-date-picker v-model="userInfo.theWorkTime" type="month" placeholder="请选择毕业时间"></el-date-picker>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学历">
              <el-select v-model="userInfo.name" placeholder="请选择">
                <el-option
                  v-for="item in educationList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="48" v-if="userInfoType === '02'">
          <el-col :span="12">
            <el-form-item label="公司名称">
              <el-input v-model="userInfo.name" placeholder="请填写 例如：XXXX"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职业名称">
              <el-input v-model="userInfo.name" placeholder="请填写 例如：高级算法工程师"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属行业">
              <el-select v-model="userInfo.name" placeholder="请选择">
                <el-option
                  v-for="item in educationList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="btn-box">
              <el-button class="edit-btn-cancel" round @click="editFlag = false">取消</el-button>
              <el-button class="edit-btn-save" type="primary" round @click="editFlag = false">保存</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// 00 基本信息 01 教育信息 02 工作信息
export default {
  name: 'userInfoModule',
  props: {
    userInfoType: String
  },
  setup(props) {
    let editFlag = ref(false),
      baseInfoType = ref({
        '00': '基本信息',
        '01': '教育信息',
        '02': '工作信息'
      }),
      userInfo = ref({
        name: '121'
      }),
      options = ref([
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则'
            },
            {
              value: 'daohang',
              label: '导航'
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic'
            },
             {
              value: 'form',
              label: 'Form'
            },
            {
              value: 'data',
              label: 'Data'
            },
            {
              value: 'notice',
              label: 'Notice'
            },
            {
              value: 'navigation',
              label: 'Navigation'
            },
            {
              value: 'others',
              label: 'Others'
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]),
      educationList = ref([
        {
          id: '1',
          name: '大学'
        }
      ])
    const handleChange = (list) => {
      console.log(list)
    }
    return {
      editFlag,
      userInfo,
      options,
      baseInfoType,
      educationList,
      handleChange
    }
  }
}
</script>
<style lang="scss" scoped>
.base-info {
  padding: 24px 16px 16px;
  background: #fff;
  margin-bottom: 16px;
  &-head {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: #2e2e2e;
    margin-bottom: 16px;
  }
  &-show {
    position: relative;
    padding: 16px 112px 16px 0;
    cursor: pointer;
    li {
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 25px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .content-show-l {
        width: 56px;
        color: #555666;
        margin-right: 40px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding-left: 16px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      .content-show-r {
        color: #222226;
        word-break: break-all;
      }
      .content-show-text {
        color: #999aaa;
        height: 24px;
      }
    }
    li:last-of-type {
      margin-bottom: 0;
    }
    .edit-icon {
      display: none;
      position: absolute;
      top: 16px;
      right: 16px;
      align-items: center;
      color: #1989fa;
      font-size: 14px;
    }
  }

  &-show:hover {
    background: #f8f8f8;
    .edit-icon {
      display: block;
    }
  }

  &-edit {
    padding: 24px 40px;
    background: #f8f8f8;
    ::v-deep(.el-form) {
      .el-form-item__label {
        line-height: 16px;
        padding-bottom: 8px;
      }
      .el-radio__input {
        display: none;
      }
      .el-form-item__content > label {
        width: 205px;
        text-align: center;
      }
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner,
      .el-cascader,
      .el-select {
        width: 100%;
      }
      .el-button {
        padding: 5px 26px;
      }
    }
    .tiem {
      display: flex;
      .el-input {
        flex: 1;
      }
      .to {
        width: 100px;
        text-align: center;
      }
    }
    .text {
      line-height: 86px;
      color: #fc5531;
    }
    .btn-box {
      text-align: center;
      .edit-btn-cancel {
        color: #fc5531;
        border: 1px solid #fc5531;
      }

      .edit-btn-cancel:hover {
        background-color: #fff5f2;
      }

      .edit-btn-save {
        background-color: #fc5531;
        border-color: #fc5531;
        margin-left: 16px;
      }
    }
    .edit-btn-save:hover {
      background-color: #fc1944;
    }
  }
}
</style>