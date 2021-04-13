import { inject, ref, toRefs, reactive, shallowReactive } from '@vue/runtime-core'
// <!-- card 卡片类型 Banners 横幅 link 链接 List 列表  team 团队 等 -->
// 表格展示维护
const headerData = {
  card: [
    {
      prop: "img",
      label: "图片",
    },
    {
      prop: "title",
      label: "模块标题",
      showOverflowTooltip: true
    },
    {
      prop: "lastDate",
      label: "最近更新日期",
    },
    {
      prop: "lastDate",
      label: "最近更新时间",
    }
  ],
  banners: [],
  team: [],
  link: []
}
export function useMain() {
  // 展示模块详情
  let drawerFlag = inject('drawerFlag'),
    drawerHomeItem = inject('drawerHomeItem'),
    tableData = ref([{
      "id": 111,
      "userId": 1111,
      "blogClass": "12",
      "blogLabel": "12",
      "blogType": 12,
      "firstDate": "2021-03-10T01:42:20.000Z",
      "lastDate": "2021-03-09T01:42:23.000Z",
      "favoritesNum": 0,
      "likeNum": 0,
      "commentNum": 0,
      "seeNum": 3,
      "articleLink": null,
      "title": '标题',
      "content": "12",
      "top": 1,
      "integralNum": 0,
      "img": "2222"
    },
    {
      "img": "2123222"
    }]),
    modifyFlag = ref(false),
    addDataFlag = ref(true),
    form = reactive({
      title: '',
      // title: ref(''),
      // type: ref(''),
      // orders: ref(''),
      // TypeSize: ref(''),
      // icon: ref(''),
      // disable: ref(''),
    })

  form.title = '1231'
  let tableHeader = headerData.card

  return {
    drawerFlag,
    drawerHomeItem,
    tableData,
    tableHeader,
    modifyFlag,
    addDataFlag,
    ...toRefs(form)
  }
}