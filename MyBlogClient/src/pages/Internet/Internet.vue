<template>
  <div>
    <Header title="internet">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont internet" slot="icon"></i>
    </Header>
    <div class="IntContent">
      <Nav></Nav>
      <Article>
        <h2 slot="articleH2">有关于网络的文章</h2>
      </Article>
      <Aside></Aside>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
import Aside from '../../components/Aside/Aside.vue'
import Article from '../../components/Article/Article.vue'

export default {
  components: {
    Article,
    Aside,
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
  display: flex;
  width: 100%;
  height: 75vw;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/Internet/images/intBackground.jpg");
  background-position: 60% 1%;
  background-size: 135vw;
}

</style>
