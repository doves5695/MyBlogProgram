<template>
  <div>
    <Header title="HTML">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont HTML" slot="icon"></i>
    </Header>
    <div class="HtmlContent">
      <Nav></Nav>
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
.HTML {
  font-size: 2.2vw;
  color: #f70d1a;
  margin-right: 2px;
}
.HtmlContent {
  width: 100%;
  height: 92.5vh;
  background-image: url("../../pages/HTML/images/htmlBackground.jpg");
  background-position: 50%;
}

</style>
