import CloseIcon from '../../../assets/icons/close.svg';
import Check from '../../../assets/icons/check.svg';
import CButton from '../Button.vue';
import { variants, sizes } from '../options/Button.options';

export default {
  title: 'Crayon/atoms/Button',
  component: CButton,
  argTypes: {
    variant: {
      options: variants,
      control: 'select',
    },
    size: {
      options: sizes,
      control: 'select',
    },
  },
};

const DefaultTemplate = args => ({
  components: { CButton },
  setup() {
    return { args };
  },
  template: '<c-button v-bind="args">Button</c-button>',
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  loading: false,
  disabled: false,
};

const VariantsTemplate = args => ({
  components: { CButton },
  setup() {
    return { args };
  },
  template: `<div class="flex">
    <c-button v-for="(item, idx) in args" v-bind="item.args" :key="idx" class="mr2">{{item.name}}</c-button>
  </div>`,
});

export const Variants = VariantsTemplate.bind({});
Variants.args = variants.map(variant => ({ name: variant, args: { variant } }));

const SizesTemplate = args => ({
  components: { CButton },
  setup() {
    return { args };
  },
  template: `<div class="flex">
    <c-button v-for="(item, idx) in args" v-bind="item.args" :key="idx" class="mr2">{{item.name}}</c-button>
  </div>`,
});

export const Sizes = SizesTemplate.bind({});
Sizes.args = sizes.map(size => ({ name: size, args: { size } }));

export const Disabled = DefaultTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = DefaultTemplate.bind({});
Loading.args = {
  loading: true,
};

const SlotTemplate = args => ({
  components: { CButton },
  setup() {
    return { args };
  },
  template: `<div class="flex flex-column">
    <c-button>
      <template v-slot:prepend><img src="${Check}" /></template>
      Prepend Icon
    </c-button>
  
    <c-button class="mt2">
      Append Icon
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-button>
  
    <c-button class="mt2">
      <template v-slot:prepend><img src="${Check}" /></template>
      Do Both
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-button>

    <c-button class="mt2">
      <template v-slot:prepend><img src="${Check}" /></template>
      <template v-slot:append><img src="${CloseIcon}" /></template>
    </c-button>
  </div>`,
});

export const Slots = SlotTemplate.bind({});
Slots.args = {};
