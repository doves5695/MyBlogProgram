<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
    </Header>
    <Nav></Nav>
    <div class="ProfileContent">
      <img src="./images/profileBackground.jpg" alt="" class="proImg">
      <div class="loginControl">
        <div class="loginWrap">
            <h1 class="loginLogo">MyBlog</h1>
            <div class="loginHeaderTitle">
              <a href="javascript:;">短信登录</a>
              <a href="javascript:;" >密码登录</a>
            </div>
            <div class="loginContent">
              <form>
                <div class="loginPhone">
                  <div class="loginPhoneMessage">
                    <input class="loginInput" type="tel" maxlength="11" placeholder="手机号码">
                    <button class="getVerification">获取验证码</button>
                  </div>
                  <div class="loginPhoneVerification">
                    <input class="loginInput" type="tel" maxlength="4" placeholder="验证码">
                  </div>
                  <div class="loginPhoneHint">
                    温馨提示: 您的手机号尚未注册,登录时将自动注册
                    <a href="javascript:;">《用户服务协议》</a>
                  </div>
                </div>
                <div class="loginUsername" style="display: none">
                  <div>
                    <div class="loginUsernameMessage">
                      <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" />
                    </div>
                    <div class="loginUsernameVerification">
                      <input class="loginInput" type="text" maxlength="8" placeholder="密码">
                      <input class="loginInput" type="password" maxlength="8" placeholder="密码">
                      <div class="switchButton">
                        <div class="switchCircle"></div>
                        <span class="switchText"></span>
                      </div>
                    </div>
                    <div class="loginUsernameMessage">
                      <input type="text" maxlength="11" placeholder="验证码">
                      <img src="" alt="captcha">
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
  components: {Nav, Header}
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
  color: #3ea055;
  border-bottom: 0.5px solid #4cc552;
  font-size: 1.4vw;
}
.ProfileContent {
  position: relative;
}
.ProfileContent .proImg{
  width: 100%;
  height: 100%;
}
.ProfileContent .loginControl {
  display: flex;
  position: absolute;
  width: 30%;
  height: 70%;
  background-color: #fff;
  right: 4%;
  top: 6%;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  z-index: 88;
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
.loginContent .loginPhone {

}
.loginInput {
  width: 18vw;
  height: 3vw;
  border-radius: 15px;
  padding-left: 15px;
  margin: 1vw 0;
  outline: #3ea055;
}
.loginPhone .getVerification {
  position: absolute;
  width: 60%;
  height: 6%;
  left: 70%;
  top: 9%;
  background-color: transparent;
  border: none;
  color: #c0c0c0;
  font-size: 0.6vw;
  cursor: pointer;
}
.loginPhoneHint {
  width: 18vw;
  height: 4vw;
  font-size: 1vw;
}
.loginPhoneHint >a {
  color: #b1fb17;
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
</style>
