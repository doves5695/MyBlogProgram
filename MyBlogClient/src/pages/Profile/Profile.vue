<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
    </Header>
    <Nav></Nav>
    <div class="ProfileContent">
      <div class="loginControl">
        <div class="loginWrap">
            <h1 class="loginLogo">MyBlog</h1>
            <div class="loginHeaderTitle">
              <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
              <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
            </div>
            <div class="loginContent">
              <form>
                <div class="loginPhone" v-show="loginWay">
                  <div class="loginPhoneMessage">
                    <input class="loginInput" type="tel" maxlength="11" placeholder="手机号码" v-model="phone">
                    <button :disabled="!rightPhone" class="getVerification"
                            :class="{right_phone: rightPhone}" @click.prevent="getCode">
                      {{ computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
                  </div>
                  <div class="loginPhoneVerification">
                    <input class="loginInput" type="tel" maxlength="4" placeholder="验证码">
                  </div>
                  <div class="loginPhoneHint">
                    温馨提示: 您的手机号尚未注册,登录时将自动注册
                    <a href="javascript:;">《用户服务协议》</a>
                  </div>
                </div>
                <div class="loginUsername" v-show="!loginWay">
                  <div>
                    <div class="loginUsernameMessage">
                      <input  class="loginInput" type="text" maxlength="11" placeholder="手机/邮箱/用户名" />
                    </div>
                    <div class="loginUsernamePwdWay">
                      <input class="loginInput" type="password" maxlength="8" placeholder="密码">
                    </div>
                    <div class="loginUsernameSvg">
                      <input class="loginInput" type="text" maxlength="11" placeholder="验证码">
                      <img class="loginSvg" src="./images/captcha.svg" alt="captcha">
                    </div>
                  </div>
                </div>
                <button class="loginSubmit">登录</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'

export default {
  data () {
    return {
      loginWay: true, // 登录选择
      phone: '', // 电话号
      computeTime: 0 // 计时的时间
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  components: {
    Nav,
    Header
  },
  methods: {
    getCode () {
      if (!this.computeTime) {
        this.computeTime = 30
        const intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(intervalId)
          }
        }, 1000)
      }
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
</style>
