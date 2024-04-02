import { defineComponent, h } from "vue"

export default defineComponent({
  props: {
    is: String,
  },
  setup: (props, { attrs, slots }) => {
    const tag = props.is || "div"

    return () => {
      return h(tag, { ...attrs }, slots.default?.())
    }
  },
})
