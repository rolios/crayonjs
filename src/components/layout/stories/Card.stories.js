import CCard from '../Card.vue';

export default {
  title: 'Crayon/layout/Card',
  component: CCard,
};

const Template = args => ({
  components: { CCard },
  setup() {
    return { args };
  },
  template: `<c-card>
    <template v-slot:header>
      <h3 class="snz-txt-h4">Lorem Ipsum</h3>
    </template>
    <p class="snz-txt-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <template v-slot:footer>
      <span class="snz-txt-btn">Close</span>
    </template>
  </c-card>`,
});

export const Default = Template.bind({});
Default.args = {};
