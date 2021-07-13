<template>
  <div class="addeditor">
    {{ markdown }}
    <v-md-editor :value="markdown" height="100%"></v-md-editor>
  </div>
</template>

<script>
export default {
  name: 'userAddEditor',
  data() {
    return {
      markdown: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.addeditor {
  width: 100%;
  height: 100%;
  min-width: 1366px;
  min-height: 600px;
}
</style>