<template>
  <div class="header">
    <div class="navButton">导航按钮</div>
    <div class="headerLeft">图标</div>
    <div class="headerMid">搜索</div>
    <div class="headerRight">头像</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  line-height: 60px;
}
.header div {
  float: left;
}
</style>
