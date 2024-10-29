<template>
  <div class="c-input" :class="classes">
    <div v-if="$slots.prepend" style="padding-right: 4px">
      <slot name="prepend" />
    </div>

    <input
      v-model="inputValue"
      v-bind="$attrs"
      v-on="nativeListeners"
      :type="showText ? 'text' : type"
      class="snz-txt-body-2"
    >

    <div v-if="type === 'password'" @click="showText = !showText" class="c-input_append">
      <eye-outline-icon v-if="showText"/>
      <eye-off-outline-icon v-else />
    </div>
    <div v-else-if="$slots.append" style="padding-left: 4px">
      <slot name="append" />
    </div>

  </div>
</template>

<script>
import { computed, ref } from 'vue';
import EyeOutlineIcon from '../../assets/icons/eye-outline.svg';
import EyeOffOutlineIcon from '../../assets/icons/eye-off-outline.svg';

export default {
  name: 'c-input',
  components: { EyeOutlineIcon, EyeOffOutlineIcon },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: 'text',
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  setup(props, { emit, listeners }) {
    const showText = ref(false);
    const { change, ...nativeListeners } = listeners;
    const inputValue = computed({
      get: () => props.value,
      set: value => emit('change', value),
    });
    return {
      nativeListeners,
      showText,
      inputValue,
      classes: computed(() => ({
        [`c-input--${props.variant}`]: true,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
.c-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.05);
  padding: 0 8px;
  border-radius: 4px;
  overflow: hidden;
  &--default {
    background: var(--snz-bg-low);
  }
  &--light {
    background: var(--snz-background-white);
  }
  input {
    border: none;
    background: transparent;
    min-height: 36px;
    flex-grow: 1;
    max-width: 100%;
    &:focus {
      outline: none;
    }
  }
  &_append svg {
    vertical-align: middle;
  }
}
</style>
