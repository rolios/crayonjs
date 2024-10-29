import CTextarea from '../Textarea.vue';

export default {
  title: 'Crayon/form/Textarea',
  component: CTextarea,
};

const Template = args => ({
  components: { CTextarea },
  setup() {
    return { args };
  },
  template: '<c-textarea v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type your comment here',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
