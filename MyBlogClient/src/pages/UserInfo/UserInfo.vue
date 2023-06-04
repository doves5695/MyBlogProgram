<template>
  <div>
    <Header title="UserInfo">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont icon-person-renwu" title="个人信息" slot="personLogin" v-if="!userInfo._id"></i>
      <img class="loginAvatar" src="../UserInfo/images/dogAvatar.jpg" alt="" slot="personLogin" v-else>
    </Header>
    <Nav></Nav>
    <div class="UserInfoContent">
      <div class="InfoControl">
        <div class="InfoWrap">
          <div class="wrapLeft">
            <div class="wrapLeftTop">
              <div class="UserAvatar">
                <img src="./images/dogAvatar.jpg" alt="">
              </div>
            </div>
            <div class="wrapLeftBottom"></div>
          </div>
          <div class="wrapRight">
            <h2>用户个人信息</h2>
            <div class="wrapRightContent"></div>
            <span class="backLogin" @click="loginout">退出登录</span>
          </div>
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
  // data () {
  //   return {
  //     baseImgUrl: 'http://localhost:8081/static/img/'
  //   }
  // },
  components: {Nav, Header},
  mounted () {
    this.$store.dispatch('getAfterLoginInfos')
  },
  computed: {
    ...mapState(['userInfo', 'afterLoginInfos'])
  },
  methods: {
    loginout () {
      this.$store.dispatch('logout')
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出登录成功!',
        })
        this.$router.back()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出登录'
        })
      })
    }
  }
}
</script>

<style>
@import "../../common/css/index.css";
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
  width: 75%;
  height: 60%;
  border-radius: 50%;
}
.UserAvatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 1;
}
.InfoWrap .wrapRight {
  display: flex;
  position: absolute;
  width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
}
.wrapRight h2 {
  position: absolute;
  left: 4%;
  top: 2%;
  font-family: '阿里妈妈东方大楷 Regular';
}
.wrapRight .wrapRightContent {
  width: 80%;
  height: 80%;
  border: 1px solid black;
}
.wrapRight .backLogin {
  position: absolute;
  width: 20%;
  height: 3vw;
  background-color: red;
  text-align: center;
  line-height: 3vw;
  font-weight: bolder;
  font-size: 1.5vw;
  color: white;
  bottom: 3px;
  cursor: pointer;
  border-radius: 20px;
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
