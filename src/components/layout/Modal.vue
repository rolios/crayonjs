<template>
  <div class="c-modal" :style="`visibility: ${visible ? 'visible' : 'hidden'}`">
    <Transition appear>
      <div class="c-modal_overlay" v-if="show" @click="$emit('setShown', false)"></div>
    </Transition>
    <Transition appear>
      <div class="c-modal_content" v-if="show">
        <slot></slot>
      </div >
    </Transition>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'c-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'show',
    event: 'setShown',
  },
  setup(props) {
    const visible = ref(false);
    watch(() => props.show, isShown => {
      setTimeout(() => { visible.value = isShown; }, isShown ? 0 : 600);
    });
    return {
      visible,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  &_overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--snz-bg-low);
    &.v-enter-active,
    &.v-leave-active {
      transition: opacity 0.5s ease;
    }

    &.v-enter,
    &.v-leave-to {
      opacity: 0;
    }
  }
  &_content {
    max-height: 96%;
    max-width: 96%;
    z-index: 101;
    &.v-enter-active,
    &.v-leave-active {
      transition: transform 0.5s ease, opacity 0.4s ease;
    }

    &.v-enter,
    &.v-leave-to {
      transform: translateY(50px);
      opacity: 0;
    }
  }
}
</style>
