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
export const reqLogout = () => ajax(BASE_URL + '/logout')
// 5.根据session会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/usersession')
// 6.获取home页面的布局信息
export const reqHomeInfo = () => ajax(BASE_URL + '/homeinfo')
// 7.获取登录后的信息
export const reqAfterLoginInfo = () => ajax(BASE_URL + '/afterlogin')
// 8.获取文章列表信息
export const reqArticleList = () => ajax(BASE_URL + '/articlelist')
