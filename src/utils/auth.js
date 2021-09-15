import Cookies from 'js-cookie'


// 设置其他的cookie
export function setOtherCookie(key, token) {
    return Cookies.set(key, token)
}

// 获取其他的cookie
export function getOtherCookie(key) {
    return Cookies.get(key)
}

// 删除其他的cookie
export function removeOtherCookie(key) {
    return Cookies.remove(key)
}

// 设置sessionStorage
export function setSession(key, val) {
    return sessionStorage.setItem(key, val)
}

// 获取sessionStorage
export function getSession(key) {
    return sessionStorage.getItem(key)
}

// 删除sessionStorage
export function removeSession(key) {
    return sessionStorage.removeItem(key)
}

// 获取localStorage
export function getLocalStorage(key) {
    return localStorage.getItem(key)
}