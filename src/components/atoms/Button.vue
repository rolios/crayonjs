<template>
  <button :disabled="disabled || loading" class="c-button snz-txt-btn" :class="classes" v-on="$listeners" v-bind="$attrs">
    <c-spinner v-if="loading" class="c-button_spinner" loading :color="spinnerColor" />
    <div class="c-button_content" >
      <span v-if="$slots.prepend" class="c-button_prepend">
        <slot name="prepend"/>
      </span>
      <slot />
      <span v-if="$slots.append" class="c-button_append">
        <slot name="append"/>
      </span>
    </div>
  </button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import CSpinner from './Spinner.vue';
import { variants, sizes } from './options/Button.options';

export default defineComponent({
  name: 'c-button',
  components: { CSpinner },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      validator(value) {
        return variants.includes(value);
      },
      default: 'primary',
    },
    size: {
      type: String,
      validator(value) {
        return sizes.includes(value);
      },
      default: 'large',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  setup(props, context) {
    const classes = computed(() => ({
      [`c-button--${props.variant}`]: true,
      [`c-button--${props.size}`]: true,
      'c-button--no-text': !context.slots.default,
      'c-button--disabled': props.disabled,
      'c-button--loading': props.loading,
    }));
    const spinnerColor = computed(() => {
      switch (props.variant) {
        case 'primary':
          return '#FFFFFF';
        case 'outlined':
        case 'text':
          return '#000000';
        default:
          return '#555555';
      }
    });
    return {
      classes,
      spinnerColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.c-button {
  position: relative;
  cursor: pointer;
  width: max-content;
  border: none;
  border-radius: 4px;
  transition: background 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &_spinner {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
  }

  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  svg, img {
    width: 24px;
    height: 24px;
  }

  &_prepend {
    margin-right: 8px;
    display: flex;
  }

  &_append {
    margin-left: 8px;
    display: flex;
  }

  &--loading {
    .c-button_content {
      opacity: 0;
    }
  }

  &--no-text {
    .c-button_prepend {
      margin-right: 0;
    }

    .c-button_append {
      margin-left: 0;
    }
  }

  /* Sizes */
  &--large {
    padding: .5rem 1rem;
  }

  &--medium {
    padding: 0px 12px;

    .c-button_prepend > svg {
      width: 20px;
      height: 20px;
    }
  }

  /* Variants */
  &--primary {
    background: rgba(0, 0, 0, 0.8);
    color: white;

    &.c-button--disabled {
      background: rgba(0, 0, 0, 0.3) !important;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }

    &:active {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  &--outlined {
    color: #343434;
    border: 1px solid #343434 !important;

    &.c-button--disabled {
      color: #b3b3b3;
      border: 1px solid #b3b3b3 !important;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &--text {
    background: none;
    color: #343434;

    &.c-button--disabled {
      color: #b3b3b3;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &--disabled {
    cursor: not-allowed;
  }
}
</style>
