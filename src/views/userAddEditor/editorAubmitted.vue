<template>
  <div class="modal_box">
    <div class="modal_inner">
      <div class="modal_content">
        <div class="modal_content_title">
          <h2>发布文章</h2>
          <h1>X</h1>
        </div>
        <div class="modal_content_native">
          <span>
            请勿发布违反国家法律法规等内容,详情请遵守
            <a
              target="_blank"
              href="https://blogdev.blog.csdn.net/article/details/113122012"
              style="color: rgb(51, 153, 234);"
            >《创作规范》</a>
          </span>
        </div>

        <el-form label-width="80px">
          <el-form-item label="文章标签">
            <el-checkbox-group v-model="value">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="分类专栏">
            <el-checkbox-group v-model="checkBox">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="发布形式">
            <el-radio-group v-model="type">
              <el-radio label="公开"></el-radio>
              <el-radio label="私密"></el-radio>
              <el-radio label="粉丝可见"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章类型">
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="modal_content_foots">
          <button>取消</button>
          <button class="btn-c-blue">存为草稿</button>
          <button class="btn-c-red">发布文章</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "editorAubmitted",
  setup(props) {
    let type = ref(''),
      checkBox = ref([]),
      value = ref([1]),
      value1 = ref([1]),
      options = ref([
        {
          value: '1',
          label: "原创"
        },
        {
          value: '2',
          label: "笔记"
        },
        {
          value: '3',
          label: "转载"
        },
      ]);
    return {
      type,
      checkBox,
      value,
      value1,
      options,
    }
  }
}
</script>

<style lang="scss" scoped>
.modal_ {
  &box {
    background-color: hsla(0, 0%, 63%, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 10;
  }
  &inner {
    margin: 7% auto 0;
    background-color: #fff;
    max-width: 725px;
    width: 725px;
  }
  &content {
    padding: 24px;
    &_title {
      display: flex;
      justify-content: space-between;
    }
    &_native {
      height: 36px;
      line-height: 36px;
      background: #fff6e5;
      border-radius: 4px;
      font-weight: 400;
      color: #e33e33;
      display: flex;
      align-items: center;
      margin: 20px 0;
      padding-left: 20px;
      a,
      span {
        font-size: 12px;
      }
    }
    &_foots {
      padding: 10px 0;
      text-align: right;
      button {
        background: #fff;
        padding: 6px 10px !important;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 4px;
      }
      button:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .btn-c-red {
        background: #fcecea;
        margin-right: 0;
      }
      .btn-c-red:hover {
        background: #fcecea;
      }
    }
  }
}
.el-form-item {
  margin-bottom: 10px;
}
.el-select {
  width: 200px;
}
</style>