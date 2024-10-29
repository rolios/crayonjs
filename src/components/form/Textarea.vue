<template>
  <div class="c-textarea">
    <textarea
      v-model="inputValue"
      v-bind="$attrs"
      v-on="nativeListeners"
      :class="classes"
      :disabled="disabled"
      :placeholder="placeholder"
    />

  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'c-textarea',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {},
    placeholder: { type: String },
    disabled: { type: Boolean },
  },
  setup(props, { emit, listeners }) {
    const classes = computed(() => ({
      'snz-textarea--disabled': props.disabled,
    }));
    const inputValue = computed({
      get: () => props.value,
      set: value => emit('change', value),
    });
    const { change, ...nativeListeners } = listeners;
    return { nativeListeners, inputValue, classes };
  },
};
</script>

<style lang="scss" scoped>
.c-textarea {
  border-radius: 4px;
  position: relative;
  display: inline;

  textarea {
    background: #f2f2f2;
    border: none;
    min-height: 70px;
    min-width: 250px;
    width: 100%;
    height: 100%;
  }

  &_check-icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  &--disabled {
    cursor: not-allowed;
  }
}
</style>
