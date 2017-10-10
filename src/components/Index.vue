<template>
  <div class="wrapper j_wrapper">
    <t-input :showInputBox="showInputBox" :isTop="false">

    </t-input>
    <div class="body-box">

    </div>
    <div class="footer-box">

    </div>
    <div class="extra-box">
      <div class="gray-cover"></div>
    </div>
  </div>
</template>

<script>
import Input from '../items/InputItem';
export default {
  components: {
    't-input': Input,
  },
  data() {
    return {
      inputText: '',
      showInputBox: true,

    }
  },
  created() {
    var self = this;
    var lastScroll = 0;
    // var wrapper = document.getElementsByClassName('j_wrapper')[0];
    // console.log('ss' + document.getElementsByClassName('j_wrapper')[1]);

    window.onscroll = function() {
      var flag = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
      if (flag - lastScroll > 0 && flag > 0) {
        //down, flag > 0位了防止ios的橡皮筋效果造成输入框隐藏
        self.showInputBox = false;
      } else {
        //up
        self.showInputBox = true;
      }
      lastScroll = flag;
    }
  },
  mounted() {
    var self = this;
    if (document.documentElement.offsetHeight >= document.documentElement.clientHeight) {
      self.showInputBox = true;
    } else {
      self.showInputBox = false;
    }
  }
}
</script>

<style scoped>
.wrapper {
  /* background-color: gray; */
  height: 6000px;
}

.extra-box {
  display: block;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 0;
}

.gray-cover {
  display: block;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  background-color: gray;
  opacity: 0.3;
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>