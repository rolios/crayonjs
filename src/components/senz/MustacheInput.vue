<template>
  <div class="c-mustache-input">
    <dot-menu no-button>
      <textarea
          ref="hiddenInput"
          v-model="inputValue"
          v-bind="$attrs"
          v-on="nativeListeners"
          :class="classes"
          :disabled="disabled"
          :placeholder="placeholder"
      />
      <div ref="shownInput" class="c-mustache-input_editor snz-txt-body-2" contentEditable="true" v-html="decoratedText"
           @keydown="onKeyTyped" @input="onEdit" @blur="onBlur"
      ></div>
      <template v-slot:menu>
        <div class="m2">Available data</div>
        <div class="snz-menu-entry snz-txt-menu p1">Name</div>
        <div class="snz-menu-entry snz-txt-menu p1">City</div>
        <div class="snz-menu-entry snz-txt-menu p1">Age</div>
      </template>
    </dot-menu>

  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import DotMenu from '../menu/DotMenu.vue';

const convertRegex = /{{([^}]+)}}/g;
const convertFnRegex = /{{#([^}]+)}}(.+){{\/([^}]+)}}/g;
const regex = /<span class="([^"]*)">(.+)<\/span>/g;
const parse = entry => entry.replace(regex, (_, matchedClass, matchedContent) => {
  const parsedContent = parse(matchedContent);
  if (matchedClass === 'c-ms-var') return `{{${parsedContent}}}`;
  if (matchedClass === 'c-ms-fn-start') return `{{#${parsedContent}}}`;
  if (matchedClass === 'c-ms-fn-end') return `{{/${parsedContent}}}`;
  return parsedContent;
});
const convertFunctions = entry => entry.replace(convertFnRegex, (_, matchedFn, matchedContent) => {
  const parsedContent = convertFunctions(matchedContent);
  return `<span class='c-ms-fn'><span class='c-ms-fn-start'>${matchedFn}</span>${parsedContent}<span class='c-ms-fn-end'>${matchedFn}</span></span>`;
});
const convert = entry => {
  const result = convertFunctions(entry);
  return result.replace(convertRegex, (_, matchedVar) => `<span class='c-ms-var'>${matchedVar}</span>`);
};

const getCaretPosition = () => {
  if (!window.getSelection) return 0;
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  console.log(selection, range, range.startOffset);
  const parent = selection.anchorNode.parentNode;
  const { childNodes } = parent;
  let rangeCount = 0;
  childNodes.forEach(child => {
    console.dir(child);
    if (child === selection.anchorNode) return;
    rangeCount += child.outerHTML?.length || 0;
    if (child.nodeType === 3) {
      rangeCount += child.length;
    }
  });
  return selection.startOffset + rangeCount;
};

export default {
  name: 'c-mustache-input',
  components: {
    DotMenu,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
  },
  setup(props, { emit, listeners }) {
    const hiddenInput = ref(null);
    const shownInput = ref(null);
    const text = ref('');
    const decoratedText = ref('');
    const classes = computed(() => ({
      'snz-mustache-input--disabled': props.disabled,
    }));
    watch(() => props.value, propValue => {
      if (!propValue) return;
      decoratedText.value = convert(propValue);
    }, { immediate: true });
    const inputValue = computed({
      get: () => props.value || text.value,
      set: value => {
        text.value = value || '';
        emit('change', value);
      },
    });

    const { change, ...nativeListeners } = listeners;
    const onKeyTyped = event => {
      if (event.isComposing) return;
      const { key } = event;
      if (key === 'Backspace') {
        // event.preventDefault();
      }
    };
    const onEdit = event => {
      console.log(event);
      const input = shownInput.value;
      console.log(getCaretPosition());
      if (event.inputType === 'insertText') {
        if (event.data?.includes('}')) {
          input.innerHTML = convert(input.innerHTML);
        }
      } else if (event.inputType === 'insertParagraph') {
        // inputValue.value += '\n';
      } else if (event.inputType === 'deleteContentForward') {

      } else if (event.inputType === 'deleteContentBackward') {

      }
      // event.preventDefault();
    };
    const onBlur = () => {
      inputValue.value = parse(shownInput.value.innerHTML);
    };
    return {
      hiddenInput,
      shownInput,
      nativeListeners,
      inputValue,
      classes,
      decoratedText,
      onKeyTyped,
      onEdit,
      onBlur,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-mustache-input {
  border-radius: 4px;
  position: relative;
  display: inline;

  textarea {
    background: #f2f2f2;
    border: none;
    min-height: 70px;
    min-width: 250px;
    width: 100%;
    height: 100%;
  }

  &_check-icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  &--disabled {
    cursor: not-allowed;
  }

  &_editor {
    background: #f2f2f2;
    border: none;
    min-height: 70px;
    min-width: 250px;
    width: 100%;
    height: 100%;
    resize: vertical;
    overflow: auto;
    padding: 8px;
    border-radius: 4px;
  }
}
</style>
<style lang="scss">
.c-mustache-input {
  .c-ms- {
    &var {
      background: var(--snz-bg-dark);
      border-radius: 8px;
    }
    &fn-start {
      background: var(--snz-bg-dark);
      border-radius: 8px;
    }
    &fn-end {
      background: var(--snz-bg-dark);
      border-radius: 8px;
    }
  }
}
</style>
