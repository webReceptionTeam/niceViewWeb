/**
 * 登录注册相关接口整合
 */
// 引入axios
import axios from '@/utils/http.js'
const loginPath = 'users'

// 登录
export function userLogin(data) {
    return axios.post(`/${loginPath}/login`, data)
}

// 注册
export function userRegister(data) {
    return axios.post(`/${loginPath}/register`, data)
}

// 退出
export function userLogout() {
    return axios.post(`/${loginPath}/logout`)
}