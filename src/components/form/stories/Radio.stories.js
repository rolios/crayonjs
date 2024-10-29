import { ref } from 'vue';
import CRadio from '../Radio.vue';

export default {
  title: 'Crayon/form/Radio',
  component: CRadio,
};

const Template = args => ({
  components: { CRadio },
  setup() {
    const selected = ref(null);
    return { selected, args };
  },
  template: '<c-radio v-bind="args" v-model="selected">Apple</c-radio>',
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

const ListTemplate = args => ({
  components: { CRadio },
  setup() {
    const selected = ref(null);
    return { selected, args, listenChange(e) { console.log(e); } };
  },
  template: `<div>
    <c-radio v-for="(item, idx) in args.list" :key="idx" name="fruits" :value="item.name" v-model="selected">{{ item.name}}</c-radio>
  </div>`,
});

export const Group = ListTemplate.bind({});
Group.args = {
  list: [{ name: 'Apple' }, { name: 'Banana' }],
};
