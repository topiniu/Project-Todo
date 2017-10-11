<template>
  <transition name="fade">
    <div :style="{width: width + 'px'}" :class="[isTop?'header-top':'','input-item-container']" v-if="showInputBox">
      <span class="input-box" :style="{width: width + 'px'}">
        <input class="input-item" :style="{width: width + 'px', height: height + 'px'}" v-model="value" :value="value" @input="onInput" />
      </span>
    </div>
  </transition>
</template>

<script>
module.exports = {
  props: {
    width: {
      type: Number,
      default: 304,
    },
    height: {
      type: Number,
      default: 34,
    },
    isTop: {
      type: Boolean,
      default: true,
    },
    showInputBox: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      value: '',
    }
  },
  computed: {
    // getInputHeight: function(){
    //   return 
    // }
  },
  methods: {
    onInput(e) {
      this.$emit('onInput', { value: this.value });
    }
  },
  mounted() {

  }
}

</script>

<style scoped>
.input-item-container {
  transition: all .3s;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  /* height: 100%; */
  opacity: 1;
  display: block;
  bottom: 5px;
}

.header-top {
  top: 5px;
  bottom: auto;
}

.input-item-container .input-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-color: blue; */
  /* border: 1px solid red; */
}

.input-item-container .input-item {
  display: block;
  width: 80%;
  height: 30px;
  border-radius: 10px;
  /* margin-top: 10px; */
  border: 1px solid gray;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s
}

.fade-enter,
.fade-leave-to {
  /* transform: scale(0); */
  opacity: 0
}
</style>