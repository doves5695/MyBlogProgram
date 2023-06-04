<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
      <i class="iconfont icon-person-renwu" title="个人信息" slot="personLogin" v-if="!userInfo._id"></i>
      <img class="loginAvatar" src="../UserInfo/images/dogAvatar.jpg" alt="" slot="personLogin" v-else>
    </Header>
    <Nav></Nav>
    <div class="ProfileContent">
      <div class="loginControl">
        <div class="loginWrap">
            <h1 class="loginLogo">MyBlog</h1>
            <div class="loginHeaderTitle">
              <a href="javascript:" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
              <a href="javascript:" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
            </div>
            <div class="loginContent">
              <form @submit.prevent="login">
                <div class="loginPhone" v-show="loginWay">
                  <div class="loginPhoneMessage">
                    <input class="loginInput" type="tel" maxlength="11" placeholder="手机号码" v-model="phone">
                    <button :disabled="!rightPhone" class="getVerification"
                            :class="{right_phone: rightPhone}" @click.prevent="getCode">
                      {{ computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
                  </div>
                  <div class="loginPhoneVerification">
                    <input class="loginInput" type="tel" maxlength="4" placeholder="验证码" v-model="code">
                  </div>
                  <div class="loginPhoneHint">
                    温馨提示: 您的手机号尚未注册,登录时将自动注册
                    <a href="javascript:">《用户服务协议》</a>
                  </div>
                </div>
                <div class="loginUsername" v-show="!loginWay">
                  <div>
                    <div class="loginUsernameMessage">
                      <input  class="loginInput" type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name"/>
                    </div>
                    <div class="loginUsernamePwdWay">
                      <input class="loginInput" type="password" maxlength="8" placeholder="密码" v-model="pwd">
                    </div>
                    <div class="loginUsernameSvg">
                      <input class="loginInput" type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                      <img class="loginSvg" src="http://localhost:4500/captcha" alt="captcha" @click="getCaptcha" ref="captcha">
                    </div>
                  </div>
                </div>
                <button class="loginSubmit">登录</button>
              </form>
            </div>
        </div>
      </div>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import { reqSendCode, reqSmsLogin, reqPwdLogin } from '../../api'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      loginWay: true, // 登录选择
      phone: '', // 电话号
      computeTime: 0, // 计时的时间
      code: '', // 验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // 图形验证码,
      alertText: '', // 提示文本
      alertShow: false // 是否显示警告框
    }
  },
  computed: {
    // 验证计算属性手机号是否为11位
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    },
    ...mapState(['userInfo'])
  },
  components: {
    AlertTip,
    Nav,
    Header
  },
  methods: {
    // 提示框的显示
    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },

    // 异步获取验证码
    async getCode () {
      if (!this.computeTime) {
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)

        // 发送ajax请求
        const result = await reqSendCode(this.phone)
        if (result.code === 1) {
          // 显示错误提示
          this.showAlert(result.msg)
          // 停止计时
          if (this.computeTime) {
            this.computeTime = 0
            clearInterval(this.intervalId)
            this.intervalId = undefined
          }
        }
      }
    },

    // 异步登录
    async login () {
      let result
      // 前台表单验证
      if (this.loginWay) { // 短信登陆
        const {rightPhone, phone, code} = this
        if (!this.rightPhone) {
          // 手机号不正确
          this.showAlert('手机号不正确')
          return
        } else if (!/^\d{4}$/.test(code)) {
          // 验证必须是4位数字
          this.showAlert('验证必须是4位数字')
          return
        }
        // 发送ajax请求短信登陆
        result = await reqSmsLogin(phone, code)
      } else { // 密码登陆
        const {name, pwd, captcha} = this
        if (!this.name) {
          // 用户名必须指定
          this.showAlert('用户名必须指定')
          return
        } else if (!this.pwd) {
          // 密码必须指定
          this.showAlert('密码必须指定')
          return
        } else if (!this.captcha) {
          // 验证码必须指定
          this.showAlert('验证码必须指定')
          return
        }
        // 发送ajax请求密码登陆
        result = await reqPwdLogin({name, pwd, captcha})
      }

      // 停止计时
      if (this.computeTime) {
        this.computeTime = 0
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }

      // 根据结果数据处理
      if (result.code === 0) {
        const user = result.data
        // 将user保存到vuex的state
        this.$store.dispatch('recordUser', user)
        // 去个人中心界面
        await this.$router.push('/userinfo')
      } else {
        // 显示新的图片验证码
        this.getCaptcha()
        // 显示警告提示
        const msg = result.msg
        this.showAlert(msg)
        // 清空验证码
        this.captcha = ''
      }
    },

    // 关闭警告框
    closeTip () {
      this.alertText = ''
      this.alertShow = false
    },

    // 获取验证码
    getCaptcha () {
      this.$refs.captcha.src = 'http://localhost:4500/captcha?time=' + Date.now()
    }
  }
}
</script>

