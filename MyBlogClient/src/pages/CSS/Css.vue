<template>
  <div>
    <Header title="CSS">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont css" slot="icon"></i>
    </Header>
    <div class="CssContent">
      <Nav></Nav>
      <Article>
        <h2 slot="articleH2">关于CSS的文章</h2>
      </Article>
      <Aside></Aside>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Nav from '../../components/Navigation/Navigation.vue'
import Article from '../../components/Article/Article.vue'
import Aside from '../../components/Aside/Aside.vue'

export default {
  components: {
    Header,
    Nav,
    Article,
    Aside
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

</style>
