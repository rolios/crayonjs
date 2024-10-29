<template>
  <div class="c-dotmenu" @mouseover="showButton = true" @mouseleave="showButton = false" ref="component">
    <div v-if="isVisible" class="c-dotmenu_overlay" @click.stop="closeMenu()"></div>
    <slot></slot>
    <Transition appear>
      <div v-if="!disabled && !noButton && showButton" class="c-dotmenu_button" @click="openMenu">
        <dots-icon></dots-icon>
      </div >
    </Transition>
    <Transition appear>
      <div v-if="!disabled && isVisible" class="c-dotmenu_menu" :style="menuPosition">
        <slot name="menu" :close="closeMenu"/>
      </div >
    </Transition>
  </div>
</template>

<script>
import {
  computed, reactive, ref, watch,
} from 'vue';
import DotsIcon from '../../assets/icons/dots-vertical.svg';

export default {
  name: 'c-dotmenu',
  components: { DotsIcon },
  model: {
    prop: 'visible',
    event: 'setVisibility',
  },
  props: {
    disabled: { type: Boolean, default: false },
    visible: { type: Boolean, default: false },
    noButton: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const component = ref(null);
    const showMenu = ref(false);
    const showButton = ref(false);
    const menuPosition = reactive({
      top: 'unset',
      left: 'unset',
    });
    const openMenu = () => {
      const componentRect = component.value.getBoundingClientRect();
      menuPosition.top = `${componentRect.top}px`;
      if (componentRect.right > window.innerWidth - 140) {
        menuPosition.left = 'unset';
        menuPosition.right = `${window.innerWidth - componentRect.right - 12}px`;
      } else {
        menuPosition.right = 'unset';
        menuPosition.left = `${componentRect.right - 12}px`;
      }
      showMenu.value = true;
      emit('setVisibility', true);
    };
    const closeMenu = () => {
      showMenu.value = false;
      emit('setVisibility', false);
    };
    watch(() => props.visible, visible => { showMenu.value = visible; });
    const isVisible = computed(() => showMenu.value || props.visible);
    return {
      component, closeMenu, openMenu, isVisible, showButton, menuPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-dotmenu {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  height: 100%;
  &_button {
    position: absolute;
    cursor: pointer;
    right: -12px;
    top: -12px;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: var(--snz-background-white);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    }
    transition: all .3s ease;
    &.v-enter,
    &.v-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
  &_menu {
    position: fixed;
    min-width: 120px;
    min-height: 40px;
    background: #FFF;
    padding: 4px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 201;
    &.v-enter-active, &.v-leave-active {
      transition: all .3s ease;
    }
    &.v-enter,
    &.v-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
  &_overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 200;
    cursor: initial;
  }
}
</style>
