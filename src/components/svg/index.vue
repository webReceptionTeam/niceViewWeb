<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="`width:${fontSize}px;height:${fontSize}px`"
  >
    <use :xlink:href="`#icon${fontClass}`" />
  </svg>
</template>

<script>
export default {
  name: "blIcon",
  props: {
    fontClass: {
      type: String,
      default: "",
    },
    fontSize: {
      type: String || Number,
      default: "20",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
