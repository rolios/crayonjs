import CThumb from '../Thumb.vue';

export default {
  title: 'Crayon/atoms/Thumb',
  component: CThumb,
};

const Template = args => ({
  components: { CThumb },
  setup() {
    return { args };
  },
  template: `<c-thumb v-bind="args">
    <img src="https://picsum.photos/200" />
  </c-thumb>`,
});

export const Simple = Template.bind({});
Simple.args = { };

const TemplateWithLabel = args => ({
  components: { CThumb },
  setup() {
    return { args };
  },
  template: `<c-thumb v-bind="args">
    <img src="https://picsum.photos/200" />
    <template v-slot:label>Image from picsum.photos</template>
  </c-thumb>`,
});

export const WithLabel = TemplateWithLabel.bind({});
WithLabel.args = { };
