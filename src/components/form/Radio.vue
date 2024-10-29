<template>
  <span class="c-radio" :class="classes" @click="input.click()">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      ref="input"
      type="radio"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="inputValue" />
    <label :for="id" class="snz-txt-body-2" >
      <slot />
    </label>
  </span>
</template>

<script>
import { computed, ref } from 'vue';
import { genId } from '../../utils/random';

export default {
  name: 'c-radio',
  model: {
    prop: 'selected',
    event: 'selectedChange',
  },
  props: {
    selected: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: genId,
    },
  },
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.selected,
      set: value => emit('selectedChange', value),
    });
    const input = ref(null);
    const isSelected = computed(() => props.selected === props.value);
    return {
      input,
      inputValue,
      isSelected,
      classes: computed(() => ({
        'c-radio--checked': isSelected.value,
        'c-radio--disabled': props.disabled,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
$checkedColor: rgba(0, 0, 0, 0.8);
$color: rgba(0, 0, 0, 0.6);

.c-radio {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  height: 24px;
  padding: 2px;
  input {
    position: absolute;
    left: -9999px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    border: 1px solid $color;
    border-radius: 100%;
    background: #fff;
  }
  &:after {
    content: '';
    width: 10px;
    height: 10px;
    background: black;
    position: absolute;
    top: 7px;
    left: 7px;
    border-radius: 100%;
    transition: all 0.2s ease;
    opacity: 0;
    transform: scale(0);
  }

  label {
    padding-left: 36px;
    display: inline-block;
    color: $color;
    pointer-events: none;
  }

  &--checked {
    &:before {
      border-color: $checkedColor;
    }
    &:after {
      opacity: 1;
      transform: scale(1);
    }
    label {
      color: $checkedColor;
    }
  }
}
</style>