<style>
@import "../../common/css/index.css";
.home {
  font-size: 2vw;
}
.home:hover {
  font-size: 2.5vw;
  color: #848482;
}
.loginAvatar {
  width: 2.5vw;
  height: 2.5vw;
  opacity: 1;
}
.loginHeaderTitle >a {
  color: black;
  font-size: 1.2vw;
  margin: 0 0.8vw;
}
.loginHeaderTitle >a:hover {
  color: #6afb92;
  border-bottom: 2px solid #6afb92;
  font-size: 1.4vw;
}
.loginHeaderTitle  .on {
  color: #6afb92;
  border-bottom: 2px solid #6afb92;
  font-size: 1.4vw;
}
.ProfileContent {
  position: relative;
  width: 100vw;
  height: 92.5vh;
  background-image: url("../../pages/Profile/images/profileBackground.jpg");
  background-position: 40% 15%;
}
.ProfileContent .loginControl {
  display: flex;
  position: absolute;
  width: 30%;
  height: 40vw;
  background-color: #fff;
  right: 4%;
  top: 6%;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
}
.ProfileContent .loginControl .loginWrap {
  position: relative;
  width: 85%;
  height: 90%;
}
.loginWrap .loginLogo {
  position: absolute;
  width: 15vw;
  height: 5vw;
  text-align: center;
  line-height: 8vh;
  font-size: 4vw;
  font-family: '阿里妈妈东方大楷 Regular';
  left: 21%;
}
.loginWrap .loginHeaderTitle {
  display: flex;
  position: absolute;
  width: 20vw;
  height: 4vw;
  top: 15%;
  left: 10%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.loginContent {
  position: absolute;
  width: 80%;
  height: 60%;
  top: 26%;
  left: 12%;
}
.loginInput {
  width: 18vw;
  height: 3vw;
  border-radius: 15px;
  padding-left: 15px;
  margin: 1vw 0;
  font-size: 1.2vw;
  font-weight: bolder;
}
.loginInput:hover {
  outline: #4cc552 solid 1px;
}
.loginPhone .getVerification {
  position: absolute;
  width: 9vw;
  height: 1vw;
  right: 0;
  top: 2.2vw;
  background-color: transparent;
  border: none;
  color: #c0c0c0;
  font-size: .5vw;
  cursor: pointer;
  line-height: 1vw;
  font-weight: bolder;
}
.loginPhone .right_phone {
  color: black;
}
.loginPhoneHint {
  width: 18vw;
  height: 4vw;
  font-size: 1vw;
}
.loginPhoneHint >a {
  color: #348017;
}
.loginPhoneHint >a:hover {
  border-bottom: 2px solid #3ea055;
}
.loginSubmit {
  position: absolute;
  width: 15vw;
  height: 3.5vw;
  left: 12%;
  margin: 35px 0;
  border-color: transparent;
  border-radius: 20px;
  font-size: 1.5vw;
  font-weight: bolder;
  cursor: pointer;
  font-family: '阿里妈妈东方大楷 Regular';
}
.loginSubmit:hover {
  height: 3.6vw;
}
.loginSvg {
  position: absolute;
  width: 8vw;
  height: 2.5vw;
  bottom: 34%;
  right: 1.2vw;
  cursor: pointer;
}
.icon-person-renwu {
  font-size: 2vw;
  line-height: 5vh;
  color: #0c090a;
}
.icon-person-renwu:hover {
  font-size: 2.5vw;
}
.loginAvatar {
  width: 2.5vw;
  height: 2.5vw;
  opacity: 1;
}
</style>
