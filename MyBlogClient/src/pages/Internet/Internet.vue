<template>
  <div>
    <Header title="internet">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont internet" slot="icon"></i>
    </Header>
    <div class="IntContent">
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'

export default {
  components: {
    Nav,
    Header
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
.internet {
  font-size: 2.2vw;
  color: #57feff;
  margin-right: 2px;
}
.IntContent {
  width: 100%;
  height: 92.5vh;
  background-image: url("../../pages/Internet/images/intBackground.jpg");
  background-position: 60% 1%;
}

</style>
