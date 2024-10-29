import CBubble from '../Bubble.vue';

export default {
  title: 'Crayon/atoms/Bubble',
  component: CBubble,
};

const Template = args => ({
  components: { CBubble },
  setup() {
    return { args };
  },
  template: `<div>
    <c-bubble v-for="(item,idx) in args" :key="idx" v-bind="item" class="mr2"/>
  </div>`,
});

export const Default = Template.bind([]);
Default.args = [
  { color: '#eee', border: '#777' },
  { color: 'red' },
  { color: 'red', size: '12px' },
  { color: 'cyan', border: 'blue', size: '36px' },
  { color: 'white', border: 'black', size: '36px' },
];
