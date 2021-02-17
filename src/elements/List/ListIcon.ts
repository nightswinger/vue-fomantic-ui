import { defineComponent, h, resolveComponent } from "vue";
import { Icon } from "../Icon"

export default defineComponent({
  name: 'SuiListIcon',
  components: { Icon },
  setup(props, { slots }) {
    return () => (
      h(resolveComponent(Icon.name), { ...props }, slots.default?.())
    )
  }
})