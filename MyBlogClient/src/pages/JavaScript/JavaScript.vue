<template>
  <div>
    <Header title="JavaScript">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont JavaScript" slot="icon"></i>
    </Header>
    <div class="JsContent">
      <Nav></Nav>
      <Article>
        <h2 slot="articleH2">关于JavaScript的文章</h2>
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
.JavaScript {
  font-size: 2.2vw;
  color: #ffd801;
  margin-right: 2px;
}
.JsContent {
  display: flex;
  width: 100%;
  height: 75vw;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/JavaScript/images/jsBackground.jpg");
  background-position: 50%;
  background-size: 135vw;
}
</style>
