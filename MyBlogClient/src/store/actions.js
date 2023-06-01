/* 通过mutations间接更新state的多个方法对象 */
import {
  RECEIVE_USR_INFO
} from './mutation-types'

// import {
//   reqUserInfo,
//   reqLogout
// } from '../api'
export default {
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USR_INFO, {userInfo})
  }
}
