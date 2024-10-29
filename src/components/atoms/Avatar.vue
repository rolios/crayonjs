<template>
  <div class="c-avatar" :class="classes">
    <img v-if="src" :src="src" class="c-avatar_img" />
    <span v-else-if="label" class="c-avatar_label">{{ label }}</span>
  </div>
</template>

<script>
import { computed } from 'vue';
import { sizes } from './options/Avatar.options';

export default {
  name: 'c-avatar',
  components: {},
  props: {
    src: { type: String },
    label: { type: String },
    rounded: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return sizes.includes(value);
      },
    },
  },
  setup(props) {
    const classes = computed(() => ({
      'c-avatar--rounded': props.rounded,
      [`c-avatar--${props.size}`]: true,
      'c-avatar--image': props.src,
      'c-avatar--light': props.light,
    }));
    return { classes };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.c-avatar {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  box-sizing: border-box;
  overflow: hidden;
  &_img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &--light {
    background: var(--snz-bg-low);
    color: var(--snz-font-high);
  }
  &--medium {
    padding: 6px 8px;
    width: 40px;
    height: 40px;
  }
  &--small {
    padding: 6px 8px;
    width: 24px;
    height: 24px;
    .c-avatar_label {
      font-size: 12px !important;
    }
  }
  &--image {
    padding: 0;
  }
  &--rounded {
    border-radius: 999px;
  }
}
</style>
