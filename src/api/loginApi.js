/**
 * 登录注册相关接口整合
 */
// 引入axios
import axios from '@/utils/http.js'

// 注册接口
export function userRegister(data) {
    return axios.post('/users/register', data)
}