import { reactive, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { filterGetRoutePath } from '@/utils/filterData'
export function userCerterMenu() {
  const router = useRouter()
  let active = ref(filterGetRoutePath().articleId)
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
      title: '隐私设置',
      route: 'setting'
    },
    {
      id: '4',
      title: '我的收藏',
      route: 'my-favorites',
    },
    {
      id: '5',
      title: '内容管理',
      route: 'xxxx'
    }
  ])
  const handleSelect = (key, keyPath, urls) => {
    const url = urls.route
    if (url) {
      router.push(url)
    }
  }
  onBeforeMount(() => {
    console.log(filterGetRoutePath().articleId, '测试');
  })
  return {
    menuList,
    handleSelect,
    active
  }
}
