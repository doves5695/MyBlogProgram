<template>
  <div class="aiBox">
    <div class="wrapper">
      <div class="goBack" @click="$router.back()">
        <i class="iconfont fanhui"></i>
      </div>
      <div class="contentTop">
        <form>
          <input type="text" placeholder="请输入搜索内容" style="border-width: 0">
        </form>
        <div class="gotoSearch">
          <i class="iconfont paper-full"></i>
        </div>
      </div>
      <div class="contentBottom">
        <div class="displayContent"></div>
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from '../../components/Navigation/Navigation.vue'

export default {
  components: {Nav},
  methods: {
    goTO (path) {
      this.$router.replace(path)
    }
  }

}
</script>

<style>
@import "../../common/css/index.css";
.aiBox {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url("../../pages/Search/images/R.jpg");
  background-position: 50%;
  background-size: 100vw;
}

.wrapper {
  position: relative;
  display: flex;
  width: 80vw;
  height: 45vw;
  border: 5px solid #842dce;
  margin: 1vw 0;
  justify-content: center;
  border-radius: 10px;
}
.wrapper .goBack {
  position: absolute;
  display: flex;
  width: 4vw;
  height: 4vw;
  right: 1vw;
  top: 0.5%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.goBack .fanhui {
  color: black;
  font-size: 2.5vw;
  font-weight: bolder;
}
.goBack .fanhui:hover {
  font-size: 2.7vw;
}

.contentTop {
  position: relative;
  display: flex;
  width: 80%;
  height: 8%;
  justify-content: center;
}
.contentTop form {
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.contentTop form input {
  width: 80%;
  height: 80%;
  padding-left: 1vw;
  background-color: #6a287e;
  color: #fff;
  font-size: 1.5vw;
  font-weight: bolder;
  font-family: '阿里妈妈东方大楷 Regular';
  border-radius: 10px;
  opacity: .9;
}
.contentTop .gotoSearch {
  position: absolute;
  display: flex;
  width: 5%;
  height: 100%;
  justify-content: center;
  align-items: center;
  right: 12%;
  cursor: pointer;
}
.contentTop .gotoSearch .paper-full {
  font-size: 2vw;
  font-weight: bolder;
  color: #b048b5;
}

.contentBottom {
  position: absolute;
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  bottom: 2%;
}
.contentBottom .displayContent {
  width: 90%;
  height: 90%;
  background-color: #6a287e;
  border-radius: 20px;
  color: #fff;
  font-size: 1vw;
  font-weight: bolder;
  font-family: '阿里妈妈东方大楷 Regular';
  opacity: .9;
}
</style>
