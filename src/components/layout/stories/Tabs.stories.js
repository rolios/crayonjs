import { ref } from 'vue';
import CTabs from '../Tabs.vue';

export default {
  title: 'Crayon/layout/Tabs',
  component: CTabs,
};

const Template = args => ({
  components: { CTabs },
  setup() {
    const selected = ref(0);
    return { args, selected };
  },
  template: `<c-tabs v-bind="args" v-model="selected">
  </c-tabs>`,
});

export const Default = Template.bind({});
Default.args = {
  tabs: ['First', 'Second', 'Third'],
};
