<template>
  <div class="c-tabs px2">
    <template v-if="$slots.label">
      <span class="c-tabs_label snz-txt-menu">
        <slot name="label"></slot>
      </span>
    </template>
    <span v-for="(title, idx) in tabs" :key="idx" class="c-tabs_tab snz-txt-menu relative" @click="updateTab(idx)">
      {{title}}
      <Transition>
        <span v-if="idx === selected" class="c-tabs_tab_indicator absolute right-0 bottom-0 left-0"></span>
      </Transition>
    </span>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'c-tabs',
  props: {
    selected: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },
  model: {
    prop: 'selected',
    event: 'change',
  },
  setup(props, { emit }) {
    const updateTab = index => {
      nextTick(() => {
        emit('change', index);
      });
    };
    return { updateTab };
  },
};
</script>

<style lang="scss" scoped>
.c-tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  &_label, &_tab {
    display: flex;
    align-items: center;
  }
  &_tab {
    cursor: pointer;
  }
  &_tab_indicator {
    height: 2px;
    width: 100%;
    background-color: #000000;
    &.v-enter-active,
    &.v-leave-active {
      transition: width 0.3s linear;
    }

    &.v-enter,
    &.v-leave-to {
      width: 0px;
    }
  }
}
</style>
