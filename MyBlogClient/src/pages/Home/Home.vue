<template>
  <div>
    <Header>我是首页</Header>
    <div class="Content">
      <section class="selector">
        <img class="lax lax_preset_blurInOut:180.5:20 lax_preset_slideY:722:95 lax_preset_slideX:722:95"  src="./images/home.jpg" alt="">
        <div class="text" >
          <h1 class="lax lax_preset_scaleInOut:158:0.5 lax_preset_fadeInOut:159:0">Welcome To My Blog</h1>
        </div>
        <div class="shape lax lax_preset_jiggle:150:31 lax_preset_spin:722:360"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_blurInOut:180.5:20 lax_preset_slideY:722:95 lax_preset_slideX:722:95"
             src="./images/html.jpg" alt="" @click="To('/html')">
        <div class="text" >
          <h1 class="lax lax_preset_scaleInOut:158:0.5 lax_preset_fadeInOut:159:0" @click="To('/html')">HyperText Markup Language</h1>
        </div>
        <div class="shape lax lax_preset_jiggle:150:31 lax_preset_spin:722:360"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_fadeInOut:159:0 lax_preset_scaleOut:158:1 lax_preset_zigzag:163:150"
             src="./images/css.jpg" alt="" @click="To('/css')">
        <div class="text">
          <h1 class="lax lax_preset_scaleOut:165.5:0.8 lax_preset_fadeOut:180.8:1" @click="To('/css')">Cascading Style Sheets</h1>
        </div>
        <div class="shape lax lax lax_preset_slideX:180.5:4 lax_preset_spin:350:360 lax_preset_fadeInOut:180.5:0"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200"
             src="./images/js.jpg" alt="" @click="To('/js')">
        <div class="text">
          <h1 class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20" @click="To('/js')">JavaScript</h1>
        </div>
        <div class="shape lax lax_preset_blurInOut:180.5:20 lax_preset_fadeInOut:165:0 lax_preset_seesaw:117:2 lax_preset_spin:1194:360"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200"
             src="./images/Vue.jpg" alt="" @click="To('/vue')">
        <div class="text">
          <h1 class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20" @click="To('/vue')">Reactive Components for Modern Web Interfaces</h1>
        </div>
        <div class="shape lax lax_preset_blurInOut:180.5:20 lax_preset_fadeInOut:165:0 lax_preset_seesaw:117:2 lax_preset_spin:1194:360"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200"
             src="./images/Internet.jpg" alt="" @click="To('/internet')">
        <div class="text">
          <h1 class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20" @click="To('/internet')">Computer NetWork</h1>
        </div>
        <div class="shape lax lax_preset_blurInOut:180.5:20 lax_preset_fadeInOut:165:0 lax_preset_seesaw:117:2 lax_preset_spin:1194:360"></div>
      </section>

      <section class="selector">
        <img class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200"
             src="./images/help.jpg" alt="" @click="To('/help')">
        <div class="text">
          <h1 class="lax lax_preset_blurOur:180.5:20 lax_preset_zigzag:170:200 lax_preset_jiggle:50:20" @click="To('/help')">There must be something that can help you</h1>
        </div>
        <div class="shape lax lax_preset_blurInOut:180.5:20 lax_preset_fadeInOut:165:0 lax_preset_seesaw:117:2 lax_preset_spin:1194:360"></div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
export default {
  components: {
    Header
  },
  methods: {
    To (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
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
img {
  width: 40vw;
  height: 40vh;
  opacity: .6;
}
.text {
  position: absolute;
  font-size: 72px;
  padding: 0 200px;
  color: #fff;
  text-align: center;
}
.shape {
  position: absolute;
  left: 8%;
  top: 10%;
  width: 300px;
  height: 200px;
  background-color: #000;
  opacity: .3;
}
section:nth-child(3) .shape {
  left: inherit;
  right: 5%;
}
</style>
