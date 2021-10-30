<template>
  <blIcon
    :fontSize="`${fontSize}`"
    :fontClass="fontName"
    v-if="fontName && fontName.indexOf('el') === -1"
  ></blIcon>
  <i :style="`font-size: ${fontSize}px;`" v-else-if="fontName" :class="fontName"></i>
</template>

<script>
export default {
  name: "blogIcon",
  props: {
    fontSize: {
      type: Number,
      default: 25
    },
    fontName: {
      type: String,
      default: ''
    }
  }
}
 </script>

<style lang="scss" scoped>
</style>