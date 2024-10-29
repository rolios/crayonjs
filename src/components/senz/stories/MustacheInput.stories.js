import { ref } from 'vue';
import CMustacheInput from '../MustacheInput.vue';

export default {
  title: 'Crayon/senz/MustacheInput',
  component: CMustacheInput,
  argTypes: {},
};

const Template = args => ({
  components: { CMustacheInput },
  setup() {
    return {
      args,
    };
  },
  template: `<div>
    <c-mustache-input></c-mustache-input>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};
