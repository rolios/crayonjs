import { ref, watchEffect } from 'vue';
import CInput from '../Input.vue';

export default {
  title: 'Crayon/form/Input',
  component: CInput,
};

const Template = args => ({
  components: { CInput },
  setup() {
    const inputValue = ref('');
    return { args, inputValue };
  },
  template: '<c-input v-bind="args" v-model="inputValue" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter your password',
  type: 'password',
};
