<template>
  <div class="article">
    <div class="articleContent">
      <div class="articleContentWrap">
        <div class="articleContentLeft">
          <img src="./images/v2-5fb13110e1de13d4c11e6e7f5b8026da_r.jpg" alt="">
        </div>
        <div class="articleContentRight">
          <slot name="articleH2"></slot>
          <span>吧啦吧啦吧啦吧啦吧啦吧啦吧啦啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style>
.article {
  display: flex;
  width: 50vw;
  height: 70vw;
  background-color: #fff;
  opacity: .8;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
}
.articleContent {
  width: 92%;
  height: 95%;
  border: 3px solid #c0c0c0;
}
.articleContentWrap {
  position: relative;
  width: 100%;
  height: 15%;
  margin: 0 0 2vw 0;
  border-bottom: 2px solid #c0c0c0;
}
.articleContentLeft {
  display: flex;
  width: 20%;
  height: 100%;
  margin: 0 2vw;
  justify-content: center;
  align-items: center;
}
.articleContentLeft img {
  width: 80%;
  height: 80%;

}
.articleContentRight {
  position: absolute;
  width: 20vw;
  height: 100%;
  right: 10vw;
  top: 0;
  margin: 0 2vw;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.articleContentRight h2 {
  position: absolute;
  top: 10%;
}
.articleContentRight span {
  position: absolute;
  left: 18%;
  top: 30%;
  margin: 1.5vw 0;
}
</style>
