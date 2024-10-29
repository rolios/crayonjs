<template>
  <div class="c-thumb">
    <div class="c-thumb_media">
      <slot></slot>
    </div>
    <div v-if="$slots.label" class="c-thumb_label snz-txt-pre">
      <slot name="label"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-thumb',
  components: {},
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
};
</script>

<style lang="scss" scoped>
.c-thumb {
  display: flex;
  flex-direction: column;
  height: v-bind(height);
  &_media {

  }
  &_label {
    margin-top: 6px;
    line-height: 10px !important;
  }
}
</style>
