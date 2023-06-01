<template>
  <div>
    <Header title="MyBlog">
      <i class="iconfont home" slot="goWhere"></i>
      <i class="iconfont shuben" slot="icon"></i>
    </Header>
    <div class="Content">
      <section class="selector">
          <img class="lax lax_preset_blurInOut:180.5:20 lax_preset_slideY:722:95 lax_preset_slideX:722:95"  src="./images/home.jpg" alt="">
          <div class="text" >
            <h1 class="lax lax_preset_scaleInOut:158:0.5 lax_preset_fadeInOut:159:0">Welcome to my blog, Next let me take you to learn the front end</h1>
          </div>
        <i class="iconfont qicheqianlian- lax lax_preset_fadeInOut:180.5:0 lax_preset_zigzag:200:236"></i>
      </section>

      <section class="selector">
        <div class="Wrap" @click="To('/html')">
          <img class="lax lax_preset_blurInOut:180.5:20 lax_preset_slideY:722:95 lax_preset_slideX:722:95"
               src="./images/html.jpg" alt="">
          <div class="text" >
            <h1 class="lax lax_preset_scaleInOut:158:0.5 lax_preset_fadeInOut:159:0">HyperText Markup Language</h1>
          </div>
        </div>
      </section>

      <section class="selector">
        <div class="Wrap" @click="To('/css')">
          <img class="lax lax_preset_fadeInOut:159:0 lax_preset_scaleOut:158:1 lax_preset_zigzag:163:150"
               src="./images/css.jpg" alt="" >
          <div class="text">
            <h1 class="lax lax_preset_fadeInOut:180.5:0 lax_preset_seesaw:140:20">Cascading Style Sheets</h1>
          </div>
        </div>
      </section>

      <section class="selector">
        <div class="Wrap" @click="To('/js')">
          <img class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200"
               src="./images/js.jpg" alt="" >
          <div class="text">
            <h1 class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20">JavaScript</h1>
          </div>
        </div>
      </section>

      <section class="selector">
        <div class="Wrap" @click="To('/vue')">
          <img class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200"
               src="./images/Vue.jpg" alt="" >
          <div class="text">
            <h1 class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20">Reactive Components for Modern Web Interfaces</h1>
          </div>
        </div>
      </section>

      <section class="selector">
        <div class="Wrap"  @click="To('/internet')">
          <img class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200"
               src="./images/Internet.jpg" alt="">
          <div class="text">
            <h1 class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20">Computer NetWork</h1>
          </div>
        </div>
      </section>

      <section class="selector">
        <div class="Wrap" @click="To('/help')">
          <img class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200"
               src="./images/help.jpg" alt="" >
          <div class="text">
            <h1 class="lax lax_preset_blurOut:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20">There must be something that can help you</h1>
          </div>
        </div>
      </section>
    </div>
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
  },
  methods: {
    To (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
@import "../../common/css/index.css";
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
section {
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #387C44;
}
section:nth-child(2) {
  background-color: #347235;
}
section:nth-child(3) {
  background-color: #437C17;
}
section:nth-child(4) {
   background-color: #254117;
 }
section:nth-child(5) {
  background-color: #4aa02c;
}
section:nth-child(6) {
  background-color: #348017;
}
section:nth-child(7) {
  background-color: #3ea055;
}
.Wrap {
  display: flex;
  width: 45vw;
  height: 45vh;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}
img {
  width: 45vw;
  height: 45vh;
  opacity: .6;
}
.text {
  position: absolute;
  font-size: 5vw;
  padding: 0 200px;
  color: #fff;
  text-align: center;
  font-family: '阿里妈妈东方大楷 Regular';
}
.qicheqianlian- {
  position: absolute;
  font-size: 8vw;
  z-index: 9;
  color: #3bb9ff;
  right: 5%;
  top: 2%;
}
.home {
  font-size: 2vw;
}
.home:hover {
  font-size: 2.5vw;
  color: #848482;
}
.shuben {
  font-size: 2.2vw;
  color: #b6b6b4;
  margin-right: 2px;
}
</style>
