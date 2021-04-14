

// 表格展示维护
export const headerData = {
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

// 首页模块状态
export const moduleTypeList = [
  {
    code: 'list',
    label: "列表"
  },
  {
    code: 'card',
    label: "卡片"
  },
  {
    code: 'banners',
    label: "横幅"
  },
  {
    code: 'team',
    label: "团队"
  },
  {
    code: 'link',
    label: "链接"
  }
]

// 首页模块中子模块的个数
export const sizeTypeList = [
  {
    code: '2',
    label: "二个"
  },
  {
    code: '4',
    label: "四个"
  },
  {
    code: '8',
    label: "八个"
  },
  {
    code: '10',
    label: "十个"
  },
]