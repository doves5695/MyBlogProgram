<template>
  <div class="header">
    <div class="headerContent">
      <div class="left">
        <div class="leftContent">
          <div class="navButton">
            <i class="iconfont fenlei"></i>
          </div>
          <div class="navIcon" @click="goTO('/home')">
            <i class="iconfont navicon-wzgl"></i>
            <span>MyBlog</span>
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
          <i class="iconfont icon-person"></i>
          <img src="" alt="" style="display: none">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goTO (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
/*头部背景样式*/
.header {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b6b6b4;
}
.headerContent {
  position: relative;
  width: 1500px;
  height: 50px;
  margin: 0 auto;
}

/*左侧样式*/
.left {
  display: flex;
  position: absolute;
  width: 15%;
  height: 50px;
  align-items: center;
  cursor: pointer;
}
.left .leftContent {
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left .navButton {
  display: flex;
  width: 20%;
  height: 40px;
  justify-content: center;
  align-items: center;
}
.left .navButton .fenlei {
  font-size: 18px;
}
.left .navButton .fenlei:hover {
  transform:rotate(45deg);
}
.left .navIcon {
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.left .navIcon .navicon-wzgl {
  font-size: 28px;
  color: blue;
  margin-right: 2px;
  text-shadow:3px 3px 3px pink
}
.left .navIcon span {
  font-weight: bolder;
  font-size: 24px;
}

/*中间样式*/
.mid {
  display: flex;
  position: absolute;
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  left: 30%;
  margin: 0 20px;
}
.mid .search {
  position: relative;
  display: flex;
  width: 600px;
  height: 40px;
  align-items: center;
}
.mid .search .searchLeft {
  position: relative;
  width: 85%;
  height: 40px;
  border: 2px solid #e5e4e2;
  border-right: 0;
  border-radius: 30px 0 0 30px;
}
.mid .search .searchContent {
  position: absolute;
  width: 50%;
  height: 40px;
  left: 40px;
}
.mid .search .sousuo {
  position: absolute;
  font-size: 24px;
  left: 8px;
  top: 8px;
  font-weight: bolder;
}
.mid .search .searchRight {
   position: absolute;
   width: 15%;
   height: 40px;
   border: 2px solid #e5e4e2;
   border-radius: 0 30px 30px 0;
   right: 0;
 }
.mid .search .searchRight .searchIcon {
  width: 100%;
  height: 40px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
}

/*右侧样式*/
.right {
  position: absolute;
  display: flex;
  width: 10%;
  height: 50px;
  justify-content: center;
  align-items: center;
  right: 20px;
}
.right .rightContent {
  width: 80%;
  height: 40px;
  cursor: pointer;
}
.right .rightContent .icon-person {
  font-size: 32px;
  line-height: 40px;
  color: #c0c0c0;
}

</style>
