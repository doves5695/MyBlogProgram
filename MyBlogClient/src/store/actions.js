/* 通过mutations间接更新state的多个方法对象 */
import {
  RECEIVE_USER_INFO,
  RECEIVE_HOME_INFO,
  RECEIVE_AFTERLOGIN_INFO,
  RESET_USER_INFO, RECEIVE_ARTICLELIST_INFO
} from './mutation-types'

import {
  reqHomeInfo,
  reqAfterLoginInfo,
  reqUserInfo,
  reqLogout,
  reqArticleList
} from '../api'
export default {
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取home页面信息
  async getHomeInfos ({commit}) {
    const result = await reqHomeInfo()
    if (result.code === 0) {
      const homeInfos = result.data
      commit(RECEIVE_HOME_INFO, {homeInfos})
    }
  },

  // 异步获取userinfo页面信息
  async getAfterLoginInfos ({commit}) {
    const result = await reqAfterLoginInfo()
    if (result.code === 0) {
      const afterLoginInfos = result.data
      commit(RECEIVE_AFTERLOGIN_INFO, {afterLoginInfos})
    }
  },

  // 异步获取用户登录时信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步退出登录
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取文章信息
  async getArticleList ({commit}) {
    const result = await reqArticleList()
    if (result.code === 0) {
      const articleLists = result.data
      commit(RECEIVE_ARTICLELIST_INFO, {articleLists})
    }
  }
}
