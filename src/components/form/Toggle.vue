<template>
  <div class="c-toggle" :class="classes">
    <input
      :id="id"
      v-model="inputValue"
      v-bind="$attrs"
      v-on="nativeListeners"
      type="checkbox"
      :disabled="disabled">
    <div class="slider round snz-txt-overline" />
    <label :for="id" class="snz-txt-body-2">
      <slot />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';
import { genId } from '../../utils/random';

export default {
  name: 'c-toggle',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: genId,
    },
  },
  setup(props, { emit, listeners }) {
    const { change, ...nativeListeners } = listeners;
    const inputValue = computed({
      get: () => props.checked,
      set: value => emit('change', value),
    });
    return {
      inputValue,
      nativeListeners,
      classes: computed(() => ({
        'c-toggle--checked': props.checked,
        'c-toggle--disabled': props.disabled,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
$onColor: rgba(0, 0, 0, 0.7);
$offColor: rgba(0, 0, 0, 0.2);

.c-toggle {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 20px;
  pointer-events: none;

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    pointer-events: all;
    margin: 0;
  }

  input:checked + .slider {
    background-color: $onColor;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:checked + .slider:after {
    content: 'on';
    text-transform: uppercase;
    left: 8px;
  }

  .slider.round {
    border-radius: 20px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color: $offColor;
    transition: 0.4s;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 3px;
      background-color: #fff;
      transition: 0.2s;
      pointer-events: none;
    }
    &::after {
      content: 'off';
      text-transform: uppercase;
      position: absolute;
      right: 8px;
      bottom: 4px;
      transition: 0.2s;
      pointer-events: none;
      color: #fff;
    }
  }
}
</style>
