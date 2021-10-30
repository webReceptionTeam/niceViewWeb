/**
 * 前台页面接口 接口总合
 */
// 引入axios
import axios from '@/utils/http.js'
const blogPath = 'blog'
const relatedPath = 'related'

/*** 博客相关接口集合 ***/
//  添加博客
export function addBlog(data) {
  return axios.post(`/${blogPath}/addBlog`, data)
}

// 分类查询
export function queryClass(data) {
  return axios.post(`/${relatedPath}/queryClass`, data)
}

// 标签查询
export function queryLabel() {
  return axios.post(`/${relatedPath}/queryLabel`)
}


