<template>
  <div class="c-select" :class="classes" @click="open" ref="component">
    <div v-if="opened" class="c-select_overlay" @click.stop="opened = false"></div>
    <div v-if="$slots.prepend" style="padding-right: 4px" class="flex">
      <slot name="prepend" />
    </div>
    <span class="c-select_content snz-txt-body-2">
      <template v-if="!selected">
        {{ placeholder }}
      </template>
      <template v-else-if="slots.selected">
        <slot name="selected" :item="selected"/>
      </template>
      <template v-else>
        {{ selected[itemText] || selected }}
      </template>
    </span>
    <menu-down-icon class="c-select_chevron" />
    <Transition appear>
      <div v-if="opened && items" class="c-select_selector snz-scrollable" :style="selectorPosition">
        <div v-for="(option, idx) in items" :key="idx" @click.stop="select(option)">
          <div class="snz-menu-entry snz-txt-menu p1">
            <template v-if="slots.option"><slot name="option" :item="option"/></template>
            <template v-else>{{ option[itemText] || option }}</template>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import MenuDownIcon from '../../assets/icons/menu-down.svg';

export default {
  name: 'c-select',
  components: { MenuDownIcon },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: null,
    items: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select',
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  setup(props, { emit, slots }) {
    const component = ref(null);
    const opened = ref(false);
    const selectorPosition = reactive({
      top: '0px',
      left: '0px',
      maxHeight: '1000px',
    });
    const open = () => {
      const componentRect = component.value.getBoundingClientRect();
      selectorPosition.top = `${componentRect.bottom}px`;
      selectorPosition.left = `${componentRect.left}px`;
      selectorPosition.width = `${componentRect.width}px`;
      selectorPosition.maxHeight = `${window.innerHeight - 8 - componentRect.bottom}px`;
      opened.value = true;
    };
    const select = item => {
      emit('change', item[props.itemValue] || item);
      opened.value = false;
    };
    const selected = computed(() => {
      if (!(Array.isArray(props.items) && props.value)) return null;
      return props.items.find(it => props.value === (it[props.itemValue] || it));
    });
    return {
      component,
      open,
      opened,
      select,
      slots,
      selected,
      selectorPosition,
      classes: computed(() => ({
        'c-select--opened': opened.value,
        [`c-select--${props.variant}`]: true,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
.c-select {
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 4px;
  height: 36px;
  min-width: 48px;
  &--default {
    background: var(--snz-bg-low);
  }
  &--light {
    background: var(--snz-background-white);
  }
  &--opened {
    .c-select_chevron {
      transform: rotate(180deg);
    }
  }
  &_chevron {
    transition: transform .3s ease;
  }
  &_content {
    flex-grow: 1;
  }
  &_selector {
    position: fixed;
    overflow: scroll;
    min-width: 120px;
    min-height: 60px;
    background-color: #FFF;
    padding: 4px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 201;
    &.v-enter-active, &.v-leave-active {
      transition: all .3s ease;
    }
    &.v-enter,
    &.v-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
  &_overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 200;
    cursor: initial;
  }
}
</style>
