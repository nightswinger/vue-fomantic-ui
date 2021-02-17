import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiSegmentInline',
  setup(props, { slots }) {
    return () => (
      h('div', {
        class: 'inline'
      }, slots.default?.())
    )
  }
})