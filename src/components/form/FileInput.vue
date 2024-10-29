<template>
  <div class="c-fileinput" @click="focus">
    <input
      type="file"
      v-bind="$attrs"
      v-on="$listeners"
      ref="fileinput"
    >

    <div class="c-fileinput_prepend" style="padding-right: 4px">
      <template v-if="$slots.prepend">
        <slot name="prepend" />
      </template>
      <upload-icon v-else></upload-icon>
    </div>

    <span class="c-fileinput_label snz-txt-body-2"><slot></slot></span>

    <div class="c-fileinput_append">
      <template v-if="$slots.append">
        <slot name="append" />
      </template>
      <c-spinner v-else :loading="loading"></c-spinner>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import UploadIcon from '../../assets/icons/upload.svg';
import CSpinner from '../atoms/Spinner.vue';

export default {
  name: 'c-fileinput',
  components: {
    UploadIcon,
    CSpinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const fileinput = ref(null);
    const focus = () => {
      fileinput.value.click();
    };
    return {
      fileinput,
      focus,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-fileinput {
  display: flex;
  flex-direction: row;
  height: 36px;
  align-items: center;
  justify-content: start;
  background: var(--snz-bg-low);
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: .3s ease background;
  input {
    display: none;
  }

  &:hover {
    background: var(--snz-bg-dark);
  }
  &_prepend {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &_append {
    flex-grow: 1;
    display: inline-flex;
    justify-content: end;
    align-items: center;
  }
  &_label {

  }
}
</style>
