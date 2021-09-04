/**
 * 前台页面接口 接口总合
 */
// 引入axios
import axios from '@/utils/http.js'
const blogPath = 'blog'

/*** 博客相关接口集合 ***/
//  添加博客
export function addBlog(data) {
  return axios.post(`/${blogPath}/addBlog`, data)
}

