<template>
  <div>
    <Header title="JavaScript">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont JavaScript" slot="icon"></i>
    </Header>
    <div class="JsContent">
      <Nav></Nav>
      <img src="../JavaScript/images/jsBackground.jpg" alt="" class="JsImg">
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
.JavaScript {
  font-size: 2.2vw;
  color: #ffd801;
  margin-right: 2px;
}
.JsContent {
  width: 100%;
  height: 100%;
}
.JsImg {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: .8;
}
</style>
