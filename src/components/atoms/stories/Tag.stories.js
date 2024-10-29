import CloseIcon from '../../../assets/icons/close.svg';
import Check from '../../../assets/icons/check.svg';
import CTag from '../Tag.vue';
import { variants } from '../options/Tag.options';

export default {
  title: 'Crayon/atoms/Tag',
  component: CTag,
  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },
  },
};

const DefaultTemplate = args => ({
  components: { CTag },
  setup() {
    return { args };
  },
  template: '<c-tag v-bind="args">Crayon</c-tag>',
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  variant: 'primary',
  rounded: false,
};

const VariantsTemplate = args => ({
  components: { CTag },
  setup() {
    return { args };
  },
  template: `<div class="flex">
    <c-tag v-for="(item, idx) in args" v-bind="item.args" :key="idx" class="mr2">{{item.name}}</c-tag>
  </div>`,
});
export const Variants = VariantsTemplate.bind({});
Variants.args = variants.map(variant => ({ name: variant, args: { variant } }));

export const Rounded = DefaultTemplate.bind({});
Rounded.args = {
  variant: 'primary',
  rounded: true,
};

const SlotTemplate = args => ({
  components: { CTag },
  setup() {
    return { args };
  },
  template: `<div class="flex flex-column">
    <c-tag>
      <template v-slot:prepend><img src="${Check}" /></template>
      Prepend Icon
    </c-tag>
  
    <c-tag class="mt2">
      Append Icon
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-tag>
  
    <c-tag class="mt2">
      <template v-slot:prepend><img src="${Check}" /></template>
      Do Both
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-tag>

    <c-tag class="mt2">
      <template v-slot:prepend><img src="${Check}" /></template>
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-tag>
  </div>`,
});

export const Slots = SlotTemplate.bind({});
Slots.args = {};
