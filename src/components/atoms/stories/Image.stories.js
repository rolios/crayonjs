import { ref, watch } from 'vue';
import CImage from '../Image.vue';

export default {
  title: 'Crayon/atoms/Image',
  component: CImage,
  argTypes: {
    objectFit: {
      options: [
        'contain',
        'cover',
        'fill',
        'none',
        'scale-down',
      ],
      control: 'select',
    },
  },
};

const Template = args => ({
  components: { CImage },
  setup() {
    return { args };
  },
  template: '<c-image v-bind="args"/>',
});

export const Image = Template.bind({});
Image.args = {
  src: 'https://picsum.photos/300/200',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://picsum.photos/300',
  rounded: true,
};

const FitOptionTemplate = args => ({
  components: { CImage },
  setup() {
    return { args };
  },
  template: `<div class="flex">
    <div v-for="(item, idx) in args" :key="idx" class="mr2 center">
      <c-image src="https://picsum.photos/400/200" width="150px" height="150px" v-bind="item" class="border"/>
      <label>{{item.objectFit}}</label>
    </div>
  </div>`,
});

export const FitOptions = FitOptionTemplate.bind({});
FitOptions.args = [
  { objectFit: 'contain' },
  { objectFit: 'cover' },
  { objectFit: 'fill' },
  { objectFit: 'none' },
  { objectFit: 'scale-down' },
];

const ToggleSrcTemplate = args => ({
  components: { CImage },
  setup() {
    const seed = ref(1);
    return { seed, args };
  },
  template: `<div class="flex flex-column items-center">
    <c-image :src="'https://picsum.photos/seed/'+ seed +'/300'" v-bind="args" />
    <button @click="seed += 1" class="mt2">Change Image</button>
  </div>`,
});

export const SourceTransition = ToggleSrcTemplate.bind({});

const ToggleViewTemplate = args => ({
  components: { CImage },
  setup() {
    const show = ref(false);
    const longLoad = ref(true);
    watch(() => show.value, isShown => {
      if (!isShown) longLoad.value = true;
      else setTimeout(() => { longLoad.value = false; }, 2000);
    });
    return { show, longLoad, args };
  },
  template: `<div class="flex flex-column items-center">
    <button @click="show = !show" class="mb2">{{ show ? 'Hide' : 'Show' }} Image</button>
    <c-image v-if="show" height="300px" width="300px" :src="longLoad ? '' : 'https://picsum.photos/300'" v-bind="args" />
  </div>`,
});

export const LoadingAnim = ToggleViewTemplate.bind({});
