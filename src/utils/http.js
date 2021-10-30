import axios from 'axios'
const premission = window.localStorage.getItem("premission")
const premissionFlag = premission === '1' || premission === '2' ? true : false
const http = axios.create({
    // 在config文件夹下dev.evn.js和prod.env.js里分别配置开发和生产环境对应的路径前缀
    // baseURL: '/api',
    baseURL: '/local',
    timeout: 35000, // request timeout
    withCredentials: true // 默认为false,true为携带cookie
})

http.CancelToken = axios.CancelToken // 挂载CancelToken用于取消请求

http.interceptors.request.use(
    (config) => {
        // 设置中文编码
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['authorization'] = localStorage.getItem('token') || ''
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
// 返回拦截器
http.interceptors.response.use(
    (response) => {
        console.log(response, '--->>>接口返回参数--全量');
        let code = response.data.code
        switch (code) {
            case 0:
                // 接口无问题
                console.log('接口正常');
                break;
            case 32:
            case 30:
            case 31:
                // token过期及无效及校验失败
                console.log('token过期及无效及校验失败');
                hrefLogin()
                break;
            case -4:
                console.log('没带token');
                // 没带token
                break;
            default:
                break;
        }
        return response
    },
    (error) => {
        // hrefLogin()
        console.log(error);
        return Promise.reject(error)
    }
)

const hrefLogin = () => {
    window.location.href = premissionFlag ? '/login' : '/'
}
export default http