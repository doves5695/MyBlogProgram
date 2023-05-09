<template>
  <div class="header">
    <div class="navButton">
        <i class="iconfont fenlei"></i>
    </div>
    <div class="headerLeft">
        <i class="iconfont navicon-wzgl"></i>
        <span>MyBlog</span>
    </div>
<!--    <div class="headerMid">搜索</div>-->
<!--    <div class="headerRight">头像</div>-->
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #fff;
  align-items: center;
}
/*左侧导航样式*/
.navButton {
  display: flex;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.fenlei {
  font-size: 24px;
}

/*图标样式*/
.headerLeft {
  position: absolute;
  left: 60px;
  display: flex;
  width: 140px;
  height: 40px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
}
.navicon-wzgl {
  font-size: 32px;
  color: blue;
  margin-right: 3px;
}
.headerLeft > span{
  font-weight: bolder;
  font-size: 24px;
}
</style>
