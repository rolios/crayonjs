import { ref } from 'vue';
import CFileInput from '../FileInput.vue';

export default {
  title: 'Crayon/form/FileInput',
  component: CFileInput,
};

const Template = args => ({
  components: { CFileInput },
  setup() {
    const filename = ref('');
    const onload = e => {
      console.log(e);
      filename.value = e.target.files?.[0]?.name;
    };
    return { args, filename, onload };
  },
  template: `<div>
    <c-file-input accept="image/*" @change="onload" v-bind="args">Select a file</c-file-input>
    <span class="inline-block mt2">Selected: {{filename}}</span>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {};
