<template>
  <div v-if="label" class="c-divider">
    <span class="line" />
    <span class="snz-txt-h6">
      {{ label }}
    </span>
    <span class="line" />
  </div>
  <div v-else class="c-divider-line" />
</template>

<script>
export default {
  name: 'c-divider',
  props: {
    label: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.c-divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  .snz-txt-h6 {
    margin: 0 16px;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color:  rgba(0,0,0,0.1);
  }
}
.c-divider-line {
  width: 100%;
  height: 1px;
  background-color: rgba(0,0,0,0.1);
}
</style>
