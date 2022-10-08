<template>
  <blog-dialog width="60%" @handleClose="handleCloses" title="图标选择" :handleCloseFlag="true">
    <el-tabs v-model="iconType" type="card">
      <el-tab-pane label="图标库" name="fontClass">
        <ul>
          <li
            class="cursorfix"
            v-for="(item, index) in fontList.glyphs"
            :key="index"
            @click="iconClick(item.font_class)"
          >
            <div>
              <blIcon :fontClass="item.font_class"></blIcon>
            </div>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="el图标库" name="elIcon">
        <ul>
          <li
            class="cursorfix"
            v-for="(item, index) in fontListPlus"
            :key="index"
            @click="iconClick(item.icon)"
          >
            <div>
              <i :class="item.icon"></i>
            </div>
            <span>{{ item.icon }}</span>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
    <input ref="iconInputRef" style="opacity: 0;" type="text" />
  </blog-dialog>
</template>

<script>
import { ref, inject } from 'vue'
// 阿里巴巴图标库json
const json = require("fonts/iconfont.json");
// el图标库json
const jsonPlus = require('@/utils/iconfontPlus.json')

export default {
  name: 'iconSelectionTimorous',
  props: {
    // 使用方式
    clickCopyFlag: {
      type: Boolean,
      default: false
    }
  },
  // 自定义事件需要定义
  emits: ["clickName", "iconClose"],
  setup(props, context) {
    let dialogVisible = inject('dialogVisible'),
      fontList = ref(json),
      fontListPlus = ref(jsonPlus),
      iconType = ref('fontClass'),
      iconInputRef = ref(null),
      valFlag = ref('');

    // 退出前事件
    const handleCloses = (ev) => {
      context.emit('iconClose', ev)
      dialogVisible.value = false
      valFlag.value = ''
    }

    // 图标点击事件
    const iconClick = (val) => {
      valFlag.value = val
      // 判断需要那种方式
      if (props.clickCopyFlag) {
        const oInput = iconInputRef.value
        oInput.value = val
        oInput.select();
        document.execCommand("Copy");
      } else {
        context.emit('clickName', val)
      }
      handleCloses()
    }

    return {
      fontList,
      fontListPlus,
      handleCloses,
      iconType,
      iconClick,
      iconInputRef
    };
  },
}
</script>

<style lang="scss" scoped>
ul {
  border: 1px solid rgb(234, 238, 251);
  // border-top: none;
  border-image: initial;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16.66%);
  grid-template-rows: repeat(auto-fill, 120px);
  li {
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 120px;
    font-size: 13px;
    margin-right: -1px;
    margin-bottom: -1px;
    border-right: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    > div {
      height: 60px;
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;
    }
    > span {
      padding: 0 20px;
      text-align: center;
      display: block;
      line-height: 20px;
    }
  }
  li:hover {
    background: rgba(238, 238, 238, 0.5);
  }
}
::v-deep .el {
  &-tab-pane {
    max-height: 400px;
    overflow-y: auto;
  }
  &-tabs {
    &__header {
      margin: 1px;
      // border-bottom: 1px solid rgb(238, 238, 238);
      border: none;
    }
  }
}
</style>