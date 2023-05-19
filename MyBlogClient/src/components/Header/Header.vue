<template>
  <div class="header">
    <div class="headerContent">
      <div class="left">
        <div class="leftContent">
          <div class="navButton" @click="goTO('/home')">
            <slot name="goWhere"></slot>
          </div>
          <div class="navIcon">
            <slot name="icon"></slot>
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
      <div class="mid">
        <form class="search">
          <div class="searchLeft">
            <i class="iconfont sousuo"></i>
            <input type="search" class="searchContent" placeholder="搜索" style="outline: none; border-width: 0" >
          </div>
          <div class="searchRight">
            <input type="submit" class="searchIcon" style="outline: none; border-width: 0" value="搜索">
          </div>
        </form>
      </div>
      <div class="right">
        <div class="rightContent" @click="goTO('/profile')">
          <i class="iconfont icon-person-renwu" title="个人信息"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Nav from '../Navigation/Navigation.vue'

export default {
  name: 'Header',
  components: {Nav},
  methods: {
    goTO (path) {
      this.$router.replace(path)
    }
  },
  props: {
    title: String
  }
}
</script>

<style>
@import "../../common/css/index.css";
/*头部背景样式*/
.header {
  display: flex;
  width: 100%;
  height: 7vh;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b6b6b4;
}
.headerContent {
  position: relative;
  width: 1500px;
  height: 7vh;
  margin: 0 auto;
}

/*左侧样式*/
.left {
  display: flex;
  position: absolute;
  width: 15%;
  height: 7vh;
  align-items: center;
  cursor: pointer;
  left: 3%;
}
.left .leftContent {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left .navButton {
  display: flex;
  width: 20%;
  height: 5vh;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
}
.left .navIcon {
  display: flex;
  width: 80%;
  height: 5vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.left .navIcon span {
  font-weight: bolder;
  font-size: 2vw;
  font-family: "阿里妈妈东方大楷 Regular";
}
.left .navIcon span:hover {
  font-weight: bolder;
  font-size: 2.2vw;
  font-family: "阿里妈妈东方大楷 Regular";
}

/*中间样式*/
.mid {
  display: flex;
  position: absolute;
  width: 50%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  left: 25%;
  margin: 0 20px;
}
.mid .search {
  position: relative;
  display: flex;
  width: 600px;
  height: 5vh;
  align-items: center;
}
.mid .search .searchLeft {
  position: relative;
  width: 85%;
  height: 5vh;
  border: 2px solid #e5e4e2;
  border-right: 0;
  border-radius: 30px 0 0 30px;
}
.mid .search .searchContent {
  position: absolute;
  width: 50%;
  height: 5vh;
  left: 40px;
}
.mid .search .sousuo {
  position: absolute;
  font-size: 1.8vw;
  font-weight: bolder;
  left: 0.75vw;
  line-height: 5.5vh;
}
.mid .search .searchRight {
   display: flex;
   position: absolute;
   width: 15%;
   height: 5vh;
   border: 2px solid #e5e4e2;
   border-radius: 0 30px 30px 0;
   right: 0;
 }
.mid .search .searchRight .searchIcon {
  width: 100%;
  height: 5vh;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  font-size: 1.8vw;
  font-weight: bolder;
  line-height: 5vh;
  font-family: "阿里妈妈数黑体 Bold";
}

/*右侧样式*/
.right {
  position: absolute;
  display: flex;
  width: 10%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  right: 20px;
}
.right .rightContent {
  display: flex;
  width: 80%;
  height: 5vh;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}
.right .rightContent .icon-person-renwu {
  font-size: 2vw;
  line-height: 5vh;
  color: #0c090a;
}
.right .rightContent .icon-person-renwu:hover {
  font-size: 2.5vw;
  color: #e41b17;
}

</style>
