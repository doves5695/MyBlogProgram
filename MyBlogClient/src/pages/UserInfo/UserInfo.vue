<template>
  <div>
    <Header title="UserInfo">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
    </Header>
    <Nav></Nav>
    <div class="UserInfoContent">
      <div class="InfoControl">
        <div class="InfoWrap">
          <div class="wrapLeft">
            <div class="wrapLeftTop">
              <div class="UserAvatar"></div>
            </div>
            <div class="wrapLeftBottom"></div>
          </div>
          <div class="wrapRight"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
import {mapState} from 'vuex'

export default {
  components: {Nav, Header},
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style>
.OA-back {
  font-size: 2vw;
}
.OA-back:hover {
  font-size: 2.5vw;
  color: #848482;
}
.UserInfoContent {
  display: flex;
  position: relative;
  width: 100%;
  height: 50vw;
  background-image: url("../../pages/UserInfo/images/userinfoBackground.jpg");
  background-position: 40% 15%;
  background-size: 135vw;
  justify-content: center;
  align-items: center;
}
.UserInfoContent .InfoControl {
  display: flex;
  position: absolute;
  width: 70%;
  height: 42vw;
  background-color: #fff;
  top: 8%;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  opacity: .9;
}
.UserInfoContent .InfoControl .InfoWrap {
  position: relative;
  width: 90%;
  height: 85%;
  border: 2px solid black;
}
.InfoWrap .wrapLeft {
  display: flex;
  width: 30%;
  height: 100%;
  border-right: 2px solid black;
}
.wrapLeft .wrapLeftTop {
  display: flex;
  width: 100%;
  height: 65%;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
}
.wrapLeft .wrapLeftTop .UserAvatar {
  width: 60%;
  height: 48%;
  border: 2px solid black;
  border-radius: 50%;
}
.InfoWrap .wrapRight {
  display: flex;
  position: absolute;
  width: 70%;
  height: 100%;
  right: 0;
  top: 0;
}
</style>
