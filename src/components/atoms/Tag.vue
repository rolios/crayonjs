<template>
  <div class="c-tag" :class="classes">
    <span v-if="$slots.prepend" class="c-tag_prepend">
      <slot name="prepend"/>
    </span>
    <slot />
    <span v-if="$slots.append" class="c-tag_append">
      <slot name="append"/>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue';
import { variants } from './options/Tag.options';

export default {
  name: 'c-tag',
  components: {},
  props: {
    variant: {
      type: String,
      validator(value) {
        return variants.includes(value);
      },
      default: 'primary',
    },
    rounded: { type: Boolean, default: true },
  },
  setup(props) {
    const classes = computed(() => ({
      [`c-tag--${props.variant}`]: true,
      'c-tag--rounded': props.rounded,
    }));
    return { classes };
  },
};
</script>

<style lang="scss" scoped>
.c-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  padding: 7px 12px;
  min-height: 28px;
  border-radius: 4px;
  box-sizing: border-box;

  span {
    display: flex;
  }

  &_prepend {
    padding-right: 10px;
  }
  &_append {
    padding-left: 10px;
  }

  &--primary {
    background-color: #f2f2f2;
  }
  &--outlined {
    border: 1px solid #c4c4c4;
  }
  &--rounded {
    border-radius: 15px;
  }
}
</style>
