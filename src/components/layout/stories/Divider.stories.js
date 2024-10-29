import CDivider from '../Divider.vue';

export default {
  title: 'Crayon/layout/Divider',
  component: CDivider,
};

const Template = args => ({
  components: { CDivider },
  setup() {
    return { args };
  },
  template: `<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <c-divider v-bind="args"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'separator',
};
