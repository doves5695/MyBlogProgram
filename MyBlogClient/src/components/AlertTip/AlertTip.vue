<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AlertTip',
  props: {
    alertText: String
  },
  methods: {
    closeTip () {
      // 分发自定义事件
      this.$emit('closeTip')
    }
  }
}
</script>
<style>
.alert_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgba(0, 0, 0, .5);
}
.tip_text_container {
  position: absolute;
  top: 35%;
  left: 25%;
  margin-top: 3vw;
  margin-left: 15vw;
  width: 20%;
  animation: tipMove .4s;
  background-color: rgba(255, 255, 255, 1);
  border: 1px;
  padding-top: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px
}
.tip_icon {
  width: 2vw;
  height: 2vw;
  border: 2px solid #FFFF00;
  border-radius: 50px;
  font-size: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tip_icon span:nth-of-type(1) {
  width: 2.5px;
  height: 2vw;
  background-color: #FFFF00;
  margin-top: 2px;
}
.tip_icon span:nth-of-type(2) {
  width: 3px;
  height: 0.5vw;
  border: 1px;
  border-radius: 50px;
  margin-top: 2px;
  background-color: #FFFF00;
}
.tip_text {
  font-size: 1vw;
  font-weight: bolder;
  color: #F62217;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
  padding: 0 5px;
}
.confrim {
  font-size: 1.5vw;
  font-weight: bold;
  margin-top: 1vw;
  background-color: #82CAFF;
  width: 100%;
  text-align: center;
  line-height: 35px;
  border: 1px;
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}
</style>
