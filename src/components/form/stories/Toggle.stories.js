import CToggle from '../Toggle.vue';

export default {
  title: 'Crayon/form/Toggle',
  component: CToggle,
};

const Template = args => ({
  components: { CToggle },
  setup() {
    return { args };
  },
  template: '<c-toggle v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

const LabelTemplate = args => ({
  components: { CToggle },
  setup() {
    return { args };
  },
  template: '<c-toggle v-bind="args">Notifications</c-toggle>',
});
export const Label = LabelTemplate.bind({});
Label.args = {};
