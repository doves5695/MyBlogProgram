<template>
  <div class="header">
      <div class="left" @click="goTO('/home')">
        <div class="leftContent">
          <div class="navButton">
            <i class="iconfont fenlei"></i>
          </div>
          <div class="navIcon">
            <i class="iconfont navicon-wzgl"></i>
            <span>MyBlog</span>
          </div>
        </div>
      </div>
      <div class="mid">
        <form class="search">
          <div class="searchLeft">
            <i class="iconfont sousuo"></i>
            <input type="search" class="searchContent" placeholder="请输入要搜索的内容" style="outline: none; border-width: 0" >
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
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #fff;
  align-items: center;
  border-bottom: 2px solid #b6b6b4;
}

/*左侧样式*/
.left {
  display: flex;
  position: absolute;
  width: 15%;
  height: 50px;
  left: 10px;
  align-items: center;
  cursor: pointer;
}
.left .leftContent {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left .navButton {
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
}
.left .navButton .fenlei {
  font-size: 24px;
}
.left .navButton .fenlei:hover {
  transform:rotate(45deg);
}
.left .navIcon {
  display: flex;
  width: 140px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.left .navIcon .navicon-wzgl {
  font-size: 32px;
  color: blue;
  margin-right: 5px;
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
  left: 350px;
}
.mid .search {
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
  width: 90%;
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
   width: 15%;
   height: 40px;
   border: 2px solid #e5e4e2;
   border-radius: 0 30px 30px 0;
 }
.mid .search .searchRight .searchIcon {
  width: 90px;
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
  width: 100px;
  height: 40px;
  cursor: pointer;
}
.right .rightContent .icon-person {
  font-size: 32px;
  line-height: 40px;
  color: #c0c0c0;
}

</style>
