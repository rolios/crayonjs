<template>
  <div class="c-image" ref="component" :class="classes" :style="style" v-on="$listeners">
    <div class="c-image_loader"></div>
  </div>
</template>

<script>
import {
  computed, nextTick, onBeforeUnmount, onMounted, ref, watch,
} from 'vue';

export default {
  name: 'c-image',
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    objectFit: {
      type: String,
      default: 'contain',
    },
  },
  setup(props) {
    const visible = ref(false);
    const component = ref(null);
    const loading = ref(false);

    const replaceImg = imgElt => {
      if (!visible.value) return;
      imgElt.style.cssText = `
        display: block;
        width: ${props.width};
        height: ${props.height};
        object-fit: ${props.objectFit};
        border-radius: ${props.rounded ? 9999 : 0}px;
      `;
      const container = component.value;
      nextTick(() => {
        container.replaceChild(imgElt, container.lastChild);
        loading.value = false;
      });
    };

    onMounted(() => {
      visible.value = true;
    });
    onBeforeUnmount(() => {
      visible.value = false;
      loading.value = false;
    });

    watch(() => props.src, async () => {
      if (!props.src) return;
      loading.value = true;
      const image = new Image();
      if (image.decode) {
        try {
          image.src = props.src;
          await image.decode();
          replaceImg(image);
          return;
        } catch {
          console.log('Img async decoding error, fallback to normal behavior');
        }
      }
      image.loading = 'eager';
      image.decoding = 'sync';
      if (image.complete && image.currentSrc === props.src) {
        replaceImg(image);
        return;
      }
      image.onload = () => replaceImg(image);
      image.src = props.src;
    }, { immediate: true });

    return {
      component,
      loading,
      classes: computed(() => ({
        'c-image--visible': visible.value,
        'c-image--loading': loading.value,
        'c-image--rounded': props.rounded,
      })),
      style: computed(() => ({
        width: props.width,
        height: props.height,
      })),
    };
  },
};
</script>

<style lang="scss">
@keyframes c-anim-bg-slidex {
  to {
    background-position-x: -200%;
  }
}
.c-image {
  display: block;
  position: relative;
  overflow: hidden;
  &--visible {
    transition: .5s ease-in filter, .5s ease-in opacity, .3s ease-in transform;
  }
  &--rounded {
    border-radius: 9999px;
  }
  &--loading {
    transition: .3s ease-out filter, .3s ease-out opacity, .3s ease-out transform;
    filter: blur(5px);
    transform: scale(0.99);
    opacity: .6;
  }
  &_loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
  }
  &--visible &_loader {
    animation: 1.5s c-anim-bg-slidex linear infinite;
  }
}
</style>
