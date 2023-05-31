<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
    </Header>
    <Nav></Nav>
    <div class="ProfileContent">
      <div class="loginControl">
        <div class="loginWrap"></div>
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
.home {
  font-size: 2vw;
}
.home:hover {
  font-size: 2.5vw;
  color: #848482;
}
.ProfileContent {
  position: relative;
  width: 100vw;
  height: 92.5vh;
  background-image: url("../../pages/AfterLogin/images/afterloginBackground.jpg");
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
</style>
