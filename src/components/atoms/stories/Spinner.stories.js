import CSpinner from '../Spinner.vue';

export default {
  title: 'Crayon/atoms/Spinner',
  component: CSpinner,
};

const Template = args => ({
  components: { CSpinner },
  setup() {
    return { args };
  },
  template: '<c-spinner v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  loading: true,
  size: '36px',
};
