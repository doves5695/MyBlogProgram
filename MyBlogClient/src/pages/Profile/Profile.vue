<template>
  <div>
    <Header title="PersonalCenter">
      <i class="iconfont home" slot="goWhere"></i>
    </Header>
    <div class="ProfileContent">
      <img src="./images/R.jpg" alt="" class="proImg">
      <div class="loginControl">
        <div class="loginWrap"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'

export default {
  components: {Header}
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
  display: inline-block;
  width: 100%;
  height: 620px;
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
  opacity: 0.9;
  justify-content: center;
  align-items: center;
}
.ProfileContent .loginControl .loginWrap {
  width: 350px;
  height: 450px;
}
</style>
