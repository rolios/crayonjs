<template>
  <div class="c-timeline" ref="component">
    <slot />
    <div class="c-timeline_action">
      <span class="c-timeline_action_add snz-txt-h4" @click="$emit('add')" >
        <plus-icon></plus-icon>
      </span>
    </div>
  </div>
</template>

<script>
import PlusIcon from '../../../assets/icons/plus.svg';

export default {
  name: 'c-timeline',
  components: { PlusIcon },
};
</script>

<style lang="scss" scoped>
.c-timeline {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(var(--snz-icon-unactive), var(--snz-icon-unactive));
  background-repeat: no-repeat;
  background-size: 2px calc(100% - 36px);
  background-position: left 18px top 18px;
  &_start {

  }
  &_action {
    &_add {
      display: inline-flex;
      width: 36px;
      height: 36px;
      background-color: var(--snz-icon-active);
      border-radius: 4px;
      cursor: pointer;
      transition: .3s ease transform, .3s ease background-color;
      color: var(--snz-font-inverted);
      align-items: center;
      justify-content: center;
      &:hover {
        transform: translateY(-1px);
        background-color: var(--snz-icon-hover);
      }
    }
  }
}
</style>
