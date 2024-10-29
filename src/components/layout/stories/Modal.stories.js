import { ref } from 'vue';
import CModal from '../Modal.vue';
import CCard from '../Card.vue';

export default {
  title: 'Crayon/layout/Modal',
  component: CModal,
};

const Template = args => ({
  components: { CModal, CCard },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `<div>
    <button @click="open = true">Open Modal</button>
    <c-modal v-model="open">
      <c-card>Hello!</c-card>
    </c-modal>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};
