<template>
  <div>
    <Header title="CanHelpYou">
      <i class="iconfont OA-back" slot="goWhere" @click="$router.back()"></i>
      <i class="iconfont Help" slot="icon"></i>
    </Header>
    <div class="HelpContent">
      <Nav></Nav>
      <Article>
        <h2 slot="articleH2">对你一定有帮助的文章 </h2>
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
  display: flex;
  width: 100%;
  height: 75vw;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/Help/images/helpBackground.jpg");
  background-position: 60% 20%;
  background-size: 120vw;
}
</style>
