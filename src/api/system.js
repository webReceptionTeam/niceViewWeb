/**
 * 后台管理系统 接口总合
 */
// 引入axios
import axios from '@/utils/http.js'
const homePath = 'home'

/*** 首页相关接口集合 ***/
//  首页查询
export function homeQuer(data) {
  return axios.post(`/${homePath}/query`, data)
}

// 导航查询 看情况是否要拆出去
export function home_navQuery() {
  return axios.post(`/${homePath}/navQuery`, data)
}

// 首页导航
export function home_navHome() {
  return axios.post(`/${homePath}/navHome`, data)
}

// 添加首页数据
export function home_addItem() {
  return axios.post(`/${homePath}/addItem`, data)
}

// 更新首页数据
export function home_upItem() {
  return axios.post(`/${homePath}/upItem`, data)
}

// 更新导航数据
export function home_upNavList() {
  return axios.post(`/${homePath}/upNavList`, data)
}

/*** 相关接口集合 ***/
// ...
