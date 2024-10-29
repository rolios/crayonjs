<template>
  <div class="c-image"  :class="classes" v-on="$listeners">
    <img :src="src" ref="img" loading="lazy" decoding="async" @load="onload"/>
  </div>
</template>

<script>
import {
  computed, nextTick, ref, watch, onMounted,
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
    const img = ref(null);
    const loading = ref(true);
    const transitioning = ref(false);

    onMounted(async () => {
      const imgElt = img.value;
      if (imgElt.complete && (loading.value || transitioning.value)) {
        await imgElt.decode();
        loading.value = false;
        transitioning.value = false;
      }
    });

    watch(() => props.src, () => {
      if (!props.src) return;
      transitioning.value = true;
    });

    const onload = async e => {
      try {
        await e.target.decode();
      } catch (err) {
        console.error(err);
      }
      loading.value = false;
      transitioning.value = false;
    };

    return {
      img,
      loading,
      transitioning,
      onload,
      classes: computed(() => ({
        'c-image--loading': loading.value,
        'c-image--transitioning': transitioning.value,
        'c-image--rounded': props.rounded,
      })),
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

.c-image {
  width: v-bind(width);
  height: v-bind(height);
  display: block;
  position: relative;
  overflow: hidden;
  transition: .5s ease-in filter, .5s ease-in opacity, .3s ease-in transform;
  img {
    display: block;
    width: v-bind(width);
    height: v-bind(height);
    object-fit: v-bind(objectFit);
  }
  &--loading {
    background: #eee;
    background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    img {
      opacity: 0;
    }
  }
  &--transitioning {
    transition: .3s ease-out filter, .3s ease-out opacity, .3s ease-out transform;
    filter: blur(5px);
    transform: scale(0.99);
    opacity: .6;
  }
  &--rounded, &--rounded img {
    border-radius: 9999px;
  }
  &_loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
