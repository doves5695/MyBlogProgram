/* 直接更新state的多个方法的对象 */
import {
  RECEIVE_USR_INFO
} from './mutation-types'

export default {
  [RECEIVE_USR_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  }
}
