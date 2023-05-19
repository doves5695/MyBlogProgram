<template>
  <div class="aside">
    <div class="asideContent">
      <div class="asideTop">
        <i class="iconfont haoping"></i>
        <span>点赞</span>
      </div>
      <div class="asideMid">
        <i class="iconfont chaping"></i>
        <span>差评</span>
      </div>
      <div class="asideBottom">
        <i class="iconfont shoucangwujiaoxing"></i>
        <span>收藏</span>
      </div>
      <div class="asideChange">
        <i class="iconfont wenbenshuru"></i>
        <span>编辑</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style>
.aside {
  position: fixed;
  width: 10vw;
  height: 30vw;
  background-color: #fff;
  top: 12.5%;
  right: 12vw;
  border-radius: 30px;
}
.asideContent {
  width: 100%;
  height: 80%;
  padding-top: 20%;
}
.asideContent >div {
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  margin: 1.5vw 0;
  cursor: pointer;
}
.asideContent i {
  font-size: 2.5vw;
  font-weight: bolder;
  margin: 0 1vw;
}
.asideContent i:hover {
  font-size: 3.5vw;
}
.asideContent div:nth-child(1) {
  color: #e4287c;
}
.asideContent div:nth-child(2) {
  color: #54c571;
}
.asideContent div:nth-child(3) {
  color: yellow;
}
.asideContent div:nth-child(4) {
  color: #893bff;
}
.asideContent >div span {
  color: black;
  font-size: 1.2vw;
  font-weight: bolder;
  margin: 1vw;
}
.asideContent >div span:hover {
  font-size: 1.5vw;
}
</style>
