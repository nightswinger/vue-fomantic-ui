import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiStepTitle',
  setup(props, { slots }) {
    return () => (
      h('div', {
        class: 'title'
      }, slots.default?.())
    )
  }
})