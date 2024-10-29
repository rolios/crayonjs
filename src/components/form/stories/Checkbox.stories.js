import { ref } from 'vue';
import CCheckbox from '../Checkbox.vue';
import CRadio from '../Radio.vue';

export default {
  title: 'Crayon/form/Checkbox',
  component: CCheckbox,
};

const Template = args => ({
  components: { CCheckbox },
  setup() {
    const selected = ref(false);
    return { args, selected };
  },
  template: `<div>
    <span class="mb2 snz-txt-caption">Selected: {{ selected }}</span>
    <c-checkbox v-bind="args" v-model="selected">Accept conditions</c-checkbox>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'accept-conditions',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'accept-conditions',
  disabled: true,
};

const ListTemplate = args => ({
  components: { CCheckbox },
  setup() {
    const selected = ref([]);
    return { selected, args };
  },
  template: `<div>
    <span class="mb2 snz-txt-caption">Selection: {{ selected.join(', ') }}</span>
    <c-checkbox v-for="(item, idx) in args.list" :key="idx" name="fruits" :value="item.name" v-model="selected">{{ item.name}}</c-checkbox>
  </div>`,
});

export const Group = ListTemplate.bind({});
Group.args = {
  list: [{ name: 'Apple' }, { name: 'Banana' }],
};
