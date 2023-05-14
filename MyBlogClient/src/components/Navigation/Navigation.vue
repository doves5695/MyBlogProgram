<template>
  <div class="navWrap">
    <div class="navControl" @click="isShow = !isShow">
      <i class="iconfont fengche"></i>
    </div>
    <ul class="navContent" v-show="isShow">
      <li class="myhtml" @click="goTO('/html')">html</li>
      <li class="mycss" @click="goTO('/css')">css</li>
      <li class="myjs" @click="goTO('/js')">JavaScript</li>
      <li class="myvue" @click="goTO('/vue')">Vue</li>
      <li class="myinternet" @click="goTO('/internet')">Internet</li>
      <li class="myhelp" @click="goTO('/help')">Help</li>
    </ul>
    <div class="music" v-show="isShow">
      <audio src="../../../static/music/backgroundMusic.mp3" autoplay="" loop="" preload="auto" controls="controls"></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    goTO (path) {
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
.navWrap {
  position: relative;
  width: 100%;
  height: 5vh;
  background-color: #e5e4e2;
}
.navWrap .navControl {
  position: absolute;
  display: flex;
  width: 5%;
  height: 5vh;
  justify-content: center;
  align-items: center;
  left: 3%;
  cursor: pointer;
  z-index: 99;
}
.navWrap .navControl .fengche {
  font-size: 1.8vw;
  font-weight: bolder;
  animation: rotate 10s linear infinite;
  -webkit-animation: rotate 10s linear infinite;
  color: #c45aec;
}
@keyframes rotate {
  0% { transform: rotate(0);}
  25% {transform: rotate(90deg);}
  50% {transform: rotate(180deg);}
  75% {transform: rotate(270deg);}
  100% {transform: rotate(360deg);}
}
@-webkit-keyframes rotate  {
  0% { transform: rotate(0);}
  25% {transform: rotate(90deg);}
  50% {transform: rotate(180deg);}
  75% {transform: rotate(270deg);}
  100% {transform: rotate(360deg);}
}
.navWrap .navControl .fengche:hover {
  font-size: 2vw;
  font-weight: bolder;
  color: #c0c0c0;
}
.navWrap .navContent {
  position: absolute;
  display: flex;
  width: 50vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  left: 10%;
  z-index: 99;
}
.navWrap .navContent li {
  width: 15%;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
  border: 1px solid #fff;
  border-radius: 25px;
  margin:  1.2vh 2vw 0;
  font-size: 1vw;
  font-weight: bolder;
  font-family: '阿里妈妈东方大楷 Regular';
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  cursor: pointer;
  background-color: #fff;
}
.navWrap .navContent li:hover {
  overflow: visible;
}
.music {
  position: absolute;
  display: flex;
  right: 25%;
  width: 15%;
  height: 5vh;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
audio {
  height: 5vh;
  margin: 1.2vh 2vw 0;
}
</style>
