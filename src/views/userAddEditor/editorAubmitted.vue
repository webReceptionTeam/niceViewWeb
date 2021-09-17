<template>
  <div class="modal_box" v-if="staySubmitFlag">
    <div class="modal_inner">
      <div class="modal_content">
        <div class="modal_content_title">
          <h2>发布文章</h2>
          <h1 @click="clear">X</h1>
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

        <el-form v-model="editorData" label-width="80px">
          <el-form-item label="文章标签">
            <el-checkbox-group v-model="editorData.blogLabel">
              <el-checkbox label="美食/餐厅线上活动" name="1"></el-checkbox>
              <el-checkbox label="地推活动" name="2"></el-checkbox>
              <el-checkbox label="线下主题活动" name="3"></el-checkbox>
              <el-checkbox label="线下主题活动" name="4"></el-checkbox>
              <el-checkbox label="线下主题活动" name="5"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="6"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="分类专栏">
            <el-checkbox-group v-model="editorData.blogClass">
              <el-checkbox label="美食/餐厅线上活动" name="1"></el-checkbox>
              <el-checkbox label="地推活动" name="2"></el-checkbox>
              <el-checkbox label="线下主题活动" name="3"></el-checkbox>
              <el-checkbox label="线下主题活动" name="4"></el-checkbox>
              <el-checkbox label="线下主题活动" name="5"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="6"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="发布形式">
            <el-radio-group v-model="editorData.blogType">
              <el-radio
                v-for="item in visibleModeLists"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              >{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章类型">
            <el-select v-model="editorData.visibleMode" placeholder="请选择">
              <el-option
                v-for="item in blogTypeLists"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="modal_content_foots">
          <button @click="clear">取消</button>
          <button class="btn-c-blue" @click="submit('draft')">存为草稿</button>
          <button class="btn-c-red" @click="submit('release')">发布文章</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue"
import { addBlog } from '@/api/niceView.js'
import { blogTypeList, visibleModeList } from '@/utils/options.js'
import { getLocalStorage } from '@/utils/auth.js'
import { ElMessage } from '@/utils/message.js'
export default {
  name: "editorAubmitted",
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let editorData = reactive({
      blogLabel: [],
      blogClass: [],
      blogType: '',
      visibleMode: ''
    })
    const blogTypeLists = ref(blogTypeList)
    const visibleModeLists = ref(visibleModeList)
    let staySubmitFlag = ref(false)


    const submit = async (type) => {
      let msg = ''
      if (editorData.blogLabel.length === 0) {
        msg = '文章标签'
      } else if (editorData.blogClass.length === 0) {
        msg = '分类专栏'
      } else if (!editorData.blogType) {
        msg = '发布形式'
      } else if (!editorData.visibleMode) {
        msg = '文章类型'
      }
      if (msg) {
        ElMessage.warning(msg + "未选择")
        return
      }
      try {
        const { data: res } = await addBlog({
          userId: getLocalStorage('userid'),
          ...editorData,
          ...props
        })
        if (res.code === '200') {
          console.log(res, '----');
          ElMessage.success(res.msg || '添加成功')
        } else {
          ElMessage.error(res.msg || '接口异常')
        }
      } catch (error) {
        ElMessage.error('网络异常')
      }
    }

    const clear = () => {
      staySubmitFlag.value = !staySubmitFlag.value
    }
    return {
      blogTypeLists,
      visibleModeLists,
      staySubmitFlag,
      editorData,
      submit,
      clear
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