/**
 * 项目公用接口整合输出
 */
import axios from '@/utils/http.js'
const blogPath = 'blog'
// 模板
//  export function userRegister(data) {
//   return axios.post(`/${loginPath}/register`, data)
// }


export function blogQuery(data) {
  return axios.post(`/${blogPath}/query`, data)
}