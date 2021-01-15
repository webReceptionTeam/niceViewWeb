import Popper from 'element-plus/lib/el-popper'
import { reactive, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export function userCerterMenu() {
  const router = useRouter()
  const menuList = reactive([
    {
      id: '1',
      title: '个人资料',
      route: 'user-info'
    },
    {
      id: '2',
      title: '账号设置',
      route: 'account-set'
    },
    {
      id: '3',
      title: '我的收藏',
      route: 'my-favorites'
    },
    {
      id: '4',
      title: '我的测试',
      route: 'my-test',
      children: [
        {
          id: '41',
          title: '选项1'
        },
        {
          id: '42',
          title: '选项2'
        },
        {
          id: '43',
          title: '选项3'
        }
      ]
    },
    {
      id: '5',
      title: '内容管理',
      route: ''
    }
  ])
  const handleSelect = (key, keyPath, urls) => {
    const url = urls.route
    if (url) {
      router.push(url)
    }
  }
  onBeforeMount(() => {})
  return {
    menuList,
    handleSelect
  }
}
