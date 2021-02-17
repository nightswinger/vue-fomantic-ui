import clsx from "clsx";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiListContent',
  props: {},
  setup(props, { slots }) {
    const listContentClasses = clsx(
      'content'
    )

    return () => (
      h('div', {
        class: listContentClasses
      }, slots.default?.())
    )
  }
})