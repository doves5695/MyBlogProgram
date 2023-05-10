<template>
  <div class="header">
    <div class="left">
      <div class="navButton">
        <i class="iconfont fenlei"></i>
      </div>
      <div class="navIcon">
        <i class="iconfont navicon-wzgl"></i>
        <span>MyBlog</span>
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
<!--    <div class="right">头像</div>-->
  </div>
</template>

<script>
export default {
  name: 'Header'
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
}
/*左侧样式*/
.left {
  display: flex;
  position: absolute;
  width: 20%;
  height: 50px;
  left: 20px;
  align-items: center;
  cursor: pointer;
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
  margin-right: 3px;
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
  left: 300px;
}
.mid .search {
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
}
.mid .search .searchLeft {
  position: relative;
  width: 500px;
  height: 40px;
  border: 2px solid #e5e4e2;
  border-right: 0;
  border-radius: 30px 0 0 30px;
}
.mid .search .searchContent {
  position: absolute;
  width: 80%;
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
   width: 100px;
   height: 40px;
   border: 2px solid #e5e4e2;
   border-radius: 0 30px 30px 0;
 }
.mid .search .searchRight .searchIcon {
  width: 100%;
  height: 40px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
}
</style>
