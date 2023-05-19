<template>
  <div>
    <Header title="HTML">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont HTML" slot="icon"></i>
    </Header>
    <div class="HtmlContent">
      <Nav></Nav>
      <Article>
        <h2 slot="articleH2">关于HTML的文章</h2>
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
.HTML {
  font-size: 2.2vw;
  color: #f70d1a;
  margin-right: 2px;
}
.HtmlContent {
  display: flex;
  width: 100%;
  height: 75vw;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/HTML/images/htmlBackground.jpg");
  background-position: 50%;
  background-size: 135vw;
}
</style>
