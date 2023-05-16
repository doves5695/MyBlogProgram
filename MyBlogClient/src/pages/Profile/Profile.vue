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
              <a href="javascript:;">密码登录</a>
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
  width: 12vw;
  height: 8vh;
  text-align: center;
  line-height: 6vh;
  font-size: 4vw;
  font-family: '阿里妈妈东方大楷 Regular';
  left: 23%;
}
.loginWrap .loginHeaderTitle {
  position: absolute;
  top: 15%;
}
</style>
