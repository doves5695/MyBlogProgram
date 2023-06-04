/* 直接更新state的多个方法的对象 */
import {
  RECEIVE_USER_INFO,
  RECEIVE_HOME_INFO,
  RECEIVE_AFTERLOGIN_INFO,
  RESET_USER_INFO,
  RECEIVE_ARTICLELIST_INFO
} from './mutation-types'

export default {
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_HOME_INFO] (state, {homeInfos}) {
    state.homeInfos = homeInfos
  },
  [RECEIVE_AFTERLOGIN_INFO] (state, {afterLoginInfos}) {
    state.afterLoginInfos = afterLoginInfos
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_ARTICLELIST_INFO] (state, {articleLists}) {
    state.articleLists = articleLists
  }
}
