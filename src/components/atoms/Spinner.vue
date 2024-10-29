<template>
  <div v-show="loading" class="c-spinner" :style="spinnerStyle">
    <span class="c-spinner_clip" :style="spinnerClipStyle"/>
  </div>
</template>

<script>

export default {
  name: 'c-spinner',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '#888888',
    },
    size: {
      type: String,
      default: '24px',
    },
  },
  computed: {
    spinnerStyle() {
      return {
        height: this.size,
        width: this.size,
      };
    },
    spinnerClipStyle() {
      return {
        height: this.size,
        width: this.size,
        borderColor: `${this.color} ${this.color} transparent`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.c-spinner {
  text-align: center;
  &_clip {
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: transparent;
    animation: v-clipDelay 0.75s 0s infinite ease;
    animation-fill-mode: both;
    display: inline-block;
 }
}

@keyframes v-clipDelay {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
