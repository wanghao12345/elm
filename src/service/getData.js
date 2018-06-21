import fetch from '../config/fetch'

/**
 * 获取图片验证码
 */
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 账号登录请求
 */
export const accountLogin = (username, password, captchaCode) => fetch('/v2/login', {username, password, captchaCode}, 'POST')
