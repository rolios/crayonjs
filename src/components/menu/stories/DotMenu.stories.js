import { ref } from 'vue';
import CDotMenu from '../DotMenu.vue';

export default {
  title: 'Crayon/menu/DotMenu',
  component: CDotMenu,
  argTypes: {},
};

const Template = args => ({
  components: { CDotMenu },
  setup() {
    return {
      args,
    };
  },
  template: `<div>
    <c-dot-menu>
      <img src="https://picsum.photos/200" />
      <template v-slot:menu>
        <div class="m2">Here is the menu</div>
      </template>
    </c-dot-menu>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};
