<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
    </Header>
    <Nav></Nav>
    <div class="ProfileContent">
      <img src="./images/profileBackground.jpg" alt="" class="proImg">
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
}
.ProfileContent .proImg{
  /*display: inline-block;*/
  width: 100%;
  height: 100%;
}
.ProfileContent .loginControl {
  display: flex;
  position: absolute;
  width: 400px;
  height: 500px;
  background-color: #fff;
  tab-index: 5;
  right: 80px;
  top: 40px;
  border-radius: 50px;
  /*opacity: 0.9;*/
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.ProfileContent .loginControl .loginWrap {
  width: 350px;
  height: 450px;
}
</style>
