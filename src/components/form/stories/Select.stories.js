import { ref } from 'vue';
import CSelect from '../Select.vue';

export default {
  title: 'Crayon/form/Select',
  component: CSelect,
};

const Template = args => ({
  components: { CSelect },
  setup() {
    const items = ref(args.items);
    const selected = ref(null);
    return { args, items, selected };
  },
  template: `<div>
    <div class="snz-txt-pre mb2">Selected: {{selected}}</div>
    <c-select :items="items" v-model="selected"/>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  items: ['One', 'Two', 'Three'],
};

export const SeparateValues = Template.bind({});
SeparateValues.args = {
  items: [{
    text: 'One',
    value: 'Value one',
  }, {
    text: 'Second',
    value: 'Value two',
  }, {
    text: 'Three',
    value: 'Value three',
  }],
};

const CustomTemplate = args => ({
  components: { CSelect },
  setup() {
    const items = ref(args.items);
    const selected = ref(null);
    return { args, items, selected };
  },
  template: `<div>
    <div class="snz-txt-pre mb2">Selected: {{selected}}</div>
    <c-select :items="items" v-model="selected">
      <template v-slot:selected="{ item }">
        <span>Selected: {{ item.text }}</span>
      </template>
      <template v-slot:option="{ item }">
        <div class="snz-menu-entry p1">Option: {{ item.text }}</div>
      </template>
    </c-select>
  </div>`,
});

export const CustomTemplates = CustomTemplate.bind({});
CustomTemplates.args = {
  items: [{
    text: 'One',
    value: 'Value one',
  }, {
    text: 'Second',
    value: 'Value two',
  }, {
    text: 'Three',
    value: 'Value three',
  }],
};
