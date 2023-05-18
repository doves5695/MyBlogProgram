<template>
  <div>
    <Header title="CanHelpYou">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont Help" slot="icon"></i>
    </Header>
    <div class="HelpContent">
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
.Help {
  font-size: 2.2vw;
  color: #FF00FF;
  margin-right: 2px;
}
.HelpContent {
  width: 100%;
  height: 92.5vh;
  background-image: url("../../pages/Help/images/helpBackground.jpg");
  background-position: 60% 20%;
}
</style>
