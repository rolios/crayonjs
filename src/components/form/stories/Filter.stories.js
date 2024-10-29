import CFilter from '../Filter.vue';

export default {
  title: 'Crayon/form/Filter',
  component: CFilter,
};

const Template = args => ({
  components: { CFilter },
  setup() {
    return { args };
  },
  template: `<c-filter>
    Open filter menu
    <template v-slot:selector>
      <div class="p2">
        Here's your filter menu
      </div>
    </template>
  </c-filter>`,
});

export const Default = Template.bind({});
Default.args = {};
