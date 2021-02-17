import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiStepContent',
  setup(props, { slots }) {
    return () => (
      h('div', {
        class: 'content'
      }, slots.default?.())
    )
  }
})