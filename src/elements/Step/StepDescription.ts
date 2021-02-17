import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiStepDescription',
  setup(props, { slots }) {
    return () => (
      h('div', {
        class: 'description'
      }, slots.default?.())
    )
  }
})