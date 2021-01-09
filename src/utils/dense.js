/**
 * 加密函数
 * @param str 待加密字符串
 * @returns {string}
 */
export function str_encrypt(str) {
    let c = String.fromCharCode(str.charCodeAt(0) + str.length);
    for (let i = 1; i < str.length; i++) {
        c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
    }
    return encodeURIComponent(c);
}

/**
 * 解密函数
 * @param str 待解密字符串
 * @returns {string}
 */
export function str_decrypt(str) {
    str = decodeURIComponent(str)
    let c = String.fromCharCode(str.charCodeAt(0) - str.length)
    for (let i = 1; i < str.length; i++) {
        c += String.fromCharCode(str.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
}