<template>
  <span class="c-filter" :class="classes" @click="open" ref="component">
    <div v-if="opened" class="c-filter_overlay" @click.stop="opened = false"></div>
    <div v-if="$slots.prepend" style="padding-right: 4px" class="flex">
      <slot name="prepend" />
    </div>
    <span class="snz-txt-body-2 mx1">
      <slot />
    </span>
    <menu-down-icon class="c-filter_chevron" />
    <Transition appear>
      <div v-if="opened" class="c-filter_selector" :style="selectorPosition">
        <slot name="selector" :close="() => opened = false"/>
      </div>
    </Transition>
  </span>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import MenuDownIcon from '../../assets/icons/menu-down.svg';

export default {
  name: 'c-filter',
  components: { MenuDownIcon },
  setup() {
    const component = ref(null);
    const opened = ref(false);
    const selectorPosition = reactive({
      top: '0px',
      left: '0px',
    });
    const open = () => {
      const componentRect = component.value.getBoundingClientRect();
      selectorPosition.top = `${componentRect.bottom}px`;
      selectorPosition.left = `${componentRect.left}px`;
      opened.value = true;
    };
    return {
      component,
      open,
      opened,
      selectorPosition,
      classes: computed(() => ({
        'c-filter--opened': opened.value,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
.c-filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  &_chevron {
    transition: transform .3s ease;
  }
  &--opened {
    .c-filter_chevron {
      transform: rotate(180deg);
    }
  }
  &_selector {
    position: fixed;
    min-width: 120px;
    min-height: 60px;
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
