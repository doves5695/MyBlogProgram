<template>
  <div>
    <Header title="CSS">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont css" slot="icon"></i>
      <i class="iconfont icon-person-renwu" title="个人信息" slot="personLogin" v-if="!userInfo._id"></i>
      <img class="loginAvatar" src="../UserInfo/images/dogAvatar.jpg" alt="" slot="personLogin" v-else>
    </Header>
    <div class="CssContent">
      <Nav></Nav>
      <Article></Article>
      <Aside></Aside>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
import Article from '../../components/Article/Article.vue'
import Aside from '../../components/Aside/Aside.vue'
import {mapState} from 'vuex'

export default {
  components: {
    Header,
    Nav,
    Article,
    Aside
  },
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
.css {
  font-size: 2.2vw;
  color: #1f45fc;
  margin-right: 2px;
}
.CssContent {
  display: flex;
  width: 100%;
  height: 75vw;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/CSS/images/cssBackground.jpg");
  background-position: 50%;
  background-size: 135vw;
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
