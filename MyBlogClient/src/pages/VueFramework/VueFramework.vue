<template>
  <div>
    <Header title="Vue">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont Vue" slot="icon"></i>
    </Header>
    <Nav></Nav>
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
.Vue {
  font-size: 2.2vw;
  color: #4cc552;
  margin-right: 2px;
}
</style>
