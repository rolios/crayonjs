<template>
  <div class="c-card" :class="classes">
    <template v-if="$slots.header">
      <div class="c-card_header">
        <slot name="header"></slot>
      </div>
    </template>
    <div class="c-card_content snz-scrollable" >
      <slot></slot>
    </div >
    <template v-if="$slots.footer">
      <div class="c-card_footer">
        <slot name="footer"></slot>
      </div>
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'c-card',
  props: {
    width: { type: String, default: 'auto' },
    elevation: { type: Number, default: 2 },
  },
  setup(props) {
    const classes = computed(() => ({
      [`c-card--elevation-${props.elevation}`]: true,
    }));
    return { classes };
  },
};
</script>

<style lang="scss" scoped>
.c-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  width: v-bind('width');
  overflow: hidden;
  max-height: 100%;
  &--elevation {
    &-0 {
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }
    &-1 {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }
    &-2 {
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
    }
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  &_header {
  }
  &_content {
    min-height: 120px;
    min-width: 120px;
  }
  &_footer {
  }
}
</style>
