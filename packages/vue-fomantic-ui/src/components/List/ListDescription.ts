import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'div',
      validator: (value: string) => ['div', 'a'].includes(value)
    }
  },
  setup(props, { slots }) {
    return () => (
      h(props.as, {
        class: 'description'
      }, slots.default?.())
    )
  }
})