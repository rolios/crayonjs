import { ref } from 'vue';
import CTimeline from '../timeline/Timeline.vue';
import CTimelineItem from '../timeline/TimelineItem.vue';
import CCard from '../Card.vue';

export default {
  title: 'Crayon/layout/Timeline',
  component: CTimeline,
};

const Template = args => ({
  components: { CTimeline, CTimelineItem, CCard },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `<c-timeline>
    <c-timeline-item>Hello</c-timeline-item>
    <c-timeline-item>World</c-timeline-item>
  </c-timeline>`,
});

export const Default = Template.bind({});
Default.args = {};
