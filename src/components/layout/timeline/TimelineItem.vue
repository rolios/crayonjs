<template>
  <div class="c-timeline-item" ref="component">
    <div class="c-timeline-item_action">
      <span class="c-timeline-item_action_delete snz-txt-h4" @click="$emit('delete')" >
        <minus-icon></minus-icon>
      </span>
    </div>
    <div class="c-timeline-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MinusIcon from '../../../assets/icons/minus.svg';

export default {
  name: 'c-timeline-item',
  components: { MinusIcon },
};
</script>

<style lang="scss" scoped>
.c-timeline-item {
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  &_action {
    flex-basis: 36px;
    &_delete {
      display: inline-flex;
      width: 36px;
      height: 36px;
      background-color: var(--snz-icon-unactive);
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
  &_content {
    flex-grow: 1;
    margin-left: 5px;
    padding: .5rem;
    background-color: var(--snz-bg-low);
  }
}
</style>
