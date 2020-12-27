import axios from 'axios'


const http = axios.create({
    // 在config文件夹下dev.evn.js和prod.env.js里分别配置开发和生产环境对应的路径前缀
    // baseURL: baseURL,
    timeout: 35000, // request timeout
    withCredentials: true // 默认为false,true为携带cookie
})

http.CancelToken = axios.CancelToken // 挂载CancelToken用于取消请求

http.interceptors.request.use(
    (config) => {
        // 设置中文编码
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
// 返回拦截器
http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http