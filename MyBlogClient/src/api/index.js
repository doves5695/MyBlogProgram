// 封装请求接口函数

import ajax from './ajax'

const BASE_URL = '/api'

// 1.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 2.手机号验证登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 3.用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// 4.用户退出登录
export const reqLogout = () => ajax(BASE_URL + 'logout')
