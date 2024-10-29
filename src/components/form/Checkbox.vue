<template>
  <span class="c-checkbox" :class="classes" @click.stop="input.click()">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      ref="input"
      type="checkbox"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="inputValue" />
    <check-icon v-if="isChecked" class="c-checkbox_check" />
    <label :for="id" :class="labelClass">
      <slot />
    </label>
  </span>
</template>

<script>
import { computed, ref } from 'vue';
import { genId } from '../../utils/random';
import CheckIcon from '../../assets/icons/check.svg';

export default {
  name: 'c-checkbox',
  components: { CheckIcon },
  model: {
    prop: 'selection',
    event: 'selectionChange',
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: genId,
    },
    selection: {
      type: [Array, Boolean],
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    labelClass: {
      type: String,
      default: 'snz-txt-body-2',
    },
  },
  setup(props, { emit }) {
    const input = ref(null);
    const isBooleanModel = ref(!Array.isArray(props.selection));
    const isChecked = computed(() => (isBooleanModel.value ? !!props.selection : props.selection.includes(props.value)));
    const inputValue = computed({
      get: () => isChecked.value,
      set: value => {
        if (isBooleanModel.value) {
          emit('selectionChange', value);
        } else if (isChecked.value) {
          emit('selectionChange', props.selection.filter(v => v !== props.value));
        } else {
          emit('selectionChange', [...props.selection, props.value]);
        }
      },
    });
    return {
      inputValue,
      input,
      isBooleanModel,
      isChecked,
      classes: computed(() => ({
        'c-checkbox--checked': isChecked.value,
        'c-checkbox--disabled': props.disabled,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
$checkedColor: rgba(0, 0, 0, 0.8);
$color: rgba(0, 0, 0, 0.6);

.c-checkbox {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
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
    border-radius: 2px;
    background-color: transparent;
    transition: background-color .2s ease;
  }

  label {
    padding-left: 36px;
    display: inline-block;
    color: $color;
    pointer-events: none;
  }
  &_check {
    position: absolute;
    top: 0;
    left: 0;
    color: #FFF;
  }
  &--checked {
    &:before {
      border: none;
      background-color: $checkedColor;
    }
    label {
      color: $checkedColor;
    }
  }
}
//$black: rgba(0, 0, 0, 0.8);
//
//.c-checkbox {
//  display: flex;
//  flex-direction: row;
//  align-items: center;
//
//  input[type='checkbox'] {
//    position: relative;
//    min-width: 20px;
//    min-height: 20px;
//    text-align: center;
//    border: 1.5px solid $black;
//    border-radius: 4px;
//    appearance: none;
//    margin: 0;
//    outline: 0;
//    cursor: pointer;
//    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
//    &::before {
//      position: absolute;
//      content: '';
//      display: block;
//      left: 50%;
//      margin-left: -3px;
//      width: 6px;
//      height: 12px;
//      border-style: solid;
//      border-width: 0 2px 2px 0;
//      transform: rotate(45deg);
//      opacity: 0;
//    }
//    &:checked {
//      color: white;
//      border-color: $black;
//      background: $black;
//      &::before {
//        opacity: 1;
//      }
//    }
//  }
//
//  label {
//    position: relative;
//    cursor: pointer;
//    padding-left: 10px;
//    user-select: none;
//
//    &::before {
//      position: absolute;
//      content: attr(data-content);
//      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
//      text-decoration: line-through;
//      text-decoration-thickness: 3px;
//      text-decoration-color: $black;
//      transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
//    }
//  }
//}
</style>
