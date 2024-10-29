import CAvatar from '../Avatar.vue';

export default {
  title: 'Crayon/atoms/Avatar',
  component: CAvatar,
  argTypes: {
    size: {
      options: ['medium', 'small'],
      control: 'select',
    },
  },
};

const Template = args => ({
  components: { CAvatar },
  setup() {
    return { args };
  },
  template: '<c-avatar v-bind="args"/>',
});

export const Image = Template.bind({});
Image.args = {
  src: 'https://api.lorem.space/image/face',
};

export const Label = Template.bind({});
Label.args = {
  label: 'G',
  size: 'medium',
};

export const Light = Template.bind({});
Light.args = {
  label: 'G',
  size: 'medium',
  light: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  size: 'medium',
  src: 'https://api.lorem.space/image/face',
  rounded: true,
};

const SizeTemplate = args => ({
  components: { CAvatar },
  setup() {
    return { args };
  },
  template: `<div class="flex">
    <c-avatar v-for="(item, idx) in args" v-bind="item" :key="idx" class="mr2" />
  </div>`,
});

export const Sizes = SizeTemplate.bind({});
Sizes.args = [{
  size: 'small',
  label: 'S',
}, {
  size: 'medium',
  label: 'M',
}];
