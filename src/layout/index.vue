<template>
  <div>
    这是首页,这里区分用户网站和后台管理系统
    <component :is="viewIs" />
  </div>
</template>

<script>
import administration from './administration'
import reception from './reception'
export default {
  name: 'Layout',
  components: {
    administration,
    reception
  },
  setup(props) {
    let viewIs = 'reception'
    return {
      viewIs
    }
  },
  beforeMount() {
    console.log(this.$route.name, '路由名称判断')
    if (this.$route.path.indexOf('/system') != -1) {
      this.viewIs = 'administration'
    } else {
      this.viewIs = 'reception'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>