import { defineComponent, h } from "vue";
import Icon from "../Icon/Icon"

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      h(Icon, { ...props }, slots.default?.())
    )
  }
})