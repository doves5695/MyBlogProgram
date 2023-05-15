<template>
  <div>
    <Header title="CSS">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont css" slot="icon"></i>
    </Header>
    <div class="CssContent">
      <Nav></Nav>
      <img src="../CSS/images/cssBackground.jpg" alt="" class="CssImg">
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
export default {
  components: {
    Header,
    Nav
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
  width: 100%;
  height: 100%;
}
.CssImg {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: .8;
}
</style>
