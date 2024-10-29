<template>
  <span class="c-bubble snz-elevation-1" v-on="$listeners"></span>
</template>

<script>
export default {
  name: 'c-bubble',
  components: {},
  props: {
    size: {
      type: String,
      default: '20px',
    },
    color: {
      type: String,
      default: '#FFF',
    },
    border: {
      type: String,
      default: 'transparent',
    },
  },
};
</script>

<style lang="scss" scoped>
.c-bubble {
  display: inline-block;
  width: v-bind(size);
  height: v-bind(size);
  border-radius: v-bind(size);
  background-color: v-bind(color);
  border-style: solid;
  border-width: 2px;
  border-color: v-bind(border);
  cursor: pointer;
  transition: box-shadow .3s ease;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
}
</style>
