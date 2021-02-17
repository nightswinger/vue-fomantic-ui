import clsx from "clsx";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiListItem',
  props: {},
  setup(props, { slots }) {
    const listItemClasses = clsx(
      'item'
    )

    return () => (
      h('div', {
        class: listItemClasses
      }, slots.default?.())
    )
  }
})